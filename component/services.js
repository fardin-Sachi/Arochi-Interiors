// import bedroom2 from "@/public/portfolio/bedroom2.png"
// import office3 from "@/public/portfolio/office3.png"
// import hotel from "@/public/portfolio/hotel.png"
// import restaurant2 from "@/public/portfolio/restaurant2.png"
// import library4 from "@/public/portfolio/library4.png"
// import showroom from "@/public/portfolio/showroom.png"
import ServiceCard from "./cards/serviceCard"
// import Image from "next/image"

const serviceProvided = [
  {
    id: 1,
    imgsrc: "/portfolio/bedroom2.png",
    altText: "Home Interior",
    description: "Arochi Interiors transforms your house into a warm, personalized sanctuary that reflects your style and meets your practical needs. From cozy living rooms to serene bedrooms, we create spaces that blend comfort, aesthetics, and functionality for a truly inviting home.",
  },
  {
    id: 2,
    imgsrc: "/portfolio/office3.png",
    altText: "Office Interior",
    description: "Enhance productivity and foster collaboration with our office designs. We craft functional, innovative workspaces tailored to your business needs, ensuring an inspiring environment for your team.",
  },
  {
    id: 3,
    imgsrc: "/portfolio/hotel.png",
    altText: "Hotel Interior",
    description: "Elevate guest experiences with bespoke hotel interiors that merge luxury and hospitality. Our designs ensure comfort, elegance, and a memorable ambiance.",
  },
  {
    id: 4,
    imgsrc: "/portfolio/restaurant2.png",
    altText: "Restaurant Interior",
    description: "Set the perfect tone for your dining space with designs that captivate. From cozy cafes to upscale restaurants, we create interiors that harmonize with your culinary vision.",
  },
  {
    id: 5,
    imgsrc: "/portfolio/library4.png",
    altText: "Library Interior",
    description: "Inspire learning and relaxation with thoughtfully designed libraries. Our approach balances calm aesthetics and optimal functionality for an ideal reading haven.",
  },
  {
    id: 6,
    imgsrc: "/portfolio/showroom.png",
    altText: "Showroom Interior",
    description: "Showcase your products with flair in a dynamic showroom environment. Our designs emphasize product appeal, customer engagement, and an unforgettable shopping experience.",
  },
]

export default function Services() {
  return (
    <section id="service" className="w-full container py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="hover:scale-90 transition-transform duration-500">
        {/* Heading */}
        <div className="flex justify-center mt-1 mb-2"> 
          <p className="text-4xl sm:text-5xl text-center font-bold font-[poppins]">Services</p>
        </div>

        {/* Underline */}
        <hr className="w-52 h-1 mx-auto bg-gray-400 border-0 rounded-sm" />
      </div>

      {/* Cards */}
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {serviceProvided.map((item) => (
          <ServiceCard
            key={item.id}
            imgsrc={item.imgsrc}
            altText={item.altText}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

{/* <ServiceCard imgsrc={bedroom2} altText={"qawd"} description={"Arochi Interiors transforms your house into a warm, personalized sanctuary that reflects your style and meets your practical needs. From cozy living rooms to serene bedrooms, we create spaces that blend comfort, aesthetics, and functionality for a truly inviting home."} />
              <ServiceCard imgsrc={bedroom2} altText={"qawd"} description={"dfqawdad"} /> */}