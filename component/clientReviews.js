const reviews = [
    {
        heading: "Exceptional Transformation!",
        name: "Sheikh Toriqul Islam",
        paragraph: "Arochi Interiors turned our dull office into a vibrant and functional workspace that has greatly boosted team morale and productivity. Their attention to detail, creative ideas, and seamless execution left us thoroughly impressed. From start to finish, the team was professional, communicative, and receptive to our feedback. Highly recommended!"
    },
    {
        heading: "A Dream Come True",
        name: "Wali Uz Zaman",
        paragraph: "The team at Arochi Interiors brought our vision for a cozy, stylish home to life. They perfectly combined elegance and practicality, creating spaces that we absolutely adore. The process was stress-free, and they truly made us feel like partners in the design journey. Thank you, Arochi Interiors!"
    }
]

export default function ClientReviews() {
  return (
    <section id="reviews" className="w-full py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="hover:scale-90 transition-transform duration-500">
        {/* Heading */}
        <div className="flex justify-center mt-1 mb-2">
          <p className="text-4xl sm:text-5xl text-center font-bold font-[poppins]">
            Client Reviews
          </p>
        </div>
        <hr className="w-60 sm:w-90 h-1 mx-auto bg-gray-400 border-0 rounded-sm" />
      </div>

      {/* Review Cards */}
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {reviews.map((item) => (
          <div
            key={item.name}
            className="flex flex-col p-4 border-[#e4e3d3] rounded-lg items-center bg-[#e4e3d3]/60"
            //  hover:scale-105 transition-transform duration-500
          >
            <p className="pt-2 pb-4 text-center text-lg sm:text-xl font-[Poppins]">
              {item.heading}
            </p>

            {/* Star Ratings */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-300 ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>

            <p className="text-center font-semibold text-base sm:text-lg font-[Poppins]">
              {item.name}
            </p>
            <p className="pt-2 text-justify font-[poppins] text-sm sm:text-base">
              <q>{item.paragraph}</q>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
