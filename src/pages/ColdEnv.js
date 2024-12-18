// src/components/ColdEnv.js
import React from 'react';

function ColdEnv() {
  return (
    <div className="cold_container">
      <h2 className="cold_main_head">Cold Environment</h2>
      <div className="cold_container_fbox">
        <p className="cold_para">
          Low temperatures are a potentially lethal hazard, but as long as you can conserve body heat, survival in the cold is quite possible. The ice-covered Arctic 
          and Antarctic polar regions, sub-polar tundra, and taiga, as well as parts of most temperate zones during the winter, can all be classified as cold 
          environments. Wet, windy weather can drive moderately cold temperatures down further, increasing the risk of the most lethal cold-weather condition—hypothermia.
        </p>

        <h3 className="cold_subhead">Cold Environment Features</h3>
        <p className="cold_para">
          Outside temperate areas, the typical cold environments are the polar areas, which feature glacial ice sheets and sea; tundra, which contains permafrost 
          (permanently frozen soil), small shrubs, mosses, and lichens; and taiga, with extensive conifer forests. Almost half of the northern hemisphere's landmass 
          can be classified as a cold region, due to the influence of cold air masses, while ocean currents and altitude can have a cooling effect. The largest 
          predatory land mammals on Earth, the polar bear inhabits the Arctic. Attacks are likely when the bears are hungry and are usually fatal.
        </p>

        <h3 className="cold_subhead">Surviving in the Cold</h3>
        <p className="cold_para">
          Natural resources may be scarce in cold environments, so your survival is likely to depend on the equipment and supplies you have with you. Shelters can 
          be dug from the snow to help you stay warm and avoid exposure to freezing temperatures, but material for making fire is limited in polar and tundra areas. 
          Survival is more feasible in the taiga, where wood is available, and fresh water and edible flora and fauna can also be found. The greatest dangers are 
          hypothermia and—in northern polar areas—polar bears.
        </p>

        <h3 className="cold_subhead">Cold Essentials</h3>
        <ul className="cold_para">
          <li>Dress in loose-fitting layers of clothing, avoid overheating, and ensure your clothing stays dry and clean.</li>
          <li>If your hands are cold, don't warm them with your breath, which will make them wet—tuck them under your armpits.</li>
          <li>Regularly check your extremities (face, toes, hands, and ears) for frostnip, the first stage of frostbite.</li>
          <li>Wind-chill is dangerous, so take shelter from the wind at every opportunity, particularly if you are in a survival situation.</li>
          <li>Always ensure that your shelter is well-ventilated—keep vent holes clear and check regularly, especially when snow falls.</li>
          <li>Get off the cold ground, snow, or ice—sit on your pack or make a sleeping platform using boughs to avoid losing body heat.</li>
          <li>If fire is your primary means of warmth, triple the amount of firewood you think you need—you will need enough to last the night.</li>
        </ul>
      </div>
    </div>
  );
}

export default ColdEnv;
