import AboutUs from "@/component/aboutUs";
import ClientReviews from "@/component/clientReviews";
import Footer from "@/component/footer";
import Header from "@/component/header";
import Hero from "@/component/hero";
import Photography from "@/component/photography";
import Portfolio from "@/component/portfolio";
import Services from "@/component/services";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <Hero />
        <Portfolio />
        <Photography />
        <Services />
        <ClientReviews />
        <AboutUs />
      </div>
      <Footer />
    </main>
  );
}
