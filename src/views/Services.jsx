// local imports
import { services } from "../data";
import FadeIn from "../components/FadeIn";







const Services = () => {
  return <div id="services" className="mt-40 max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 justify-between w-full  ">

      {
        services.map((service,index)=>(

            <FadeIn key={index} direction="down" delay={0.2} >
              <div className="flex flex-col gap-4 lg:flex-row w-full items-center">
                <img src={service.icon} alt={service.title} className="max-w-[84px] max-h-[84px]" />
                <div className="flex flex-col gap-1.5">
                  <h3 className=" text-center lg:text-start text-2xl lg:text-[1.7rem] text-fontBlack font-medium">{service.title}</h3>
                  <h6 className="text-center lg:text-start lg:text-xl text-base text-fontGray font-medium">{service.subtitle}</h6>
                </div>
              </div>
              </FadeIn>


              ))
      }



  </div>;
};

export default Services;
