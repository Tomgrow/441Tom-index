// sample data
const courses = [
    { name: 'Web Development', price: 199.99 },
    { name: 'Data Science', price: 299.99 },
    { name: 'Machine Learning', price: 349.99 },
    { name: 'Cyber Security', price: 249.99 },
    { name: 'Mobile App Development', price: 299.99 }
];

const materials = [
    { name: 'Programming Basics', price: 49.99 },
    { name: 'Networking Essentials', price: 39.99 },
    { name: 'Database Fundamentals', price: 59.99 },
    { name: 'Software Engineering', price: 79.99 },
    { name: 'Project Management', price: 69.99 },
    { name: 'Cloud Computing', price: 89.99 },
    { name: 'System Administration', price: 54.99 },
    { name: 'UI/UX Design', price: 44.99 }
];

// Add the course to the DOM
function addCoursesToDOM() {
    const coursesList = document.getElementById('courses');
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name} - $${course.price.toFixed(2)}`;
        const button = document.createElement('button');
        button.textContent = 'add to shopping cart';
        button.onclick = () => addToCart(course);
        li.appendChild(button);
        coursesList.appendChild(li);
    });
}

// Add the data pack to the DOM
function addMaterialsToDOM() {
    const materialsList = document.getElementById('materials');
    materials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = `${material.name} - $${material.price.toFixed(2)}`;
        const button = document.createElement('button');
        button.textContent = 'add to shopping cart';
        button.onclick = () => addToCart(material);
        li.appendChild(button);
        materialsList.appendChild(li);
    });
}

// add to shopping cart
function addToCart(item) {
    const cartItems = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    updateTotal();
}

// Update total amount
function updateTotal() {
    let total = 0;
    const cartItems = document.getElementById('cart-items').children;
    for (let i = 0; i < cartItems.length; i++) {
        const itemText = cartItems[i].textContent.split(' - ');
        const price = parseFloat(itemText[1].replace('$', ''));
        total += price;
    }
    document.getElementById('total').textContent = `total sales: $${total.toFixed(2)}`;
}

// settle accounts
document.getElementById('checkout').onclick = function() {
    alert('Thank you for your purchase!');
};

// Initialize page
window.onload = function() {
    addCoursesToDOM();
    addMaterialsToDOM();
};