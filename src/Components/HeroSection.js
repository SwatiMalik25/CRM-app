import React from "react";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col bg-black text-white">
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">▲</div>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>
      <div className="flex-grow flex items-center px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold tracking-tighter mb-6 leading-tight">
            The complete SaaS platform for your business
          </h1>
          <p className="text-xl mb-8 text-gray-400 leading-relaxed">
            Streamline your operations, automate workflows, and empower your team with our powerful SaaS solution.
          </p>
          <div className="flex gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-200">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
