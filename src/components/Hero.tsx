import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-700 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-coral-500 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Turn Unused Software Into <span className="text-blue-600 dark:text-blue-400">Instant Cash</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              SoftSell makes it easy to sell your unused software licenses at the best market rates. Fast valuation, secure transactions, immediate payment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg"
                href="#contact"
                className="group"
              >
                <span>Sell My Licenses</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="#how-it-works"
              >
                Learn How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700"></div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">2,500+</span> customers trust us
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
              <img 
                src="https://images.pexels.com/photos/7163617/pexels-photo-7163617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software Resale Dashboard" 
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;