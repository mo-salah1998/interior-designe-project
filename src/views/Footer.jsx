// local imports
import {
    footerLinksColumnOne, footerLinksColumnTwo, newsletter,
} from "../data";

const Footer = () => {
    return <div className="bg-[linear-gradient(133deg,_#566270_0%,_#283444_100%)] ">
        <div className="max-w-[1490px] mx-auto px-10 py-28 ">
            <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-12">
                <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
                    <h2 className="text-3xl font-medium text-white lg:text-5xl text-center xl:text-start"> {newsletter}</h2>
                    <div className="relative w-full xs:w-[380px] xl:w-[320px] mt-12">
                        <input type="text" placeholder="Enter your email"
                               className="rounded-full w-full pl-6 py-4 bg-primary pr-[140px] outline-none hover:outline-none placeholder-white border-white text-white text-base xs:text-lg"/>
                        <div
                            className="absolute top-2/4 px-6 py-2.5 -translate-y-2/4 right-3 bg-[linear-gradient(90deg,_#2AF598_0%,#009EFD_100%)]  rounded-full cursor-pointer text-white">
                            Subscribe
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:items-start gap-12 w-full ">
                    <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
                        {footerLinksColumnOne.map((link, index) => (<div key={index}
                                                                         className=" text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto">
                                <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">{link.title}</h6>
                                <ul className="flex flex-col gap-4">
                                    {link.links.map((item, i) => (
                                        <div className="w-full flex mx-auto justify-center xl:justify-start">
                                            <li key={`list-item-${i}`}
                                                className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start  w-fit">{item}</li>
                                        </div>

                                    ))}
                                </ul>
                            </div>))}
                    </div>
                    <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
                        {footerLinksColumnTwo.map((link, index) => (
                            <div key={index} className=" text-white max-w-screen md:max-w-[340px] flex-1 md:flex-auto">
                                <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">{link.title}</h6>
                                <ul className="flex flex-col gap-4">
                                    {link.links.map((item, i) => (
                                        <div className="w-full flex mx-auto justify-center xl:justify-start">
                                            <li key={`list-item-${i}`}
                                                className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">{item}</li>
                                        </div>

                                    ))}
                                </ul>
                            </div>))

                        }
                    </div>
                </div>



        </div>
          <div className="w-full h-[1px] bg-white my-12 "/>
          <h6 className="text-white font-normal text-base lg:text-lg text-center">© 2022 Daunku - All rights reserved.</h6>

    </div>
</div>
};

export default Footer;
