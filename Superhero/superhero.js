// get all elements of heading , power section , bio section using document.getelementbyid
const heading = document.getElementById('heading');
const img=document.getElementById('img');

const intelligence = document.getElementById('intelligence');
const strength = document.getElementById('strength');
const speed = document.getElementById('speed');
const durability = document.getElementById('durability');
const power = document.getElementById('power');
const combat = document.getElementById('combat');

const fullname = document.getElementById('full-name');
const alterego = document.getElementById('alter-ego');
const aliases = document.getElementById('aliases');
const place = document.getElementById('place');
const firstapp = document.getElementById('first-app');
const publisher = document.getElementById('publisher');
const allignment = document.getElementById('allignment');


// Get the id of the super hero whose info to be fetc from url
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam);

addDetails();

// Add details function call fetchurl function to get all details of superhero , on getting data successfull it store all the 
// retrieved data in their respectful divs
async function addDetails(){
const data = await fetchurl(myParam);

if(data && data.response == 'success'){
  // on getting data successfully , store all info in divs accordingly

  heading.innerHTML=data["name"];
  img.src=data["image"]["url"];
  intelligence.innerHTML = `<b> Intelligence : </b> ${data["powerstats"]["intelligence"]}`;
  strength.innerHTML = `<b> Strength : </b> ${data["powerstats"]["strength"]}`;
  speed.innerHTML = `<b> Speed : </b> ${data["powerstats"].speed}`;
  durability.innerHTML = `<b> Durability : </b> ${data["powerstats"]["durability"]}`;
  power.innerHTML = `<b> Power : </b> ${data["powerstats"]["power"]}`;
  combat.innerHTML = `<b> Combat : </b> ${data["powerstats"]["combat"]}`;

  fullname.innerHTML = `<b> FullName : </b> ${data["biography"]["full-name"]}`;
  alterego.innerHTML = `<b> Alter ego : </b> ${data["biography"]["alter-egos"]}`;
  aliases.innerHTML = `<b> Aliases : </b> ${data["biography"]["aliases"]}`;
  place.innerHTML = `<b> Place of birth : </b> ${data["biography"]["place-of-birth"]}`;
  firstapp.innerHTML = `<b> First Appearence : </b> ${data["biography"]["first-appearance"]}`;
  publisher.innerHTML = `<b> Publisher : </b> ${data["biography"]["publisher"]}`;
  allignment.innerHTML = `<b> Alignment : </b> ${data["biography"]["alignment"]}`;

}else{
  console.log("not success");
}
}


// fetch url function fetch the url using async await and return the response back to adddetails function, it gets id of superhero 
// as input to search that superhero
async function fetchurl(id){
   
  try{
    let url= 'https://superheroapi.com/api.php/2928355607286861/' + id;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    return data;  
  }catch(err){
     console.log("error");
  }
}


