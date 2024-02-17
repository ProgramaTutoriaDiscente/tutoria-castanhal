import { Section } from '../section/section'

interface PageHeaderProps {
  title: string
  description: string
}
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Section className="border-b-2 border-black">
      <div className="space-y-6 py-20 text-center">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </Section>
  )
}
