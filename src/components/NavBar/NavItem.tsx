'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItemProps {
  name: string
  href: string
}

export default function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname()
  const isActive =
    pathname === href ? 'text-primary border-b border-primary' : 'slate-700'

  return (
    <Link href={href} className={cn('text-sm font-semibold', isActive)}>
      {name}
    </Link>
  )
}
