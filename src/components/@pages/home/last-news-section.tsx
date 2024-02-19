import ArticleList from '@/components/article/article-list'
import { Section } from '@/components/section/section'
import SectionHeader from '@/components/section/section-header'

export function LastNewsSection() {
  return (
    <Section background="gray">
      <SectionHeader
        title="Ultimas Notícias"
        button="withButton"
        label="Ver notícias"
        href="/blog"
        className="mb-6"
      />

      <ArticleList maxLenght={3} />
    </Section>
  )
}
