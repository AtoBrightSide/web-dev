import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PersonIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface NormalCardProps {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}
export const NormalCard = ({ props }: { props: NormalCardProps }) => {
    const { icon: Icon, title, description } = props;
    return (
        <div className="flex flex-col w-full p-10 md:p-14 gap-y-3 md:gap-y-6">
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
    return (
        <div className={`flex flex-col md:flex-row`}>
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
}
export const UserCard = ({ props }: { props: UserCardProps }) => {
    const { name, imgSrc } = props;
    return (
        <div className={`flex h-20 w-full border-gray-300 border-b-[1px] gap-x-2`}>
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
            <div className="flex justify-center items-center p-2">{name}</div>
        </div>
    )
}