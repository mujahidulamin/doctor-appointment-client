import React from "react";
import Banner from "../Banner/Banner";
import HomeCarousel from "../Carousel/HomeCarousel";
import StickyCards from "../StickyCards/StickyCards";
import TabDoc from "../Tab/TabDoc";
import Faq from "../Faq/Faq";
import Use from "../Use/Use";


// import Cards from "../Cards/Cards";

const Home = () => {
  return (
    //This is home
    <div>
      <Banner></Banner>
      {/* <Cards></Cards> */}
      <StickyCards></StickyCards>
      <HomeCarousel></HomeCarousel>
      <Use></Use>
      <TabDoc></TabDoc>
      <Faq></Faq>
    </div>
    
  );
};

export default Home;
