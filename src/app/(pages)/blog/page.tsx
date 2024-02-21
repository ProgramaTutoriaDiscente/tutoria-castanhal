import ArticleList from '@/components/article/article-list'
import { Section } from '@/components/section/section'
import { PageHeader } from '@/components/shared/page-header'

export default function Blog() {
  return (
    <>
      {/* TODO: Page Header */}
      <PageHeader
        title="Blog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "
      />
      {/* TODO: Articles Section */}
      <Section background="gray">
        <ArticleList />
      </Section>
    </>
  )
}
