import InsureCardPic from "@/assets/images/card/insure-partners-card.png";
import AuthorizedGaragePic from "@/assets/images/card/authorized-garages-card.png";
import LendingPartnerPic from "@/assets/images/card/lending-partners-card.png";
import StatsCardChild from "@/components/ui/card/StatsCardChild";
import Card from "@/components/ui/card/Card";

export default function StatsSection() {
  return (
    <section className="flex justify-center py-20 lg:gap-20 lg:py-40">
      <Card className="translate-x-7 translate-y-8 rotate-[-10deg] xl:translate-x-0">
        <StatsCardChild
          count="18"
          title="AUTHORIZED GARAGES (OEM DEALERSHIPS)"
          icon={AuthorizedGaragePic}
        />{" "}
      </Card>
      <Card className="z-30">
        <StatsCardChild
          count="10"
          title="INSURANCE PARTNERS FOR CLAIM SUPPORTS"
          icon={InsureCardPic}
        />{" "}
      </Card>
      <Card className="-translate-x-7 translate-y-8 rotate-[10deg] xl:translate-x-0">
        <StatsCardChild
          count="20+"
          title="TRUSTED LENDING PARTNERS"
          icon={LendingPartnerPic}
        />{" "}
      </Card>
    </section>
  );
}
