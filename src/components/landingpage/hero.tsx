import type { NextPage } from "next";
import Slider from "./slider";
import Carousel from "./carousel";



const Hero: NextPage = () => {
  return (
    <div>
      
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 lg:px-40 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="title-font sm:text-4xl  text-4xl mb-4 font-bold">The Best Digital Business Card</p>
            <p className="mb-8 leading-relaxed">Create and personalize attractive digital business cards that you can send to anyone, locally or internationally.</p>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <Slider/> */}
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
            <Carousel/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
