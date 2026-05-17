export function Services() {
  return (
    <div id="services" className="w-full flex flex-col px-6 sm:px-15 lg:px-20 xl:px-30 mt-20 md:mt-25 gap-18 md:gap-21">
      <h2 className="font-spartan font-bold text-[24px] md:text-[28px] leading-none tracking-normal">
        What I do
      </h2>
      <div className="flex flex-col sm:flex-row gap-[30px]">
        <div className="flex flex-col gap-8">
          <img
            src="/mobile_web_design.svg"
            alt="mobile_web_design"
            className="w-20 lg:w-28 h-[55px]"
          />
          <h4 className="font-spartan font-medium text-[16px] lg:text-[24px] leading-none tracking-normal">
            Mobile and Web Design
          </h4>
          <p className="font-hind font-light text-[14px] lg:text-[20px] text-[#6E6D7A] leading-none tracking-normal">
            Need a website or mobile app? I can create beautiful websites or
            mobile apps based on your content, or redesign your old website to
            improve user engagement or achieve your business goals.
          </p>
          <p className="font-spartan font-semibold text-[16px] lg:text-[22px] text-[#212126] leading-none tracking-normal">
            Get an estimate
          </p> 
        </div>
        <div className="flex flex-col gap-8">
          <img
            src="/graphic_design.svg"
            alt="graphic_design"
            className="w-20 lg:w-28 h-[55px]"
          />
          <h4 className="font-spartan font-semibold text-[16px] lg:text-[24px] leading-none tracking-normal">
            Graphic Design
          </h4>
          <p className="font-hind font-light text-[14px] lg:text-[20px] text-[#6E6D7A] leading-none tracking-normal">
            Need art for your project? I can create beautiful art, designs based
            on your project requirements such as business cards, digital
            banners, icons, logos, hand-drawn characters, abstracts, textures,
            etc.
          </p>
          <p className="font-spartan font-semibold text-[16px] lg:text-[22px] text-[#212126] leading-none tracking-normal">
            Get an estimate
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <img
            src="/frontend_development.svg"
            alt="frontend_development"
            className="w-20 lg:w-28 h-[55px]"
          />
          <h4 className="font-spartan font-medium lg:font-semibold text-[16px] lg:text-[24px] leading-none tracking-normal">
            Frontend Development
          </h4>
          <p className="font-hind font-light text-[14px] lg:text-[20px] text-[#6E6D7A] leading-none tracking-normal">
            Already have the design? I can create static websites such as
            landing pages, company sites, and custom websites with minimal
            javascript. Will deliver a well-documented code.
          </p>
          <p className="font-spartan font-semibold text-[16px] lg:text-[22px] text-[#212126] leading-none tracking-normal">
            Get an estimate
          </p>
        </div>
      </div>
    </div>
  );
}
