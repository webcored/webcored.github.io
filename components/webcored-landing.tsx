'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Code, Smartphone, Server, BotIcon as Robot, Clock, CheckCircle, Eye, Search, Cloud, Zap, Github, MessageCircle, TestTube } from 'lucide-react'

export function WebcoredLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-3xl font-bold text-white">Webcored</a>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-white hover:text-yellow-300 transition-colors">Services</a>
            <a href="#why-us" className="text-white hover:text-yellow-300 transition-colors">Why Us</a>
            <a href="#process" className="text-white hover:text-yellow-300 transition-colors">Process</a>
            <a href="#projects" className="text-white hover:text-yellow-300 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-yellow-300 transition-colors">Contact</a>
            <a href="https://github.com/webcored?utm_source=webcored.com" className="text-white hover:text-yellow-300 transition-colors" target="_blank">
              <Github  />
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <a href="#services" className="block py-2 text-white hover:text-yellow-300 transition-colors">Services</a>
            <a href="#why-us" className="block py-2 text-white hover:text-yellow-300 transition-colors">Why Us</a>
            <a href="#process" className="block py-2 text-white hover:text-yellow-300 transition-colors">Process</a>
            <a href="#projects" className="block py-2 text-white hover:text-yellow-300 transition-colors">Projects</a>
            <a href="#contact" className="block py-2 text-white hover:text-yellow-300 transition-colors">Contact</a>
          </div>
        )}
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your Digital Presence with Webcored
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering businesses with cutting-edge web solutions and innovative digital strategies.
          </motion.p>
          <motion.a 
            href="#contact" 
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-bold py-3 px-8 rounded-full text-lg transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start Your Digital Journey
          </motion.a>
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ChevronDown className="w-12 h-12 text-white mx-auto animate-bounce" />
          </motion.div>
        </section>

        <ScrollAnimationWrapper>
          <section id="services" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-white mb-12">Our Comprehensive Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={<Code className="w-12 h-12" />}
                  title="Website Development"
                  description="Create modern, responsive websites that engage your audience and drive conversions."
                />
                <ServiceCard 
                  icon={<Smartphone className="w-12 h-12" />}
                  title="App Development"
                  description="Build powerful mobile and web applications that streamline your business processes."
                />
                <ServiceCard 
                  icon={<Server className="w-12 h-12" />}
                  title="Backend Services & Consultancy"
                  description="Develop robust backend services and get expert guidance on system architecture and optimization."
                />
                <ServiceCard 
                  icon={<Robot className="w-12 h-12" />}
                  title="AI-Powered Automation"
                  description="Leverage AI to automate processes, enhance efficiency, and drive innovation."
                />
                <ServiceCard 
                  icon={<Search className="w-12 h-12" />}
                  title="SEO Optimization"
                  description="Improve your online visibility and attract more customers with our expert SEO strategies."
                />
                <ServiceCard 
                  icon={<Eye className="w-12 h-12" />}
                  title="UX/UI Design"
                  description="Create intuitive and visually appealing interfaces that delight your users."
                />
                <ServiceCard 
                  icon={<Cloud className="w-12 h-12" />}
                  title="Cloud Solutions & Consultancy"
                  description="Optimize your cloud infrastructure and strategy for scalability and efficiency."
                />
                <ServiceCard 
                  icon={<Github className="w-12 h-12" />}
                  title="Open Source Tooling"
                  description="Contribute to and develop open-source tools that empower the developer community."
                />
                <ServiceCard 
                  icon={<TestTube className="w-12 h-12" />}
                  title="QA Audits & Automation"
                  description="Ensure top-notch quality with our comprehensive QA audits and test automation services."
                />
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section id="why-us" className="bg-gradient-to-r from-purple-500 to-pink-500 py-20 text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">Why Choose Webcored?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<CheckCircle className="w-12 h-12" />}
                  title="Uncompromising Quality"
                  description="We deliver solutions that exceed expectations and stand the test of time."
                />
                <FeatureCard 
                  icon={<Code className="w-12 h-12" />}
                  title="Clean, Efficient Code"
                  description="Our rigorous development practices ensure minimal bugs and optimal performance."
                />
                <FeatureCard 
                  icon={<Clock className="w-12 h-12" />}
                  title="Timely Delivery"
                  description="We pride ourselves on meeting deadlines and delivering projects on schedule."
                />
                <FeatureCard 
                  icon={<Smartphone className="w-12 h-12" />}
                  title="Cutting-Edge Solutions"
                  description="Stay ahead with our innovative, future-proof digital solutions."
                />
                <FeatureCard 
                  icon={<Eye className="w-12 h-12" />}
                  title="User-Centric Approach"
                  description="We design and develop with your end-users as our primary focus."
                />
                <FeatureCard 
                  icon={<Search className="w-12 h-12" />}
                  title="SEO Excellence"
                  description="Boost your online presence with our SEO-optimized development practices."
                />
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section id="process" className="bg-white py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Our Proven Process</h2>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                <ProcessStep icon={<Search className="w-8 h-8" />} title="Discover" description="We analyze your business needs and goals to create a tailored strategy." />
                <ProcessStep icon={<Zap className="w-8 h-8" />} title="Design" description="Our team crafts intuitive and visually appealing solutions." />
                <ProcessStep icon={<Code className="w-8 h-8" />} title="Develop" description="We build robust, scalable applications using cutting-edge technologies." />
                <ProcessStep icon={<Server className="w-8 h-8" />} title="Deploy" description="We launch your digital presence and provide ongoing support and maintenance." />
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section id="projects" className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-white mb-12">Our Projects & Client Feedback</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard 
                  title="E-commerce Platform"
                  description="Built a scalable e-commerce platform with AI-powered recommendations."
                  feedback="Webcored transformed our online presence. Sales have increased by 200% since launch!"
                  client="John Doe, CEO of TechMart"
                />
                <ProjectCard 
                  title="Healthcare App"
                  description="Developed a HIPAA-compliant healthcare app for remote patient monitoring."
                  feedback="The app has revolutionized how we care for our patients. Webcored's expertise in both healthcare and technology is unmatched."
                  client="Dr. Jane Smith, CTO of HealthTech"
                />
                <ProjectCard 
                  title="Financial Dashboard"
                  description="Created a real-time financial dashboard with advanced data visualization."
                  feedback="The insights we've gained from this dashboard have been game-changing for our investment strategies."
                  client="Mike Johnson, CFO of InvestCorp"
                />
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <section id="contact" className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-white mb-12">Let&apos;s Build Your Digital Future</h2>
              <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-md transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </ScrollAnimationWrapper>
      </main>

      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Webcored. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB Button */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}

function ServiceCard({ icon, title, description }: any) {
  return (
    <motion.div 
      className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-filter backdrop-blur-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover="hover"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.05 }
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.div 
        className="flex justify-center mb-4 text-white"
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: 360, transition: { duration: 0.5 } }
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </motion.div>
  )
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <motion.div 
      className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

function ProcessStep({ icon, title, description }: any) {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-purple-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  )
}

function ProjectCard({ title, description, feedback, client }: any) {
  return (
    <motion.div 
      className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <div className="mt-4">
        <p className="text-yellow-300 italic mb-2">&quot;{feedback}&quot;</p>
        <p className="text-white text-sm">- {client}</p>
      </div>
    </motion.div>
  )
}

function ScrollAnimationWrapper({ children }: any) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}