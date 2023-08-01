import dynamic from 'next/dynamic'
const Appbar = dynamic(() => import("../components/common/appbar/Appbar"));
const Footer = dynamic(() => import("../components/common/appbar/Footer"));
const Section2 = dynamic(() => import("../components/home/Section2"));
const Section3 = dynamic(() => import("../components/home/Section3"));
const Section4 = dynamic(() => import("../components/home/Section4"));
const Section5 = dynamic(() => import("../components/home/Section5"));
const Section6 = dynamic(() => import("../components/home/Section6"));
const TimeLine = dynamic(() => import("../components/home/TimeLine"));

export default function Home() {
  return (
    <>
      <Appbar />
      <TimeLine />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  )
}
