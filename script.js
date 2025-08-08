document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open');
  const closeBtn = document.querySelector('.close');
  const sideBar = document.querySelector('.side-bar');
  const cardSection = document.querySelector('.card-section');

  // Local JSON data directly in JS
  const menuData = [
    { name: 'Apple Pie', price: 5, imgSrc: 'img/apple.jpg' },
    { name: 'Cheeseburger', price: 8, imgSrc: 'img/cheeseburger.jpg' },
    { name: 'Chocolate Cake', price: 6, imgSrc: 'img/chocolate-cake.jpg' },
    { name: 'Crepes', price: 7, imgSrc: 'img/crepes.jpg' },
    { name: 'Cupcake', price: 3, imgSrc: 'img/cupcake.jpg' },
    { name: 'Fried Snacks', price: 5, imgSrc: 'img/fried.jpg' },
    { name: 'Fried Chicken', price: 9, imgSrc: 'img/chicken.jpg' },
    { name: 'Grilled Steak', price: 12, imgSrc: 'img/grilled.jpg' },
    { name: 'Pancakes', price: 4, imgSrc: 'img/pancakes.jpg' },
    { name: 'Pasta', price: 8, imgSrc: 'img/pasta.jpg' },
    { name: 'Pizza', price: 10, imgSrc: 'img/pizza.jpg' },
    { name: 'Salad', price: 6, imgSrc: 'img/salad.jpg' },
    { name: 'Sandwich', price: 5, imgSrc: 'img/sandwich.jpg' },
    { name: 'Sushi', price: 12, imgSrc: 'img/sushi.jpg' },
    { name: 'Tacos', price: 7, imgSrc: 'img/tacos.jpg' },
    { name: 'Noodle', price: 8.5, imgSrc: 'img/noodle.jpg' },
    { name: 'Strawberry', price: 5, imgSrc: 'img/strawberry.jpg' },
    { name: 'Falafel', price: 12, imgSrc: 'img/falafel.jpg' },
    { name: 'Pexels', price: 7, imgSrc: 'img/pexels.jpg' },
    { name: 'Ice-Cream', price: 8.5, imgSrc: 'img/ice.jpg' },
  ];

  // Sidebar toggle
  openBtn.addEventListener('click', () => {
    sideBar.style.display = 'flex';
    closeBtn.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none';
    closeBtn.style.display = 'none';
  });

  sideBar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      sideBar.style.display = 'none';
      closeBtn.style.display = 'none';
    });
  });

  // Render menu
  function getMenu() {
    cardSection.innerHTML = menuData
      .map(
        (item) => `
      <div class="card">
        <img src="${item.imgSrc}" alt="${item.name}" class="card-main-img"/>
        <div class="card-content">
          <div>
            <p class="food-name">${item.name}</p>
            <p class="cost">$${item.price}/-</p>
          </div>
          <div>
            <img src="img/Group 4.png" alt="Add to cart" width="30"/>
          </div>
        </div>
      </div>
    `
      )
      .join('');
  }

  // Order flow
  const takeOrder = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        const burgers = [
          'Cheese Burger',
          'Veggie Burger',
          'Bacon Burger',
          'Chicken Burger',
          'Mushroom Burger',
          'Double Cheese Burger',
          'BBQ Burger',
          'Fish Burger',
          'Turkey Burger',
          'Spicy Burger',
        ];
        resolve(
          Array.from(
            { length: 3 },
            () => burgers[Math.floor(Math.random() * burgers.length)]
          )
        );
      }, 2500);
    });

  const orderPrep = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ order_status: true, paid: false }), 1500)
    );
  const payOrder = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ order_status: true, paid: true }), 1000)
    );
  const thankyou = () => alert('Thank you for eating with us today!');

  async function main() {
    const order = await takeOrder();
    console.log('Your Order:', order);
    const status = await orderPrep();
    console.log('Order Preparation Status:', status);
    const payment = await payOrder();
    console.log('Payment Status:', payment);
    if (payment.paid) thankyou();
  }

  // Init
  getMenu();
  main();
});
