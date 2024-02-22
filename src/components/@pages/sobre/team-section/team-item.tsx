import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/avatar'
import { buttonVariants } from '@/components/shadcn-ui/button'
import { CarouselItem } from '@/components/shadcn-ui/carousel'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

interface TeamItemProps {
  name: string
  avatarImage: string
  avatarFallback: string
  role: string
  description: string
  linkedin?: string
  lattes?: string
}

export function TeamItem({
  name,
  avatarImage,
  avatarFallback,
  role,
  description,
  linkedin,
  lattes,
}: TeamItemProps) {
  return (
    <CarouselItem className="basis-1/2 md:basis-1/3">
      <div className="flex w-full flex-col overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow">
        <Avatar className="h-16 w-16 border-2">
          <AvatarImage src={avatarImage} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <h3 className="mt-1 text-xl font-bold">{name}</h3>
        <span className="mt-1 text-muted-foreground">{role}</span>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 space-x-2">
          {linkedin && (
            <Link
              href={linkedin}
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          )}
          {lattes && (
            <Link
              href={lattes}
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
            >
              <LuGraduationCap className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </CarouselItem>
  )
}
