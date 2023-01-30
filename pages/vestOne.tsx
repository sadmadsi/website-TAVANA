import AppbarV2 from "../components/appbar/AppbarV2";
import Footer from "../components/appbar/Footer";
import Section2 from "../components/vest-one/Section2";
import Section1 from "../components/vest-one/Section1";
import Section3 from "../components/vest-one/Section3";
import Section4 from "../components/vest-one/Section4";
import Section5 from "../components/vest-one/Section5";


export default function VestOne() {
    return (
        <>
            <AppbarV2 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </>
    )
}