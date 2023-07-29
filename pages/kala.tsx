import dynamic from "next/dynamic";
import Appbar from "../components/common/appbar/Appbar";
import Footer from "../components/common/appbar/Footer";
import Section1 from "../components/Goods/Section1";
import Section2 from "../components/Goods/Section2";
import Section3 from "../components/Goods/Section3";
import Section4 from "../components/Goods/Section4";
const Section5 = dynamic(() => import("../components/home/Section4"));

export default function GoodsBrokerage() {
    return (
        <>
            <Appbar />
            <Section1 />
            <Section2 />
            <Section5 />
            <Section3 />
            <Section4 />
            <Footer />
        </>
    )
}