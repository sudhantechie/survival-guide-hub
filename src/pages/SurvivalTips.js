import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SurvivalTips = () => {
  // State to track the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Array of survival tips
  const tips = [
    {
      title: 'Stay Calm in Crisis',
      content: [
        'Focus on breathing to calm yourself.',
        'Take a moment to assess the situation.',
        'Prioritize the most important tasks.',
        'Don\'t make rash decisions under pressure.',
        'Remember that panic only makes things worse.',
      ],
    },
    {
      title: 'Find Safe Drinking Water',
      content: [
        'Look for streams or fresh water sources.',
        'Always boil water before drinking if unsure of its safety.',
        'Use water purification tablets or filters if available.',
        'Keep a water bottle with you to store fresh water.',
        'Never drink from stagnant water sources.',
      ],
    },
    {
      title: 'Build a Shelter',
      content: [
        'Find a location with natural protection.',
        'Build a shelter that protects you from wind and rain.',
        'Use large branches and leaves for insulation.',
        'Make sure your shelter is above ground to stay dry.',
        'Ensure there is enough space for you to lie down comfortably.',
      ],
    },
    {
      title: 'Create a Fire',
      content: [
        'Gather dry wood and kindling to start the fire.',
        'Use a flint or fire starter to ignite the fire.',
        'Keep the fire small and manageable to conserve wood.',
        'Build a fire ring to protect the fire from spreading.',
        'Always have a way to put out the fire safely when done.',
      ],
    },
    {
      title: 'Find Food in the Wild',
      content: [
        'Look for edible berries and fruits.',
        'Search for nuts or seeds as food sources.',
        'Learn which plants are safe to eat and which are poisonous.',
        'If you can fish, look for rivers or lakes to catch fish.',
        'Learn how to trap small animals for food.',
      ],
    },
    {
      title: 'Signal for Help',
      content: [
        'Use a whistle or loud noises to attract attention.',
        'Build a large smoky fire to signal from a distance.',
        'Create ground markings in large letters (SOS) for aircraft to see.',
        'Reflect sunlight using mirrors or metal surfaces.',
        'Wear brightly colored clothing to increase visibility.',
      ],
    },
    {
      title: 'Avoid Wildlife',
      content: [
        'Make noise while walking to avoid surprising animals.',
        'Keep your food stored securely to prevent attracting wildlife.',
        'Use a flashlight or fire to keep animals away at night.',
        'Know which animals are dangerous in your area and avoid them.',
        'Learn basic self-defense techniques in case of an animal attack.',
      ],
    },
    {
      title: 'Keep Your Body Warm',
      content: [
        'Wear layers of clothing to trap body heat.',
        'Stay dry, as wet clothing increases heat loss.',
        'Use a fire or shelter to protect yourself from the cold.',
        'Keep your extremities (hands, feet) warm to maintain overall body warmth.',
        'Stay active to keep your blood circulating and your body temperature stable.',
      ],
    },
    {
      title: 'Stay Hydrated',
      content: [
        'Drink water regularly, especially in hot conditions.',
        'Conserve water when possible by limiting physical activity.',
        'Purify water from natural sources to prevent illness.',
        'If water is scarce, use a tarp or plastic sheet to collect rainwater.',
        'Avoid drinking seawater, as it will dehydrate you further.',
      ],
    },
    {
      title: 'Use Natural Materials for Tools',
      content: [
        'Use rocks as cutting tools or scrapers.',
        'Create a spear or hunting tool using wood and sharp stones.',
        'Use vines and plant fibers to make ropes or bindings.',
        'Find or create containers from bark, wood, or stone.',
        'Learn how to create makeshift tools from available resources.',
      ],
    },
    {
        title: 'Protect Yourself from Insects',
        content: [
            'Wear long sleeves and pants to minimize skin exposure.',
            'Use natural repellents like citronella or eucalyptus.',
            'Build a shelter that keeps insects out.',
            'Avoid stagnant water, which attracts mosquitoes.',
            'Stay clean, as odors can attract insects.'
        ],
    },
    {
        title: 'Build a Fire Starter Kit',
        content: [
          'Include waterproof matches or a lighter.',
          'Gather dry tinder, such as pine needles or dry leaves.',
          'Include a flint and steel as a backup fire-starting method.',
          'Store your kit in a waterproof container.',
          'Keep your fire starter kit easily accessible.',
        ],
      },
      {
        title: 'Create a Solar Still for Water',
        content: [
          'Dig a hole in the ground and place a container in the center.',
          'Fill the hole with water, then cover with clear plastic.',
          'Place a small rock in the center to create a low point for condensation to collect.',
          'The sun will evaporate water, which then condenses on the plastic and drips into the container.',
          'Use this method to collect purified water in the absence of other sources.',
        ],
      },
      {
        title: 'Make Traps for Small Animals',
        content: [
          'Set snares using wire or strong string.',
          'Use branches or rocks to make simple deadfall traps.',
          'Place traps near animal tracks or dens.',
          'Check traps regularly to ensure animals aren’t left suffering.',
          'Learn how to identify which animals you can safely trap and eat.',
        ],
      },
      {
        title: 'Use the Stars for Navigation',
        content: [
          'Identify the North Star in the northern hemisphere.',
          'Use constellations like the Big Dipper to locate north.',
          'In the southern hemisphere, look for the Southern Cross constellation.',
          'Learn how to use the moon and stars to find your direction.',
          'Carry a compass for backup when navigating at night.',
        ],
      },
      {
        title: 'How to Collect Rainwater',
        content: [
          'Set up large containers or tarps to collect rainwater.',
          'Ensure containers are clean to avoid contamination.',
          'If needed, use a cloth or filter to purify the water before drinking.',
          'Use natural materials like bamboo or leaves to funnel water into containers.',
          'Store rainwater in a cool, shaded place to prevent bacteria growth.',
        ],
      },
      {
        title: 'Using Rocks for Cutting Tools',
        content: [
          'Find hard rocks like flint or obsidian, which are easier to shape into sharp edges.',
          'Use another rock to chip and shape the edges into a cutting tool.',
          'Create a basic knife by attaching a sharpened rock to a stick using rope or vines.',
          'Use the sharp rock to cut through wood, animal hides, or other materials.',
          'Practice using these tools safely to avoid injury.',
        ],
      },
      {
        title: 'How to Make a Basic Shelter with a Tarp',
        content: [
          'Use trees or rocks to create a frame for your shelter.',
          'Spread the tarp over the frame to create a waterproof roof.',
          'Anchor the tarp with heavy objects or rope to prevent it from flying away.',
          'Ensure the tarp is sloped to allow rainwater to run off.',
          'Place a mat or leaves under the tarp for added comfort and insulation.',
        ],
      },
      {
        title: 'How to Stay Hydrated in the Desert',
        content: [
          'Travel during the cooler parts of the day, early morning or late evening.',
          'Conserve sweat by covering your skin with clothing and hats.',
          'Look for signs of moisture in the desert, such as vegetation or animal tracks.',
          'Dig small holes in sandy areas where water may collect underneath the surface.',
          'If you find water, filter or boil it to ensure safety before drinking.',
        ],
      },
      {
        title: 'How to Make an Emergency Signal Fire',
        content: [
          'Gather dry wood and materials to create a large, noticeable fire.',
          'Use green leaves, pine needles, or wet wood to create thick smoke.',
          'Build the fire in an open area where it is visible from a distance.',
          'Keep the fire burning by continuously adding more wood and materials.',
          'Signal rescuers by adding more smoke at regular intervals.',
        ],
      },
      {
        title: 'How to Find North Without a Compass',
        content: [
          'Look for the position of the sun: it rises in the east and sets in the west.',
          'In the northern hemisphere, moss often grows on the north side of trees.',
          'If you have a watch, point the hour hand at the sun and find the halfway point between it and 12 o\'clock for an approximate north-south line.',
          'At night, find the North Star (Polaris) to locate the direction of north.',
          'Use a stick and shadow method: place a stick vertically in the ground, mark the tip of its shadow, wait 15-30 minutes, and mark the new shadow tip. A line between the marks will give you an east-west line.',
        ],
      },
      {
        title: 'How to Use Snow for Water',
        content: [
          'Never eat snow directly; it can lower your body temperature and lead to hypothermia.',
          'Collect clean, fresh snow to melt it for drinking water.',
          'Use a container over a fire to melt the snow quickly and safely.',
          'If no fire is available, place snow inside a container and let the sun melt it.',
          'Once melted, if possible, purify the water by boiling it to remove any impurities.',
        ],
      },
      {
        title: 'How to Make a Quick Trap for Small Game',
        content: [
          'Use snares made from wire, rope, or vines to create a loop that tightens around the animal’s body.',
          'Set the trap along an animal’s known path or near their food sources, such as berries or water.',
          'Camouflage the trap with leaves, branches, and dirt to make it less noticeable to animals.',
          'Check the trap regularly to ensure the animal hasn’t been caught too long, as they may escape or spoil quickly.',
          'Be patient; trapping can take time and persistence to be successful.',
        ],
      },
      {
        title: 'How to Find Shelter in the Jungle',
        content: [
          'Look for a natural shelter like a cave, overhanging rock, or a dense cluster of trees.',
          'Build a lean-to shelter by leaning branches against a tree or structure, covering it with foliage.',
          'Be aware of dangerous animals and insects; avoid building near ant nests, beehives, or predator dens.',
          'Place your shelter near a water source but not too close to avoid flooding or attracting wildlife.',
          'Use leaves or bamboo to create a waterproof roof to protect from rain and keep dry inside.',
        ],
      },
      {
        title: 'How to Treat a Burn in the Wild',
        content: [
          'If possible, cool the burn immediately by running it under cool water or applying cool, damp cloths.',
          'If water isn’t available, apply mud or cool, clean leaves to reduce the heat.',
          'Avoid using ice, as it can cause additional damage to the skin.',
          'Cover the burn with a sterile cloth or bandage to protect it from dirt and infection.',
          'Seek medical help as soon as possible, as burns can become serious without proper care.',
        ],
      },
      {
        title: 'How to Build a Solar Still for Drinking Water',
        content: [
          'Dig a hole in the ground that’s about 3 feet wide and 2 feet deep.',
          'Place a container (like a cup or a small bowl) at the bottom of the hole.',
          'Surround the container with moist soil or leaves to provide the water vapor.',
          'Cover the hole with a clear plastic sheet or tarp. The sheet should be tight around the edges to create a seal.',
          'Place a small stone in the center of the sheet to create a low point for condensation to collect and drip into the container below.',
          'Leave the still in the sun for several hours. The water will evaporate, condense on the plastic, and then drip into your container for safe drinking water.',
        ],
      },
      {
        title: 'How to Use Tree Bark for Shelter',
        content: [
          'Find a large, mature tree with thick, flexible bark, like birch or cedar.',
          'Use a sharp tool or a knife to carefully peel the bark away from the tree in large strips. Be mindful not to damage the tree.',
          'Once you have enough bark, layer it over a makeshift framework made of branches, or drape it over a sturdy branch to create a small shelter.',
          'Overlap the bark layers to ensure water doesn’t seep through. The thicker the bark, the more insulated the shelter will be.',
          'If it’s cold or rainy, you can further improve insulation by layering leaves or moss inside your shelter.',
        ],
      },
    ];

  // Filter tips based on search query
  const filteredTips = tips.filter(tip =>
    tip.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="main-content">
      <section id="survival-tips" className="content-section">
        <div className="container">
        {filteredTips.length > 0 && <h1 className="survivalhead1">Survival Tips</h1>}

          <div className="search-container">
          <input
            type="text"
            placeholder="Search for tips..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-bar"
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
      
          <div className="tips-container">
            {filteredTips.length > 0 ? (
              filteredTips.map((tip, index) => (
                <div className="tip" key={index}>
                  <h3>{tip.title}</h3>
                  <ul>
                    {tip.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
               </div>
            ))
          ) : (
            <div className="no-results">
            <h3>We couldn't find any tips matching "{searchQuery}"</h3>
            <p>Try a different search term.</p>
            <p>Here are some suggestions to help you:</p>
            <ul>
              <li>Check for spelling errors in your search.</li>
              <li>Click <a href="/survival-tips" style={{ textDecoration: 'none', color: 'darkblue' }}>here</a> to view the complete list of survival tips.</li>

            </ul>
          </div>
          
          )}
        </div>
      </div>
      </section>
    </main>
  );
};

export default SurvivalTips;
