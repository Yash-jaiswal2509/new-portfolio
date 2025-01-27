import AddAchievement from "@/components/develop/add-achievement/add-achievements";
import AddProject from "@/components/develop/add-project/add-project";
import AddResume from "@/components/develop/add-resume";

const Develop = () => {

  return (
    <div className="h-full w-full relative p-10">
      <div className="h-full w-full border border-white rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 relative p-2">
        <AddResume />
        <AddProject />
        <AddAchievement />
      </div>
    </div>
  )
}

export default Develop;