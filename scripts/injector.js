const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.injector.register('head_end', () => {
    return css('https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');// 图标库
}, 'default');

hexo.extend.filter.register('before_post_render', function (data) {
    // 获取当前配置文件设置的仓库类型
    let current = hexo.config.assets_repo.current;
    // 获取对相应的仓库类型的地址
    let repo = hexo.config.assets_repo[current];
    if (repo === undefined) {
        return data;
    }
    // 匹配非http或https开头的图片链接 替换为cdn地址
    data.content = data.content.replace(/!\[(.*?)\]\((?!https?:\/\/)(.*?)\)/g
        , function (match, p1, p2) {
            return `![${p1}](${repo}${p2})`;
        });
    return data;
});
