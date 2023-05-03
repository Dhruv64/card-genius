import type { NextPage } from "next";
import Footer from "./landingpage/footer";

import Feature from "./landingpage/feature";
import Hero from "./landingpage/hero";
import Navbar from "./landingpage/navbar";
import Detail1 from "./landingpage/detail1";
import Detail2 from "./landingpage/detail2";
import Detail4 from "./landingpage/detail4";
import Detail3 from "./landingpage/detail3";
<style>@import url(`https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap`);</style>


const LandingPage: NextPage = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Navbar />
      <Hero />
      <Feature />
      <Detail1/>
      <Detail2/>
      <Detail3/>
      <Detail4/>      
      <Footer />
    </div>
  );
};

export default LandingPage;