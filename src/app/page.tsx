import Image from "next/image";

import homeImg from "/public/home.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    // <div className="absolute -z-10 inset-0">
    //   <h1 className="text-3xl text-red-800">Home page</h1>
    //   <Image src={homeImg} alt="Car factory" fill style={{ objectFit: "cover" }} />
    // </div>
    <Hero title="Professional Cloud Hosting" imgData={homeImg} imgAlt="Car factory" />
  );
}
