import Tagline from "./Tagline";
const Heading = ({className , title , text , tagline}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
        {title && <h2 className="h2">{title}</h2>}
        {text && <h5 className="body-2 mt-4 text-n-4">{text}</h5>}
        {tagline && <Tagline className="mb-4 md:justify-center">{tagline}</Tagline>}
    </div>
   
    
    
  );
};

export default Heading;