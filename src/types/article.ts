import type { RichTextContent } from '@graphcms/rich-text-types'

export interface ArticleProps {
  title: string
  slug: string
  excerpt: string
  date: string
  thumbnail: {
    url: string
  }
  content: {
    raw: RichTextContent
  }
  updatedAt: string
  createdAt: string
}
