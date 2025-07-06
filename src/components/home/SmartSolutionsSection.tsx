import AutomatedPic from "@/assets/images/card/automated-card.png";
import SnplPic from "@/assets/images/card/snpl-card.png";
import TechnologyPic from "@/assets/images/card/technology-card.png";
import Card from "@/components/ui/card/Card";
import FeaturesCardChild from "@/components/ui/card/FeaturesCardChild";
import SectionBackgroundImage from "@/assets/images/shift-gear-section-bg.png";
import SectionBackgroundMobile from "@/assets/images/shift-gear-section-bg-mobile.png";

export default function SmartSolutionsSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center py-20">
        <h3 className="text-gradient-primary py-5 text-6xl lg:text-8xl">
          SMART SOLUTIONS
        </h3>
        <h4 className="text-gradient-primary text-center text-3xl lg:text-5xl">
          NO ROAD IS TOO TOUGH WITH THE RIGHT FINANCIAL HORSEPOWER.
        </h4>
      </div>
      <div className="relative flex w-screen max-w-screen-xl flex-col items-center">
        <div className="flex w-full max-w-2/3 flex-col justify-center gap-20 px-3 py-10 md:max-w-full md:flex-row md:px-7 lg:py-32">
          <Card className="relative h-[350px] w-[250px] self-start">
            <FeaturesCardChild
              title="FULLY AUTOMATED SETTLEMENT TOOL"
              icon={AutomatedPic}
              description="Gear Monkey's FAST automates the entire motor insurance claim process—faster approvals, real-time tracking, and zero paperwork for all."
            />
          </Card>
          <Card className="relative h-[350px] w-[250px] self-end">
            <FeaturesCardChild
              title="SERVICE NOW PAY LATER"
              icon={SnplPic}
              description="Gear Monkey's Service Now, Pay Later offers instant, interest-free EMIs—quick approvals for customers, upfront payments for garages."
            />
          </Card>
          <Card className="relative h-[350px] w-[250px] self-start">
            <FeaturesCardChild
              title="POWERED BY TECHNOLOGY"
              icon={TechnologyPic}
              description="Gear Monkey's digital platform leverages AI, real-time data, and automation to simplify every step—from smart claim decisions to seamless payments."
            />
          </Card>
        </div>
        <img
          src={SectionBackgroundImage}
          className="invisible absolute bottom-0 z-0 md:visible"
        />
        <img
          src={SectionBackgroundMobile}
          className="absolute top-0 bottom-0 left-0 z-0 my-auto w-[200px] md:hidden"
        />
      </div>
    </section>
  );
}
