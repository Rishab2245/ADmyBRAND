'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Define the billing cycle type
type BillingCycle = 'monthly' | 'yearly';

const Pricing = () => {
  // Type the state with the specific type
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 29, yearly: 23 },
      description: 'Perfect for small businesses getting started with AI marketing',
      features: [
        'Up to 5,000 contacts',
        'Basic AI analytics',
        '10 automated campaigns',
        'Email support',
        'Standard templates',
        'Basic reporting',
      ],
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      name: 'Professional',
      price: { monthly: 79, yearly: 63 },
      description: 'Advanced features for growing businesses and marketing teams',
      features: [
        'Up to 25,000 contacts',
        'Advanced AI insights',
        'Unlimited campaigns',
        'Priority support',
        'Custom templates',
        'Advanced reporting',
        'A/B testing',
        'Multi-channel automation',
      ],
      icon: Star,
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: 199, yearly: 159 },
      description: 'Complete solution for large organizations with custom needs',
      features: [
        'Unlimited contacts',
        'AI-powered predictions',
        'Custom integrations',
        'Dedicated support',
        'White-label solution',
        'Custom reporting',
        'Advanced security',
        'API access',
        'Custom AI models',
      ],
      icon: Crown,
      gradient: 'from-yellow-500 to-orange-500',
      popular: false,
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Choose Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Start free and scale as you grow. All plans include our core AI features with no setup fees or hidden costs.
          </p>
        </motion.div>

        {/* Billing Cycle Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <span className={`text-lg font-medium ${billingCycle === "monthly" ? "text-white" : "text-white/50"}`}>Monthly</span>
          <div className="relative">
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="w-16 h-8 rounded-full bg-white/10 p-1 flex items-center transition-colors duration-300"
            >
              <motion.div
                className="w-6 h-6 bg-purple-500 rounded-full shadow-md"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                initial={false}
                animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
              />
            </button>
          </div>
          <span className={`text-lg font-medium ${billingCycle === "yearly" ? "text-white" : "text-white/50"}`}>Yearly (Save 20%)</span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`h-full flex flex-col ${plan.popular ? "scale-105 border-purple-500" : "border-white/10"}`}
              >
                <div className={`h-full bg-white/5 backdrop-blur-lg rounded-3xl border p-8 flex flex-col hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl ${plan.popular ? "border-purple-500" : "border-white/10"}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 -mt-4 -mr-4">
                      <div className="bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full">Most Popular</div>
                    </div>
                  )}

                  {/* Icon and Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${plan.gradient} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>

                  <p className="text-white/70 mb-8 min-h-[3rem]">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">${plan.price[billingCycle]}</span>
                    <span className="text-white/50">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-auto py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 ${plan.popular ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700" : "bg-white/10 text-white hover:bg-white/20"}`}>
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#" className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-2">
            View detailed comparison <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;