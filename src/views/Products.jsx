// local imports
import { productsTitle, productsBtnText, products } from "../data";

import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

import FadeIn from "../components/FadeIn";
import {startOptimizedAppearAnimation} from "framer-motion";

const Products = () => {
  return <div id="products" className="mt-40 2xl:mt-64 max-w-[1490px] px-10 mx-auto w-full flex flex-col 2xl:flex-row 2xl:gap-12 gap-20 justify-between mb-40  ">

      <FadeIn direction="right" delay={0.2}>
        <div className="flex flex-col">
          <h1 className="text-center 2xl:text-start text-fontBlack text-5xl lg:text-6xl font-medium mb-6 ">{productsTitle}</h1>
          <button className="flex flex-row items-center gap-2 border-transparent font-bold text-fontBlack py-2 px-4 rounded-lg w-fit border hover:border-black outline-none focus:outline-none ease-linear transition-all duration-350 mx-auto 2xl:mx-0 mb-10 2xl:mb-0">
            <h5 className="text-lg lg:text-xl text-[#4F4F4F] font-medium"> {productsBtnText}</h5>
            <img className="" src={arrowIcon} alt="icon"/>
          </button>
        </div>
      </FadeIn>
      <div className="w-full flex flex-col md:flex-row gap-40 md:gap-6 ">
          {
            products.map((product,index)=>(
                <FadeIn key={index} direction="left" delay={(index+1)*0.2} fullWidth>
                    <div className="h-[510px] max-w-[500px] relative flex-1 bg-[#C1D0E4] rounded-[50px] shadow-md shadow-[#DDDADA25]" >
                        <img src={product.img} alt="" className="absolute max-w-sm -top-[120px] left-1/2 -translate-x-1/2 " />
                        <div className="absolute bottom-0 w-full bg-white h-64 rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
                            <div>
                                <h2 className="mb-2 text-3xl lg:text-[32px] font-medium text-fontBlack">{product.title}</h2>
                                <img src={starsIcon} alt="" />
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-fontBlack text-2xl font-medium">{product.price}</h3>
                                <img src={plusIcon} alt="" className="cursor-pointer h-10 xs:h-12 ws:w-12 w-10 "/>
                            </div>
                        </div>

                    </div>




                </FadeIn>

            ))
          }

        </div>




  </div>;
};

export default Products;
