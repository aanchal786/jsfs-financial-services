import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, TrendingUp, Shield } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring personalized service and support.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and honesty guide all our interactions, building trust with every client.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in service delivery, continuously improving to exceed expectations.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve the best financial outcomes.',
    },
  ];

  const team = [
    {
      name: 'Michael Anderson',
      role: 'Chief Executive Officer',
      description: '20+ years in financial services with a passion for helping Australians achieve their financial goals.',
    },
    {
      name: 'Jennifer Roberts',
      role: 'Head of Lending',
      description: 'Expert in loan structuring and risk assessment, committed to finding the right solution for every client.',
    },
    {
      name: 'David Williams',
      role: 'Customer Relations Manager',
      description: 'Dedicated to ensuring exceptional customer experience and satisfaction at every touchpoint.',
    },
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '10,000+', label: 'Happy Clients' },
    { value: '$500M+', label: 'Loans Approved' },
    { value: '4.9/5', label: 'Customer Rating' },
  ];

  return (
    <>
      <Helmet>
        <title>About JSFS Financial Services | Our Story & Mission</title>
        <meta name="description" content="Learn about JSFS Financial Services - your trusted partner in financial solutions. Discover our mission, values, and experienced team dedicated to your success." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About JSFS Financial Services</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Empowering Australians with smart financial solutions since 2010
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2010, JSFS Financial Services was born from a simple vision: to make quality financial services accessible to all Australians. We recognized that traditional lending institutions often overlooked the unique needs of individuals and small businesses.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Over the past 15 years, we've grown from a small team with a big dream to one of Australia's most trusted financial service providers. We've helped over 10,000 clients achieve their financial goals, approving over $500 million in loans.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we continue to innovate and adapt, leveraging technology while maintaining the personal touch that sets us apart. Our commitment remains unchanged: providing transparent, efficient, and client-focused financial solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img alt="JSFS office building and team" className="rounded-2xl shadow-xl" src="https://images.unsplash.com/photo-1693305886158-24d846d889f9" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg">
                  To empower individuals and businesses with accessible, transparent, and flexible financial solutions that enable them to achieve their goals and build a prosperous future.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg">
                  To be Australia's most trusted and innovative financial services provider, recognized for exceptional customer service, ethical practices, and transformative financial solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced professionals dedicated to your financial success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <img alt={`${member.name} - ${member.role}`} className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1575383596664-30f4489f9786" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
