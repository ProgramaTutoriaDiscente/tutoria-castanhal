import { siteConfig } from '@/config/site'
import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ArticleProps } from '@/types/article'

export default async function sitemap() {
  const query = `
  query Articles {
        articles(orderBy: publishedAt_DESC) {
          slug
        }
      }      
  `

  const slugs: { articles: ArticleProps[] } = await fetchHygraph(query)
  const articles = slugs.articles.map((item) => {
    return {
      url: `${siteConfig.url}/blog/${item.slug}`,
      lastModified: new Date(),
    }
  })

  const pages = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/sobre`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
    },
    ...articles,
  ]

  return pages
}
