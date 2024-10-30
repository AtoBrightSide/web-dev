import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon, ChevronRightIcon, FrameIcon, PersonIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import { useInView } from "react-intersection-observer";

export interface NormalCardProps {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}
export const NormalCard = ({ props }: { props: NormalCardProps }) => {
    const { icon: Icon, title, description } = props;
    return (
        <div className={`flex flex-col w-full p-10 md:p-14 gap-y-3 md:gap-y-6`}>
            <Icon className="w-7 md:w-9 h-7 md:h-9"></Icon>
            <div className="text-black text-3xl md:text-5xl font-bold">{title}</div>
            <div className="font-medium md:text-xl">{description}</div>
        </div>
    );
}

export interface NormalCardWrapperProps {
    normalCardInfo: NormalCardProps[];
}
export const NormalCardWrapper = ({ props }: { props: NormalCardWrapperProps }) => {
    const { normalCardInfo } = props;
    const { ref: containerRef, inView: isVisible } = useInView();
    return (
        <div ref={containerRef} className={`flex flex-col md:flex-row md:justify-around ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            {normalCardInfo.map((info, index) => {
                return (
                    <div key={index} className={`w-full md:w-1/${normalCardInfo.length + 1}`}>
                        <NormalCard props={info} />
                        {index < normalCardInfo.length - 1 && (
                            <>
                                <Separator className="block md:hidden" />
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export const UserCardHeader = () => {
    return (
        <div className="flex h-20 w-full bg-white gap-x-3 items-center justify-between p-5">
            <div className="flex gap-x-3">
                <PersonIcon className="h-5 w-5"></PersonIcon>
                <div className="font-semibold">The Clay Crew</div>
            </div>
            <div className="hidden md:block">
                <Button className="font-semibold">Add a row(you?)</Button>
            </div>
        </div>
    );
}

export interface UserCardProps {
    name: string,
    imgSrc: string,
    description: string,
}
export const UserCard = ({ props }: { props: UserCardProps }) => {
    const { name, imgSrc, description } = props;
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { ref: containerRef, inView: isVisible } = useInView();
    return (
        <div
            ref={containerRef}
            className={`flex h-20 w-full border-gray-300 border-b gap-x-2 hover:scale-y-105 hover:shadow-lg transition-all ease-in ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Separator orientation="vertical" className="hidden md:block" />
            <div className="w-1/5 h-full flex justify-center items-center">
                <Image
                    src={imgSrc}
                    height={40}
                    width={40}
                    alt="User"
                    className="rounded-lg"
                >
                </Image>
            </div>
            <Separator orientation="vertical" />
            <div className="flex justify-center items-center p-2">{isHovered ? description : name}</div>
        </div>
    )
}

export interface CardWithImageAndDescriptionProps {
    title: string,
    description: string,
    image: string,
}
export const CardWithImageAndDescription = ({ props }: { props: CardWithImageAndDescriptionProps }) => {
    const { title, description, image } = props
    const { ref: containerRef, inView: isVisible } = useInView();
    return (
        <div ref={containerRef} className={`w-[400px] md:w-[470px] h-96 md:h-[450px] p-5 md:p-10 bg-white flex flex-col gap-y-4 border-r border-gray-300 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="w-full h-2/3 flex justify-center">
                <Image
                    src={image}
                    width={400}
                    height={300}
                    alt="image placeholder"
                    className="w-full rounded-md object-cover"
                ></Image>
            </div>
            <div className="text-2xl font-semibold text-start">{title}</div>
            <div className="flex flex-wrap text-sm md:text-base text-[#717989] overflow-x-auto whitespace-normal">{description}</div>
        </div>
    )
}

export const CardWithImageController = ({ title, scrollRight, scrollLeft, canScrollLeft }: { title: string, scrollRight: () => void, scrollLeft: () => void, canScrollLeft: boolean }) => {
    return (
        <div className="w-full flex justify-between px-10 my-5">
            <div className="font-mono uppercase text-[#5fad6a]">{title}</div>
            <div className="flex gap-x-2">
                <ChevronLeftIcon className={`w-7 h-7 ${!canScrollLeft ? 'hidden cursor-not-allowed' : ''}`} onClick={canScrollLeft ? scrollLeft : undefined}></ChevronLeftIcon>
                <ChevronRightIcon className={`w-7 h-7`} onClick={scrollRight}></ChevronRightIcon>
            </div>
        </div>
    );
};

export interface NavbarCardProps {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}
export const NavbarCard = ({ props }: { props: NavbarCardProps }) => {
    const { icon: Icon, title, description } = props;
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <div
            className={`flex h-24 w-full border-gray-300 border-b-[1px] gap-x-2 hover:bg-slate-200 hover:cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* <Separator orientation="vertical" className="hidden md:block" /> */}
            <div className={`w-1/5 h-full flex justify-center items-center ${isHovered ? 'transition scale-150 duration-150 ease-linear' : ''}`}>
                <Icon className="w-5 h-5"></Icon>
            </div>
            {/* <Separator orientation="vertical" /> */}
            <div className="w-4/5 flex flex-col items-start border-x border-gray-300">
                <div className="flex justify-center items-center p-2">{title}</div>
                <div className="text-sm flex flex-wrap justify-center items-center p-2">{description}</div>
            </div>
        </div>
    )
}

export interface CardWithIconProps {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    title: string;
}
export const CardWithIcon = ({ props }: { props: CardWithIconProps }) => {
    const { icon: Icon, title } = props;
    const { ref: containerRef, inView: isVisible } = useInView();
    return (
        <div ref={containerRef} className={`w-full h-52 md:h-72 bg-white flex flex-col items-center justify-center p-10 gap-y-2 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <Icon className="w-7 h-7"></Icon>
            <div className="text-lg md:text-2xl font-semibold text-center">{title}</div>
        </div>
    );
}
export interface CardWithIconAndDescriptionProps {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}
export const CardWithIconAndDescription = ({ props }: { props: CardWithIconAndDescriptionProps }) => {
    const { icon: Icon, title, description } = props;
    const { ref: containerRef, inView: isVisible } = useInView();
    return (
        <div ref={containerRef} className={`w-full h-52 md:h-72 bg-white flex flex-col items-center justify-center p-10 gap-y-2 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <Icon className="w-7 h-7"></Icon>
            <div className="text-lg md:text-2xl font-semibold text-center">{title}</div>
            <div className="text-sm text-center font-light">{description}</div>
        </div>
    );
}

export interface CardWithImageProps {
    title: string,
    image: string,
}
export const CardWithImage = ({ props }: { props: CardWithImageProps }) => {
    const { title, image } = props;
    const { ref: containerRef, inView: isVisible } = useInView();
    return (
        <div ref={containerRef} className={`w-full p-5 bg-white flex flex-col gap-y-4 border-r border-gray-300 hover:bg-slate-300 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="w-full h-2/3 flex justify-center">
                <Image
                    src={image}
                    width={400}
                    height={300}
                    alt="image placeholder"
                    className="w-full rounded-md object-cover"
                ></Image>
            </div>
            <div className="text-2xl font-semibold text-start">{title}</div>
        </div>
    )
}

export interface UserCardNormalProps {
    name: string,
    role: string,
    description: string,
    image: string,
}
export const UserCardNormal = ({ props }: { props: UserCardNormalProps }) => {
    const { name, role, description, image } = props;
    const imageStyle = {
        borderRadius: '100%',
    }
    const { ref: containerRef, inView: isVisible } = useInView();
    return (
        <div ref={containerRef} className={`"w-full h-full p-5 bg-white flex flex-col gap-y-2 items-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="w-full h-min flex justify-center">
                <Image
                    src={image}
                    width={80}
                    height={80}
                    alt="image placeholder"
                    className="w-20 h-20 object-cover"
                    style={imageStyle}
                ></Image>
            </div>
            <div className="text-xl font-bold text-start ">{name}</div>
            <div className="w-3/4 flex flex-wrap justify-center text-center text-sm font-semibold md:text-base whitespace-normal mb-2">{role}</div>
            <div className="w-3/4 flex flex-wrap justify-center text-center text-sm md:text-base text-[#717989]">{description}</div>
        </div>
    )
}
export interface JobPostCardProps {
    title: string,
    department: string,
    location: string,
    type: string,
}
export const JobPostCard = ({ props }: { props: JobPostCardProps }) => {
    const { title, department, location, type } = props;
    const { ref: containerRef, inView: isVisible } = useInView();
    return (
        <div ref={containerRef} className={`h-full w-full bg-[#f5f5f5] shadow-lg rounded-md flex flex-col justify-center py-4 px-3 gap-y-3 hover:bg-[#f5f5f581] hover:cursor-pointer ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="text-[#002f67] font-semibold">{title}</div>
            <div className="flex justify-start items-center gap-2 text-xs font-extralight">
                <div>{department}</div> <div className="h-1 w-1 rounded-full bg-black font-normal"></div>
                <div className="">{location}</div>
                <div className="">{type}</div>
            </div>
        </div>
    )
}