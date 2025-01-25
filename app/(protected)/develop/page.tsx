import AddResume from "@/components/develop/add-resume";

const Develop = () => {

  return (
    <div className="h-full w-full relative p-10 backdrop-blur">
      <div className="h-full w-full border border-white rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 relative p-2">
        <AddResume />
      </div>
    </div>
  )
}

export default Develop;