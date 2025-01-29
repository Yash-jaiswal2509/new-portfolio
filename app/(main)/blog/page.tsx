import Image from "next/image";


const Blog = () => {
  return (
    <div className="flex justify-center place-items-center">
      <Image src="/coming-soon.gif" alt="Coming Soon" height={500} width={500}  />
    </div>
  );
};

export default Blog;