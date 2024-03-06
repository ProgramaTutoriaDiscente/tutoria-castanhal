import { RichText } from '@/components/@pages/blog-article/rich-text'
import { SocialShare } from '@/components/@pages/blog-article/social-share'
import { LastNewsSection } from '@/components/@pages/home/last-news-section'
import { Section } from '@/components/section/section'
import { siteConfig } from '@/config/site'
import { fetchHygraph } from '@/lib/fetch-hygraph'
import { ArticleProps } from '@/types/article'
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from 'date-fns'
import { Calendar } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { title } from 'process'

interface BlogArticleProps {
  params: {
    slug: string
  }
}

function getArticlePage({
  slug,
}: {
  slug: string
}): Promise<{ article: ArticleProps }> {
  const query = `query ArticlePage {
    article(where: {slug: "${slug}"}) {
      title
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

export default async function BlogArticle({
  params: { slug },
}: BlogArticleProps) {
  const { article } = await getArticlePage({ slug })

  if (!article) {
    return notFound()
  }

  function formatCreatedAt(createdAt: string) {
    const formattedCreatedDate = format(createdAt, 'dd/MM/yyyy')

    return `${formattedCreatedDate}`
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
      <Section className="py-10 md:py-20">
        <div className="mx-auto flex max-w-prose flex-col items-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-accent-foreground sm:text-3xl">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            {article.excerpt}
          </p>
          <div className="mt-3 flex w-full items-center gap-1 text-xs font-medium text-muted-foreground sm:text-sm">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
            <p>
              {formatCreatedAt(article.createdAt)} &bull;{' '}
              {formatUpdatedAt(article.updatedAt)}
            </p>
          </div>
          <div className="mt-6 w-full">
            <SocialShare title={article.title} slug={article.slug} />
          </div>

          <Image
            src={article.thumbnail.url}
            alt={title}
            width={640}
            height={360}
            loading="lazy"
            className="mt-8 w-full rounded-xl"
          />

          <div className="mt-8 w-full space-y-6 text-lg">
            <RichText content={article.content.raw} />
          </div>
        </div>
      </Section>
      <LastNewsSection background="gray" />
    </>
  )
}

export async function generateMetadata({
  params: { slug },
}: BlogArticleProps): Promise<Metadata> {
  const { article } = await getArticlePage({ slug })

  if (!article) {
    return {
      title: 'Página não encontrada',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      images: [
        {
          url: article.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.url,
      images: article.thumbnail.url,
    },
  }
}
