export function Consult() {
  return (
    <div id="consult" className="flex flex-col sm:flex-row justify-between w-full px-6 sm:px-15 lg:px-20 xl:px-30 mt-25 gap-10 md:gap-0">
      <div>
        <h2 className="font-spartan font-bold text-[20px] md:text-[28px] text-[#212126] leading-none tracking-normal">
          📅 Schedule a consult.
        </h2>
        <p className="font-hind font-normal text-[14px] lg:text-[20px] text-[#212126] leading-none tracking-normal w-75 sm:w-[350px] mt-[63px]">
          I am always open to discuss your project, improve your online presence
          or help with your UX/UI design challenges.
        </p>
        <p className="font-spartan font-semibold text-[18px] text-[#6E6D7A] leading-none tracking-normal w-[138px] mt-12">
          📧 Email me at
        </p>
        <p className="font-hind font-medium text-[14px] lg:text-[20px] text-[#212126] leading-none tracking-normal w-[350px] mt-4">
          hi@narendra.design
        </p>
        <p className="font-spartan font-semibold text-[18px] text-[#6E6D7A] leading-none tracking-normal w-[65px] mt-12">
          Follow
        </p>
        <div className="flex gap-4 mt-4">
          <img src="/twitter.svg" alt="twitter" />
          <img src="/linkedin.svg" alt="linkedin" />
          <img src="/narendra.svg" alt="narendra" />
        </div>
      </div> 
      <div className="flex flex-col w-full max-w-145">
        <input
          type="text"
          placeholder="Your Name*"
          className="w-full h-14 gap-[10px] rounded-sm border border-gray-300 py-3 px-5 bg-[#F9F9F9]"
        />
        <input
          type="text"
          placeholder="Your Email*"
          className="w-full h-14 gap-[10px] rounded-sm border border-gray-300 py-3 px-5 bg-[#F9F9F9] mt-8"
        />
        <input
          type="text"
          placeholder="Your website (if exists)"
          className="w-full h-14 gap-[10px] rounded-sm border border-gray-300 py-3 px-5 bg-[#F9F9F9] mt-8"
        />
        <textarea
          placeholder="How can I help?*"
          className="w-full h-35 gap-[10px] rounded-sm border border-gray-300 py-3 px-5 bg-[#F9F9F9] mt-8 resize-none"
        />
      </div>
    </div>
  );
}
