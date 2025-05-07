import React from 'react';
import { Shield, Clock, DollarSign, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
      <div className="w-12 h-12 mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <DollarSign size={24} />,
      title: 'Best Market Rates',
      description: 'We analyze the market daily to ensure you get the highest possible value for your licenses.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure Transactions',
      description: 'Our platform uses bank-level encryption to protect your personal and financial information.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Fast Processing',
      description: 'Get quotes within 24 hours and receive payment as soon as your licenses are verified.',
    },
    {
      icon: <Award size={24} />,
      title: 'Expert Verification',
      description: 'Our team of software experts ensures all licenses are properly valued and transferred.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            SoftSell is the trusted choice for software license resale. Here's why our customers love us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;