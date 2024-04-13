let cars = "https://api-server-vik-2.onrender.com/cars"
// uses dom content to call out the diffrent functions available
document.addEventListener('DOMContentLoaded', async(event)=>{
    const data = await showCars()
    displayCars(data)
    viewForm()
    displayBrand()
    showAbout()
    showContact()
})
// uses GET to fetch the array of cars in the db.json file
function showCars(){
    return fetch(cars,{
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    .then(res => res.json())
    .then(data =>data)

}
// it displays a list of card with diffrent car inf from db.json file
function displayCars(data){
const carbag= data.map((car) =>{   //mapss the new data to the cards fro json file
    return `
    <img  style="height: 100px width: 100px" class="card-img-top" src="${car.image}" alt="#">
    <div class="card-body">
      <h5 class="card-title"> ${car.Brand} ${car.Model}</h5>
      <p class="card-text">${car.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Year: ${car.Year}</li>
      <li class="list-group-item">Color: ${car.Color}</li>
      <li class="list-group-item">Price: $${car.Price}</li>
    </ul>
    
  </div> 
    `
})
const carcont = document.getElementById("card")//get the id of the card in which then the new data will be added to the cards
carcont.innerHTML=carbag
}
// function that displays a btton and upon clicking it display a form to fill
function viewForm() {
    const buttons = document.querySelectorAll('.btn');//git selects all buttons with classname btn
    buttons.forEach(button => {     //loops through the button
        button.addEventListener('click', event => {// it add an eventlistenr click which when clicked it performs a specific action
            const cardId = button.getAttribute('id');
            displayForm(cardId);
        });
        
    });
}
// function that displays a form upon clicking the request button
function displayForm(cardId) {
    const formContainer = document.getElementById(`form-container-${cardId}`);
    const form = document.createElement('form');
    // displays a list of form to be filled
    form.innerHTML = `
        <h3 class="zenz">Name</h3>
        <input type="text" class="name" id="name"> <br>
        <label for="name"></label><br>
        
        <h3 class="zenz">Email</h3>
        <input type="email" placeholder="e.g vikakamau04@gmail.com" class="email" id="email-${cardId}"><br>
        <label for="email}"></label><br>

        <h3 class="zenz">Brand</h3>
        <input type="text" class="brand" id="brand"> <br>
        <label for="name"></label><br>
        
        <h3 class="zenz">Number</h3>
        <input type="number" class="number" id="number"> <br>
        <label for="number"></label><br>
        
        <button type="submit" id="submit">Submit</button>
    `;

    formContainer.innerHTML = ''; // clears any content in the form container
    formContainer.appendChild(form);// it insert the newly created form to the form container
// it adds an alert to the submit button which when cliked it displays certain information
    const submitButton= document.getElementById("submit")
    submitButton.addEventListener('click', (event)=>{ //add an event listener click
        event.preventDefault()
        alert(`Your form has been submitted.Thank you for choosing
        VIKOZ MOTORS our help team will reach out to your shortly to discuss further on the car brand choosen
        Thankyou and have a nice day. for more enquiries call us on 0705237806`)

        form.reset()// reets the form back to its original content
    })
    
}
// display a welcom alert button and then slides you down the list of cars available
function displayBrand(){
    const dropdown=document.getElementById("merc")//get all the elements with id merc
    dropdown.addEventListener('click', (event)=>{ //add an event listener click on the dropdown
        event.preventDefault()
        alert(`WELCOME TO VIKOZ MOTORS HOME OF DREAM CARS WE HAVE FOLLOWING VEHICLES DOWN BELOW;`) //shows the alert to be displayed

        const cardSection= document.getElementById("card") //targets elements with the id card
        cardSection.scrollIntoView({behavior: "smooth"});//it display how it will smoothly scrool to card section 
    })
}
// its a function that target elements with id about, add an eventlistener click which when clicked identifies elemets with id head and smoothlyscrolls down to the specified elements with id head
function showAbout(){
    const nav=document.getElementById("about")
    nav.addEventListener('click',(event)=>{
        event.preventDefault()
        const aboutParagraph=document.getElementById("head")
        aboutParagraph.scrollIntoView({behavior: 'smooth'})
    })
}
// its a function that target elements with id contact, adds an eventlistener click to which in which when clicked it identifies elements with id name final and smoothlys scrollls downt to the specified element
function showContact(){
    const contact=document.getElementById("contact")
    contact.addEventListener('click',(event)=>{
        event.preventDefault()
        const contactInfo=document.getElementById("final")
        contactInfo.scrollIntoView({behavior: 'smooth'})
    })
}