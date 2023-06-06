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
    const editForm = document.getElementById('edit-ramen')
    const deleteBtn = document.getElementById('delete-button')
    const editRating = document.getElementById('edit-rating')
    const editComment = document.getElementById('edit-comment')


    // fetch the rscourse 
    fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then((ramens) => {
            //show first ramen's details 
            const firstRamen = ramens[0]
            menuDetail(firstRamen)
            editFormValue(firstRamen)
            //show menu's ramens pics
            for (const ramen of ramens) {
                menuDisplay(ramen)
            }
        })
    let currentRamen = null

    // display the menue's small img
    function menuDisplay(ramen) {
        const menuImg = document.createElement('img')
        menuImg.src = `${ramen.image}`
        menuImg.alt = `${ramen.name}`
        //add event listenser 
        menuImg.addEventListener('click', () => {
            currentRamen = menuImg
            editFormValue(ramen)
            menuDetail(ramen)

        })
        menu.appendChild(menuImg)
    }

    deleteBtn.addEventListener('click', () => {
        if (currentRamen) {
            menu.removeChild(currentRamen)
            currentRamen = null
            clearDetail()
        }
    })

    function editFormValue(ramen) {
        editRating.placeholder = `${ramen.rating}`
        editComment.placeholder = `${ramen.comment}`
    }

    //edit the big show ramen
    function menuDetail(ramen) {
        showImg.src = `${ramen.image}`
        showName.textContent = ramen.name
        showRestaurant.textContent = ramen.restaurant
        showRating.textContent = ramen.rating
        showComment.textContent = ramen.comment
    }

    //creat new ramen's menue
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

    editForm.addEventListener('submit', (e) => {
        e.preventDefault()
        if (currentRamen) {
            currentRamen.rating = editRating.value
            currentRamen.comment = editComment.value
            menuDetail(currentRamen)
        }
    })

    function clearDetail() {
        showImg.src = '';
        showName.textContent = '';
        showRestaurant.textContent = '';
        showRating.textContent = '';
        showComment.textContent = '';
    }
}); //END OF PAGE LOADED