import Heading from "./Heading";
import { roadmap } from "../constants";
import Section from "./Section";
import { check2, grid, loading1 } from "../assets";
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
                       <div>
                        <img src={item.status==='done' ? {check2} : {loading1}}
                        className={`mr-2.5`}
                        width={16}
                        height={16} 
                        alt={status} />
                        <div className="tagline">
                          {status}
                        </div>
                       </div>
                       <div className="mb-2">
                          <img src={item.imageUrl}
                          className="w-full"
                          width={630}
                          height={460}
                          alt={item.title}
                          />
                       </div>
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