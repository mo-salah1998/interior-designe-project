// local imports
import { referenceTitle, referenceSubtitle } from "../data";

import imageOne from "../assets/image-one.svg";
import imageTwo from "../assets/image-two.svg";
import imageThree from "../assets/image-three.svg";

import FadeIn from "../components/FadeIn";

const Reference = () => {
  return <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
    <FadeIn delay={0.2} direction="down">
      <h1 className="font-medium text-5xl lg:text-6xl text-fontBlack text-center mb-6">{referenceTitle}</h1>
    </FadeIn>
    <FadeIn delay={0.4} direction="down">
      <h5 className="font-normal text-[#4F4F4F] text-lg xs:text-xl text-center mb-12">{referenceSubtitle}</h5>
    </FadeIn>

    <div className="flex flex-col md:flex-row md:justify-center gap-8">
      <FadeIn delay={0.2} direction="right">

        <div className="flex flex-col gap-8">
            <img src={imageOne} alt=""  />
            <img src={imageTwo} alt=""  />
        </div>
      </FadeIn>
      <FadeIn delay={0.4} direction="right">
          <img src={imageThree} alt=""  />
      </FadeIn>

    </div>


  </div>;
};

export default Reference;
