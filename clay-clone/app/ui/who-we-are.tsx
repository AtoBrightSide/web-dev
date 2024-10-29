import { ScrollArea } from "@/components/ui/scroll-area"
import { UserCard, UserCardHeader, UserCardProps } from "./cards"

const userInfo: UserCardProps[] = [
    {
        name: "Larry Li",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66e153baa926b473a44d4104_img-jerry.avif",
        description: "Coffee Addict"
    },
    {
        name: "Tanner",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66e1530ad9a72009f884d5f8_HS_small%20-%20Tanner%20Leslie.avif",
        description: "Late Sleeper"
    },
    {
        name: "Cynthia",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b6fdd859f76c6cde8923_cynthia.avif",
        description: "Snack Hoarder"
    },
    {
        name: "Kyle",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b7f90d2aabbd2652aa16_kyle.avif",
        description: "Gym Rat"
    },
    {
        name: "Ashley",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b8015e1c0704d9b33b31_Ashley.avif",
        description: "Book Worm"
    },
    {
        name: "Daniela",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b80928cc27f4bd4793ca_daniela.avif",
        description: "Cat Lover"
    },
    {
        name: "Nicholai",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66850e7f6de462f526c27a64_nicholai.avif",
        description: "Tech Geek"
    },
    {
        name: "Lele Xu",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66e1530ad9a72009f884d5f8_HS_small%20-%20Tanner%20Leslie.avif",
        description: "Travel Buff"
    },
    {
        name: "Osman",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d7abe99c19cccdd1415cc_osman.avif",
        description: "Music Junkie"
    },
    {
        name: "Jessica",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d7a8be6e4122d69075244_jessica.avif",
        description: "Fashion Guru"
    },
    {
        name: "Alex",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667d7a2202cc830f409297c0_alex.avif",
        description: "Movie Buff"
    },
    {
        name: "Nefaur",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3abd3ffc8881c35d9577_659574e84efc7a2bec21c731_Photo%2520A.webp",
        description: "Gamer Pro"
    },
    {
        name: "Roger",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac038a44068c800daee_640b4a84d7d4220015ca7912_image%2520143.webp",
        description: "Nature Lover"
    },
    {
        name: "Mark",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac075e4020d97561bb0_640b4aeb38ea4d0586c78cbb_image%2520143%2520(2).webp",
        description: "Foodie Fan"
    },
    {
        name: "Kareem",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac0a69b5d9699e413e3_640b4b049df69867b2831fe1_image%2520143%2520(3).webp",
        description: "Sports Buff"
    },
    {
        name: "Adam",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac1a72323dac8746e15_640b4a63faf93023a683a4bb_adam.webp",
        description: "Puzzle Master"
    },
    {
        name: "Eric",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/661d3ac1a72323dac8746e15_640b4a63faf93023a683a4bb_adam.webp",
        description: "Coffee Addict"
    },
    {
        name: "Larry Li",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66e153baa926b473a44d4104_img-jerry.avif",
        description: "Coffee Addict"
    },
    {
        name: "Tanner",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66e1530ad9a72009f884d5f8_HS_small%20-%20Tanner%20Leslie.avif",
        description: "Late Sleeper"
    },
    {
        name: "Cynthia",
        imgSrc: "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66b4b6fdd859f76c6cde8923_cynthia.avif",
        description: "Snack Hoarder"
    },
];


export const About = () => {
    const handleClick = () => {

    }
    return (
        <section className="w-full h-[800px] md:h-[1200px] bg-[#dee9ff] flex flex-col items-center justify-between pt-14 ">
            <div className="h-[10%] flex flex-col items-center gap-y-6">
                <div className="text-3xl md:text-7xl font-semibold">Who we are</div>
                <div className="md:w-96 md:text-lg font-medium px-10 md:px-0">We're a kind, creative, and close-knit team. We have quiet egos, growth mindsets, and love tackling interesting problems together.</div>
            </div>

            <div className="w-[90%] md:w-2/3 h-[80%] bg-white z-10">
                <UserCardHeader />
                {/* this is for mobile version */}
                <ScrollArea className="md:hidden h-4/5 md:h-full w-full">
                    {userInfo.map((user, index) => {
                        return (
                            <div key={index} className={`${index === 0 ? 'border-t-[1px] border-gray-300' : ''}`}>
                                <UserCard props={user} />
                            </div>
                        )
                    })}
                </ScrollArea>
                {/* this is for desktop*/}
                <div className="hidden md:grid md:grid-cols-2 h-4/5 w-full">
                    {userInfo.map((user, index) => {
                        return (
                            <div key={index} className={`w-full ${index <= 1 ? 'border-t-[1px] border-gray-300' : ''}`} onClick={handleClick}>
                                <UserCard props={user} />
                            </div>
                        )
                    })}
                </div>
            </div>


        </section>
    )
}