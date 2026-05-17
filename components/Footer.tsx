export function Footer() {
  return (
    <div className="bg-[#F9F9F9] w-full flex justify-between items-center rounded-sm sm:py-8 lg:py-10 xl:py-12 px-6 sm:px-15 lg:px-20 xl:px-30 mt-25">
      <div className="flex items-center gap-8">
        <img
          src="/navbar.svg"
          alt="navbar_icon"
          className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px]"
        />
        <div>
          <p className="font-hind font-normal text-[12px] md:text-[14px] lg:text-[20px] text-[#6E6D7A] leading-none tracking-normal">
            Narendra Ram
          </p>
          <p className="font-hind font-normal text-[12px] md:text-[14px] lg:text-[20px] text-[#6E6D7A] leading-none tracking-normal">
            Freelance Full Stack Designer
          </p>
        </div>
      </div>
      <div>
        <p className="font-hind font-normal text-[12px] md:text-[14px] lg:text-[20px] text-[#6E6D7A] text-right leading-none tracking-normal">
          Designed using Figma
          <br />
          Hosted on{" "}
          <span className="font-hind font-normal text-[12px] md:text-[14px] lg:text-[20px] text-[#6E6D7A] underline">
            GitHub Pages
          </span>
        </p>
      </div>
    </div>
  );
}
