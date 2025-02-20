import Heading from "./Heading";
import { roadmap } from "../constants";
import Section from "./Section";
import { grid } from "../assets";
import Tagline from "./Tagline";

const Roadmap = () => {
  return (
    <Section crosses className={`overflow-hidden`} id="Roadmap">
      <div className="container md:pb-10">
        <Heading
        tagline={`Ready to get started`}
        title={`What we're working on...`}
        />
        <div className={`realtive grid gap-5 md:grid-cols-2 md:gap-4 md:pb-[7rem]`}>
          {roadmap.map((item)=>{
            const status = item.status === 'done' ? 'Done' : 'In Progress'
            return( 
            <div key={item.id}>
              <div>
                <div>
                  <img src={grid} className="w-full" width={550} height={550} alt="grid" />
                  <div className="relative z-1">
                    <div className="flex items-center justify-between">
                      <Tagline>{item.date}</Tagline>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          }

          )}
        </div>
      </div>
    </Section>
  )
}

export default Roadmap;