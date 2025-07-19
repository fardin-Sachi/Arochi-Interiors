import Image from 'next/image'
import React from 'react'
// import facebook from '@/public/facebook.svg'
// import youtube from '@/public/youtube.svg'
// import instagram from '@/public/instagram.svg'
// import linkedin from '@/public/linkedin.svg'
// import mapMarker from '@/public/map-marker.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <section
      id="contact"
      className="w-full bg-[#d3e4df] py-10 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-20 justify-between">
        {/* Company */}
        <div className="p-2 flex-1">
          <h2 className="text-xl sm:text-2xl font-bold pb-4">Company</h2>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>Careers</li>
            <li>Design Careers</li>
            <li>Reviews</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="p-2 flex-1">
          <h2 className="text-xl sm:text-2xl font-bold pb-4">Resources</h2>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>Home Design Ideas</li>
            <li>Tutorial</li>
            <li>Help Center</li>
            <li>Article</li>
            <li>Arochi App</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="p-2 flex-1">
          <h2 className="text-xl sm:text-2xl font-bold pb-4">Contact Us</h2>
          <div className="flex items-center mb-2">
            <Image
              src="/map-marker.svg"
              alt="Company Location"
              width={16}
              height={16}
            />
            <span className="px-2 text-sm sm:text-base">Address:</span>
          </div>
          <p className="text-sm sm:text-base">
            Level-06, Shop-32, Badhundhara Shopping Complex, Dhaka-1215, Bangladesh
          </p>

          <div className="mt-4 space-y-1 text-sm sm:text-base">
            <Link href="tel:+8801516-532740">Phone: +8801516-532740</Link>
            <Link href="mailto:info@arochiinteriors.com">Email: info@arochiinteriors.com</Link>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="https://www.facebook.com/arochiinteriors/">
              <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
            </Link>
            <Link href="https://www.youtube.com/@arochiinteriors/">
              <Image src="/youtube.svg" alt="YouTube" width={32} height={32} />
            </Link>
            <Link href="https://www.instagram.com/arochiinteriors/">
              <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
            </Link>
            <Link href="https://www.linkedin.com/arochiinteriors/">
              <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
