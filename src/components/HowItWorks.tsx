import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="relative">
      {/* Connecting line */}
      {number < 3 && (
        <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 -mt-1 -mr-1 text-xs font-bold text-white bg-coral-500 rounded-full">
          {number}
        </span>
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-center text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Upload License',
      description: 'Share your license details through our secure portal.',
      icon: <Upload size={24} />,
    },
    {
      number: 2,
      title: 'Get Valuation',
      description: 'Receive a competitive market quote within 24 hours.',
      icon: <DollarSign size={24} />,
    },
    {
      number: 3,
      title: 'Get Paid',
      description: 'Accept the offer and receive payment in your preferred method.',
      icon: <CreditCard size={24} />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Selling your unused software licenses has never been easier. Just follow these three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;