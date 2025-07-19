export default function AboutUs() {
  return (
    <section id="about" className="w-full py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="hover:scale-90 transition-transform duration-500">
        <div className="flex justify-center mt-1 mb-2">
          <p className="text-4xl sm:text-5xl text-center font-bold font-[poppins]">About Us</p>
        </div>
        <hr className="w-44 sm:w-56 h-1 mx-auto bg-gray-400 border-0 rounded-sm" />
      </div>

      {/* Description */}
      <p className="text-justify font-[poppins] text-base sm:text-lg md:text-xl pt-6 leading-relaxed">
        We are passionate about transforming ordinary spaces into extraordinary expressions of personality and purpose. With a deep commitment to creativity, innovation, and elegance, we specialize in delivering tailored interior design solutions for a diverse range of environments, including homes, offices, restaurants, hotels, libraries, and more. Our slogan, <q><i>Your Dream Space, Our Creative Passion</i></q>, serves as the foundation of everything we do, inspiring us to collaborate closely with our clients and bring their visions to life with precision and artistry. Whether it&apos;s crafting a cozy sanctuary for a family, designing a dynamic and functional workplace, or creating a captivating ambiance for hospitality venues, our dedicated team takes pride in every detail.
        <br /><br />
        <strong>Arochi Interiors</strong> sets itself apart through a seamless blend of creativity, personalization, and unwavering commitment to excellence. Unlike conventional design firms, we prioritize understanding the unique aspirations and preferences of our clients, ensuring that every project is tailored to their individual needs and dreams. Our diverse expertise allows us to work across a broad spectrum of spaces—homes, offices, restaurants, hotels, libraries, and more—each with its distinct character and functionality.
        <br /><br />
        What truly distinguishes us is our dedication to combining functionality with artistic innovation. From the initial concept to the final execution, we infuse each design with precision, elegance, and a touch of bold creativity that transforms spaces into unforgettable experiences. Our collaborative approach fosters strong partnerships with clients, making them an integral part of the design journey. We don&apos;t simply create interiors; we create transformative environments that resonate with purpose and beauty, leaving a lasting impression.
      </p>
    </section>
  )
}
