import AutomatedPic from "@/assets/images/card/automated-card.png";
import SnplPic from "@/assets/images/card/snpl-card.png";
import TechnologyPic from "@/assets/images/card/technology-card.png";
import Card from "@/components/ui/card/Card";
import FeaturesCardChild from "@/components/ui/card/FeaturesCardChild";
import SectionBackgroundImage from "@/assets/images/shift-gear-section-bg.png";

export default function SmartSolutionsSection() {
  return (
    <section className="relative flex flex-col items-center">
      <div className="flex flex-col items-center py-20">
        <h3 className="text-gradient-primary py-5 text-8xl">SMART SOLUTIONS</h3>
        <h4 className="text-gradient-primary text-center text-5xl">
          NO ROAD IS TOO TOUGH WITH THE RIGHT FINANCIAL HORSEPOWER.
        </h4>
      </div>
      <div className="flex gap-10 py-32">
        <Card className="relative min-h-[300px] max-w-[300px]">
          <FeaturesCardChild
            title="FULLY AUTOMATED SETTLEMENT TOOL"
            icon={AutomatedPic}
            description="Gear Monkey’s FAST automates the entire motor insurance claim process—faster approvals, real-time tracking, and zero paperwork for all."
          />
        </Card>
        <Card className="relative min-h-[300px] max-w-[300px]">
          <FeaturesCardChild
            title="SERVICE NOW PAY LATER"
            icon={SnplPic}
            description="Gear Monkey’s Service Now, Pay Later offers instant, interest-free EMIs—quick approvals for customers, upfront payments for garages."
          />
        </Card>
        <Card className="relative min-h-[300px] max-w-[300px]">
          <FeaturesCardChild
            title="POWERED BY TECHNOLOGY"
            icon={TechnologyPic}
            description="Gear Monkey’s digital platform leverages AI, real-time data, and automation to simplify every step—from smart claim decisions to seamless payments."
          />
        </Card>
      </div>
      <img src={SectionBackgroundImage} className="absolute bottom-0 -z-50" />
    </section>
  );
}
