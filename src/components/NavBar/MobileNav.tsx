'use client'

import { Separator } from '@/components/ui/separator'
import { links } from '@/config'
import { cn } from '@/lib/utils'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    pathname === href ? 'text-primary' : 'slate-700'

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false)
    }
  }

  if (!isOpen) {
    return (
      <div className="ml-auto flex gap-1 lg:hidden">
        {/* <ToggleTheme /> */}
        <Button
          variant="ghost"
          onClick={() => setIsOpen(true)}
          className="relative items-center justify-center rounded-md p-2 text-muted-foreground"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </div>
    )
  } else {
    return (
      <div className="block lg:hidden">
        <div className="relative z-40">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </div>

        <div className="fixed inset-0 z-40 flex justify-end">
          <div className="fixed right-4 top-4 flex w-full max-w-xs flex-col rounded-lg bg-white p-6 text-base font-semibold shadow-lg">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 ml-auto flex items-center justify-center text-muted-foreground"
            >
              <X aria-hidden="true" />
            </button>
            <div className="flex flex-col  gap-4">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => closeOnCurrent(item.href)}
                  className={cn('text-lg font-medium', isActive(item.href))}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mr-auto text-lg">Inscrever-se</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
