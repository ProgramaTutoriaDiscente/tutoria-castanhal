import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Button } from '../shadcn-ui/button'

export function Socials() {
  return (
    <div className="space-x-1">
      <Link href={siteConfig.social.instagram}>
        <Button size="icon" variant="ghost" className="text-muted-foreground">
          <FaInstagram className="h-5 w-5" />
        </Button>
      </Link>
      <Link href={siteConfig.social.linkedin}>
        <Button size="icon" variant="ghost" className="text-muted-foreground">
          <FaLinkedin className="h-5 w-5" />
        </Button>
      </Link>
      <Link href={siteConfig.social.whatsapp}>
        <Button size="icon" variant="ghost" className="text-muted-foreground">
          <FaWhatsapp className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  )
}
