import React from "react";
import { Button } from "./ui/button";
import {
  Link,
} from "react-router-dom";
import MountainIcon from "../Components/MountainIcon" ;
function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col bg-black text-white">
          
       
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
                    <a className="flex items-center justify-center" href="#">
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </a>
       

                    </header>
           
    
                    <div className="border-t border-gray-200">
        <nav className="container mx-auto flex justify-end py-2">
          <div className="space-x-6">
            <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </nav>
      </div>
        
      <div>
 
      
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
      </div>
    </section>
  );
}

export default HeroSection;
