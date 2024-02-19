import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface AreasCardProps {
  title: string
  description: string
}
export function AreasCard({ title, description }: AreasCardProps) {
  return (
    <div className="flex h-full flex-col justify-end bg-slate-700 p-8 text-white">
      <span className="font-semibold">Apoio Acadêmico</span>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p>{description}</p>
      <Link href="#" className="flex gap-2">
        Saiba Mais <ChevronRight />
      </Link>
    </div>
  )
}
