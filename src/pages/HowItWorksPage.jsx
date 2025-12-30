import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Search, CheckCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const HowItWorksPage = () => {
  const handleApplyNow = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Submit Your Application',
      description: 'Complete our simple online application form in just 5 minutes. Provide basic information about yourself, your income, and the loan amount you need.',
      details: [
        'Fill out the secure online form',
        'Upload required documents (ID, proof of income)',
        'Review and submit your application',
      ],
      time: '5 minutes',
    },
    {
      number: '02',
      icon: Search,
      title: 'Application Review',
      description: 'Our expert team reviews your application and assesses your eligibility. We use advanced technology to expedite the process while maintaining thorough evaluation.',
      details: [
        'Automated preliminary assessment',
        'Credit history verification',
        'Income and employment verification',
        'Loan specialist review',
      ],
      time: '2-4 hours',
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Approval & Terms',
      description: 'Receive your loan decision and personalized terms. If approved, we\'ll present you with a clear breakdown of rates, fees, and repayment schedule.',
      details: [
        'Instant preliminary decision',
        'Customized loan terms',
        'Transparent fee structure',
        'Flexible repayment options',
      ],
      time: '24 hours',
    },
    {
      number: '04',
      icon: DollarSign,
      title: 'Receive Your Funds',
      description: 'Once you accept the loan terms and complete final verification, funds are deposited directly into your bank account.',
      details: [
        'Sign loan agreement electronically',
        'Final identity verification',
        'Direct bank transfer',
        'Confirmation and welcome email',
      ],
      time: '1-2 business days',
    },
  ];

  const requirements = [
    'Australian citizen or permanent resident',
    'At least 18 years of age',
    'Regular source of income',
    'Valid Australian bank account',
    'Contactable via phone and email',
    'No current bankruptcy or insolvency',
  ];

  return (
    <>
      <Helmet>
        <title>How It Works | JSFS Loan Application Process Explained</title>
        <meta name="description" content="Learn how easy it is to get a loan with JSFS. Simple 4-step process: Apply online, get reviewed, receive approval, and access funds within 24-48 hours." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Getting a loan with JSFS is simple, fast, and transparent. Here's our step-by-step process.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-16 top-32 w-0.5 h-32 bg-blue-200"></div>
                  )}
                  
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-2 flex flex-col items-center md:items-start">
                      <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                      <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {step.time}
                      </div>
                    </div>

                    <div className="md:col-span-10">
                      <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-500 transition-colors">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                            <step.icon className="text-blue-600" size={32} />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        
                        <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                        
                        <ul className="space-y-3">
                          {step.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start">
                              <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Basic Requirements
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  To apply for a loan with JSFS, you need to meet these simple eligibility criteria:
                </p>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-lg">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents You'll Need</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Proof of Identity</p>
                    <p className="text-sm text-gray-600">Driver's license, passport, or Medicare card</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Proof of Income</p>
                    <p className="text-sm text-gray-600">Recent payslips or tax returns</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Bank Statements</p>
                    <p className="text-sm text-gray-600">Last 3 months of statements</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Proof of Address</p>
                    <p className="text-sm text-gray-600">Utility bill or lease agreement</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Application?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of satisfied customers who chose JSFS for their financial needs
              </p>
              <Button 
                onClick={handleApplyNow}
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8"
              >
                Start Your Application
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorksPage;
