import AppbarV2 from "../components/appbar/AppbarV2";
import Footer from "../components/appbar/Footer";
import Section1 from "../components/energyBrokerage/Section1";
import Section2 from "../components/energyBrokerage/Section2";
import Section3 from "../components/energyBrokerage/Section3";
import Section4 from "../components/Goods/Section4";

export default function energyBrokerage() {
    return (
        <>
            <AppbarV2 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </>
    )
}