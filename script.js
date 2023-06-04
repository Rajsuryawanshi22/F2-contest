async function getMenu() {
    const menuList = document.getElementById('menu-list');
    
    try {
      const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
      const data = await response.json();
      
      data.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.innerText = `${item.name} - $${item.price}`;
        menuList.appendChild(menuItem);
      });
    } catch (error) {
      console.log('Error fetching menu:', error);
    }
  }

  // Function to take order
  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const burgers = [
          { name: 'Classic Burger', price: 9.99 },
          { name: 'Cheese Paneer Pizza', price: 10.99 },
          { name: 'Chole Bhatture', price: 11.99 },
          { name: 'Rajma Chawal', price: 8.99 },
          { name: 'Buffet Chinese', price: 12.99 },
        ];

        const randomBurgers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }

        resolve(randomBurgers);
      }, 2500);
    });
  }

  // Function for order preparation
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }

  // Function for payment
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }

  // Function to display thank you message
  function thankYouFunc() {
    alert('Thank you for eating with us today!');
  }

  // Function to handle the ordering process
  async function placeOrder() {
    try {
      await getMenu();
      const order = await takeOrder();
      console.log('Order:', order);
      const orderStatus = await orderPrep();
      console.log('Order Status:', orderStatus);
      const paymentStatus = await payOrder();
      console.log('Payment Status:', paymentStatus);
      thankYouFunc();
    } catch (error) {
      console.log('Error:', error);
    }
  }

  getMenu();