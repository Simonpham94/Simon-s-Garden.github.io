// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

//VARIABLES

    //nav bar and menu button animations
    const burger = document.getElementById('burger'); 
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('#nav li'); 
    const body = document.querySelector('body');

    //modal
    const cart = document.getElementById('cart');
    const proceedToShippingBtn = document.getElementById('proceed-to-shipping-btn');
    const goBackToCartBtn = document.getElementById('go-back-to-cart-btn');
    const placeYourOrderBtn = document.getElementById('place-your-order-btn');
    const cartModal = document.getElementById('cart-modal');
    const shippingModal = document.getElementById('shipping-modal');
    const itemContainers = document.getElementsByClassName('item-container');


//EVENT HANDLERS
    burger.addEventListener('click', ()=>{
        //burger animation 
        burger.classList.toggle('toggle');
        body.classList.toggle('fixed');
        
        //nav link slide
        nav.classList.toggle('nav-active');
    })

    cart.addEventListener('click', ()=>{
        //burger animation 
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        body.classList.toggle('fixed');
    })

    //click on cart will close menu for small and medium displays
    proceedToShippingBtn.addEventListener('click', ()=>{
        cartModal.classList.toggle('none');
        shippingModal.classList.toggle('none');
    })

    goBackToCartBtn.addEventListener('click', ()=>{
        cartModal.classList.toggle('none');
        shippingModal.classList.toggle('none');
    })
   
    //quantity bought
    for(let i = 0; i < itemContainers.length; i++) {
        amount = 1;
        min = 2;
        itemContainers[i].addEventListener('click', (e)=>{
            let itemAmount = itemContainers[i].querySelector('.item-amount');
            if(e.target.classList.contains('fa-chevron-up')) {
                amount++;
                itemAmount.textContent = amount;
            } else if(e.target.classList.contains('fa-chevron-down')) {
                amount < min ? min : amount--;
                itemAmount.textContent = amount;
            }

        })
    }
    
    
    