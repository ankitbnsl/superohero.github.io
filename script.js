// Retrieve all elements with their ids
const btn=document.getElementById('btn');
const search=document.getElementById('search');
const list =document.getElementById('list');
const favorites = document.getElementsByClassName('fav');

// Add event listener to search bar
search.addEventListener('keyup',searchlistener);

async function searchlistener(e){

  console.log(search.value);
  // If search value is empty then empty search list and return
  if(search.value==""){
    list.innerHTML = "";
    return;
  }
  
// fetch the results using fetchurl function 
  let data = await fetchurl(search.value);
  if(data && data.response === 'success'){

            // console.log(data.results.length);
        
        list.innerHTML = "";
        
        // for every result create a list item
        for (i of data.results) {
            
            const li = document.createElement('li');
                 li.innerHTML=`
                
                 <a href="./Superhero/superhero.html?id=${i.id}">${i.name}</a> 
                  <p class="fav" id= ${i.id} data-name=${i.name} data-image = ${i.image.url}>Add to favorite</p>`;
                // console.log("url",i.name,i.image.url);
                 list.append(li);
            
        } 
  }else{     list.innerHTML = "";
            console.log("not success");
  }
  
}

async function fetchurl(value){
   
  // Fetch the url results and return the data obtained
  try{
    let url= 'https://superheroapi.com/api.php/2928355607286861/search/' + value;
    let response = await fetch(url);
    let data = await response.json();
    return data;  
  }catch(err){
     console.log("error");
  }
}


// Create a add event listener basically to handle (Add to favourite button)
document.addEventListener('click', handleclickListeners);


function handleclickListeners(e) {
    
    // get the type of element on which click is happen
    const target = e.target;
        
    // If add to favourite button (class name i.e fav) is clicked do the funcions
    if (target.className === "fav") {

      // console.log("click",target.id,target.dataset.name,target.dataset.image);

      //create a superhero element with its name and image details and store that element in localstorage
      const superhero = {name: target.dataset.name , image : target.dataset.image};
      localStorage.setItem(target.id,JSON.stringify(superhero));
   
      alert('Added to favourites');
      return;
  }

  }