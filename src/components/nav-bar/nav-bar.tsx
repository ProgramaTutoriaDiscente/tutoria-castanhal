'use client'

import { NavItem } from '@/components/nav-bar/nav-item'
import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Button } from '../shadcn-ui/button'
import { ThemeToggle } from '../theme/theme-toggle'
import { MobileNav } from './mobile-nav'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/" className="flex max-w-28 items-center">
            <Image
              src="/logo.svg"
              alt="Logo da Tutoria Castanhal"
              width={112}
              height={41}
              className="h-10 w-max"
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            {siteConfig.links.map((item, i) => (
              <NavItem name={item.name} href={item.href} key={i} />
            ))}
          </nav>

          <div>
            <div className="hidden items-center gap-1 md:flex">
              <Link href={siteConfig.social.instagram}>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-muted-foreground"
                >
                  <FaInstagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.social.linkedin}>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-muted-foreground"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </Link>
              <ThemeToggle />
            </div>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
