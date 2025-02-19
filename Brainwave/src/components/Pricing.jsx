import Section from "./Section";
import { smallSphere} from "../assets";

const Pricing = () => {
  return (
    <Section crosses className={`overflow-hidden`} id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img 
            src={smallSphere} className="relative z-1" width={255} height={255} alt="sphere"
          />
        </div>

      </div>
    </Section>
  )
}

export default Pricing;