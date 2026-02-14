const API_URL = "http://localhost:5000";

// Load menu
async function loadMenu() {
  const res = await fetch(`${API_URL}/api/menu`);
  const data = await res.json();

  const menuDiv = document.getElementById("menu");
  menuDiv.innerHTML = "";

  data.forEach(item => {
    const coffee = document.createElement("p");
    coffee.textContent = `${item.id}. ${item.name} - $${item.price}`;
    menuDiv.appendChild(coffee);
  });
}

// Place order
async function placeOrder() {
  const itemId = parseInt(document.getElementById("itemId").value);

  const res = await fetch(`${API_URL}/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ itemId })
  });

  const data = await res.json();
  document.getElementById("orderResponse").textContent = data.message;
}

loadMenu();
