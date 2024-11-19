import React, { useEffect } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
  Facebook,
  Twitter,
  Share2,
  Instagram,
  Users,
  Home,
  TrendingUp,
} from "lucide-react";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i5 from "./i5.jpg";
import i7 from "./i7.jpg";
import i6 from "./i6.jpg";
import i8 from "./i8.jpg";
import i9 from "./i9.jpg";
import cu from "./cu.png";
import f from "./f.webp";

import nl from "./nl.webp";
const LuxuryMortgageLanding = () => {
  const socialLinks = {
    facebook: "https://facebook.com/elitemortgage",
    twitter: "https://twitter.com/elitemortgage",
    linkedin: "https://linkedin.com/company/elitemortgage",
    instagram: "https://instagram.com/elitemortgage",
  };

  const quickLinks = {
    "About Us": "/about",
    Services: "/services",
    Terms: "/terms",
    Privacy: "/privacy",
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      element.classList.add(
        "opacity-0",
        "translate-y-10",
        "transition-all",
        "duration-700"
      );
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 font-poppins">
            NIKHIL's MORTGAGE
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              "Home",
              "Services",
              "About",
              "Testimonials",
              "Properties",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      <section
        id="home"
        className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-on-scroll">
            Premium Mortgage Solutions for
            <span className="text-blue-900"> Luxury Homes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-on-scroll">
            Expert guidance and personalized service for discerning homeowners
            seeking premium mortgage solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-on-scroll">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
              Start Your Application
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue- 900 hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
        <img src={i9} alt="Luxury Home" className="w-full h-auto mt-8" />
      </section>

      <section className="py-20 px-4 bg-white" id="services">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
            Exclusive Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Luxury Home Mortgages",
                description:
                  "Tailored financing solutions for premium properties",
                link: "/services/luxury-homes",
              },
              {
                icon: TrendingUp,
                title: "Private Banking",
                description:
                  "Exclusive refinancing options for high-value estates",
                link: "/services/private-banking",
              },
              {
                icon: Users,
                title: "Investment Portfolio",
                description:
                  "Strategic mortgage solutions for property investors",
                link: "/services/investment",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-on-scroll"
              >
                <service.icon className="w-12 h-12 text-blue-900 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  className="text-blue-900 flex items-center hover:text-blue-700 transition-colors"
                >
                  Learn More <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <img src={i8} alt="Luxury Services" className="w-full h-auto mt-8" />
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sharad Sharma",
                testimonial:
                  "Elite Mortgage provided exceptional service and guidance throughout the entire process. Highly recommend!",
              },
              {
                name: "Shreya Joshi",
                testimonial:
                  "The team at Elite Mortgage made my home buying experience seamless and stress-free. Thank you!",
              },
            ].map((client) => (
              <div
                key={client.name}
                className="p-6 bg-white rounded-lg shadow-md animate-on-scroll"
              >
                <p className="text-gray-600 mb-4">"{client.testimonial}"</p>
                <h4 className="font-bold text-blue-900">{client.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <img
          src={i2}
          alt="Client Testimonials"
          className="w-full h-auto mt-8"
        />
      </section>

      <section id="properties" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
            Featured Properties
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: i7,
                title: "Stunning Villa in Malabar Hills",
                price: "3.5 Cr.",
              },
              {
                image: i3,
                title: "Modern Seaside house in Goa",
                price: "$5.2 Cr.",
              },
              {
                image: i5,
                title: "Luxury Beachfront Home in Mumbai",
                price: "$4.8 Cr.",
              },
            ].map((property) => (
              <div
                key={property.title}
                className="rounded-lg overflow-hidden shadow-lg animate-on-scroll"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-blue-900 font-semibold">
                    {property.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={i6}
          alt="Featured Properties"
          className="w-full h-auto mt-8"
        />
      </section>

      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What types of mortgages do you offer?",
                answer:
                  "We offer a variety of mortgage options including fixed-rate, adjustable-rate, and jumbo loans tailored to your needs.",
              },
              {
                question: "How long does the mortgage process take?",
                answer:
                  "The mortgage process can take anywhere from 30 to 45 days, depending on the complexity of your application.",
              },
              {
                question: "What documents do I need to apply?",
                answer:
                  "You'll need to provide proof of income, credit history, and details about the property you wish to purchase.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="p-4 bg-white rounded-lg shadow-md animate-on-scroll"
              >
                <h4 className="font-bold text-blue-900">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={f} alt="FAQ" className="w-96 h-auto mt-8 mx-auto" />
      </section>

      <section className="py-10 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">
          Contact us today to discuss your mortgage options and get a
          personalized quote.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300">
          Contact Us
        </button>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-on-scroll">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest news and updates on luxury mortgage solutions.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-900"
              placeholder="Enter your email"
            />
            <button className="bg-blue-900 text-white px-4 py-2 rounded-r-lg hover:bg-blue-800 transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
        <img src={nl} alt="Newsletter" className="w-full h-auto mt-8" />
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 animate-on-scroll">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px- 4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                    placeholder="Ram"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                    placeholder="Shetty"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  placeholder="ramshetty@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  rows="4"
                  placeholder="Tell us about your mortgage needs or any questions you have."
                ></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <img src={cu} alt="Contact Us" className="w-96 h-auto mt-8 mx-auto" />
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ELITE MORTGAGE</h3>
              <p className="text-gray-400">
                Your trusted partner in luxury mortgage solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2">
                <a
                  href="mob.no: 9835057375"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" /> (123) 456-7890
                </a>
                <a
                  href="mailto:@NIKHIL'smortgage.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" /> @NIKHIL'smortgage.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {Object.entries(quickLinks).map(([name, link]) => (
                  <a
                    key={name}
                    href={link}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {Object.entries(socialLinks).map(([platform, link]) => {
                  const Icon = {
                    facebook: Facebook,
                    twitter: Twitter,
                    linkedin: Share2,
                    instagram: Instagram,
                  }[platform];
                  return (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 NIKHIL's Mortgage. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <button className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LuxuryMortgageLanding;
