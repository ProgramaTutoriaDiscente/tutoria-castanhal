import ArticleList from '@/components/article/article-list'
import { Section } from '@/components/section/section'
import { PageHeader } from '@/components/shared/page-header'

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Explore nosso blog e descubra sobre dicas de estudos e oficinas ofertadas pelo PTD."
      />

      <Section>
        <ArticleList />
      </Section>
    </>
  )
}
