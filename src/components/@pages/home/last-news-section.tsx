import ArticleList from '@/components/article/article-list'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'

export function LastNewsSection({
  background,
}: {
  background?: 'default' | 'gray' | null | undefined
}) {
  return (
    <Section background={background}>
      <SectionHeader
        title="Ultimas Notícias"
        withButton
        label="Ver notícias"
        href="/blog"
      />

      <ArticleList maxLenght={3} />
    </Section>
  )
}
