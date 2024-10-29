import Image from "next/image"
import { CardWithImageAndDescription, CardWithImageController, CardWithImageAndDescriptionProps } from "./cards"
import { useEffect, useRef, useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const cards: CardWithImageAndDescriptionProps[] = [
    {
        title: "Team Meeting",
        description: "A productive brainstorming session where ideas flow freely and everyone contributes.",
        image: "https://picsum.photos/seed/meeting/400/300"
    },
    {
        title: "Project Kickoff",
        description: "The exciting start of a new project, filled with enthusiasm and strategic planning.",
        image: "https://picsum.photos/seed/kickoff/400/300"
    },
    {
        title: "Code Review",
        description: "A collaborative effort to improve code quality, with constructive feedback and teamwork.",
        image: "https://picsum.photos/seed/codereview/400/300"
    },
    {
        title: "Lunch Break",
        description: "A relaxing break where the team bonds over delicious food and light-hearted conversations.",
        image: "https://picsum.photos/seed/lunch/400/300"
    },
    {
        title: "Sprint Planning",
        description: "Strategic planning session to outline tasks and goals for the upcoming sprint.",
        image: "https://picsum.photos/seed/sprint/400/300"
    },
    {
        title: "Team Outing",
        description: "A fun-filled day out with the team, enjoying activities and building stronger connections.",
        image: "https://picsum.photos/seed/outing/400/300"
    },
    {
        title: "Hackathon",
        description: "An intense coding marathon where creativity and innovation take center stage.",
        image: "https://picsum.photos/seed/hackathon/400/300"
    },
    {
        title: "Daily Standup",
        description: "Quick updates and progress checks to keep everyone aligned and on track.",
        image: "https://picsum.photos/seed/standup/400/300"
    },
    {
        title: "Client Meeting",
        description: "Professional discussions with clients to understand their needs and provide solutions.",
        image: "https://picsum.photos/seed/client/400/300"
    },
    {
        title: "Team Celebration",
        description: "A joyous occasion to celebrate the team's achievements and milestones.",
        image: "https://picsum.photos/seed/celebration/400/300"
    },
    {
        title: "Workshop",
        description: "A skill development session where team members learn and grow together.",
        image: "https://picsum.photos/seed/workshop/400/300"
    },
    {
        title: "Team Building",
        description: "Activities designed to strengthen bonds and improve teamwork within the group.",
        image: "https://picsum.photos/seed/teambuilding/400/300"
    },
    {
        title: "Product Launch",
        description: "The exciting unveiling of a new product, marking a significant milestone for the team.",
        image: "https://picsum.photos/seed/launch/400/300"
    },
    {
        title: "Retrospective",
        description: "Reflecting on past work to identify successes and areas for improvement.",
        image: "https://picsum.photos/seed/retrospective/400/300"
    },
    {
        title: "Training Session",
        description: "An educational session where team members enhance their skills and knowledge.",
        image: "https://picsum.photos/seed/training/400/300"
    },
    {
        title: "Team Photo",
        description: "A group picture capturing the camaraderie and spirit of the team.",
        image: "https://picsum.photos/seed/photo/400/300"
    },
    {
        title: "Brainstorming",
        description: "A creative session where innovative ideas are generated and discussed.",
        image: "https://picsum.photos/seed/brainstorming/400/300"
    },
    {
        title: "Office Party",
        description: "A celebration event filled with fun, laughter, and team bonding.",
        image: "https://picsum.photos/seed/party/400/300"
    },
    {
        title: "Team Retreat",
        description: "A relaxing getaway for the team to recharge and strengthen their connections.",
        image: "https://picsum.photos/seed/retreat/400/300"
    },
    {
        title: "All Hands",
        description: "A company-wide meeting to discuss important updates and align on goals.",
        image: "https://picsum.photos/seed/allhands/400/300"
    }
];

const imageElements = [
    <Image
        src="https://picsum.photos/seed/image1/400/300"
        width={400}
        height={300}
        alt="Scenic Landscape"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image2/400/300"
        width={400}
        height={300}
        alt="City Skyline"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image3/400/300"
        width={400}
        height={300}
        alt="Mountain View"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image4/400/300"
        width={400}
        height={300}
        alt="Forest Path"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image5/400/300"
        width={400}
        height={300}
        alt="Ocean Waves"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image6/400/300"
        width={400}
        height={300}
        alt="Desert Dunes"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image7/400/300"
        width={400}
        height={300}
        alt="Snowy Peaks"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image8/400/300"
        width={400}
        height={300}
        alt="Sunset Beach"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image9/400/300"
        width={400}
        height={300}
        alt="Countryside Road"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image10/400/300"
        width={400}
        height={300}
        alt="Urban Park"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image11/400/300"
        width={400}
        height={300}
        alt="River Bend"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image12/400/300"
        width={400}
        height={300}
        alt="Flower Field"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image13/400/300"
        width={400}
        height={300}
        alt="Rocky Shore"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image14/400/300"
        width={400}
        height={300}
        alt="Foggy Forest"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image15/400/300"
        width={400}
        height={300}
        alt="Golden Gate"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image16/400/300"
        width={400}
        height={300}
        alt="Lush Valley"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image17/400/300"
        width={400}
        height={300}
        alt="City Night"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image18/400/300"
        width={400}
        height={300}
        alt="Autumn Leaves"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image19/400/300"
        width={400}
        height={300}
        alt="Spring Blossoms"
        className="w-full rounded-md object-cover"
    />,
    <Image
        src="https://picsum.photos/seed/image20/400/300"
        width={400}
        height={300}
        alt="Winter Wonderland"
        className="w-full rounded-md object-cover"
    />
];

const chunkArray = (array: any, size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

export const BGLife = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const imageSliderRef = useRef<HTMLDivElement>(null);

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    const chunkedImages = chunkArray(imageElements, 4); // Split images into groups of 4

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (sliderRef.current || imageSliderRef.current) {
                event.preventDefault();
            }
        };

        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('wheel', handleWheel);
        }

        const imageSlider = imageSliderRef.current;
        if (imageSlider) {
            imageSlider.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (slider) {
                slider.removeEventListener('wheel', handleWheel);
            }
            if (imageSlider) {
                imageSlider.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const scrollAmount = () => {
        return window.innerWidth > 768 ? window.innerWidth : 410; // adjust the 768 breakpoint as needed
    }

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= scrollAmount();
            setScrollPosition(sliderRef.current.scrollLeft - scrollAmount());
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scrollAmount();
            setScrollPosition(sliderRef.current.scrollLeft + scrollAmount());
        }
    };

    const nextImage = () => { }

    const prevImage = () => { }

    return (
        <div className="bg-[#e6fce9] w-full h-full flex flex-col items-center">
            <div className="text-3xl font-semibold mt-16 mb-6">Life at 23BG</div>
            <div className="w-4/5 text-center">We're a team with a huge range of interests—and we love sharing them with one another!</div>
            <CardWithImageController
                title="Team Photos"
                scrollRight={scrollRight}
                scrollLeft={scrollLeft}
                canScrollLeft={scrollPosition > 0}
            />
            <div className="w-screen flex items-center overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide p-2" ref={sliderRef}>
                {cards.map((card, index) => (
                    <div key={index} className="w-full">
                        <CardWithImageAndDescription props={card} />
                    </div>
                ))}
            </div>
            <CardWithImageController
                title="Company Retreat"
                scrollRight={nextImage}
                scrollLeft={prevImage}
                canScrollLeft={true}
            />
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                // opts={{
                //     slidesToScroll: window.innerWidth > 768 ? 2 : 1,
                // }}
            >
                <CarouselContent className="">
                    {window.innerWidth < 768 ? (
                        imageElements.map((image, index) => (
                            <CarouselItem key={index} className="">
                                <div className="w-full md:w-1/4">
                                    {image}
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        chunkedImages.map((chunk, chunkIndex) => (
                            <CarouselItem key={chunkIndex} className="w-1/4 flex justify-around">
                                {chunk.map((image:any, index:number) => (
                                    <div key={index} className="w-1/4">
                                        {image}
                                    </div>
                                ))}
                            </CarouselItem>
                        ))
                    )}
                        
                </CarouselContent>
            </Carousel>
        </div>
    );
};