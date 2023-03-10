# uni-app-mp-html(mp-html@2.4.1)

> forked from [jin-yufeng/mp-html](https://github.com/jin-yufeng/mp-html)

- [uni-app-mp-html(mp-html@2.4.1)](#uni-app-mp-htmlmp-html241)
  - [默认开启插件](#默认开启插件)
  - [Usage](#usage)
    - [使用组件](#使用组件)
    - [使用脚本](#使用脚本)
    - [highlight prism](#highlight-prism)

此版本制作的目的，就是嫌麻烦，每次获取源代码最新的改动后，都要重新打包，然后把产物手动复制到，源代码的各个目录。

所以通过再次发布一个 `npm` 包的方式，来同步多个项目之间 `mp-html` 的升级，和插件配置。

此包基于 `mp-html@2.4.1`版本构建而成，默认携带一键式复制脚本，详见下方:

## 默认开启插件

```js
plugins: [
    // 按需打开注释即可
    'audio',     // 音乐播放器
    'editable',  // 内容编辑
    'emoji',     // 小表情
    'highlight', // 代码高亮
    'markdown',  // 解析 md
    // 'latex',     // 解析 latex 太大了!
    'search',    // 关键词搜索
    'style',     // 解析 style 标签
    // 'txv-video', // 使用腾讯视频
    // 'img-cache'  // 图片缓存
],
```

## Usage

### 使用组件

```js
// @ts-ignore
import mpHtml from "uni-app-mp-html/components/mp-html/mp-html.vue";

export default Vue.extend({
  components: {
    mpHtml,
  },
});
```

### 使用脚本

携带`static`复制脚本: `mp-html-init-static <path>`

携带`mp-html`复制脚本: `mp-html-sync <path>`

如果你想复制文件到 `static`，请在根目录下执行:

```bash
# hbuilder 项目
npx mp-html-init-static static
# cli 项目
npx mp-html-init-static src/static
```

如果你遇到子包，无法使用`npm`，必须进行直接的复制粘贴，请在根目录下执行:

```bash
# 复制 mp-html 代码到指定目录
npx mp-html-sync path/to/folder
# 比如复制到子包: subs/markdown
npx mp-html-sync subs/markdown/components/mp-html
```

### highlight prism 

额外添加了许多语言的支持，具体见:

https://github.com/sonofmagic/mp-html/blob/uni-app-mp-html-dev/plugins/highlight/prism.min.js