// src/App.js
import React from 'react';


function GettingStarted() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Survival Guide Hub</h1>
        <p>Your go-to resource for survival tips, kit.</p>
      </header>

      <section className="intro-section">
        <h2>Why Survival Skills Matter</h2>
        <p>
          In an unpredictable world, being prepared for unexpected situations is more important than ever. Whether you're an avid outdoors enthusiast, a traveler, or someone just looking to be more self-reliant, understanding survival techniques can save lives. Survival skills are not just for extreme scenarios—they apply to everyday life, from basic first aid to knowing how to stay calm in emergencies.
        </p>

        <p>
          At the Survival Guide Hub, we believe that knowledge is the key to surviving and thriving. Through our expertly crafted content, you can learn everything you need to know about survival techniques, emergency preparedness, and resilience in the face of adversity.
        </p>

        <p>
          Whether you're venturing into the wilderness, preparing for a natural disaster, or simply want to be ready for any situation, our guides provide step-by-step instructions and expert advice to help you navigate even the most challenging scenarios with confidence.
        </p>

        <h3>Your Journey Starts Here</h3>
        <p>
          Start by exploring our comprehensive survival guides, or dive right into our recommended starter topics. The sooner you start, the better prepared you'll be when you need it most. 
        </p>
      </section>

      <section className="getting-started-section">
        <h2>Introduction</h2>
        <p>
          Welcome to the <strong>Survival Guide Hub</strong>, your ultimate resource for everything related to surviving and thriving in challenging situations. Whether you're exploring the wild, or preparing for unforeseen emergencies, we provide expert advice, proven strategies, and step-by-step tutorials to equip you with the knowledge and skills to face any situation.
        </p>

        <p>
          Our mission is simple: to help you become self-sufficient, confident, and capable of handling any survival scenario. We believe that anyone can learn the fundamentals of survival, and through proper knowledge and preparation, you can greatly improve your chances of survival in an emergency.
        </p>

        <p>
          Here at the Survival Guide Hub, you'll find resources covering a wide variety of topics, including:
        </p>
        
        <ul className="intro-list">
          <li><strong>Wilderness Survival</strong> – Learn how to build shelters, make fire, and find food in the wild.</li>
          <li><strong>First Aid & Medical Training</strong> – Basic first aid, CPR, and how to treat injuries in emergency situations.</li>
          <li><strong>Emergency Kits & Gear</strong> – How to pack the right survival gear and create an emergency kit for various scenarios.</li>
          <li><strong>Self-Defense</strong> – Skills and techniques for defending yourself in dangerous situations.</li>
          <li><strong>Psychological Resilience</strong> – Staying calm, focused, and positive under stress and pressure.</li>
        </ul>

        <p>
          No matter where you're starting, we have something for everyone, whether you're a seasoned survivalist or just beginning to learn about self-reliance. Our goal is to help you feel prepared, empowered, and ready to take on any challenge the world throws your way.
        </p>

        <h3>Getting Started</h3>
        <p>
          To begin your survival journey, follow these initial steps to ensure you have the knowledge and skills needed to face any challenge:
        </p>

        <div className="steps">
          <div className="step">
            <h3>1. Learn Basic Skills</h3>
            <p>Start with mastering fundamental survival skills such as shelter building, fire-making, and navigation in the wilderness.</p>
          </div>
          <div className="step">
            <h3>2. Plan Your Survival Kit</h3>
            <p>Equip yourself with the right survival gear. Check out our recommendations for essential items you should always have with you.</p>
          </div>
          <div className="step">
            <h3>3. Understand Different Environments</h3>
            <p>Every environment is unique. Learn how to adapt your strategies to different ecosystems—whether it's a forest, desert, or water zone.</p>
          </div>
          <div className="step">
            <h3>4. Stay Updated</h3>
            <p>Stay informed with the latest survival trends and expert tips.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GettingStarted;
