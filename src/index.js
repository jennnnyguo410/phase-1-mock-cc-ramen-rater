// write your code here
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('ramen-menu')
    const ramenDeatil = document.getElementById('ramen-detail')
    const showImg = document.querySelector('.detail-image')
    const showName = document.querySelector('.name')
    const showRestaurant = document.querySelector('.restaurant')
    const showRating = document.getElementById('rating-display')
    const showComment = document.getElementById('comment-display')

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




}); //END OF PAGE LOADED