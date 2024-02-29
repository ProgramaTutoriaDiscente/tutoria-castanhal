'use client'

import { MobileNav } from '@/components/nav-bar/mobile-nav'
import { NavItem } from '@/components/nav-bar/nav-item'
import { Button } from '@/components/shadcn-ui/button'
import { Separator } from '@/components/shadcn-ui/separator'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="text-2xl font-bold">Logo</span>
            </Link>

            <nav className="hidden md:block">
              {siteConfig.links.map((item, i) => (
                <NavItem name={item.name} href={item.href} key={i} />
              ))}
            </nav>
          </div>
          <div className="flex flex-row-reverse items-center md:flex-row">
            <Button className="hidden md:block">Inscreva-se</Button>
            <MobileNav />
            <div className="hidden md:flex">
              <Separator orientation="vertical" className="ml-4 mr-2 h-10" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
