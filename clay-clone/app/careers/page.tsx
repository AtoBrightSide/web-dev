import { LightningBoltIcon, MagicWandIcon, PersonIcon } from "@radix-ui/react-icons";
import { NormalCardWrapper, NormalCardWrapperProps, UserCard } from "../ui/cards"
import { Hero } from "../ui/hero"
import { Navigation } from "../ui/navbar"
import { About } from "../ui/who-we-are";

const normalCardInfo: NormalCardWrapperProps = {
  normalCardInfo: [
    {
      icon: PersonIcon,
      title: "Find your target audience",
      description: "Every campaign starts with a target list. Teams can pull existing leads or customers from their CRM—or use 10+ sources in Clay to build their own prospecting lists of companies, people, or jobs."
    },
    {
      icon: LightningBoltIcon,
      title: "Nail your data enrichment",
      description: "Clay consolidates 75+ major enrichment tools into one credit-based marketplace. Teams can query multiple providers at once to find the best coverage on any data point—from contact info to firmographics. Then, they can use AI to clean data and scrape the web for new research (see if a company is B2B, SOC-II compliant, has positive Google reviews, etc)."
    },
    {
      icon: MagicWandIcon,
      title: "Automate personalized outreach at scale",
      description: "AI can help automate personalized outreach at scale for any campaign use case. Better targeting, personalization, and message quality means more meetings booked!"
    }
  ]
}

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Navigation />

      <Hero />

      <NormalCardWrapper props={normalCardInfo} />

      <About />
    </div>
  )
}

export default Page