'use client'

import { Button } from '@/components/shadcn-ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  name: string
  href: string
}

export function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname()
  const isActive = (href: string) =>
    pathname === href ? 'text-primary' : 'text-muted-foreground'

  return (
    <Button
      asChild
      variant="link"
      className={cn('text-lg transition-colors', isActive(href))}
    >
      <Link href={href}>{name}</Link>
    </Button>
  )
}
