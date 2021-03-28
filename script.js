// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
   event.preventDefault(); 
   const pilotName = document.querySelector("input[name=pilotName]");
   const copilotName = document.querySelector("input[name=copilotName]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]");
   const cargoMass = document.querySelector("input[name=cargoMass]");
   const faultyItems = document.getElementById("faultyItems");   
   const launchStatus = document.getElementById("launchStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");

   if (pilotName.value === "" || !isNaN(pilotName.value) || copilotName.value === "" || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
     alert("All fields are required!");
     // stop the form submission 
            
  }
   if (fuelLevel.value < 10000) { 
     console.log('hello');
     console.log(faultyItems);
     faultyItems.style.visibility = 'visible';
     launchStatus.innerHTML = "Shuttle not ready for launch";
     fuelStatus.innerHTML = "There is not enough fuel for the journey";
     launchStatus.style.color = 'red';
   }
   if (cargoMass.value > 10000) {     
     faultyItems.style.visibility = 'visible';
     launchStatus.innerHTML = "Shuttle not ready for launch";
     cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
     launchStatus.style.color = 'red';
   } else {      
      launchStatus.innerHTML = "Shuttle is ready to launch";
      launchStatus.style.color = 'green';
   }
  console.log(launchStatus);
  const pilot = document.getElementById("pilotStatus");
  const copilot = document.getElementById("copilotStatus");
  pilot.innerHTML = `1. ${pilotName} is ready for launch`;
  copilot.innerHTML = `2. ${copilotName} is ready for launch`;
  fuelStatus.innerHTML = `3. ${fuelStatus} too low for launch`;
  cargoStatus.innerHTML = `4. ${cargoStatus} mass low enough for launch`;
  console.log(pilot.innerHTML);
  console.log(copilot.innerHTML);
  
});  
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      const div = document.querySelector("#missionTarget");
      div.style.visibilty = "hidden";
       let data = json[1];
           
        div.innerHTML =  `
         <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${data.name}</li>
                <li>Diameter: ${data.diameter}</li>
                <li>Star: ${data.star}</li>
                <li>Distance from Earth: ${data.distance}</li>
                <li>Number of Moons: ${data.moons}</li>
            </ol>
        <img src="${data.image}"></img>`;
        
      });
      
      
       
   });
      
      
    }
      
);


// {/* <h2>Mission Destination</h2>
//             <ol>
//                 <li>Name: ${json[1].name}</li>
//                 <li>Diameter: ${json[1].diameter}</li>
//                 <li>Star: ${json[1].star}</li>
//                 <li>Distance from Earth: ${json[1].distance}</li>
//                 <li>Number of Moons: ${json[1].moons}</li>
//             </ol>
//         <img src="https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg"></img> */}