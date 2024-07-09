import ReviewCard from "@/components/shared/ReviewCard";
import Hero from "@/components/widgets/Hero";
import ServicesReview from "@/components/widgets/ServicesReview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className=" mt-4 flex flex-col gap-10">
      <div className="">
              <Hero />
             <ServicesReview/>
            </div>
      </div>
    </div>
  );
}
