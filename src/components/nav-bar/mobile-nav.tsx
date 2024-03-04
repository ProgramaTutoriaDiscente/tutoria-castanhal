'use client'

import { Button } from '@/components/shadcn-ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/shadcn-ui/sheet'
import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { RiMenu4Fill } from 'react-icons/ri'
import { Separator } from '../shadcn-ui/separator'
import { ThemeToggle } from '../theme/theme-toggle'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="px-0 text-muted-foreground hover:bg-transparent  md:hidden"
        >
          <RiMenu4Fill className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <div className="mt-6 flex flex-col">
          <Link href="/" className="max-w-48">
            <Image
              src="/logo.svg"
              alt="Logo da Tutoria Castanhal"
              width={192}
              height={70}
              className="w-full"
            />
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">
            Programa de Tutoria Discente - UFPA Campus Castanhal
          </p>

          <nav className="my-8 flex flex-col gap-6">
            {siteConfig.links.map((item, i) => (
              <Link
                href={item.href}
                key={i}
                className="text-xl text-muted-foreground hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Separator />

          <div className="mt-4 flex gap-4">
            <Link href={siteConfig.social.instagram}>
              <Button
                size="icon"
                variant="ghost"
                className="text-muted-foreground"
              >
                <FaInstagram className="h-6 w-6" />
              </Button>
            </Link>
            <Link href={siteConfig.social.linkedin}>
              <Button
                size="icon"
                variant="ghost"
                className="text-muted-foreground"
              >
                <FaLinkedin className="h-6 w-6" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
