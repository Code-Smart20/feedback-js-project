//bringing all the rating Elements inside the js
const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const container = document.getElementById("ratings_container");

let selectedItem = "";

const removeClass = () => {
    ratingEls.forEach((ratingEl) => {
        ratingEl.addEventListener("click", (event) => {
            if (event.target.classList.contains("active")) {
                event.target.classList.remove("active");
            } else if (event.target.parentNode.classList.contains("active")) {
                event.target.parentNode.classList.remove("active");
            }
        });
    });
};


//looping through Each Element and adding an Eventlistener
ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeClass()
        selectedItem = event.target.innerText || event.target.parentNode.innerText;
        console.log(selectedItem);
        event.target.parentNode.classList.add("active") || event.target.classList.add("active");
    })
});




btnEl.addEventListener("click", () => {
    if (selectedItem !== "") { 
        
        container.innerHTML = `<div class="ratings_container-amended">
        
        <strong>Thank You </strong>

        <br/>
        <br/>

        <strong>FEEDBACK : ${selectedItem} </strong>

        <br/>
        <br/>

        <p>we will use your feedback to improve our customers support</p>
        
        </div>
      
        `
   }
})
