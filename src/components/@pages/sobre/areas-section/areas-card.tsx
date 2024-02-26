import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface AreasCardProps {
  title: string
  description: string
  background: StaticImageData
}
export function AreasCard({ title, description, background }: AreasCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border shadow">
      <div className="relative h-[256px] sm:h-[364px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-foreground to-transparent" />
        <Image
          src={background}
          alt="imagem ilustrativa"
          loading="lazy"
          placeholder="blur"
          className="absolute -z-10"
          fill={true}
        />
        <div className="absolute bottom-0 space-y-2 p-6 text-background">
          <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="text-sm">{description}</p>
          <Link
            href="#"
            className="inline-flex text-sm font-semibold sm:text-base"
          >
            Saiba Mais <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
