import React from "react";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project"
import Navbar from "@/components/NavBar";
import Achievement from "@/components/Achievement";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Email from "@/components/Contact";

export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <main>
      <HeroSection />
      <AboutMe />
      <Email />
      <Achievement />
      <Project />
      </main>
      <Footer />
    </div>
  );
}