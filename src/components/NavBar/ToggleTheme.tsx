'use client'

import { Button } from '@/components/ui/button'
import { MoonIcon } from '@radix-ui/react-icons'
import { Sun } from 'lucide-react'

export function ToggleTheme() {
  function handleToggle() {
    const root = document.documentElement.classList
    root.contains('dark') ? root.remove('dark') : root.add('dark')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className=" text-muted-foreground"
      onClick={() => handleToggle()}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Mudar tema</span>
    </Button>
  )
}
