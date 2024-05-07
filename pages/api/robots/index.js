export default function handler(req, res) {
  const textSiteMap =
    'User-agent: *\nAllow: *\n# Host\nHost: https://mstblog.my.id\n\nSitemap: https://mstblog.my.id/sitemap.xml'
  res.send(textSiteMap)
}
