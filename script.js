// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
   event.preventDefault(); 
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");   
   let launchStatus = document.getElementById("launchStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");

   if (pilotName.value === "" || !isNaN(pilotName.value) || copilotName.value === "" || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
     alert("All fields are required!"); 
     alert("Make sure to enter valid information into each field!");     
               
   } else if (fuelLevel.value < 10000) {      
     console.log(faultyItems);
     faultyItems.style.visibility = 'visible';     
     launchStatus.innerHTML = 'Shuttle not ready for launch';
     fuel.innerHTML = 'There is not enough fuel for the journey';
     launchStatus.style.color = 'red';
   } else if (cargoMass.value > 10000) {
     console.log(faultyItems);     
     faultyItems.style.visibility = 'visible';    
     launchStatus.innerHTML = 'Shuttle not ready for launch';
     fuel.innerHTML = 'There is enough fuel for the journey';
     cargo.innerHTML = 'There is too much mass for the shuttle to take off';
     launchStatus.style.color = 'red';
   } else {      
      launchStatus.innerHTML = "Shuttle is ready to launch";
      launchStatus.style.color = 'green';
   } 
  
  let pilot = document.getElementById("pilotStatus");
  let copilot = document.getElementById("copilotStatus");
  
  pilot.innerHTML = `${pilotName.value} is ready for launch`;
  copilot.innerHTML = `${copilotName.value} is ready for launch`;
//   fuel.innerHTML = `Fuel level too low for launch`;
//   cargo.innerHTML = `Cargo mass low enough for launch`;
  console.log(launchStatus);
    
});  
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      let div = document.querySelector("#missionTarget");
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