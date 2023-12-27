import React from "react";
import { HeroContent } from "../sub";

const Hero = () => {
  return (
    <div
      className="section relative flex flex-col overflow-hidden w-full"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-360px] h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
