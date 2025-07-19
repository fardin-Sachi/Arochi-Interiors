import Card from "./cards/card"
// import livingRoom2 from "@/public/portfolio/livingRoom2.png"
// import livingRoom3 from "@/public/portfolio/livingRoom3.png"
// import livingRoom4 from "@/public/portfolio/livingRoom4.png"
// import livingRoom5 from "@/public/portfolio/livingRoom5.png"
// import livingRoom6 from "@/public/portfolio/livingRoom6.png"
// import library3 from "@/public/portfolio/library3.png"
// import office2 from "@/public/portfolio/office2.png"
// import library2 from "@/public/portfolio/library2.png"


export default function Photography() {
  return (
    <section id="photography" className="w-full container py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="hover:scale-90 transition-transform duration-500">
        <div className="flex justify-center mt-1 mb-2"> 
          <p className="text-4xl sm:text-5xl text-center font-bold font-[poppins]">
            Photography
          </p>
        </div>
        <hr className="w-60 sm:w-80 h-1 mx-auto bg-gray-400 border-0 rounded-sm" />
      </div>

      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        <Card imgsrc={"/portfolio/livingRoom2.png"} altText={"20/4 Tootpara, Khulna"} />
        <Card imgsrc={"/portfolio/livingRoom3.png"} altText={"11/1 Sugondga Residential Area, Chittagong"} />
        <Card imgsrc={"/portfolio/livingRoom4.png"} altText={"Meghna/D-1, BDP, Joydebpur, Gazipur"} />
        <Card imgsrc={"/portfolio/livingRoom5.png"} altText={"12/Niketon, Gulshan, Dhaka"} />
        <Card imgsrc={"/portfolio/livingRoom6.png"} altText={"336/G Bashundhara Residential Area, Dhaka"} />
        <Card imgsrc={"/portfolio/library3.png"} altText={"67/B Bashundhara Residential Area, Dhaka"} />
        <Card imgsrc={"/portfolio/office2.png"} altText={"50, KDA Outer Bypass Rd, Khulna"} />
        <Card imgsrc={"/portfolio/library2.png"} altText={"7, KDA Avenue, Munna Tower, Khulna"} />
      </div>
    </section>
  )
}
