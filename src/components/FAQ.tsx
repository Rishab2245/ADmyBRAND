'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does ADmyBRAND AI Suite work?',
      answer: 'Our AI Suite uses advanced machine learning algorithms to analyze your marketing data, customer behavior, and market trends. It then provides actionable insights, automates campaign optimization, and predicts future performance to help you make data-driven decisions that drive real results.'
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'Our customers typically see significant improvements within the first 30 days. On average, businesses experience a 300% increase in qualified leads, 250% boost in engagement rates, and 500% improvement in ROI. Results vary based on industry, current marketing maturity, and implementation strategy.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all plans with no credit card required. You will have full access to all features during the trial period, including AI analytics, automation tools, and our complete template library. Our team will also provide onboarding support to help you get started.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Data security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 Type II certification. Your data is stored in secure, geographically distributed data centers with 24/7 monitoring and regular security audits.'
    },
    {
      question: 'Can I integrate with my existing tools?',
      answer: 'Absolutely! ADmyBRAND AI Suite integrates with over 100+ popular marketing tools including Salesforce, HubSpot, Google Analytics, Facebook Ads, Mailchimp, Shopify, and many more. We also provide API access for custom integrations and have a dedicated integration team to help with setup.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We offer comprehensive support including 24/7 chat support, email assistance, video tutorials, webinars, and a detailed knowledge base. Professional and Enterprise plans include priority support and dedicated account managers. We also provide free onboarding and training sessions.'
    },
    {
      question: 'Can I change or cancel my plan anytime?',
      answer: 'Yes, you have complete flexibility. You can upgrade, downgrade, or cancel your subscription at any time with no penalties or hidden fees. Changes take effect at your next billing cycle, and we provide prorated refunds for downgrades. Your data remains accessible during any transition period.'
    },
    {
      question: 'Do you offer custom solutions for enterprises?',
      answer: 'Yes! Our Enterprise plan includes custom AI model training, white-label solutions, dedicated infrastructure, custom integrations, and personalized support. We work closely with large organizations to create tailored solutions that meet their specific needs and compliance requirements.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
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
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Got
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about ADmyBRAND AI Suite. 
            Can not find what you are looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-purple-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-white/60 group-hover:text-purple-400 transition-colors duration-300" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="h-px bg-white/10 mb-6" />
                        <p className="text-white/80 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/70 mb-8 text-lg">
              Our team is here to help. Get in touch and we will respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

