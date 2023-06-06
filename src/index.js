// write your code here
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('ramen-menu')
    const ramenDeatil = document.getElementById('ramen-detail')
    const showImg = document.querySelector('.detail-image')
    const showName = document.querySelector('.name')
    const showRestaurant = document.querySelector('.restaurant')
    const showRating = document.getElementById('rating-display')
    const showComment = document.getElementById('comment-display')
    const form = document.getElementById('new-ramen')



    // fetch the rscourse 
    fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then((ramens) => {
            //show first ramen's details 
            const firstRamen = ramens[0]
            menuDetail(firstRamen)
            //show menu's ramens pics
            for (const ramen of ramens) {
                menuDisplay(ramen)
            }
        })

    function menuDisplay(ramen) {
        const menuImg = document.createElement('img')
        menuImg.src = `${ramen.image}`
        menuImg.alt = `${ramen.name}`
        //add event listenser 
        menuImg.addEventListener('click', () => {
            menuDetail(ramen)
        })
        menu.appendChild(menuImg)
    }

    function menuDetail(ramen) {
        showImg.src = `${ramen.image}`
        showName.textContent = ramen.name
        showRestaurant.textContent = ramen.restaurant
        showRating.textContent = ramen.rating
        showComment.textContent = ramen.comment
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = {
            name: document.getElementById('new-name').value,
            restaurant: document.getElementById('new-restaurant').value,
            image: document.getElementById('new-image').value,
            rating: document.getElementById('new-rating').value,
            comment: document.getElementById('new-comment').value
        }
        menuDetail(formData)
        menuDisplay(formData)
    })


}); //END OF PAGE LOADED