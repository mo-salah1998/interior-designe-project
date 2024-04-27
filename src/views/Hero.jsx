// React
import { useState } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


const Hero = () => {
    let [showMobileMenu,setShowMobileMenu] = useState(false)
  return (<div className="h-screen relative flex flex-col items-center "
              style={{
                  background: `url(${heroImage})`,
                  backgroundPosition : "bottom",
                  backgroundRepeat : "no-repeat",
                  backgroundSize : "cover",
              }}
  >
      <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-10 mx-auto px-10">
        <img src={logo} alt="logo" className="" />

        <ul className="hidden md:flex md:flex-row items-center gap-10 lg:gap-[6em] ">
            <NavLink to="services">Services</NavLink>
            <NavLink to="products">Product</NavLink>
            <NavLink to="reference">Reference</NavLink>
            <NavLink to="care">Care</NavLink>
        </ul>
          <img src={cartIcon} className="hidden md:block cursor-pointer" alt="shoping card"/>
          <HiMenuAlt3 size={30}
                      className="block md:hidden cursor-pointer text-white"
                      onClick={()=> setShowMobileMenu((prev)=>!prev)}
          />

          <div className={`block md:hidden fixed w-full ${!showMobileMenu ?"-top-[410px]" : "top-0"} left-0 bg-[#dde0e5] h-[410px] transition-all duration-700 shadow-xl z-10 py-8 px-12 rounded-b-xl`} >

          <AiOutlineClose size={25} className="absolute top-5 right-5 cursor-pointer" onClick={()=> setShowMobileMenu((prev)=>!prev)} />
              <ul className="flex flex-col gap-8 pt-10">
                  <NavLink to="services" mobileMenu>Services</NavLink>
                  <NavLink to="products" mobileMenu>Product</NavLink>
                  <NavLink to="reference" mobileMenu>Reference</NavLink>
                  <NavLink to="care" mobileMenu>Care</NavLink>
              </ul>
              <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="shoping card"/>
          </div>
      </div>
      <FadeIn direction="down" padding delay={0.2} fullWidth>
            <h1 className="mt-20 text-5xl md:text-[4em] text-center text-white leading-tight max-w-[28ch]">{heroTitle}</h1>

      </FadeIn>
      <FadeIn direction="down" padding delay={0.4} fullWidth>
          <h1 className="mt-6 text-center text-white text-lg xs:text-xl max-w-[500px] ">{heroSubtitle}</h1>
      </FadeIn>
      <FadeIn direction="up" padding delay={0.2} fullWidth >
        <div className="relative w-full xs:w-[460px] mt-8  ">
            <input type="text" placeholder="Search" className=" rounded-full w-full pl-6 pr-[60px] py-4 outline-none text-white text-base xs:text-lg
                placeholder-white bg-primary
            "/>
            <img src={searchIcon} className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" alt=""/>
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]"/>

  </div>);
};

export default Hero;
