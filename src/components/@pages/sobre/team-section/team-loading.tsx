import { Skeleton } from '@/components/shadcn-ui/skeleton'
import { GridWrapper } from '@/components/shared/grid-wrapper'

export function TeamLoading() {
  return (
    <GridWrapper>
      <div className="w-full">
        <Skeleton className="h-[200px] w-full rounded-2xl" />
      </div>
      <div className="hidden w-full md:block">
        <Skeleton className="h-[200px] w-full rounded-2xl" />
      </div>
      <div className="hidden w-full lg:block">
        <Skeleton className="h-[200px] w-full rounded-2xl" />
      </div>
    </GridWrapper>
  )
}
