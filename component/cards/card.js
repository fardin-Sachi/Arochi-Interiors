import Image from 'next/image'

export default function Card( {imgsrc, altText} ) {
  return (
    <div className='p-4 bg-white hover:bg-[#e4e3d3]/60 hover:rounded-md hover:z-10 hover:scale-125 duration-300 ease-in-out'>
        <Image
            className='w-auto h-auto rounded-sm hover:rounded-lg'
            src={imgsrc}
            alt={altText}
            width={500}
            height={500}
        />
        <div className='pt-4'>
            <p className='text-center text-xl font-[Poppins]'>
                {altText}
            </p>
        </div>
    </div>
  )
}
