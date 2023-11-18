import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { statistics, skates } from "../constants";
import { bigSkate1 } from "../assets/images";
import SkateCard from "../components/SkateCard";

const Hero = () => {
  const [bigSkateImg, setBigSkateImg] = useState(bigSkate1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-red-700">
          Explore our line of skates
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[45px] max-sm:leading-[60px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Performance
          </span>
          <br />
          <span className="text-red-700 inline-block mt-3">CCM</span> Skates
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover our line of quality, stylish, and comfortable skates built to
          last
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigSkateImg}
          alt="skate-collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {skates.map((skate, index) => (
            <div key={index}>
              {
                <SkateCard
                  index={index}
                  imgURL={skate}
                  changeBigSkateImage={(skate) => setBigSkateImg(skate)}
                  bigSkateImg={bigSkateImg}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
