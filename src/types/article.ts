export interface ArticleProps {
  title: string
  slug: string
  excerpt: string
  date: string
  thumbnail: {
    url: string
  }
  content: {
    text: string
  }
}
