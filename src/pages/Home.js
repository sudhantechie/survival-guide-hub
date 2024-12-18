import React from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Navigate to the "Getting Started" page
  const handleExploreClick = () => {
    navigate("/gettingstarted");
  };

  return (
    <ParallaxProvider>
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          Welcome to <span className="highlight">Survival Guide Hub</span>
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
          onClick={handleExploreClick}
        >
          Getting Started
        </motion.button>
      </motion.div>

      <section id="features" className="features">
        <h2 className="section-heading">Our Key Features</h2>
        <div className="feature-highlights colorful">
          {[
            { title: "Basic Principles of Survival", text: "Essential guidelines to prepare, respond, and adapt to any challenging situation effectively." },
            { title: "Survival Skills", text: "Essential skills to stay safe and secure in the wild." },
            { title: "Gear Reviews", text: "Comprehensive reviews of the best survival gear." },
            { title: "Emergency Alerts", text: "Stay updated with real-time alerts for any crisis." },
          ].map((feature, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="feature-item">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="rich-content" className="rich-content">
        <h2 className="section-title">Explore Our Guides</h2>
        <div className="content-grid">
          {[
            { title: "Shelter Building", text: "Learn to construct durable shelters with minimal resources.", bgColor: "#fce4ec" },
            { title: "Water Purification", text: "Master techniques to find and purify water in the wild.", bgColor: "#e1f5fe" },
            { title: "Emergency First Aid", text: "Become a lifesaver with our comprehensive first aid guide.", bgColor: "#e8f5e9" },
            { title: "Foraging for Food", text: "Identify edible plants and resources for sustenance.", bgColor: "#fff3e0" },
            { title: "Fire Starting", text: "Essential methods for creating fire in any condition.", bgColor: "#ede7f6" },
            { title: "Navigation Basics", text: "Master map reading and orientation skills for the outdoors.", bgColor: "#ffe0b2" },
          ].map((guide, index) => (
            <div
              key={index}
              className="content-item"
              style={{ backgroundColor: guide.bgColor }}
            >
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-cards colorful">
          {[
            { text: "Survival Guide Hub gave me the confidence to face any challenge!", author: "John" },
            { text: "I found basic skills for my outdoor adventures. Highly recommend!", author: "Henry" },
            { text: "The guides are incredibly detailed and easy to follow!", author: "Emily" },
            { text: "The survival tips feature has been a game-changer for my family.", author: "Neil" },
          ].map((testimonial, index) => (
            <motion.div key={index} className="testimonial-card" whileHover={{ scale: 1.05 }}>
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Stay Connected</h2>
        <p>
          Have questions or need advice? Contact us at{" "}
          <span className="highlight">support@survivalguidehub.com</span>.
        </p>
      </section>
    </ParallaxProvider>
  );
};

export default Home;
