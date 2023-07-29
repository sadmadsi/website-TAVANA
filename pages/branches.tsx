import Appbar from "../components/common/appbar/Appbar";
import Footer from "../components/common/appbar/Footer";
import Section1 from "../components/branches/Section1";

export default function Branches() {
    return (
        <div className="bg-black min-h-screen">
            <Appbar />
            <Section1 />
            <Footer />
        </div>
    )
}