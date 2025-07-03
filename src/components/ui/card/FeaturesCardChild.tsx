export default function FeaturesCardChild({ title, icon, description }: { title: string; icon: string; description: string; }) {
  return (
    <div className="flex flex-col items-center justify-between h-full text-center gap-4 py-6 ">
      <div className="bg-primary rounded-full text-white p-2 absolute -top-14 flex justify-center items-center">
        <img src={icon} className="m-2" />
      </div>
      <h5 className="text-3xl">{title}</h5>
      <p className="font-poppins font-light ">{description}</p>
    </div>
  )
}

