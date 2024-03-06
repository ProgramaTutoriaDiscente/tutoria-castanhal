import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn-ui/dialog'
import { ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface AreasCardProps {
  title: string
  description: string
  disciplinas: string
  background: StaticImageData
}
export function AreasCard({
  title,
  description,
  disciplinas,
  background,
}: AreasCardProps) {
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
        />
        <div className="absolute bottom-0 space-y-3 p-6 text-background">
          <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="text-sm">{description}</p>
          <Dialog>
            <DialogTrigger>
              <div className="flex gap-1">
                Saiba Mais <ChevronRight />
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <div className="py-2">
                <DialogTitle>Conteúdo</DialogTitle>
                <DialogDescription className="pt-2">
                  {disciplinas}
                </DialogDescription>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
