import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ArticleProps } from '@/types/article'
import { ArticleCard } from './article-card'

interface ArticleFetchProps {
  query: string
}

export async function ArticleFetch({ query }: ArticleFetchProps) {
  function getArticles(): Promise<{ articles: ArticleProps[] }> {
    return fetchHygraph(query)
  }

  const { articles } = await getArticles()

  return (
    <>
      {articles.map((item, i) => (
        <ArticleCard
          title={item.title}
          excerpt={item.excerpt}
          thumbnail={item.thumbnail}
          slug={item.slug}
          key={i}
        />
      ))}
    </>
  )
}
