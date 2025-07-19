import Image from 'next/image'

export default function Card({ imgsrc, altText }) {
  return (
    <div className="p-4 bg-white hover:bg-[#e4e3d3]/60 hover:rounded-md hover:z-10 hover:scale-105 transition-transform duration-500 ease-in-out">
      
      {/* Responsive Image */}
      <Image
        className="w-full h-auto rounded-sm hover:rounded-lg object-cover max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96"
        src={imgsrc}
        alt={altText}
        width={500}
        height={500}
        quality={60}
        loading='eager'
        placeholder='blur'
        blurDataURL={`/_next/image?url=${encodeURIComponent(imgsrc)}&q=1&w=128`}
        decoding='sync'
      />

      {/* Title */}
      <div className="pt-4">
        <p className="text-center text-base sm:text-lg md:text-xl font-[Poppins]">
          {altText}
        </p>
      </div>
    </div>
  )
}
