import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['0433815156', 'Mon-Fri: 8am - 6pm AEST'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['jiniavikram@gmail.com', 'We respond within 24 hours'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Financial Street', 'Sydney, NSW 2000', 'Australia'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8am - 6pm', 'Saturday: 9am - 1pm', 'Sunday: Closed'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact JSFS Financial Services | Get in Touch</title>
        <meta name="description" content="Contact JSFS for loan inquiries. Call 0433815156, email jiniavikram@gmail.com, or visit our Sydney office. We're here to help with your financial needs." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
                <div className="bg-gray-200 rounded-xl overflow-hidden h-96 mb-6">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=151.2093%2C-33.8688%2C151.2193%2C-33.8588&layer=mapnik&marker=-33.8638%2C151.2143"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JSFS Office Location"
                  ></iframe>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Visit Us?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Face-to-face consultation with loan specialists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Document verification and application assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Personalized financial advice and planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Same-day preliminary loan assessments</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
