import React from "react";

export default function Testimonial({ ...props }) {
  const { testimonial } = props;
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)]">
      <div className="">
        <div className="">
          <div className="text-8xl text-black">&ldquo;</div>
        </div>
        <p className="text-lg font-medium text-gray-700">{testimonial.quote}</p>
        <div className="mt-4 flex">
          <div className="text-left">
            <p className="font-semibold text-gray-800">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.title}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          {[...Array(5)].map((star, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.087 3.348a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.087 3.348c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.785.57-1.84-.197-1.54-1.118l1.087-3.348a1 1 0 00-.364-1.118L2.464 8.775c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.087-3.348z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
