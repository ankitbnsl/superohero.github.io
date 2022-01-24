const Herocontainer= document.getElementById('super-div');
Herocontainer.innerHTML="";

 
//  Add superheros function to print all superheros saved as favourite
function addSuperHeroes(){
    
    Herocontainer.innerHTML="";
// for every stored element in local storage do the function
 for (var i = 0; i < localStorage.length; i++) {

    // set iteration key name
    var key = localStorage.key(i);
  
    // use key to retrieve the corresponding value
    var value = JSON.parse(localStorage.getItem(key)) ;
     
    // create hero element and store the name , image and delete button to it
    const hero= document.createElement('div');
    hero.innerHTML = `
    <div class="details">
    <div class="left-list">
    <image src="${value.image}"> 
     </div>
     <div class="right-list">
    <p>${value.name}</p> 
    <button class="delete-fav" id="${key}">Remove from favourite </button>
    </div>
    </div>
    `;

    // append the hero into hero container
    Herocontainer.appendChild(hero);
   }

}

addSuperHeroes();


// Create a add event listener basically to handle (Delete favourite button)
  document.addEventListener('click',handleclickListeners);

  function handleclickListeners(e){
      const target= e.target;
      // if delete button is clicked , remove the item from local storage
      if(target.className =="delete-fav"){
          console.log("del click");
          localStorage.removeItem(target.id);
            addSuperHeroes();
      }
  }



