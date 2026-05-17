export function Hero() {
  return (
    <div id="hero" className="w-full flex flex-col sm:flex-row justify-center mt-35 md:mt-[175px]  gap-25">
      <img
        className="w-55 md:w-[254px] h-[254px] mx-auto sm:mx-0"
        src="/hero.svg"
        alt="hero"
      />
      <div className="flex flex-col mx-auto sm:mx-0">
        <p className="font-spartan font-semibold text-[20px] md:text-[26px] leading-9 tracking-normal">
          Hi 👋, I'm Narendra
        </p>
        <div className="mt-10">
          <p className="font-spartan font-semibold text-[24px] md:text-[30px] leading-[54px] tracking-normal">
            Freelance Full Stack Designer
          </p>
          <p className="font-hind font-normal text-[14px] text-[#6E6D7A] leading-none tracking-normal">
            "good design makes the world a better place."
          </p>
        </div>
        <div className="flex w-75 h-12 mt-[70px] gap-[30px]">
          <a href="#services" className="bg-[#336699] w-[134px] h-12 gap-[11px] rounded-sm p-[19px] font-spartan font-semibold text-[20px] text-white leading-none tracking-normal flex items-center justify-center">
            My Work
          </a>
          <a href="#consult" className="bg-[#FF6666] w-34 h-12 gap-[11px] rounded-sm p-[19px] font-spartan font-semibold text-[20px] text-black leading-none tracking-normal flex items-center justify-center">
            Let’s Talk
          </a>
        </div>
      </div>
    </div>
  );
}
