import { ScrollArea } from "@/components/ui/scroll-area"
import { UserCard, UserCardHeader, UserCardProps } from "./cards"

const userInfo: UserCardProps[] = [
    {
        name: "Larry Li",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66e153baa926b473a44d4104_img-jerry.avif",
    },
    {
        name: "Tanner",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66e1530ad9a72009f884d5f8_HS_small%20-%20Tanner%20Leslie.avif",
    },
    {
        name: "Cynthia",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b6fdd859f76c6cde8923_cynthia.avif",
    },
    {
        name: "Kyle",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b7f90d2aabbd2652aa16_kyle.avif",
    },
    {
        name: "Ashley",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b8015e1c0704d9b33b31_Ashley.avif",
    },
    {
        name: "Daniela",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b80928cc27f4bd4793ca_daniela.avif",
    },
    {
        name: "Nicholai",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66850e7f6de462f526c27a64_nicholai.avif",
    },
    {
        name: "Lele Xu",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66e1530ad9a72009f884d5f8_HS_small%20-%20Tanner%20Leslie.avif",
    },
    {
        name: "Osman",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d7abe99c19cccdd1415cc_osman.avif",
    },
    {
        name: "Jessica",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d7a8be6e4122d69075244_jessica.avif",
    },
    {
        name: "Alex",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d7a2202cc830f409297c0_alex.avif",
    },
    {
        name: "Nefaur",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3abd3ffc8881c35d9577_659574e84efc7a2bec21c731_Photo%2520A.webp",
    },
    {
        name: "Roger",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac038a44068c800daee_640b4a84d7d4220015ca7912_image%2520143.webp"
    },
    {
        name: "Mark",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac075e4020d97561bb0_640b4aeb38ea4d0586c78cbb_image%2520143%2520(2).webp"
    },
    {
        name: "Kareem",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac0a69b5d9699e413e3_640b4b049df69867b2831fe1_image%2520143%2520(3).webp"
    },
    {
        name: "Adam",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac1a72323dac8746e15_640b4a63faf93023a683a4bb_adam.webp"
    },
    {
        name: "Eric",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac1a72323dac8746e15_640b4a63faf93023a683a4bb_adam.webp"
    },
];

export const About = () => {
    return (
        <section className="w-full bg-[#dee9ff] flex flex-col items-center pt-14 gap-y-6">
            <div className="text-3xl md:text-7xl font-semibold">Who we are</div>
            <div className="md:w-96 md:text-lg font-medium px-10 md:px-0">We're a kind, creative, and close-knit team. We have quiet egos, growth mindsets, and love tackling interesting problems together.</div>

            <div className="w-[90%] h-max bg-white">
                <UserCardHeader />
                <ScrollArea className="h-72 md:h-full w-full">
                    {userInfo.map((user, index) => {
                        return (
                            <div key={index} className={`${index === 0 ? 'border-t-[1px] border-gray-300' : ''}`}>
                                <UserCard props={user} />
                            </div>
                        )
                    })}
                </ScrollArea>
            </div>


        </section>
    )
}