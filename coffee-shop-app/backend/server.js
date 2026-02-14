import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample coffee menu
const menu = [
  { id: 1, name: "Espresso", price: 3 },
  { id: 2, name: "Latte", price: 4 },
  { id: 3, name: "Cappuccino", price: 4.5 },
  { id: 4, name: "Mocha", price: 5 }
];

// Get menu
app.get("/api/menu", (req, res) => {
  res.json(menu);
});

// Place order
app.post("/api/order", (req, res) => {
  const { itemId } = req.body;
  const item = menu.find(coffee => coffee.id === itemId);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json({
    message: `Order received for ${item.name} ☕`,
    price: item.price
  });
});

app.listen(PORT, () => {
  console.log(`Coffee Shop API running on http://localhost:${PORT}`);
});
