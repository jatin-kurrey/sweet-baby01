import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import AgeSection from "../components/AgeSection";
import SpecialOffers from "../components/SpecialOffers";
import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Trending />
        <AgeSection />
        <SpecialOffers />
        <Brands />
        <Testimonials />
        <Benefits />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
