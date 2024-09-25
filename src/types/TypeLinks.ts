import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaBitcoin } from "react-icons/fa";
import { FaSquareXTwitter, FaCcMastercard } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
import { IconType } from "react-icons";

export type IconNetworks = {
    icon: IconType;
    link: string;
}

export const iconsArray: IconNetworks[] = [
    {
        icon: FaFacebook,
        link: ""
    },
    {
        icon: FaInstagram,
        link: ""
    },
    {
        icon: FaYoutube,
        link: ""
    },
    {
        icon: FaLinkedin,
        link: ""
    },
    {
        icon: FaSquareXTwitter,
        link: ""
    },
];

export const paymentArray: IconNetworks[] = [
    {
        icon: SiVisa,
        link: ""
    }, 
    {
        icon: FaCcMastercard,
        link: ""
    },
    {
        icon: FaBitcoin,
        link: ""
    }
];