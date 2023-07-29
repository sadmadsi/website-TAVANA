import Section1 from "../components/about/Section1";
import Section2 from "../components/about/Section2";
import Section3 from "../components/about/Section3";
import Section4 from "../components/about/Section4";
import Section5 from "../components/about/Section5";
import Appbar from "../components/common/appbar/Appbar";
import Footer from "../components/common/appbar/Footer";

export default function about() {
    return (
        <>
            <Appbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </>
    )
}