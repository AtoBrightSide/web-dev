'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const footerLinks = [
    {
        heading: "Product",
        list: ["Login", "University", "Integrations", "Pricing", "Changelog"]
    },
    {
        heading: "Blog",
        list: ["AI for Sales Prospecting", "Why good CRM data matters", "Google Maps leads generation in 5 easy steps", "Outbound Sales Automation", "AI Lead Generation"]
    },
    {
        heading: "Tools",
        list: ["Email Finder", "Headcount Finder", "Credits Calculator", "Chrome Extension", "Lookup WHOIS Info", "CPM Calculator", "Margin Calculator", "Headcount Directory", "Glossary", "Dossier", "Job Board"]
    },
    {
        heading: "Support",
        list: ["Send us an email", "Join Slack", "FAQ", "Status"]
    },
    {
        heading: "Company",
        list: ["Customer Stories", "Wall of Love", "Careers", "Creators Program", "Integrate with Clay"]
    },
    {
        heading: "Legal",
        list: ["Privacy Polocy", "Terms of Service", "Do not sell my data", "Cookie preferences"]
    }
]

const FooterCard = ({ title, description, buttonTitle }: { title: string, description: string, buttonTitle: string }) => {
    return (
        <div className="w-full md:h-96 text-white px-5 py-10 mb-20 flex flex-col items-center">
            <div className="text-3xl md:text-7xl md:w-2/3 text-center font-semibold">{title}</div>
            <div className="text-sm text-center mt-10 mb-5">{description}</div>
            <Button variant={"secondary"}>{buttonTitle} <ArrowRight></ArrowRight> </Button>
        </div>
    );
}
export const Footer = () => {
    return (
        <footer className="w-full bg-black flex flex-col items-center">
            <FooterCard
                title="Scale your outbound motion in seconds, not months"
                description="Start your 14-day Pro trial today. No credit card required."
                buttonTitle="Try it -- its free!"
            />
            <div className="md:w-full md:px-80 md:flex md:flex-row">
                {footerLinks.flatMap((link, linkIndex) => (
                    <div key={linkIndex} className="w-full flex flex-col items-center md:items-start">
                        <div className="text-white font-bold">{link.heading}</div>
                        {link.list.map((item, itemIndex) => (
                            <div key={`${linkIndex}-${itemIndex}`} className="text-[#e7e8ec99] p-3 md:py-3 md:px-0 font-medium hover:text-white hover:underline hover:cursor-pointer">{item}</div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col items-center md:items-start md:px-80 my-10">
                <div className="flex gap-1">
                    <Image
                        src={'/artificial-intelligence-7443689.svg'}
                        height={50}
                        width={50}
                        alt="23BG Icon"
                        className="w-auto bg-white"
                    ></Image>
                    <div className="text-2xl text-white">23BG</div>
                </div>
                <div className="text-white mt-3">&copy;23 BG {new Date().getFullYear()}</div>
                <div className="text-white text-sm px-5 text-center">Uplevel your data enrichment. Scale personalized outreach</div>
            </div>
        </footer>
    );
}