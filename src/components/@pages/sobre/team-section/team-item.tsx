import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/avatar'
import { Button } from '@/components/shadcn-ui/button'
import { CarouselItem } from '@/components/shadcn-ui/carousel'
import { FaLinkedin } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

export function TeamItem() {
  return (
    <CarouselItem className="basis-1/2 md:basis-1/3">
      <div className="flex w-full flex-col overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow">
        <Avatar className="h-16 w-16 border-2">
          <AvatarImage src="https://github.com/aridanpantoja.png" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <h3 className="mt-1 text-xl font-bold">Aridan Pantoja</h3>
        <span className="mt-1 text-muted-foreground">
          Tutor de Informática Básica
        </span>
        <p className="mt-2 text-sm text-muted-foreground">
          Engenharia de Computação (8º período)
        </p>
        <div className="mt-4 space-x-2">
          <Button size="icon" variant="outline">
            <FaLinkedin className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline">
            <LuGraduationCap className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </CarouselItem>
  )
}
