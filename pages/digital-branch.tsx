import Appbar from "../components/common/appbar/Appbar";
import Footer from "../components/common/appbar/Footer";
import Section1 from "../components/digital-branch/section1";
import Section2 from "../components/digital-branch/section2";
import Section3 from "../components/digital-branch/section3";
import Section4 from "../components/digital-branch/section4";

export default function DigitalBranch() {
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