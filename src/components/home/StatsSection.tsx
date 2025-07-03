import InsureCardPic from "@/assets/images/card/insure-partners-card.png";
import AuthorizedGaragePic from "@/assets/images/card/authorized-garages-card.png";
import LendingPartnerPic from "@/assets/images/card/lending-partners-card.png";
import StatsCardChild from "@/components/ui/card/StatsCardChild";
import Card from "@/components/ui/card/Card";

export default function StatsSection() {
  return (
    <section className="flex justify-center gap-20 py-40">
      <Card className="translate-y-7 rotate-[-10deg]">
        <StatsCardChild
          count="18"
          title="AUTHORIZED GARAGES (OEM DEALERSHIPS)"
          icon={AuthorizedGaragePic}
        />{" "}
      </Card>
      <Card className="">
        <StatsCardChild
          count="10"
          title="INSURANCE PARTNERS FOR CLAIM SUPPORTS"
          icon={InsureCardPic}
        />{" "}
      </Card>
      <Card className="translate-y-7 rotate-[10deg]">
        <StatsCardChild
          count="20+"
          title="TRUSTED LENDING PARTNERS"
          icon={LendingPartnerPic}
        />{" "}
      </Card>
    </section>
  );
}
