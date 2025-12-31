import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Clock, Award, CheckCircle, Star, Home, Briefcase, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { toast } from '@/components/ui/use-toast';

const HomePage = () => {
  const handleApplyNow = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const services = [
    {
      icon: Home,
      title: 'Residential & Investment',
      description: 'Tailored solutions for home buyers and property investors with competitive rates.',
    },
    {
      icon: Briefcase,
      title: 'Commercial & Business',
      description: 'Empowering businesses with capital for growth, acquisition, and operations.',
    },
    {
      icon: Building,
      title: 'Construction Funding',
      description: 'Specialized finance for property developers and construction projects.',
    },
  ];

  const trustBadges = [
    { icon: Shield, text: 'Secure & Encrypted' },
    { icon: Clock, text: '24/7 Support' },
    { icon: Award, text: 'Licensed & Regulated' },
    { icon: CheckCircle, text: 'Fast Approval' },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Small Business Owner',
      content: 'JSFS helped me secure a business loan within 48 hours. Their team was professional, transparent, and made the entire process seamless.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Property Investor',
      content: 'I was able to refinance my investment portfolio and save thousands. The customer service was exceptional and they guided me through every step.',
      rating: 5,
    },
    {
      name: 'Dr. Emma Thompson',
      role: 'Medical Practitioner',
      content: 'The medico finance package was perfectly tailored to my needs. Quick approval and amazing support. Highly recommend JSFS!',
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>JSFS Financial Services | Personal & Business Loans Australia</title>
        <meta name="description" content="Get fast approval on residential, business, and construction loans with JSFS. Competitive rates, secure process, and expert support. Apply now!" />
      </Helmet>

      <div className="bg-white">
        {/* Updated Hero Section with Background Image */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img className="w-full h-full object-cover" alt="Modern glass skyscraper architecture against blue sky" src="https://images.unsplash.com/photo-1471376169989-abdb446bf6cb" />
             <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white shadow-sm">
                  Your Financial and Loan Management Partner
                </h1>
                <p className="text-xl text-blue-100 mb-8 font-medium">
                  Expert financial solutions for residential, commercial, and development needs. We build your financial future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleApplyNow}
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 shadow-lg border-2 border-transparent"
                  >
                    Apply Now
                  </Button>
                  <Link to="/loan-services">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 w-full sm:w-auto"
                    >
                      View Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <badge.icon className="text-blue-600" size={32} />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Loan Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial solutions designed to meet your specific goals, from buying a home to funding large-scale developments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to="/loan-services">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      View All Services
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of satisfied customers who trust JSFS for their financial needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Started Today
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and our team will contact you within 24 hours
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
