import Image from "next/image";


export default function ReviewCard({ ...props }: any) {
  const { data } = props;
  return (
    <div className="max-w-xs mx-auto  rounded-xl shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)]  mt-10 font-poppins">
      <div className="p-5 text-center">
        <div className="bg-red-800 text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mt-[-40px]">
          {/* Icon can be added here */}
          <Image src={data?.image} className="w-8 h-8" alt="carServices" width={50} height={50} />
        </div>
        <h2 className="mt-4 text-xl  font-medium">
          {data?.title || "Lorem Ipsum"}
        </h2>
        <p className="mt-2 text-gray-600 font-poppins text-sm">
          {data?.desc ||
            "Is Simply Dummy Text Of The Printing And Typesetting Industry."}
        </p>
      </div>
    </div>
  );
}
