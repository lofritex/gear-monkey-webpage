import Logo from "@/assets/images/card/insure-partners-card.png";

export default function LogoCard() {
  return (
    <div className="flex min-w-[200px] items-center justify-center rounded-[45px] bg-white py-10">
      <img src={Logo} />
    </div>
  );
}
