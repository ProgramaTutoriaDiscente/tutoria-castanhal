import { Suspense } from 'react'
import { ArticleFetch } from './article-fetch'

interface ArticleListProps {
  maxLenght?: number
}

export default function ArticleList({ maxLenght }: ArticleListProps) {
  const articlesNumber = maxLenght !== undefined ? `(first: ${maxLenght})` : ''

  const query = `query Articles {
    articles${articlesNumber} {
      excerpt
      id
      slug
      title
      thumbnail {
        url
      }
    }
  }`

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
      <Suspense fallback={<p>Carregando...</p>}>
        <ArticleFetch query={query} />
      </Suspense>
    </div>
  )
}
