import { useState, useEffect } from "react";
import { CardWithImage, CardWithImageProps } from "./cards";
import { useInView } from "react-intersection-observer";

const cards: CardWithImageProps[] = [
    {
        image: "https://picsum.photos/seed/forbes/400/300",
        title: "Forbes: Next Billion Dollar Startups"
    },
    {
        image: "https://picsum.photos/seed/sequoia/400/300",
        title: "Sequoia: Partnering with Clay: On a Mission to Grow"
    },
    {
        image: "https://picsum.photos/seed/bloomberg/400/300",
        title: "Bloomberg: Sequoia, Meritech Invest in AI Sales and Marketing Startup Clay"
    },
    {
        image: "https://picsum.photos/seed/frr/400/300",
        title: "First Round Review: Clay’s Path to Product-Market Fit "
    },
];
export const AwardsSection = () => {
    const { ref: containerRef, inView: isVisible } = useInView();
    const [innerWidth, setInnerWidth] = useState<number>(0);
    useEffect(() => {
        const handleWindowResize = () => {
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
        <div className={`bg-[#dee9ff] w-screen h-full flex flex-col items-center`}>
            <div ref={containerRef} className={`w-full h-52 flex flex-col items-center text-center p-5 my-14 gap-y-5 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                <div className="text-3xl md:text-7xl font-semibold md:font-bold md:mb-2">Press and awards</div>
                <div className="md:w-1/5">The word is spreading — read about us in the news below.</div>
            </div>
            <div className="w-full md:flex md:flex-wrap md:justify-center">
                {cards.map((card, index) => (
                    <div key={index} className={`w-full md:w-1/4 flex justify-center ${innerWidth < 768 ? '' : 'border-r'} border-gray-300 ${index === 1 ? 'shadow-lg' : ''} ${index === cards.length - 1 ? 'border-none' : ''} border-b`}>
                        <CardWithImage props={card} />
                    </div>
                ))}
            </div>
        </div>

    );
}