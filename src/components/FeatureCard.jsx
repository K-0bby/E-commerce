import React from 'react';
import { Lock, Truck, Package, RefreshCcw } from 'lucide-react'



const features = [
    {
      title: 'Secure Payments',
      description: 'Shop with confidence knowing that your transactions are safeguarded.',
      icon: <Lock />,
    },
    {
      title: 'Free Shipping',
      description: 'Shopping with no extra charges – savor the liberty of complimentary shipping on every order.',
      icon: <Truck />,
    },
    {
      title: 'Easy Returns',
      description: 'With our hassle-free Easy Returns, changing your mind has never been more convenient.',
      icon: <RefreshCcw />,
    },
    {
      title: 'Order Tracking',
      description: 'Stay in the loop with our Order Tracking feature – from checkout to your doorstep.',
      icon: <Package />,
    },
  ];
const FeatureCard = () => {
  return (
    <div className="flex justify-center items-center space-x-4 overflow-hidden p-6">
    {features.map((feature, index) => (
      <div key={index} className="flex flex-col items-center text-center w-1/4 p-4">
        <div className="text-5xl mb-2">{feature.icon}</div>
        <h3 className="text-2xl font-bold mb-2 font-cormorant italic">{feature.title}</h3>
        <p className="text-gray-600 text-xs font-montserrat">{feature.description}</p>
      </div>
    ))}
  </div>
  )
}

export default FeatureCard