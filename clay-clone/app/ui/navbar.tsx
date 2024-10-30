'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Cross1Icon, CrumpledPaperIcon, FrameIcon, GlobeIcon, HamburgerMenuIcon, HandIcon, IconJarLogoIcon, IdCardIcon, LightningBoltIcon, MixIcon, PaperPlaneIcon, RocketIcon, SketchLogoIcon, TransformIcon } from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { forwardRef, useState } from "react";
import { NavbarCard, NavbarCardProps } from "./cards";

const navItems: NavbarCardProps[] = [
    {
        icon: FrameIcon,
        title: "CRM Enrichment",
        description: "Connect to and auto update your CRM based on needs",
    },
    {
        icon: TransformIcon,
        title: "TAM Sourcing",
        description: "Build targeted lead lists using 10+ sources and AI",
    },
    {
        icon: RocketIcon,
        title: "Automated Inbound",
        description: "Connect to your webforms and auto-enrich and score leads",
    },
    {
        icon: IdCardIcon,
        title: "Automated Outbound",
        description: "Build, enrich, score and message leads in score",
    },
    {
        icon: PaperPlaneIcon,
        title: "Intent Data",
        description: "Build, enrich, score and message leads in score",
    },
]

const navFavItems: NavbarCardProps[] = [
    {
        icon: HandIcon,
        title: "Integrations",
        description: "Access 50+ databases to get the most out of ",
    },
    {
        icon: LightningBoltIcon,
        title: "Multi-provider",
        description: "Search multiple providers",
    },
    {
        icon: GlobeIcon,
        title: "AI Research Agent",
        description: "Ask our agents to search websites",
    },
    {
        icon: CrumpledPaperIcon,
        title: "Personalized copywriting",
        description: "Use our AI email builder",
    },
]

export const Navigation = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const handleHamburgerClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsHamburgerActive(!isHamburgerActive);
            setIsAnimating(false);
        }, 300); // Duration of the animation in milliseconds
    }

    return (
        <nav className="h-20 w-full bg-white flex items-center justify-between md:sticky md:top-0 md:z-20">
            <div className="flex p-5 items-center gap-2">
                <Image
                    src={'/artificial-intelligence-7443689.svg'}
                    height={50}
                    width={50}
                    alt="23BG Icon"
                    className="w-auto"
                />
                <div className="text-black text-2xl font-extrabold">23BG</div>
            </div>

            <div className="flex gap-x-2 items-center mx-4 md:hidden">
                {isAnimating ? (
                    <div className="animate-spin">
                        {isHamburgerActive ? <Cross1Icon className="w-5 h-5" /> : <HamburgerMenuIcon className="w-5 h-5" />}
                    </div>
                ) : (
                    isHamburgerActive ? (
                        <Cross1Icon className="w-5 h-5" onClick={handleHamburgerClick} />
                    ) : (
                        <HamburgerMenuIcon className="w-5 h-5" onClick={handleHamburgerClick} />
                    )
                )}
                <Button>Sign Up <ArrowRight /></Button>
            </div>

            <Accordion type="single" collapsible className={`${isHamburgerActive ? 'block' : 'hidden'} absolute top-20 z-10 bg-white w-full md:hidden transition-all duration-300 ease-in-out transform animate__animated animate__slideInDown`}>
                <AccordionItem value="item-1" className="px-2">
                    <AccordionTrigger>Product</AccordionTrigger>
                    <AccordionContent>
                        <div className="w-full font-mono uppercase text-gray-500 bg-gray-100 py-2">Recurring Workflows</div>
                        <ul>
                            <li className="p-3 border-b-[0.5px] border-gray-200 flex gap-x-2">
                                <IconJarLogoIcon className="border-r-[0.5px] border-gray-200"></IconJarLogoIcon>
                                <div className="">CRM Enrichment</div>
                            </li>
                            <li className="p-3 border-b-[0.5px] border-gray-200 flex gap-x-2">
                                <IconJarLogoIcon className="border-r-[0.5px] border-gray-200"></IconJarLogoIcon>
                                <div className="">TAM sourcing</div>
                            </li>
                            <li className="p-3 border-b-[0.5px] border-gray-200 flex gap-x-2">
                                <IconJarLogoIcon className="border-r-[0.5px] border-gray-200"></IconJarLogoIcon>
                                <div className="">Automated inbound</div>
                            </li>
                            <li className="p-3 border-b-[0.5px] border-gray-200 flex gap-x-2">
                                <IconJarLogoIcon className="border-r-[0.5px] border-gray-200"></IconJarLogoIcon>
                                <div className="">Automated outbound</div>
                            </li>
                            <li className="p-3 border-b-[0.5px] border-gray-200 flex gap-x-2">
                                <IconJarLogoIcon className="border-r-[0.5px] border-gray-200"></IconJarLogoIcon>
                                <div className="">Intent data</div>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="px-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other components' aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="px-2">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="px-2">
                    <Button className="m-2">Start Building -- for free</Button>
                </AccordionItem>
            </Accordion>

            <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="md:w-[800px] lg:w-[900px] h-max flex">
                                <div className="w-[35%] h-full flex flex-col">
                                    <div className="w-full h-8 font-mono uppercase bg-slate-100 text-start p-2 border-r border-gray-300">Recurring Workflows</div>
                                    {navItems.map((item, index) => (
                                        <NavbarCard key={index} props={item} />
                                    ))}
                                </div>
                                <div className="w-[35%] h-full flex flex-col">
                                    <div className="w-full h-8 font-mono uppercase bg-slate-100 text-start p-2 border-r border-gray-300">Features</div>
                                    {navFavItems.map((item, index) => (
                                        <NavbarCard key={index} props={item} />
                                    ))}
                                </div>
                                <div className="w-[30%] h-full flex flex-col bg-slate-100">
                                    <div className="w-full h-8 font-mono uppercase text-start p-2">Quick Links</div>
                                    <div className="max-h-max flex flex-col px-3">
                                        <div className="p-5 hover:cursor-pointer">Templates</div>
                                        <div className="p-5 hover:cursor-pointer">Chrome Extension</div>
                                        <div className="p-5 hover:cursor-pointer">Change Log</div>
                                        <div className="p-5 hover:cursor-pointer">Security</div>
                                    </div>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="">

                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:flex gap-x-2 px-2">
                <Button variant={"link"} size={"xl"}>Login</Button>
                <Button size={"xl"}>Sign Up </Button>
            </div>
        </nav>
    )
}