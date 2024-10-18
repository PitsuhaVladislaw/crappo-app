"use client"

import { infaBitcoin } from "@/types/TypeInfaSect";
import InfoPage from "@/components/infoPage";
import "../../style/coinPage.css";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";

const BitcoinPage = () => {
    return(
        <div>
            <NavBar />
            <InfoPage 
                nameCri="Bitcoin"
                obj={infaBitcoin}
            />
            <Footer />
        </div>
    )
}

export default BitcoinPage;