import { cn } from '@/lib/utils'
import { Section } from '../section/section'

interface PageHeaderProps {
  title: string
  description: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <Section className={cn('border-b-2 border-black', className)}>
      <div className="space-y-6 py-20 text-center">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </Section>
  )
}
