// Get the References
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".error");
const links = document.querySelectorAll("ul a");

// Use fetch () to load home.html on the page-load
// Store the loaded content into contents as a new property of contents with the Key
let url = "./partials/home.html";


loadContent(url);


function handleEvent(ev) {
    
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
            console.log(links[i]);
        }
    }

    let currentItem = ev.currentTarget;
    
    currentItem.setAttribute("id", "active");
}

for (let link of links) {
    link.addEventListener("click", handleEvent);
}

// Create the function that will handle a 
function handleClick (ev) {
    
    //preventing the default behaviour of the link tag
    ev.preventDefault();
      
    
    let currentLink = ev.target;
    let url = currentLink.href;
    
        loadContent(url);

}

for (let link of links) {
    link.addEventListener("click", handleClick);
}

function loadContent(urlValue) {
    //here is where you want to use your fetch method
    fetch(urlValue)
       .then(function (response) {
          if (response.statusText === "OK") {
              return response.text();
          }

              throw new Error(response.statusText)
          })
       .then(function (data) {
          
        
           container.innerHTML = data;
       })
       .catch(function (err) {
          errorContainer.textContent = `${err.name}: ${err.message}`;
       });
   
} 