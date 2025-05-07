import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  content, 
  name, 
  role, 
  company, 
  rating 
}) => {
  return (
    <div className="flex flex-col h-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={20} 
            className={`${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
            fill={i < rating ? 'currentColor' : 'none'} 
          />
        ))}
      </div>
      <p className="flex-grow mb-6 italic text-gray-600 dark:text-gray-300">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      content: "SoftSell made it incredibly easy to offload our unused Adobe licenses when we downsized. The valuation was fair and the money hit our account within 48 hours. Highly recommended!",
      name: "Sarah Johnson",
      role: "CFO",
      company: "CreativeTech Inc",
      rating: 5,
    },
    {
      content: "As an IT manager, I was skeptical about selling our extra Microsoft licenses online. SoftSell's verification process was thorough and transparent, giving me complete confidence in the transaction.",
      name: "Michael Chen",
      role: "IT Director",
      company: "GlobalSystems Ltd",
      rating: 5,
    },
    {
      content: "When our startup pivoted, we had dozens of unused dev tool licenses. SoftSell's team understood the market value and got us a much better deal than I expected. The process was smooth and professional.",
      name: "Alex Rivera",
      role: "CTO",
      company: "NexGen Solutions",
      rating: 4,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Here's what customers think about SoftSell.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Mobile view - single testimonial */}
          <div className="md:hidden">
            <Testimonial {...testimonials[activeIndex]} />
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Desktop view - all testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
          
          {/* Mobile navigation buttons */}
          <div className="md:hidden flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0">
            <button
              onClick={prevTestimonial}
              className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;