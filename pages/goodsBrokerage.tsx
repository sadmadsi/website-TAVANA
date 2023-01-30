import Appbar from "../components/appbar/Appbar";
import Footer from "../components/appbar/Footer";
import Section1 from "../components/Goods/Section1";
import Section2 from "../components/Goods/Section2";
import Section3 from "../components/Goods/Section3";
import Section4 from "../components/Goods/Section4";

export default function GoodsBrokerage() {
    return (
        <>
            <Appbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </>
    )
}