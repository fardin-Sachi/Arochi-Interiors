import Image from 'next/image'

export default function ServiceCard( {imgsrc, altText, description} ) {
  return (
    <div className='flex flex-col p-4 border-[#e4e3d3] rounded-lg items-center bg-[#e4e3d3]/60 hover:bg-[#e4e3d3]/60 hover:rounded-md hover:z-10 hover:scale-105 duration-500 ease-in-out'>
            <Image
                className='rounded-4xl'
                src={imgsrc}
                alt={altText}
                width={200}
                height={200}
                quality={60}
                loading='eager'
                placeholder='blur'
                blurDataURL={`/_next/image?url=${encodeURIComponent(imgsrc)}&q=1&w=128`}
            />
            <div className=''>
                <p className='pt-4 text-center text-xl font-[Poppins]'>
                    {altText}
                </p>
                <p className='pt-1 text-justify font-[poppins]'>
                  {description}
                </p>
            </div>
        </div>
  )
}