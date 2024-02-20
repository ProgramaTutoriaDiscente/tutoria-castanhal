'use client'

import { Button } from '@/components/shadcn-ui/button'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

interface SocialShareProps {
  slug: string
  title: string
}

export function SocialShare({ slug, title }: SocialShareProps) {
  const url = `https://tutoriacastanhal.com.br/blog/${slug}`

  const socials = [
    {
      Icon: FaWhatsapp,
      href: `https://api.whatsapp.com/send?text=${url}`,
    },
    {
      Icon: FaFacebook,
      href: `https://www.facebook.com/sharer.php?u=${url}`,
    },
    {
      Icon: FaTwitter,
      href: `https://twitter.com/intent/post?text=${title}%0A%0A${url}`,
    },
  ]

  return (
    <div className="grid w-full grid-cols-3 gap-4">
      {socials.map((item, i) => (
        <Link href={item.href} key={i} target="__blank" className="w-full">
          <Button
            variant="secondary"
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/70"
          >
            <item.Icon className="h-5 w-5" />
          </Button>
        </Link>
      ))}
    </div>
  )
}
