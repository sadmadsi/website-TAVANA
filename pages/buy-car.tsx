import { PurchaseGuide } from "../components/buy-car/purchase-guide"
import { Section1 } from "../components/buy-car/Section1"
import { Section2 } from "../components/buy-car/section2"
import { Section3 } from "../components/buy-car/Section3"
import { Section5 } from "../components/buy-car/Section5"
import Appbar from "../components/common/appbar/Appbar"
import Footer from "../components/common/appbar/Footer"

export default function BuyCar() {
    return (
        <>
            <Appbar buyCar />
            <Section1 />
            <Section2 />
            <Section3 />
            <PurchaseGuide />
            <Section5 />
            <Footer />
        </>
    )
}