import { RichText } from '@/components/@pages/blog-article/rich-text'
import { SocialShare } from '@/components/@pages/blog-article/social-share'
import { LastNewsSection } from '@/components/@pages/home/last-news-section'
import { Section } from '@/components/section/section'
import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ArticleProps } from '@/types/article'
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from 'date-fns'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { title } from 'process'

interface BlogArticleProps {
  params: {
    slug: string
  }
}

export default async function BlogArticle({
  params: { slug },
}: BlogArticleProps) {
  function getArticle(): Promise<{ article: ArticleProps }> {
    const query = `query Article {
      article(where: {slug: "${slug}"}) {
        title
        date
        excerpt
        slug
        content {
          raw
        }
        thumbnail {
          url
        }
        createdAt
        updatedAt
      }
    }`

    return fetchHygraph(query)
  }

  const { article } = await getArticle()

  if (!article) {
    return notFound()
  }

  function formatCreatedAt(createdAt: string) {
    const formattedCreatedDate = format(createdAt, 'dd/MM/yyyy')
    const formattedCreatedTime = format(createdAt, 'HH:mm')

    return `${formattedCreatedDate} às ${formattedCreatedTime}`
  }

  function formatUpdatedAt(updatedAt: string) {
    const now = new Date()
    const minutesDifference = differenceInMinutes(now, updatedAt)
    const hoursDifference = differenceInHours(now, updatedAt)
    const daysDifference = differenceInDays(now, updatedAt)

    if (minutesDifference < 60) {
      return `Atualizado ${minutesDifference} minutos atrás`
    } else if (daysDifference < 1) {
      return `Atualizado ${hoursDifference} ${hoursDifference === 1 ? 'hora' : 'horas'} atrás`
    } else if (daysDifference === 1) {
      return `Atualizado ontem`
    } else {
      return `Atualizado em ${format(updatedAt, 'dd/MM/yyyy')}`
    }
  }

  return (
    <>
      <Section>
        <div className="mx-auto flex max-w-prose flex-col items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-accent-foreground sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-muted-foreground">{article.excerpt}</p>
          <div className="mt-3 w-full font-medium text-muted-foreground">
            <span className="flex items-center">
              <Calendar className="mr-1.5 inline h-5  w-5" />
              {formatCreatedAt(article.createdAt)} &bull;{' '}
              {formatUpdatedAt(article.updatedAt)}
            </span>
          </div>
          <div className="mt-6 w-full">
            <SocialShare title={article.title} slug={article.slug} />
          </div>
          <div className="mt-8 w-full">
            <Image
              src={article.thumbnail.url}
              alt={title}
              width={640}
              height={360}
              className="w-full"
            />
          </div>

          <div className="mt-8 w-full space-y-6 text-lg">
            <RichText content={article.content.raw} />
          </div>
        </div>
      </Section>
      <LastNewsSection />
    </>
  )
}
