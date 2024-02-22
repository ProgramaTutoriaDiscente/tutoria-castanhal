import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/shadcn-ui/carousel";
import { TeamItem } from "./team-item";
import { fetchHygraph } from "@/lib/fetch-hygraph";
import { MemberProps } from "@/types/member";

export async function TeamCarousel() {
    function getMembers(): Promise<{ members: MemberProps[] }> {
        const query = `query Members {
            members {
              avatar {
                url
              }
              name
              description
              fallback
              role
            }
          }
        `

        return fetchHygraph(query)
    }

    const { members } = await getMembers()

    return (
        <Carousel className="w-full px-2">
            <CarouselContent>
                {members.map((item, i) => (
                    <TeamItem
                        name={item.name}
                        avatarImage={item.avatar.url}
                        avatarFallback={item.fallback}
                        role={item.role}
                        description={item.description}
                        key={i}
                    />
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}