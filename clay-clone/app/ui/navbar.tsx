'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Cross1Icon, HamburgerMenuIcon, IconJarLogoIcon } from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const components: { title: string; href: string; description: string }[] = [
    { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
    { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
    { title: "Progress", href: "/docs/primitives/progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar." },
    { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually or semantically separates content." },
    { title: "Tabs", href: "/docs/primitives/tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time." },
    { title: "Tooltip", href: "/docs/primitives/tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." },
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
        <nav className="h-20 w-full flex items-center justify-between">
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
            <Accordion type="single" collapsible className={`${isHamburgerActive ? 'block' : 'hidden'} absolute top-20 z-10 bg-white w-full md:hidden transition-all duration-300 ease-in-out transform ${isHamburgerActive ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'}`}>
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
            <div className="hidden md:flex gap-x-2 px-2">
                <Button variant={"link"} size={"xl"}>Login</Button>
                <Button size={"xl"}>Sign Up </Button>
            </div>
        </nav>
    )
}
