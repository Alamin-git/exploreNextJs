import image1 from "@/assets/beautiful-landscapes-wallpapers-11.jpg";
// import image2 from "@/assets/flowers_pink_petals_90732_1920x1080.jpg";
import Categories from "@/components/HomePage/categories";
import Image from "next/image";

export default function Home() {
   return (
      <main className="container mx-auto">
         <h2>Main Page</h2>
         <Categories />
         <Image width={500} src={image1} alt="" />
      </main>
   );
}
