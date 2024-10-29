import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
    return (
        <div className="w-full h-[450px] md:h-screen relative bg-gradient-to-r from-[#dc7d75] via-[#e88c84] via-[#eb988e] via-[#ed9a90] via-[#fb968f] via-[#e9877c] via-[#e78a80] via-[#d67874] to-[#ca635c]">
            <Image
                src={'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66268d766aa4e3d973574a5d_img-dreamy-land.webp'}
                width={500}
                height={1200}
                className="block md:hidden absolute bottom-0"
                alt="hero icon"
                priority
            />

            <Image
                src={'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66268d766aa4e3d973574a5d_img-dreamy-land.webp'}
                width={2000}
                height={1200}
                className="hidden md:block absolute bottom-0"
                alt="hero icon"
                priority
            />

            <div className="w-full absolute top-28 p-3 flex flex-col items-center">
                <div className="text-4xl font-semibold md:text-7xl md:font-bold">Welcome to 23BG</div>
                <div className="w-2/3 md:w-1/3 md:text-center mt-5 md:text-lg font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi laborum hic, optio velit dicta ut cum</div>
                <Button size={"xl"} className="hidden md:block w-fit font-bold mt-5">See Open Roles </Button>
                <Button size={"lg"} className="block md:hidden w-fit font-bold mt-5">See Open Roles </Button>
            </div>

        </div>
    );
}