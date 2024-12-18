// src/components/TropicalEnv.js
import React from 'react';

function TropicalEnv() {
  return (
    <div className="tropical_container">
      <h2 className="tropical_main_head">Tropical Environment</h2>
      <div className="tropical_container_fbox">
        <p className="tropical_para">
          The Tropical zone stretches from the Tropic of Cancer to the Tropic of Capricorn, and is centered over the Equator. A range of environmental features 
          occurs in this area depending on the local climate, from lush, humid, biodiverse tropical rainforests to dry, more sparsely vegetated tropical scrub. 
          With adequate preparation and caution, you should be able to survive unsupported for extended periods—the jungle holds just as many resources as dangers. 
          Mosquitoes are responsible for more fatalities than any other creature in tropical areas. They carry a range of diseases, including malaria and yellow 
          fever, which kill millions of people every year.
        </p>

        <h3 className="tropical_subhead">Tropical Features</h3>
        <p className="tropical_para">
          Tropical rainforest, which occurs within 10 degrees of the equator, is the predominant environmental feature in the tropics. But there are several 
          other environment types just a few degrees of latitude away.
        </p>

        <h3 className="tropical_subhead">Verdant Rainforest</h3>
        <p className="tropical_para">
          Tropical rainforest occurs in areas with steady year-round temperatures and rainfall. Annual rainfall can reach around 2-3m, and daytime temperatures 
          may reach 90°F (30°C), dropping to 70°F (20°C) during the night. Monsoon (or "seasonal") rainforests occur in areas with wet and dry seasons, while 
          montane rainforests, also known as "cloud forests," occur in mountainous areas.
        </p>

        <h3 className="tropical_subhead">Scrub and Swamps</h3>
        <p className="tropical_para">
          Also known as "thorn forest," tropical scrub consists of low, woody plants with thorns, which usually grow in clusters separated by patches of bare 
          ground (grasses are uncommon). Leaves are shed in the dry season, forming a dense, herbaceous layer in the wet season. Swamps are another common 
          tropical feature and may consist of freshwater or saltwater. Freshwater swamps are found in low-lying, inland areas and consist of masses of 
          undergrowth, reeds, grasses, and islands.
        </p>

        <h3 className="tropical_subhead">Tropical Essentials</h3>
        <div className="tropical_para">
          <p>Rainforests contain everything you need to stay alive, so remember the following tips when venturing out:</p>
          <ul>
            <li>
              While the jungle teems with predatory wildlife (such as big cats, crocodiles, and anacondas) that see you as part of the food chain, it is the 
              small creatures that can make life miserable. Most animals in the jungle want to avoid you as much as you want to avoid them—making a noise 
              will scare most away.
            </li>
            <li>
              High humidity encourages infections, so keep everything covered (sleeves down, gloves on), and wash at every opportunity.
            </li>
            <li>Always sleep off the ground.</li>
            <li>
              Boil or treat all water. Some water found in plants can be safe to drink, but if in doubt, and if the water is yellow, milky, or very cloudy, 
              treat before drinking.
            </li>
            <li>
              Many plants have defense mechanisms and can emit toxic liquids that may sting or burn—if you can't identify it, leave it alone.
            </li>
            <li>
              Dry tinder can be hard to find, so if you come across any, collect it and keep it safe and dry—lighting a fire in a moist, humid environment can 
              be challenging.
            </li>
            <li>
              The smoke of a signal fire must penetrate through all the layers of the jungle, so light your fire where the canopy is sparse, such as at the 
              bend of a river or a clear-cut area.
            </li>
            <li>
              Navigation can be difficult, as you may only be able to see a few yards in front of you. Use dead reckoning—walking a short distance to a 
              recognizable feature on your bearing—or pace-counting.
            </li>
            <li>Rivers in the jungle usually run downhill to civilization and, eventually, the coast.</li>
            <li>Don't fight the jungle—tune in to its rhythm and work with it rather than against it.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TropicalEnv;
