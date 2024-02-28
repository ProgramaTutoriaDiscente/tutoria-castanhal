import { Suspense } from 'react'
import { GridWrapper } from '../shared/grid-wrapper'
import { ArticleFetch } from './article-fetch'
import { ArticleLoading } from './article-loading'

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
    <GridWrapper>
      <Suspense fallback={<ArticleLoading articles={maxLenght} />}>
        <ArticleFetch query={query} />
      </Suspense>
    </GridWrapper>
  )
}
