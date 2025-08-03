
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calculator, Users, Mail, Zap, TrendingUp } from 'lucide-react';
import { Card, Button, Badge } from './ui';

const PricingCalculator = () => {
  const [contacts, setContacts] = useState(10000);
  const [emails, setEmails] = useState(50000);
  const [campaigns, setCampaigns] = useState(25);
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = () => {
    let basePrice = 79; // Professional plan base
    
    // Contact-based pricing
    if (contacts > 25000) {
      basePrice += Math.ceil((contacts - 25000) / 10000) * 20;
    } else if (contacts < 5000) {
      basePrice = 29; // Starter plan
    }
    
    // Email volume pricing
    if (emails > 100000) {
      basePrice += Math.ceil((emails - 100000) / 50000) * 15;
    }
    
    // Campaign complexity
    if (campaigns > 50) {
      basePrice += Math.ceil((campaigns - 50) / 25) * 10;
    }
    
    // Annual discount
    if (isAnnual) {
      basePrice = Math.round(basePrice * 0.8); // 20% discount
    }
    
    return basePrice;
  };

  const getPlanName = () => {
    const price = calculatePrice();
    if (price <= 35) return 'Starter';
    if (price <= 120) return 'Professional';
    return 'Enterprise';
  };

  const getFeatures = () => {
    const planName = getPlanName();
    const baseFeatures = [
      'AI-powered analytics',
      'Email automation',
      'Basic reporting',
      'Email support'
    ];
    
    if (planName === 'Professional') {
      return [
        ...baseFeatures,
        'Advanced AI insights',
        'Multi-channel automation',
        'A/B testing',
        'Priority support',
        'Custom templates'
      ];
    }
    
    if (planName === 'Enterprise') {
      return [
        ...baseFeatures,
        'Advanced AI insights',
        'Multi-channel automation',
        'A/B testing',
        'Priority support',
        'Custom templates',
        'Custom integrations',
        'Dedicated support',
        'White-label solution',
        'API access'
      ];
    }
    
    return baseFeatures;
  };

  const currentPrice = calculatePrice();
  const annualSavings = isAnnual ? Math.round((calculatePrice() / 0.8 - calculatePrice()) * 12) : 0;

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 mb-8"
          >
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">Pricing Calculator</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Calculate Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Customize your plan based on your specific needs and see real-time pricing 
            with our interactive calculator.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Customize Your Plan</h3>
              
              <div className="space-y-10">
                {/* Contacts */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Number of Contacts</h4>
                      <p className="text-white/60 text-sm">Total contacts in your database</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Contacts</span>
                      <span className="text-white font-semibold text-lg">{contacts.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={contacts}
                      onChange={(e) => setContacts(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-white/50">
                      <span>1K</span>
                      <span>100K</span>
                    </div>
                  </div>
                </div>

                {/* Emails */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Monthly Email Volume</h4>
                      <p className="text-white/60 text-sm">Emails sent per month</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Emails</span>
                      <span className="text-white font-semibold text-lg">{emails.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="500000"
                      step="10000"
                      value={emails}
                      onChange={(e) => setEmails(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-white/50">
                      <span>10K</span>
                      <span>500K</span>
                    </div>
                  </div>
                </div>

                {/* Campaigns */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Active Campaigns</h4>
                      <p className="text-white/60 text-sm">Concurrent campaigns running</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Campaigns</span>
                      <span className="text-white font-semibold text-lg">{campaigns}</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={campaigns}
                      onChange={(e) => setCampaigns(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-white/50">
                      <span>5</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>

                {/* Billing Toggle */}
                <div className="pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">Billing Period</span>
                    <div className="flex items-center gap-3">
                      <span className={`text-base ${!isAnnual ? 'text-white' : 'text-white/60'}`}>
                        Monthly
                      </span>
                      <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                          isAnnual ? 'bg-purple-600' : 'bg-white/20'
                        }`}
                      >
                        <div
                          className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300 ${
                            isAnnual ? 'translate-x-8' : 'translate-x-1'
                          }`}
                        />
                      </button>
                      <span className={`text-base ${isAnnual ? 'text-white' : 'text-white/60'}`}>
                        Annual
                      </span>
                    </div>
                  </div>
                  {isAnnual && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4"
                    >
                      <Badge variant="success" size="md">
                        Save ${annualSavings}/year with annual billing
                      </Badge>
                    </motion.div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Pricing Result */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full p-8">
              <div className="text-center mb-8">
                <Badge variant="primary" className="mb-6 text-lg py-2 px-4">
                  {getPlanName()} Plan
                </Badge>
                
                <div className="mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-bold text-white">${currentPrice}</span>
                    <span className="text-white/70 text-xl">/{isAnnual ? 'month' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-400 text-base mt-3">
                      Billed annually (${currentPrice * 12}/year)
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{contacts.toLocaleString()}</div>
                    <div className="text-white/60 text-base">Contacts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{emails.toLocaleString()}</div>
                    <div className="text-white/60 text-base">Emails/mo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{campaigns}</div>
                    <div className="text-white/60 text-base">Campaigns</div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 mb-10">
                <h4 className="text-white font-semibold text-xl flex items-center gap-3">
                  <TrendingUp className="w-6 h-6" />
                  Included Features
                </h4>
                {getFeatures().map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                    <span className="text-white/80 text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full py-4 text-lg">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="w-full py-4 text-lg">
                  Contact Sales
                </Button>
              </div>

              <p className="text-white/60 text-sm text-center mt-6">
                14-day free trial • No credit card required
              </p>
            </Card>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
          margin-top: -8px; /* Adjust to center thumb vertically */
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </section>
  );
};

export default PricingCalculator;


