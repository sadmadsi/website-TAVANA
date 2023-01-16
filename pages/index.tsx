import { lazy } from 'react';
import dynamic from 'next/dynamic'
import Appbar from "../components/appbar/Appbar";
const Footer = dynamic(() => import("../components/appbar/Footer"));
const Section1 = dynamic(() => import("../components/home/Section1"));
const Section2 = dynamic(() => import("../components/home/Section2"));
const Section3 = dynamic(() => import("../components/home/Section3"));
const Section4 = dynamic(() => import("../components/home/Section4"));
const Section5 = dynamic(() => import("../components/home/Section5"));
const Section6 = dynamic(() => import("../components/home/Section6"));
import TimeLine from "../components/home/TimeLine";

export default function Home() {
  return (
    <>
      <Appbar />
      <TimeLine />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  )
}
