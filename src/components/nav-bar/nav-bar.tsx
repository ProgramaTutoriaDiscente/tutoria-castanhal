'use client'

import { MobileNav } from '@/components/nav-bar/mobile-nav'
import { NavItem } from '@/components/nav-bar/nav-item'
import { Button } from '@/components/shadcn-ui/button'
import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
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
          <div className="flex items-center gap-4">
            <Button className="hidden md:block">Inscreva-se</Button>
            <MobileNav />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
