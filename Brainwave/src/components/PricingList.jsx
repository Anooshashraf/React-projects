import { check } from "../assets";
import { pricing} from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap ">
        {pricing.map((item) => (
            <div className="w-[19rem] max-lg:w-full h-full px-6 
            bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto
            even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2" key={item.id}>
                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 min-h-[4rem] text-n-1/50 mb-3">{item.description}</p>
                <div>
                  {item.price && (
                    <div className="flex gap-2 mb-[1rem] items-center text-[5rem]">
                      <div className="h2">
                        $
                      </div>
                      <div className="text-[5rem]">
                        {item.price}
                      </div>
                    </div>
                  )}
                </div>
                <Button className={`w-auto mb-full `} href={item.price ?  '/pricing' : 'mailto:contact@jsmastery.pro'}
                white={!!item.price}>
                  {item.price ? "Get Started" : "Contact Us"}

                </Button>

                <ul>
                  {item.features.map((feature , index)=>(
                    <li key={index} className="flex item-start border-t border-n-6 mt-5 py-[0.5rem] ">
                        <img src={check} width={24} height={24} alt="check" />
                        <p className="ml-2 body-2 ">
                          {feature}
                        </p>
                    </li>
                  ))}
                </ul>
            </div>
        ))}

    </div>
  );
};

export default PricingList;