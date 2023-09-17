import image1 from "@/assets/beautiful-landscapes-wallpapers-11.jpg";
// import image2 from "@/assets/flowers_pink_petals_90732_1920x1080.jpg";
import Image from "next/image";

export default function Home() {
   return (
      <main>
         <h2>Main Page</h2>
         <Image width={500} src={image1} alt="" />
      </main>
   );
}
