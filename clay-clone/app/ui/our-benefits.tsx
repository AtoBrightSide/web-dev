import { BackpackIcon, BarChartIcon, CookieIcon, EnvelopeClosedIcon, HeartFilledIcon, HomeIcon, Pencil2Icon, TimerIcon } from "@radix-ui/react-icons";
import { CardWithIconAndDescription, CardWithIconAndDescriptionProps } from "./cards";
import { useState, useEffect } from "react";

const cards: CardWithIconAndDescriptionProps[] = [
    {
        icon: EnvelopeClosedIcon,
        title: "Competitive Salary",
        description: "Your roles, responsibility and salary will grow as we do"
    },
    {
        icon: HeartFilledIcon,
        title: "Health Insurance",
        description: "Fully funded, high quality health, dental and vision coverage—including 80-100% coverage on therapy."
    },
    {
        icon: Pencil2Icon,
        title: "Visa and greencard sponsorship",
        description: "We know it can be an ardous process, we can help you through it"
    },
    {
        icon: TimerIcon,
        title: "Flexibile Schedule & unlimited time off",
        description: "Work-life balance matters. We expect everyone to take 3 weeks off and are flexible for more"
    },
    {
        icon: BackpackIcon,
        title: "Socials and retreats",
        description: "We love hanging out--from DJ Fridays to daily team lunches to soccer. We also gather in-person at a special retreat each year."
    },
    {
        icon: HomeIcon,
        title: "Personal comfort",
        description: "Order whatever equipment you think will help you work more enjoyably."
    },
    {
        icon: BarChartIcon,
        title: "Flexible in-person culture",
        description: "We love working in-person, though we're open to remote for certain roles. Everyone is welcome to work 4 weeks remotely."
    },
    {
        icon: CookieIcon,
        title: "Parental and family benefits",
        description: "We support current and future parents with IVF fertility benefits, egg freezing, and 4 months of paid parental leave."
    },
]
export const OurBenefits = () => {
    const [innerWidth, setInnerWidth] = useState<number>(0);
    useEffect(() => {
        const handleWindowResize = () => {
            setInnerWidth(innerWidth);
        };

        // Set the initial width
        setInnerWidth(innerWidth);

        // Update width on resize
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <div className="bg-[#fde097] w-full h-full flex flex-col items-center">
            <div className="w-full h-52 flex flex-col items-center text-center p-5 my-14 gap-y-5">
                <div className="text-3xl md:text-7xl font-semibold md:font-bold md:mb-2">Our Benefits</div>
                <div className="md:w-1/4">Kindness and creativity run deep at Clay. We care about bringing out the brightest parts of one another and building world class products.</div>
            </div>
            <div className="w-full md:flex md:flex-wrap">
                {cards.map((card, index) => (
                    <div key={index} className={`md:w-1/4 ${innerWidth < 768 ? '' : 'border-r'} border-gray-300 ${index === 1 ? 'shadow-lg' : ''} ${index === cards.length - 1 ? 'border-none' : ''} border-b`}>
                        <CardWithIconAndDescription props={card} />
                    </div>
                ))}
            </div>
        </div>
    );
}