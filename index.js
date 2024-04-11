let cars = "http://localhost:3000/cars"

document.addEventListener('DOMContentLoaded', async(event)=>{
    const data = await showCars()
    displayCars(data)
})
carShow()
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
function displayCars(data){
const carbag= data.map((car) =>{
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
    <div class="card-body">
      <button class="btn btn-primary">Request A Car</button>
    </div>
  </div>
    `
})
const carcont = document.getElementById("card")
carcont.innerHTML=carbag
}
// const ul= document.getElementById("show")
// function carShow(){
//     return fetch(cars)
//     .then(res =>res.json())
//     .then(image=> image.map(vehicles=>{
//         let li=document.createElement("li")
//         li.innerHTML=`
//         <div>
//         <h2 id=${vehicles.id} class="phot">${vehicles.Brand} ${vehicles.Model}</h2>
//         </div>
//         `
//         ul.appendChild(li)
//     }))
// }