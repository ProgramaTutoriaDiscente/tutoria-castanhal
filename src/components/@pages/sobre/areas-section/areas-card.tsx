import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface AreasCardProps {
  title: string
  description: string
  background?: string
}
export function AreasCard({ title, description, background }: AreasCardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl bg-cover bg-center',
        background,
      )}
    >
      <div className="flex h-[300px] flex-col justify-end bg-gradient-to-b   from-transparent to-foreground/85 lg:h-[500px] ">
        <div className="p-8 text-background">
          <span className="font-semibold">Apoio Acadêmico</span>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>{description}</p>
          <Link href="#" className="flex gap-2">
            Saiba Mais <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
