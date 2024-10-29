import { EyeOpenIcon, LinkNone1Icon, StarIcon, SunIcon } from "@radix-ui/react-icons"
import { CardWithIcon, CardWithIconProps } from "./cards"
import { Separator } from "@/components/ui/separator"

const cards: CardWithIconProps[] = [
    {
        icon: LinkNone1Icon,
        title: "We practice compassion for all"
    },
    {
        icon: SunIcon,
        title: "We bring out the brightest in one another"
    },
    {
        icon: StarIcon,
        title: "We build world class products"
    },
    {
        icon: EyeOpenIcon,
        title: "We have quiet egos"
    },

]
export const OurValues = () => {
    return (
        <div className="bg-[#f5ebfd] w-full h-full flex flex-col items-center">
            <div className="w-full h-52 flex flex-col items-center text-center p-5 my-14 gap-y-5">
                <div className="text-3xl md:text-7xl font-semibold md:font-bold md:mb-2">Our Values</div>
                <div className="md:w-1/4">Kindness and creativity run deep at Clay. We care about bringing out the brightest parts of one another and building world class products.</div>
            </div>
            <div className="w-full md:flex">
                {cards.map((card, index) => (
                    <div key={index} className={`md:w-1/4 ${window.innerWidth < 768 ? 'border-b' : 'border-r'} border-gray-300 ${index === 1 ? 'shadow-lg' : ''} ${index === cards.length - 1 ? 'border-none': ''}`}>
                        <CardWithIcon props={card} />
                    </div>
                ))}
            </div>
        </div>
    )
}