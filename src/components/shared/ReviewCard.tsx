export default function ReviewCard({...props}:any) {
    const {data} = props
    return (
      <div className="max-w-xs mx-auto  rounded-xl shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)]  mt-10 font-poppins">
        <div className="p-5 text-center">
          <div className="bg-red-800 text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mt-[-40px]">
            {/* Icon can be added here */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-4 text-xl  font-medium">{data?.title||"Lorem Ipsum"}</h2>
          <p className="mt-2 text-gray-600 font-poppins text-sm">{data?.desc||"Is Simply Dummy Text Of The Printing And Typesetting Industry."}</p>
          <div className="mt-4 flex justify-center">

            {Array.from({length:5}).map((_, i)=>{
              return(  <svg className={`w-5 h-5 ${i<data?.rating ?"text-orange-500" : "text-gray-400"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.381 4.251a1 1 0 00.95.69h4.462c.969 0 1.371 1.24.588 1.81l-3.62 2.623a1 1 0 00-.364 1.118l1.381 4.252c.3.921-.755 1.688-1.54 1.118l-3.62-2.623a1 1 0 00-1.175 0l-3.62 2.623c-.784.57-1.838-.197-1.539-1.118l1.381-4.252a1 1 0 00-.364-1.118L2.12 9.678c-.784-.57-.38-1.81.588-1.81h4.462a1 1 0 00.95-.69l1.38-4.251z" />
            </svg>)
            })}
            
          </div>
        </div>
      </div>
    );
  }
  