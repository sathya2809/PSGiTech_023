function calculateCarbonFootprintelec() {
  const electricity = parseFloat(document.getElementById("electricity").value) || 0;
  const achours = parseFloat(document.getElementById("ac_hours").value)||0;
  
  //EMISSON FACTORS
  const emkwh = 0.806; // kg of CO2 per kilowatt-hour of electricity
  const emac = 0.668; // kg per hour AC

  //Average for human per year
  const avgkwh = 1255; // average kwh per person

  //for yearly calculations
  const yearkwh = electricity * 12;
  const yearac = achours * 12 ;

  // Calculate carbon footprint in kilograms of CO2
  const electricityCarbon = emkwh * yearkwh;
  const accarbon = yearac * emac ;
  const elecCarbonFootprint =
    electricityCarbon +
    accarbon;
  const eleccarbonfootprintintonnes = elecCarbonFootprint / 1000;

  // Display the result
  document.getElementById("elecfootprint_result").textContent = `${eleccarbonfootprintintonnes.toFixed(2)} tonnes of CO2 per year from Electricity`;
  document.getElementById("elecresult").style.display = "block";
  return eleccarbonfootprintintonnes;
}
function calculateCarbonFootprinttra() 
{
  const carKilometers = parseFloat(document.getElementById("car_kilometers").value) || 0;
  const ckmpl = parseFloat(document.getElementById("ckmpl").value) || 1;
  const bikeKilometers = parseFloat(document.getElementById("bike_kilometers").value) || 0;
  const bkmpl = parseFloat(document.getElementById("bkmpl").value) || 1;
  const airhours = parseFloat(document.getElementById("air_hours").value) || 0;
  const trainKilometers = parseFloat(document.getElementById("train_kilometers").value)||0;
  //EMISSON FACTORS

  const emp = 2.27; // kg of CO2 per liter of petrol
  const emd = 2.64; // kg of co2 per liter of diesel
  const emair = 92; // kg of co2 per person per hour
  const emtrain = 0.00795; // kg per km per person


  //Average for human per year
  const avgpetrol = 24; // average petrol per person
  const avgdiesel = 79; // average diesel per person

  //for ltrs of petrol and diesel
  const carltrs = (carKilometers / ckmpl);
  const bikeltrs = (bikeKilometers / bkmpl);

  // Calculate carbon footprint in kilograms of CO2
  const carCarbon = carltrs * emp;
  const bikeCarbon = bikeltrs * emp;
  const aircarbon = airhours * emair;
  const traincarbon = trainKilometers * emtrain;
  const tratotalCarbonFootprint =
    carCarbon +
    bikeCarbon +
    aircarbon +
    traincarbon;
  const tracarbonfootprintintonnes = tratotalCarbonFootprint / 1000;
  
  
  // Display the result
  document.getElementById("trafootprint_result").textContent = `${tracarbonfootprintintonnes.toFixed(2)} tonnes of CO2 per year from Travelling`;
  document.getElementById("traresult").style.display = "block";
  return tracarbonfootprintintonnes;
  
}
function calculateCarbonFootprintfood() {
  const beefkg = parseFloat(document.getElementById("beef_kg").value) || 0;
  const fishkg = parseFloat(document.getElementById("fish_kg").value) || 0;
  const chickkg = parseFloat(document.getElementById("chick_kg").value) || 0;
  const foodwaste = parseFloat(document.getElementById("foodwaste").value) || 0;

  //EMISSON FACTORS
  const embeef = 33.3; //kg of co2 per kg of beef
  const emfish = 13.63; // kg of co2 per kg of fish
  const emchick = 9.87; // kg of co2 per kg of chicken
  const emfw = 2.5; // kg of co2 per kg of food waste


  //Average for human per year
  const avgmeat = 36.4; // average meat per person

  //total for meat
  const totalmeat = beefkg + fishkg + chickkg;

  // Calculate carbon footprint in kilograms of CO2
  const beefcarbon = beefkg * embeef;
  const fishcarbon = fishkg * emfish;
  const chickcarbon = chickkg * emchick;
  const fwcarbon = foodwaste * emfw;
  const foodtotalCarbonFootprint =
    beefcarbon +
    fishcarbon +
    chickcarbon +
    fwcarbon;
  const foodcarbonfootprintintonnes = foodtotalCarbonFootprint / 1000;
  
  
  // Display the result
  document.getElementById("foodfootprint_result").textContent = `${foodcarbonfootprintintonnes.toFixed(2)} tonnes of CO2 per year from food`;
  document.getElementById("foodresult").style.display = "block";
  return foodcarbonfootprintintonnes;

}
function totalCarbonFootprint(){
  const elecCarbonFootprint = calculateCarbonFootprintelec();
  const traCarbonFootprint = calculateCarbonFootprinttra();
  const foodCarbonFootprint = calculateCarbonFootprintfood();

  const totalCarbonFootprint = elecCarbonFootprint + traCarbonFootprint + foodCarbonFootprint;
  // Display the result
  document.getElementById("footprint_result").textContent = `${totalCarbonFootprint.toFixed(2)} tonnes of CO2 per year`;
  document.getElementById("result").style.display = "block";
  tipselec();
  tipsmeat();
  tipstra();
  
}
var tabButtons = document.querySelectorAll('.nav-link'); // Select all tab buttons
var tabPanes = document.querySelectorAll('.tab-pane'); // Select all tab panes

tabButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove "active" class from all tab buttons and tab panes
    tabButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    tabPanes.forEach(function(pane) {
      pane.classList.remove('active', 'show');
    });

    // Add "active" class to the clicked tab button
    button.classList.add('active');

    // Show the corresponding tab pane
    var target = button.getAttribute('data-bs-target');
    document.querySelector(target).classList.add('active', 'show');
  });
});

// Programmatically switch to the "nav-profile" tab
document.querySelector('#nav-tra-tab').click();

// Programmatically switch to the "nav-contact" tab
document.querySelector('#nav-food-tab').click();


function tipselec() {
  const electricity =
    parseFloat(document.getElementById("electricity").value) || 0;
  const yearkwh = electricity * 12;

  //Average for human per year
  const avgkwh = 1255; // average kwh per person

  if (yearkwh >= avgkwh) {
    document.getElementById("electip").textContent = `   
  - Use energy-efficient appliances and light bulbs.\n
  - Turn off lights, electronics, and appliances when not in use.\n
  - Seal gaps and insulate your home to prevent energy waste.\n
  - Set your thermostat lower in the winter and higher in the summer.\n
  - Consider using a programmable thermostat to optimize heating and cooling.\n
  - Unplug chargers when not in use.\n
  - Use LED bulbs for efficient lighting.\n
  - Keep fridge/freezer doors closed.\n
  - Use a programmable timer for lights.\n
  `;
  } else {
    document.getElementById(
      "electip"
    ).textContent = `Your commitment to energy conservation shines brightly, making a positive impact on both your wallet and the environment. Your small actions collectively create a big difference, inspiring us all to live more sustainably. Keep up the fantastic work!`;
  }

  console.log("Electricity:", electricity);
  console.log("Average kWh:", avgkwh);
}

function tipsmeat() {
  const beefkg = parseFloat(document.getElementById("beef_kg").value) || 0;
  const fishkg = parseFloat(document.getElementById("fish_kg").value) || 0;
  const chickkg = parseFloat(document.getElementById("chick_kg").value) || 0;

  //Average for human per year
  const avgmeat = 36.4; // average meat per person

  //total for meat
  const totalmeat = beefkg + fishkg + chickkg;

  if (totalmeat > avgmeat) {
    document.getElementById("meattip").textContent = `   
    Opt for plant-based meals more often.
    Choose vegetarian options when dining out.
    Try "Meatless Mondays" to start.
    Explore plant-based protein alternatives.
    Prioritize whole grains, fruits, and vegetables.`;
  } else {
    document.getElementById(
      "meattip"
    ).textContent = ` Your choice to embrace plant-based options is contributing to a healthier planet and a more sustainable future. Your mindful decisions inspire positive change and show the power of individual actions. Keep up your amazing efforts! `;
  }

}

function tipstra() {
  const carKilometers =
    parseFloat(document.getElementById("car_kilometers").value) || 0;
  const ckmpl = parseFloat(document.getElementById("ckmpl").value) || 1;
  const bikeKilometers =
    parseFloat(document.getElementById("bike_kilometers").value) || 0;
  const bkmpl = parseFloat(document.getElementById("bkmpl").value) || 1;

  const avgpetrol = 24; // average petrol per person
  const avgdiesel = 79; // average diesel per person

  //for ltrs of petrol and diesel
  const carltrs = carKilometers / ckmpl;
  const bikeltrs = bikeKilometers / bkmpl;

  if ((carltrs+bikeltrs) > avgpetrol) {
    document.getElementById("pettip").textContent = `   
    Drive Efficiently: Maintain a steady speed, avoid sudden acceleration, and limit idling.
Regular Maintenance: Keep your vehicle well-maintained for optimal fuel efficiency.
Carpool or Share Rides: Share trips with others to decrease the number of vehicles on the road.
Combine Errands: Plan routes to accomplish multiple tasks in one trip.
Consider Alternative Transportation: Opt for biking, walking, or public transit for short distances whenever possible.`;
  } else {
    document.getElementById(
      "pettip"
    ).textContent = `  Your commitment to efficient driving and mindful choices is driving us toward a cleaner future. By carpooling, maintaining your vehicle, and embracing alternative transportation, you're setting a wonderful example for a more sustainable world. Keep up the fantastic work`;
  }

}





   