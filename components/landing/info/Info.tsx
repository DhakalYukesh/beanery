import Image from "next/image";

const Info = () => {
  return (
    <section className="py-8 lg:py-20 flex flex-col gap-8 lg:gap-16 bg-bearLight">
      {/* Info Section */}
      <div className="web-container flex flex-col gap-6">
        <h3 className="text-3xl md:text-4xl lg:text-7xl lg:leading-tight font-[500]">
          We Provide Your Space For Your Work or Mini event With Your Favorite
          coffee.
        </h3>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between text-gray-700">
          <p className="w-full md:w-[40%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            explicabo repellendus culpa vero obcaecati necessitatibus nisi
            veniam cum deleniti adipisci. Aliquam totam odio sit sint quasi quod
            doloribus unde veniam nisi molestias iste repudiandae, enim ab ipsum
            quis dignissimos! Aspernatur perferendis reprehenderit beatae
            ratione? Eius dolor delectus nisi molestiae nulla?
          </p>

          <p className="w-full md:w-[40%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            quaerat debitis provident suscipit asperiores possimus fugit
            repudiandae hic consectetur commodi nemo, odio inventore quam
            aspernatur et reprehenderit excepturi cum deserunt beatae neque
            facere sit aliquam quasi. Perspiciatis molestiae, impedit esse
            incidunt sequi id aspernatur possimus dicta itaque officia
            excepturi? Mollitia, ipsum ipsa, nostrum tempora ducimus suscipit
            nobis corrupti inventore corporis atque laudantium optio dicta quo.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative mt-6 md:mt-24 lg:mt-16">
        <div className="flex justify-between gap-4 md:gap-6 lg:gap-8 px-4 md:px-0 pt-16 md:pt-24 lg:pt-32 overflow-x-auto">
          <div className="relative min-w-[250px] md:min-w-[300px] lg:min-w-[400px]">
            <Image 
              src="/images/hero1.jpg" 
              width={400} 
              height={400} 
              alt="" 
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="relative -mt-16 md:-mt-24 lg:-mt-32 min-w-[250px] md:min-w-[300px] lg:min-w-[400px]">
            <Image 
              src="/images/hero2.jpg" 
              width={400} 
              height={400} 
              alt="" 
              className="w-full h-auto"
            />
          </div>
          <div className="relative min-w-[250px] md:min-w-[300px] lg:min-w-[400px]">
            <Image 
              src="/images/hero1.jpg" 
              width={400} 
              height={400} 
              alt="" 
              className="w-full h-auto"
            />
          </div>
          <div className="relative -mt-16 md:-mt-24 lg:-mt-32 min-w-[250px] md:min-w-[300px] lg:min-w-[400px]">
            <Image 
              src="/images/hero2.jpg" 
              width={400} 
              height={400} 
              alt="" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
