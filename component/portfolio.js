import Card from './cards/card'
import bedroom from "@/public/portfolio/bedroom.png"
import bathroom from "@/public/portfolio/bathroom.png"
import kitchen from "@/public/portfolio/Kitchen.png"
import balcony from "@/public/portfolio/balcony.png"
import livingRoom from "@/public/portfolio/livingRoom.png"
import office from "@/public/portfolio/office.png"
import restaurant from "@/public/portfolio/restaurant.png"
import library from "@/public/portfolio/library.png"



export default function Portfolio() {
  return (
    <section id="portfolio" className='w-full container py-10'>
      <div className='hover:scale-115 duration-300'>
        <div className='flex justify-center mt-[3px] mb-2'> 
            <p className="text-5xl text-center font-bold font-[poppins]">Portfolio</p>
        </div>
        <hr className='w-52 h-1 mx-auto bg-gray-400 border-0 rounded-sm' />
      </div>
        <div className='pt-10 grid grid-cols-4 gap-10 px-20'>
            <Card imgsrc={"/portfolio/bedroom.png"} altText={"Bedroom"}/>
            <Card imgsrc={"/portfolio/bathroom.png"} altText={"Bathroom"}/>
            <Card imgsrc={"/portfolio/Kitchen.png"} altText={"Kitchen"}/>
            <Card imgsrc={"/portfolio/balcony.png"} altText={"Balcony"}/>
            <Card imgsrc={"/portfolio/livingRoom.png"} altText={"Living Room"}/>
            <Card imgsrc={"/portfolio/office.png"} altText={"Office"}/>
            <Card imgsrc={"/portfolio/restaurant.png"} altText={"Restaurant"}/>
            <Card imgsrc={"/portfolio/library.png"} altText={"Library"}/>
        </div>
    </section>
  )
}
