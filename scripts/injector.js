const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

let css_custom = css('/assets/custom.css')// 自定义样式
// let css_fa = css('https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css')// 图标库
let css_fa = css('/assets/font-awesome.min.css')// 图标库
let css_lxgw = css('https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.7.0/style.min.css')// 落霞孤鹜字体
let css_aplayer = css('https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.css')// aplayer

let js_aplayer = js('https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.js')// aplayer
let js_meting = js('https://unpkg.com/meting@2.0.1/dist/Meting.min.js')// meting
let js_live2d = js('/assets/live2d/autoload.js')// 看板娘

let tag_meting = `<meting-js server="netease" type="playlist" id="5156176329" autoplay="false" fixed="true" 
order="random" lrc-type="1" volume="0.5"></meting-js>`

hexo.extend.injector.register('head_end', () => {
    return css_custom + css_fa; // + css_lxgw;
}, 'default');

// hexo.extend.injector.register('head_end', () => {
//     return css_aplayer;
// }, 'post');

// hexo.extend.injector.register('body_end', () => {
//     return js_aplayer + js_meting + tag_meting;
// }, 'post');

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
