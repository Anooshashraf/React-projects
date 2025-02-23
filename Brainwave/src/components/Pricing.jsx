import Section from "./Section";
import { smallSphere , stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { RightLine , LeftLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section crosses className={`overflow-hidden`} id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img 
            src={smallSphere} className="relative" width={255} height={255} alt="sphere"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[60rem] -translate-y-1/2 pointer-events-none">
            <img
              src={stars} className="w-full h-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading 
        className={`items-center`}
        tagline="Get Started With Brainwave"
        title="Pay Once, Use Forever" 
       />

        <div className="relative">
          <PricingList />
          <RightLine/>
          <LeftLine/>
        </div>

        <div className="flex items-center justify-center mt-10">
          <a className="tracking-wider uppercase border-b" href="/pricing">Click to get more details</a>
        </div>

      </div>
    </Section>
  )
}

export default Pricing;