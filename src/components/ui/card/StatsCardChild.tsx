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
    <div className="flex h-full flex-col justify-between gap-5">
      <h3 className="text-7xl">{count}</h3>
      <h5 className="text-3xl">{title}</h5>
      <img src={icon} className="self-end" />
    </div>
  );
}
