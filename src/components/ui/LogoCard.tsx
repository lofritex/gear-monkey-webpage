import Logo from "@/assets/images/card/insure-partners-card.png";

export default function LogoCard() {
  return (
    <div className="flex w-[170px] items-center justify-center rounded-[45px] bg-white py-5 lg:w-[200px] lg:py-10">
      <img src={Logo} />
    </div>
  );
}
