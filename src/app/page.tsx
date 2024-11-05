import Image from "next/image";
export default function Home() {
  return(
    <div>
    <h1 className="font-bold text-4xl underline flex justify-center py-12">Used and new cars all available in  2021 images,reviews $ specs
    </h1>
    <img
    src='/car2.jpg' className="hover:bg-slate-300 w={1} h={1}"/> 
    </div>
  
  );
} 