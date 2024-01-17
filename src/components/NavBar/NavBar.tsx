import { links } from '@/config'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import MobileNav from './MobileNav'
import NavItem from './NavItem'

export default function NavBar() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 border-b border-gray-900/10 bg-background">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center">
            <div>
              <Link href="/">LOGO</Link>
            </div>

            <div className="ml-auto hidden items-center gap-3 md:gap-6 lg:flex">
              {links.map((item) => (
                <NavItem key={item.name} name={item.name} href={item.href} />
              ))}
              <Button>Inscrever-se</Button>
            </div>

            <Separator
              className="ml-6 mr-4 hidden h-6 lg:block"
              orientation="vertical"
            />

            <div className="hidden items-center gap-1 lg:flex ">
              {/* <ToggleTheme /> */}
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <InstagramLogoIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>

            <MobileNav />
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}
