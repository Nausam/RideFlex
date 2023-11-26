import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Testimonials from "@/Components/Testimonials";
import RentNow from "@/Components/RentNow";
import RentalFleet from "@/Components/RentalFleet";
import HowTo from "@/Components/HowTo";
import WhyUs from "@/Components/WhyUs";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <RentNow />
      <HowTo />
      <RentalFleet />
      <Banner />
      <WhyUs />
      <Testimonials />
      <Footer />
    </section>
  );
}
