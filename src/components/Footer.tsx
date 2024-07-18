import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaBitcoin } from "react-icons/fa";
import { FaSquareXTwitter, FaCcMastercard } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
import LogoImg from '../assets/img/Logo.png'
import Logo from "./logo";

export default function Footer() {
    const iconsArray = [FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaSquareXTwitter];
    const paymentArray = [SiVisa, FaCcMastercard, FaBitcoin];
    
    return (
        <footer className="flex flex-col gap-32 mt-20">
            <article className="flex items-start justify-between">
                <Logo logo={LogoImg} />
                <div className="flex gap-24">
                    {[
                        {
                            title: "Quick Link",
                            array: ["Home", "Products", "About ", "Features", "Contact"]
                        },
                        {
                            title: "Resources",
                            array: ["Download Whitepapper", "Smart Token", "Blockchain Explorer", "Crypto API", "Interest"]
                        }].map((obj, index) => (
                        <article key={index} className="flex flex-col gap-9 items-start">
                            <h5 className="font-rubik text-[20px] font-medium leading-[30px] text-left text-white">
                                {obj.title}
                            </h5>
                            <div key={index} className="flex flex-col items-start gap-1">
                                {obj.array.map((text, key) =>(
                                    <h6 key={key} className="font-rubik text-base font-normal leading-[38px] text-left text-[#F2F2F2] cursor-pointer">
                                        {text}
                                    </h6>
                                ))}
                            </div>
                        </article>
                    ))}
                    <div className="flex flex-col gap-10 w-auto h-auto items-start">
                        <h2 className="w-[355px] text-4xl font-medium leading-[48px] text-left text-white">
                            We accept following payment systems
                        </h2>
                        <div className="flex gap items-center justify-between gap-6">
                            {paymentArray.map((Pay, index) => (
                                <div
                                    className="flex justify-center items-center w-24 h-16 rounded-lg bg-[rgba(224, 224, 224, 1)]"
                                    key={index}
                                    >
                                    <Pay 
                                        key={index}
                                        className="w-12 h-12 text-white z-10"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            <article className="flex justify-between items-center">
                <h5 className="text-base font-normal leading-7 tracking-tight text-left text-white">
                    ©2021 CRAPPO. All rights reserved
                </h5>
                <div className="flex gap-8 items-center justify-between w-auto h-auto">
                    {iconsArray.map((Icon, index) => (
                        <Icon
                            key={index}
                            className="w-6 h-6 text-white relative cursor-pointer"
                        />
                    ))}
                </div>
            </article>
        </footer>
    );
}