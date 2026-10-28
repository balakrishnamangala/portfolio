"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/sections/Hero";
import BigNumbers from "@/sections/BigNumbers";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader visible={!loaded} />
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <BigNumbers />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
