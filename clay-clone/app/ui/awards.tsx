import { CardWithImage, CardWithImageProps } from "./cards";

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
    return (
        <div className="bg-[#dee9ff] w-full h-full flex flex-col items-center">
            <div className="w-full h-52 flex flex-col items-center text-center p-5 my-14 gap-y-5">
                <div className="text-3xl md:text-7xl font-semibold md:font-bold md:mb-2">Press and awards</div>
                <div className="md:w-1/5">The word is spreading — read about us in the news below.</div>
            </div>
            <div className="w-full md:w-3/5 md:flex md:justify-center">
                {cards.map((card, index) => (
                    <div key={index} className={`${window.innerWidth < 768 ? '' : 'border-r'} border-gray-300 ${index === 1 ? 'shadow-lg' : ''} ${index === cards.length - 1 ? 'border-none' : ''} border-b`}>
                        <CardWithImage props={card} />
                    </div>
                ))}
            </div>
        </div>

    );
}