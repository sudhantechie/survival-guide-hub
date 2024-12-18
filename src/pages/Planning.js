// src/components/Planning.js
import React from 'react';

function Planning() {
  return (
  <div className='planning_container'>
    <h2 className='planning_main_head'>Planning Your Journey</h2>
    <div className='planning_container_fbox'>
      <p className='planning_para'>Whether your trip involves a day out with you backpack or a full expedition over weeks, crossing continents in four-wheel-drive vehicles, you need to plan it very carefully. The plan for your day out won't be as detailed as it would be for the longer expedition, but it's equally important. It's a good idea to have a basic planning outline for your most regular trips, to which you can add supplementary information as your trips become more involved. </p>
    <h3 className='planning_subhead'>Minimizing The "If_Only"</h3>
      <p className='planning_para'>There's no way that you can plan for every eventuality-there are just too mnay variables-but what you can do is look at the type of trip you intend to take, and ensure that if a situation arises you're not left wishing you'd done something differently. The time to minimize the chances of an "if only" situation is during the planning stage. Look at the potential problems and risks, to avoid them, and equip with the knowledge and/or equipment to deal with them if they arise.</p>
    <h3 className='planning_subhead'>The Six P's</h3>
      <p className='planning_para'>Remember the six p's: <strong>P</strong>rior, <strong>P</strong>lanning, <strong>P</strong>reparation, <strong>P</strong>revents, <strong>P</strong>oor, <strong>P</strong>erformanace. Research has shown that the longer and complicated the trip is, the less likely there is to be major "survival" situation. This type of trip is likely to be well orginized, and potential problems will have been considered. This means that can either to be avoided, or that there will be mechanisms in place to deal with them. In many ways, simply having a good understanding of how to deal with a situation,and being able to interpret the basic principle of survival, can prevent a minor problem from escalating into a disaster. In a survival situation it may be your knowledge, combined with your ability to improvise, that determines whether you become a survivor or a statistic.</p> 
    <h3 className='planning_subhead'>Organizational Priorities</h3>
      <p className='planning_para'>When planning for a trip always start with most important things-known as the "show-stoppers." These are generally the things that would actually stop the trip from happening in the first place if not organized in advance. If you then work backward from the show-stoppers to items that would simply make the trip more comfortable,most other things will fall into place. The chart on the right lists the things that you definitely cannot do without.</p>
    <h3 className='planning_subhead'>Show-Stoppers</h3>
       <div className='show_stoppers'>
         <label className='show_stopper'><strong>Money:</strong></label>
           <div className='show_stopper_pt'>
             <p>• You'll need enought to cover your needs plus extra for emergencies.</p>
             <p>• It must be in the correct currency for the country you are visiting.</p>
             <p>• Ensure your ATM card is set up for use in that particluar country.</p>
             <p>• Make sure you have a secure way of storing your money.</p>
           </div>
         <label className='show_stopper'><strong>Passport:</strong></label>
           <div className='show_stopper_pt'>
             <p>• Your Passport must be valid. If you need to renew it, do so well in advance.</p>
             <p>• Some countries require your passport to be valid for a number of month after your visit.</p>
             <p>• Keep your passport number in several places, such as inside your survival kit.</p>
             <p>• Keep your passport safe, and in a waterproof container, such as a Ziploc bag.</p> 
           </div>
         <label className='show_stopper'><strong>Visa:</strong></label>
           <div className='show_stopper_pt'>
             <p>• Research the regulations regarding visas relevent to the countries you're traveling to.</p>
             <p>• Find out how to apply, how far in advance you should apply, whether or not you can apply in the country, and what other documents you need.</p>
             <p>• As with the passport, always keep your visa safe, dry, and in good condition.</p>
           </div>
         <label className='show_stopper'><strong>Vaccination:</strong></label>
           <div className='show_stopper_pt'>
             <p>• Check the regulations for the country-many have strict vaccination policies.</p>
             <p>• Ensure you have the vaccination, and any boosters, within the correct timeframe.</p>
             <p>• Some inoculations last only for six months, so for extended rips you might have to have more while away. This can usually be arranged through local hospitals or clinics.</p>
           </div>
         <label className='show_stopper'><strong>Tickets:</strong></label>
           <div className='show_stopper_pt'>
             <p>• Make sure you have the correct tickets for you journey.</p>
             <p>• Read the tickets and make sure they have the correct names, dates, and locations.</p>
             <p>• Should you need to prove your movements, always keep your tickets in a safe place and never throw them away-often the return journey is included on the same ticket.</p>
           </div>
         <label className='show_stopper'><strong>Insurance:</strong></label>
           <div className='show_stopper_pt'>
             <p>• It's advisable to get insurance against your trip being cancelled.</p>
             <p>• Ensure that your insurance will cover your medical expenses should the worst happen. You don't have to be climbing Everest-even a twisted or broken ankle when hill-walking could prove to be very expensive if you don't have adequate insurance.</p>          
           </div>
      </div>
    </div> 
  </div>
  )
}

export default Planning;
