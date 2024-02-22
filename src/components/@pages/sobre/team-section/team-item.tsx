import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/avatar'
import { CarouselItem } from '@/components/shadcn-ui/carousel'

interface TeamItemProps {
  name: string,
  avatarImage: string,
  avatarFallback: string,
  role: string,
  description: string
}

export function TeamItem({
  name,
  avatarImage,
  avatarFallback,
  role,
  description
}: TeamItemProps) {
  return (
    <CarouselItem className="basis-1/2 md:basis-1/3">
      <div className='flex w-full flex-col overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow'>
        <Avatar className="h-16 w-16 border-2">
          <AvatarImage src={avatarImage} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <h3 className="mt-2 text-xl font-bold">{name}</h3>
        <span className="mt-1 text-muted-foreground">{role}</span>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
    </CarouselItem>
  )
}
