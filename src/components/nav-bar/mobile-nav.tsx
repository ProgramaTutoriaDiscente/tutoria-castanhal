'use client'

import { NavItem } from '@/components/nav-bar/nav-item'
import { Button } from '@/components/shadcn-ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/shadcn-ui/sheet'
import { siteConfig } from '@/config/site'
import { useState } from 'react'
import { RiMenu4Fill } from 'react-icons/ri'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 px-0 text-base hover:bg-transparent md:hidden"
        >
          <RiMenu4Fill className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <nav className="flex flex-col items-start gap-2">
          {siteConfig.links.map((item, i) => (
            <NavItem name={item.name} href={item.href} key={i} />
          ))}
          <Button>Inscreva-se</Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}