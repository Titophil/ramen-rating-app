const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Menya", image: "images/naruto.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "images/nirvana.jpg", rating: 3, comment: "Needs work!" },
    { id: 4, name: "Kojiro Ramen" , restaurant: "Ichira", image: "images/kojiro.jpg", rating: 4, comment: "good"},
    {id: 5, name: "Gyukotsu Ramen", restaurant: "Menya", image: "images/gyukotsu.jpg",rating: 5, comment: "awesome"}]

    function displayRamens(ramens){
        const ramenMenu =  document.getElementById("ramen-menu")
        if(ramenMenu){
        ramens.forEach(ramen=>{
            const img = document.createElement("img")
            img.src = ramen.image
            img.alt = ramen.name
            img.style.cursor = "pointer"

            img.addEventListener("click",()=>{
                handleClick(ramen)
            })

            ramenMenu.appendChild(img)
             

        })  
       
    } else{
        console.error("Images Not Found!")
    }

    function handleClick(ramen){
        console.log(ramen)
        const ramenDetail = document.getElementById("ramen-detail")
        const detailImage = ramenDetail.querySelector(".detail-image")
        const detailName = ramenDetail.querySelector(".name")
        const detailRestaurant = ramenDetail.querySelector(".restaurant")
        const detailRating = ramenDetail.querySelector(".rating")
        const detailComment =  ramenDetail.querySelector(".comment")

        detailImage.src = ramen.image
        detailImage.alt = ramen.name
        detailName.textContent = ramen.name
        detailRestaurant.textContent = ramen.restaurant
        detailRating.textContent = `Rating: ${ramen.rating}/5`
        detailComment.textContent = `Comment: ${ramen.comment}`
    }
}
    function addSubmitListener(){
        const form = document.getElementById("new-ramen")

        form.addEventListener("submit",function(event){
            event.preventDefault()

            const name = document.getElementById("name").value 
            const restaurant = document.getElementById("restaurant").value
            const image = document.getElementById("image").value
            const rating = document.getElementById("rating").value
            const comment = document.getElementById("comment").value

            const newRamen = {name, restaurant, image,rating,comment}
            addRamenToMenu(newRamen)
            form.reset()
        })
    }
    function addRamenToMenu(ramen){
        const ramenMenu = document.getElementById("ramen-menu")

        const img = document.createElement("img")
        img.src = ramen.image
        img.alt = ramen.name
        img.style.cursor = "pointer"

        img.addEventListener("click",()=>handleClick(ramen))
        ramenMenu.appendChild(img)
    }
    function main(){
    displayRamens(ramens)
    addSubmitListener()
    }
    document.addEventListener("DOMContentLoaded",main)