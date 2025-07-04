export default function StatsCardChild({
  count,
  title,
  icon,
}: {
  count: string;
  title: string;
  icon: string;
}) {
  return (
    <div className="flex h-full min-w-[70px] flex-col justify-between gap-5 sm:min-w-[100px]">
      <h3 className="text-4xl lg:text-7xl">{count}</h3>
      <h5 className="text-xl lg:text-3xl">{title}</h5>
      <img src={icon} className="max-w-[50px] self-end lg:max-w-[150px]" />
    </div>
  );
}
