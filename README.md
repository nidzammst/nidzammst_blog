# NotionNext

一个使用 NextJS + Notion API 实现的，部署在 Vercel 上的静态博客系统。为Notion和所有创作者设计。


## Efek pratinjau


## Bagaimana cara memulainya?

只需几分钟即可搭建您的个人站点，欢迎移步[我的博客](https://tangly1024.com/article/notion-next) 查看教程 


## Ucapan Terima Kasih
Terima kasih Craig Proyek Nobelium diprakarsai oleh Hart
<table><tr align="left">
  <td align="center"><a href="https://github.com/craigary" title="Craig Hart"><img src="https://avatars.githubusercontent.com/u/10571717" width="64px;"alt="Craig Hart"/></a><br/><a href="https://github.com/craigary" title="Craig Hart">Craig Hart</a></td>
</tr></table>

## Quick Start
- Duplicate [This Notion Template](https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5) and shared it to public
- [Fork](https://github.com/tangly1024/NotionNext/fork) This Repo
  - _(可选)_ 用自己的图片替换 `/public` 文件夹里的 `avatar.jpg`、`favicon.svg` 和 `favicon.ico`
  - 在 `blog.config.js` 配置相关选项，`NOTION_PAGE_ID`: 你刚刚分享出去的 Notion 页面网址中的页面 ID，通常是网址中工作区地址后的 32 位字符串
- Deploy to [Vercel](https://vercel.com)

[NotionNext Document](https://docs.tangly1024.com/zh)

## Develop
- Node.js is required
```bash
yarn # install packages
yarn run dev # local dev
yarn run build # local build
yarn run start # start local Next JS service
```
## Based on

- **Framework**: [Next.js](https://nextjs.org)
- **CSS**: [Tailwind CSS](https://www.tailwindcss.cn/) 和 `@tailwindcss/jit` compiler
- **Redered**: [React-notion-x](https://github.com/NotionX/react-notion-x)
- **Comments**: [Giscus](https://giscus.app/zh-CN), [Gitalk](https://gitalk.github.io), [Cusdis](https://gitalk.github.io), [Utterances](https://utteranc.es)
- **Icons**：[fontawesome v5.15](https://fontawesome.com/v5.15/icons?d=gallery)


## License

The MIT License.
