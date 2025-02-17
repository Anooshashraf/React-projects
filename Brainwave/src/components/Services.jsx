import Section from "./Section";
import Heading from "./Heading";
import { service1 } from "../assets";

const Services = () => {
  return (
    <Section crosses id="How-to-use">
      <div className="container ">
        <Heading title="Generative AI Made For Creators" 
         text="Brainwave Unlocks The Potential For AI Powered Applications"
         className={``}>

        </Heading>

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5
          p-8 border border-n-1-10 rounded-3xl overflow-hodden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <img 
              className="w-full h-full object-cover md:object-right"
              src={service1}
              width={800}
              height={730}
              alt="Smartest AI"
              />
            </div>

          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services;