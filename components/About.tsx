export default function About() {
  return (
    <div className="w-full px-6 sm:px-15 lg:px-20 xl:px-30 mt-25 gap-21">
      <h2 className="font-spartan font-bold text-[20px] md:text-[28px] leading-none tracking-normal">
        About 👨‍💼 Me
      </h2>
      <div className="flex flex-col sm:flex-row gap-[30px] mt-[22px] lg:mt-[70px]">
        <div className="flex flex-col gap-8 ">
          <p className="font-hind font-normal text-[14px] lg:text-[20px] text-[#212126] leading-none tracking-normal">
            I started as a frontend developer in college, and later I co-founded
            Aroliant Internet Private Limited with a friend. As a director and a
            developer, I learned a lot about managing a company, team, and
            projects.
          </p>
          <p className="font-hind font-normal text-[14px] lg:text-[20px] text-[#212126] leading-none tracking-normal">
            And in two years, I found my passion for design. In 2020 for
            personal reasons, I became a freelancer. Now, I’m selling digital
            goods on the web and working on freelance projects. I love helping
            small businesses to create their online presence and help setting up
            their own online store (e-commerce) to boost their business.
          </p>
          <p className="font-hind font-normal text-[14px] lg:text-[20px] text-[#212126] leading-none tracking-normal">
            My design work ensures that it is developer-friendly as it passes
            through the lens of my experience as a frontend developer. When I
            design, I make sure it is 100% implementable by a frontend developer
            without any difficulties. I call it “Design for Code".
          </p>
          <p className="flex flex-wrap gap-1 items-center text-[14px] lg:text-[20px]">
            <img src="/heart.svg" alt="heart" />I love{" "}
            <span className="text-[#FF6666] ">good design</span>, gaming, art,
            netflix, and gadgets.
          </p>
        </div>
        <div className="flex flex-row sm:flex-col md:gap-15 xl:gap-16 lg:ml-16">
          <div className="flex flex-col w-[250px] lg:w-[349px] gap-4">
            <img
              src="/udacity.svg"
              alt="udacity"
              className="w-25 lg:w-45 h-[30px]"
            />
            <div>
              <p className="font-spartan font-semibold text-[16px] lg:text-[22px] text-black leading-none tracking-normal">
                User Experience Nanodegree
              </p>
              <p className="font-spartan font-semibold text-[12px] lg:text-[18px] text-[#6E6D7A] leading-none tracking-normal">
                The right way to design anything.
              </p>
            </div>
            <p className="font-spartan font-semibold text-[12px] lg:text-[16px] text-[#FF6666] leading-none tracking-normal">
              View Certificate
            </p>
          </div>
          <div className="flex flex-col w-50 lg:w-[309px]  gap-4">
            <img
              src="/upwork.svg"
              alt="upwork"
              className="w-14 lg:w-25 h-[30px]"
            />
            <div>
              <p className="font-spartan font-semibold text-[16px] lg:text-[22px] leading-none tracking-normal">
                Available via Upwork
              </p>
              <p className="font-spartan font-semibold text-[12px] lg:text-[18px] text-[#6E6D7A] leading-none tracking-normal">
                Top rated freelancer on upwork
              </p>
            </div>
            <p className="font-spartan font-semibold text-[12px] lg:text-[16px] text-[#FF6666] leading-none tracking-normal">
              Hire Me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
