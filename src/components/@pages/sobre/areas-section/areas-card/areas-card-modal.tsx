import { Button } from '@/components/shadcn-ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn-ui/dialog'
import { ChevronRight } from 'lucide-react'

interface AreasCardModalProps {
  title: string
  description: string
  disciplinas: string
}

export function AreasCardModal({
  title,
  description,
  disciplinas,
}: AreasCardModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Saiba Mais <ChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>{disciplinas}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
