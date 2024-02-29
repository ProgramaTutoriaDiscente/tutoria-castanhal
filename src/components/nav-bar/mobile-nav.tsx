'use client'

import { NavItem } from '@/components/nav-bar/nav-item'
import { Button } from '@/components/shadcn-ui/button'
import { Separator } from '@/components/shadcn-ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/shadcn-ui/sheet'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
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
        <nav className="mt-6 flex flex-col items-start gap-2">
          <Link href="/" className="mb-4">
            <span className="text-2xl font-bold">Logo</span>
          </Link>

          {siteConfig.links.map((item, i) => (
            <NavItem name={item.name} href={item.href} key={i} />
          ))}
          <NavItem name="Inscreva-se" href="#" />
        </nav>
        <Separator className="my-4" />
        <div className="flex w-full items-center justify-start gap-1">
          <ThemeToggle />
          <Link href={siteConfig.social.instagram}>
            <Button variant="ghost" size="icon">
              <FaInstagram className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={siteConfig.social.linkedin}>
            <Button variant="ghost" size="icon">
              <FaLinkedin className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
