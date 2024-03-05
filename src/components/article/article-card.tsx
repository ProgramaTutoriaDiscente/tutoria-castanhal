import Image from 'next/image'
import Link from 'next/link'

interface ArticleCardProps {
  title: string
  excerpt: string
  thumbnail: {
    url: string
  }
  slug: string
}

export function ArticleCard({
  title,
  excerpt,
  thumbnail,
  slug,
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-colors hover:bg-secondary/40">
        <Image
          src={thumbnail.url}
          alt={title}
          width={640}
          height={360}
          loading="lazy"
          className="w-full"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-3 font-normal text-muted-foreground">{excerpt}</p>
        </div>
      </div>
    </Link>
  )
}
