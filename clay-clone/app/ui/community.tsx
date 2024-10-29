import { Separator } from "@/components/ui/separator";
import { UserCardNormal, UserCardNormalProps } from "./cards";
import { useState, useEffect } from "react";

const cards: UserCardNormalProps[] = [
    {
        name: "K. Rudeegnaap",
        role: "CEO of Sendoso",
        description: "A lot of CROs & CMOs are now rethinking their GTM model and looking to automate their outbound. We found that was possible with Clay. Implementing Clay allowed our team to spend their hours better, responding to warm leads and managing inbound more effectively, instead of doing manual repetitive tasks.",
        image: "https://picsum.photos/seed/ceo/400/300"
    },
    {
        name: "K. Rasmessen",
        role: "Head of Sales, ChatMetrics",
        description: "I’ve found incalculable ROI in Clay for our outbound efforts. It used to take us 10min to fully prospect a company, and we could only do 30 companies a day. Clay has automated all the tedious, repeatable work we were doing. Instead of doing 30 companies a day, I can do 10,000",
        image: "https://picsum.photos/seed/hos/400/300"
    },
    {
        name: "A. Bennaceur",
        role: "CEO of Attention",
        description: "Without Clay, we would never be able to grow at the same speed as are today. We heavily rely on it for our outbound, our intent workflows, our lead capture and inbound enrichment, and all the internal tools that we have built for our sales team. Clay has become the must-have of the decade for any growth-marketing and revenue operation team.",
        image: "https://picsum.photos/seed/attention/400/300"
    },
    {
        name: "E. Nowoslawski",
        role: "Founder of Growth Engine X",
        description: "Clay has cracked how to use GPT to do real-time research. No database has the info that Claygent can give you while live-scraping the web. We recently had to filter 35k accounting firms to see who served e-commerce companies. Instead of hiring a VA to manually check each page, Claygent did all of the heavy lifting for us.",
        image: "https://picsum.photos/seed/growth/400/300"
    },
]
export const Community = () => {
    const [innerWidth, setInnerWidth] = useState<number>(0);
    useEffect(() => {
        const handleWindowResize = () => {
            console.log("first")
            setInnerWidth(window.innerWidth);
        };

        // Set the initial width
        setInnerWidth(window.innerWidth);

        // Update width on resize
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <div className="bg-[#f5ebfd] w-full h-full flex flex-col items-center">
            <div className="w-full h-52 flex flex-col items-center text-center p-5 my-14 gap-y-5">
                <div className="text-3xl md:text-7xl font-semibold md:font-bold md:mb-2">Vibrant, growing community of customers</div>
                <div className="md:w-1/4">Our customers speak for themselves about the value of Clay.</div>
            </div>
            <div className="w-full md:flex md:flex-wrap">
                {cards.map((card, index) => (
                    <div key={index} className={`md:w-1/4 ${innerWidth < 768 ? '' : 'border-r'} border-gray-300 ${index === 1 ? 'shadow-lg' : ''} ${index === cards.length - 1 ? 'border-none' : ''} border-b md:border-b-0`}>
                        <UserCardNormal props={card} />
                        <Separator></Separator>
                    </div>
                ))}
            </div>
        </div>
    );
}