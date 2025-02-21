import Section from "./Section";
import { socials } from "../constants";
const Footer = () => {
  return (
    <Section crosses className={`!px-0 !py-10 `}>
      <div className="container flex sm:justify-between justify-center
      items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()} All Rights reserved.

        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((items)=>(
            
            <a href={items.url} key={items.id} >
              <img src={items.iconUrl} width={16} height={16} alt={items.title} />
            </a>
            
          ))}
        </ul>
      </div>
    </Section>
  )
};

export default Footer;