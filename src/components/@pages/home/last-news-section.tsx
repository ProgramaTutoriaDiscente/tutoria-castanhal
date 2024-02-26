import ArticleList from '@/components/article/article-list'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'

export function LastNewsSection() {
  return (
    <Section>
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
