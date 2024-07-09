import Hero from "@/components/widgets/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="container mt-4 flex flex-col gap-10">
      <div className="">
              <Hero />
            </div>
      </div>
    </div>
  );
}
