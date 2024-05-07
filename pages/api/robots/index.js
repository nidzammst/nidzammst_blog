export default function handler(req, res) {
  const textSiteMap =
    'User-agent: *\nAllow: *\n# Host\nHost: https://nidzammst.my.id\n\nSitemap: https://nidzammst.my.id/sitemap.xml'
  res.send(textSiteMap)
}
