import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import TechStack from "@/components/sections/TechStack";
import Demo from "@/components/sections/Demo";
import PreOrder from "@/components/sections/PreOrder";
import Contact from "@/components/sections/Contact";
import AIChat from "@/components/ai/AIChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <TechStack />
        <Demo />
        <PreOrder />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </>
  );
}
