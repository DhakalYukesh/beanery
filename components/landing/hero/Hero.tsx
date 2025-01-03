import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="web-container py-8 lg:py-20 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
      <div className="flex flex-col gap-4 lg:gap-8 flex-1">
        <div className="flex flex-col gap-3 lg:gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-tight font-[500]">
            Choose your <br />
            Coffee & <br />
            Space
          </h2>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            aliquam, nisi minus fugit accusamus quisquam debitis rem dignissimos
            quo aspernatur?
          </p>
        </div>
        <Image
          src="/images/hero2.jpg"
          width={1200}
          height={600}
          alt="hero"
          className="w-full hidden h-[250px] md:h-[350px] md:block lg:h-[435px] object-cover object-center"
        />
      </div>
      <Image
        src="/images/hero1.jpg"
        width={600}
        height={800}
        alt="hero"
        className="w-full lg:w-[550px] h-[400px] md:h-[500px] lg:h-[800px] object-cover object-center"
      />
    </section>
  );
};

export default Hero;
