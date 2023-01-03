import { lazy } from 'react';
import Appbar from "../components/appbar/Appbar";
const Footer = lazy(() => import("../components/appbar/Footer"));
const Section1 = lazy(() => import("../components/home/Section1"));
const Section2 = lazy(() => import("../components/home/Section2"));
const Section3 = lazy(() => import("../components/home/Section3"));
const Section4 = lazy(() => import("../components/home/Section4"));
const Section5 = lazy(() => import("../components/home/Section5"));
const Section6 = lazy(() => import("../components/home/Section6"));
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
