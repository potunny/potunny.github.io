document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartBadge = document.getElementById('cart-badge');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartButton = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPriceElement = document.getElementById('cart-total-price');
    const carousels = document.querySelectorAll('.carousel');

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

    // Function to update the cart badge
    function updateCartBadge() {
        cartBadge.textContent = cartCount;
        cartBadge.classList.toggle('visible', cartCount > 0);
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        totalPrice = 0;
    
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>No items in cart.</p>';
        } else {
            cartItems.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"/>
                    <p>${item.name} - $${item.price}</p>
                    <button class="remove-item" data-index="${index}">Remove</button>
                `;
                cartItemsContainer.appendChild(itemElement);
                totalPrice += item.price;
            });
        }
    
        cartTotalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Function to save cart to LocalStorage
    function saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartCount', cartCount);
        localStorage.setItem('totalPrice', totalPrice);
    }

    // Event listener for adding items to the cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemId = button.getAttribute('data-id');
            const itemImage = button.getAttribute('data-image');
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            cartItems.push({ id: itemId, image: itemImage, name: itemName, price: itemPrice });
            cartCount++;
            saveCart();
            updateCartBadge();
            renderCartItems();
        });
    });

    // Open cart sidebar
    cartBadge.parentElement.addEventListener('click', () => {
        cartSidebar.classList.add('open');
        renderCartItems();
    });

    // Close cart sidebar
    closeCartButton.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    // Remove item from cart
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            cartCount--;
            totalPrice -= cartItems[index].price;
            cartItems.splice(index, 1);
            saveCart();
            updateCartBadge();
            renderCartItems();
        }
    });

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = imagesContainer.querySelectorAll('img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100; // Move left by 100% of the currently shown image
            imagesContainer.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    });

    // Initialize cart badge and sidebar on page load
    updateCartBadge();
    renderCartItems();
});