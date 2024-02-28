import { Skeleton } from '@/components/shadcn-ui/skeleton'

export function ArticleLoading({ articles = 6 }: { articles?: number }) {
  return (
    <>
      {[...Array(articles)].map((item, i) => {
        return (
          <div className="w-full" key={i}>
            <Skeleton className="h-[435px] w-full rounded-2xl" />
          </div>
        )
      })}
    </>
  )
}
