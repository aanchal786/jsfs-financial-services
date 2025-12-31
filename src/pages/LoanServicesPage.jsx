import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Home, Briefcase, Building, Wallet, Truck, Stethoscope, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const LoanServicesPage = () => {
  const handleApplyNow = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const loanServices = [
    {
      icon: Home,
      title: 'Residential and Investment Loans',
      description: 'Whether you are buying your first home, upgrading, or investing in property, we offer tailored solutions to meet your residential lending needs.',
      features: [
        'First Home Buyer Loans',
        'Investment Property Loans',
        'Refinancing options',
        'Competitive variable & fixed rates',
        'Interest-only repayment options',
        'Access to equity',
      ],
      benefits: [
        'Streamlined approval process',
        'Expert guidance on property market',
        'Loan structure optimization',
        'Ongoing loan management support',
      ],
    },
    {
      icon: Briefcase,
      title: 'Commercial and Business Loans',
      description: 'Empowering businesses with the capital they need to grow. From startup funding to expansion capital, we understand commercial finance.',
      features: [
        'Business acquisition funding',
        'Working capital solutions',
        'Commercial property purchase',
        'Flexible loan terms up to 15 years',
        'Secured and unsecured options',
        'Line of credit facilities',
      ],
      benefits: [
        'Tailored to cash flow cycles',
        'Quick access to funds',
        'Dedicated business bankers',
        'Competitive commercial rates',
      ],
    },
    {
      icon: Building,
      title: 'Development and Construction Funding',
      description: 'Specialized funding solutions for property developers and construction projects of all sizes, from duplexes to multi-story apartments.',
      features: [
        'Land acquisition finance',
        'Construction drawdowns',
        'Mezzanine finance options',
        'Residual stock loans',
        'Pre-sale requirements negotiation',
        'Project feasibility assessment',
      ],
      benefits: [
        'Fast progress payment processing',
        'Flexible LVR requirements',
        'Industry-specific expertise',
        'End-to-end project support',
      ],
    },
    {
      icon: Wallet,
      title: 'Self-managed Superannuation Funds',
      description: 'Take control of your retirement with our SMSF lending solutions. Invest in residential or commercial property through your super fund.',
      features: [
        'Limited Recourse Borrowing Arrangements (LRBA)',
        'Residential property investment',
        'Commercial property investment',
        'Refinancing existing SMSF loans',
        'Competitive SMSF rates',
        'Compliance-focused structure',
      ],
      benefits: [
        'Wealth creation strategy support',
        'Integration with financial planners',
        'Transparent fee structure',
        'Long-term asset growth focus',
      ],
    },
    {
      icon: Truck,
      title: 'Asset and Equipment Finance',
      description: 'Keep your business moving with finance for vehicles, machinery, and technology. Don\'t let upfront costs hold back your operational efficiency.',
      features: [
        'Vehicle and fleet finance',
        'Heavy machinery and plant equipment',
        'IT and office equipment',
        'Chattel mortgage & Hire purchase',
        'Finance lease & Operating lease',
        'Low doc options available',
      ],
      benefits: [
        'Preserve working capital',
        'Tax effective structures',
        'Flexible repayment terms',
        'Upgrade options available',
      ],
    },
    {
      icon: Stethoscope,
      title: 'Medico Finance and Loans',
      description: 'Exclusive finance packages designed specifically for medical professionals, offering higher LVRs and waived LMI for eligible practitioners.',
      features: [
        'Up to 90% LVR with no LMI',
        'Practice purchase and fit-out',
        'Medical equipment finance',
        'Goodwill loans',
        'Home loans for doctors',
        'Specialist car finance rates',
      ],
      benefits: [
        'Exclusive medico interest rates',
        'Specialized understanding of income',
        'Premium banking service',
        'Simplified application policy',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Loan Services | Residential, Commercial, SMSF & Medico | JSFS</title>
        <meta name="description" content="Explore JSFS's comprehensive loan services including Residential, Commercial, Construction, SMSF, Equipment Finance, and specialized Medico Loans." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Loan Services</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive lending solutions tailored to your unique financial needs
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {loanServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="sticky top-24">
                      <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="text-blue-600" size={40} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-700 mb-8">
                        {service.description}
                      </p>
                      <Button 
                        onClick={handleApplyNow}
                        size="lg" 
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start">
                            <CheckCircle className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Apply now and get a response within 24 hours
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleApplyNow}
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8"
                >
                  Apply Now
                </Button>
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoanServicesPage;
