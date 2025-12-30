import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'How quickly can I get approved for a loan?',
          answer: 'Most applications receive a preliminary decision within 2-4 hours. Complete approval typically takes 24 hours, with funds available in your account within 1-2 business days after final approval.',
        },
        {
          question: 'What is the minimum and maximum loan amount?',
          answer: 'Personal loans range from $2,000 to $50,000. Business loans range from $10,000 to $500,000. Refinancing options start at $50,000 and go up to $2,000,000, depending on your circumstances and security.',
        },
        {
          question: 'Do you offer loans to people with bad credit?',
          answer: 'We consider all applications individually. While a good credit history helps, we look at your current financial situation, income stability, and ability to repay. We encourage you to apply even if you have had credit challenges in the past.',
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'Absolutely not. We believe in complete transparency. All fees, including establishment fees, monthly account keeping fees, and any applicable charges are clearly disclosed upfront before you accept the loan.',
        },
      ],
    },
    {
      category: 'Application Process',
      questions: [
        {
          question: 'What documents do I need to apply?',
          answer: 'You\'ll need proof of identity (driver\'s license or passport), proof of income (recent payslips or tax returns), bank statements from the last 3 months, and proof of address (utility bill or lease agreement).',
        },
        {
          question: 'Can I apply online?',
          answer: 'Yes! Our online application takes just 5 minutes to complete. You can upload all required documents securely through our portal. Our team is also available by phone if you prefer assistance.',
        },
        {
          question: 'How do I track my application status?',
          answer: 'Once you submit your application, you\'ll receive a unique reference number and email updates at each stage. You can also call our customer service team anytime for a status update.',
        },
        {
          question: 'What happens after I submit my application?',
          answer: 'Our automated system performs a preliminary assessment immediately. Within 2-4 hours, our loan specialists conduct a detailed review. You\'ll receive notification of the decision within 24 hours, along with personalized loan terms if approved.',
        },
      ],
    },
    {
      category: 'Loan Terms',
      questions: [
        {
          question: 'What are your interest rates?',
          answer: 'Personal loan rates start from 5.99% p.a. and business loan rates from 6.49% p.a. Your specific rate depends on factors including loan amount, term, credit history, and security offered. All rates are competitive and clearly disclosed.',
        },
        {
          question: 'Can I repay my loan early?',
          answer: 'Yes! We encourage early repayment and do not charge early repayment penalties on most of our loan products. You can make extra payments or pay off your loan in full at any time without additional fees.',
        },
        {
          question: 'What repayment options are available?',
          answer: 'We offer flexible repayment schedules including weekly, fortnightly, or monthly payments. You can choose between fixed or variable interest rates, and repayment terms range from 1 to 10 years depending on the loan type.',
        },
        {
          question: 'What if I miss a payment?',
          answer: 'We understand that circumstances change. If you anticipate difficulty making a payment, contact us immediately. We offer hardship assistance programs and can work with you to adjust your repayment schedule temporarily.',
        },
      ],
    },
    {
      category: 'Business Loans',
      questions: [
        {
          question: 'Do I need to provide business financial statements?',
          answer: 'Yes, for business loans we typically require your last two years of financial statements, recent business bank statements, and proof of business registration. We can provide a complete checklist once you start your application.',
        },
        {
          question: 'Can startups apply for business loans?',
          answer: 'Yes, we consider applications from startups. You\'ll need to provide a detailed business plan, cash flow projections, and information about the business owners\' financial position and experience.',
        },
        {
          question: 'What can I use a business loan for?',
          answer: 'Business loans can be used for equipment purchases, working capital, expansion, inventory, hiring staff, marketing campaigns, or other legitimate business expenses. Some restrictions may apply.',
        },
      ],
    },
    {
      category: 'Refinancing',
      questions: [
        {
          question: 'How do I know if refinancing is right for me?',
          answer: 'Refinancing can be beneficial if current interest rates are lower than your existing rate, you want to consolidate multiple loans, or you need to access equity. We offer a free refinancing assessment to help you decide.',
        },
        {
          question: 'Will I have to pay break fees on my current loan?',
          answer: 'Possibly, depending on your current lender\'s terms. We include a break fee assessment in our refinancing service and factor this into our calculations to ensure refinancing will save you money overall.',
        },
        {
          question: 'How long does the refinancing process take?',
          answer: 'Refinancing typically takes 2-4 weeks from application to settlement, depending on the complexity of your situation and how quickly documents are provided. We handle most of the paperwork to make the process as smooth as possible.',
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | JSFS Loan FAQs</title>
        <meta name="description" content="Find answers to common questions about JSFS loans, application process, interest rates, repayment terms, and more. Get the information you need." />
      </Helmet>

      <div className="bg-white">
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Find answers to common questions about our loan services and application process
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const index = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openIndex === index;
                      
                      return (
                        <div
                          key={questionIndex}
                          className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition-colors"
                        >
                          <button
                            onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                            className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-gray-900 pr-8">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={cn(
                                "text-blue-600 flex-shrink-0 transition-transform duration-300",
                                isOpen && "transform rotate-180"
                              )}
                              size={24}
                            />
                          </button>
                          
                          <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? 'auto' : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our friendly team is here to help. Contact us and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors"
                  >
                    Contact Us
                  </motion.button>
                </a>
                <a href="tel:0433815156" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-md transition-colors"
                  >
                    Call 0433815156
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
