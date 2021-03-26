// Write your JavaScript code here!
window.addEventListener("load", function() {
      
   // let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      const div = document.querySelector("missionTarget");
      //  let planets = '';
       let data = json[1];
         // for(planet of json){
         // planet =  
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
      // missionTarget.innerHTML = planets;
      //  let index = 0;
       
   });
      const form = document.getElementById("launchForm");

       form.addEventListener("submit", function(event) {
       const pilotName = document.querySelector("input[name=pilotName]");
       const copilotName = document.querySelector("input[name=copilotName]");
       const fuelLevel = document.querySelector("input[name=fuelLevel]");
       const cargoMass = document.querySelector("input[name=cargoMass]");
       const faultyItems = document.getElementById("faultyItems");
       
       const launchStatus = document.getElementById("launchStatus");
       if (pilotName.value === "" || isNaN(pilotName.value) || copilotName.value === "" || isNaN(copilotName.value) || !isNaN(fuelLevel.value) || !isNaN(cargoMass.value)) {
         alert("All fields are required!");
         // stop the form submission 
         event.preventDefault();        
      }
       if (fuelLevel < 10000) {
         fuelLevel.innerHTML = Number(fuelLevel.innerHTML);
         faultyItems.style.visibilty = visible;
         launchStatus.innerHTML = "Shuttle not ready for launch";
         colorBackground.style.background = 'red';
       }
       if (cargoMass > 10000) {
         cargoMass.innerHTML = Number(cargoMass.innerHTML);
         faultyItems.style.visibilty = visible;
         launchStatus.innerHTML = "Shuttle not ready for launch";
         colorBackground.style.background = 'red';
       } else {
          launchStatus.innerHTML = "Shuttle is ready to launch";
          colorBackground.style.background = 'green';
       }
      const pilot = document.getElementById("pilotStatus");
      const copilot = document.getElementById("copilotStatus");
      pilot.innerHTML = `${pilotName} is ready for launch`;
      copilot.innerHTML = `${copilotName} is ready for launch`;

      
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