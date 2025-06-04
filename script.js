const products = [
  {
    name: "Wooden Airplane",
    age: "Toddlers",
    description:
      "Handcrafted Baltic birch wood airplane with spinning propeller.",
    size: '3.5"H x 7"L x 7"W',
    image: "images/wooden-airplane.jpg",
  },
  {
    name: "Wooden Train Set",
    age: "3+",
    description: "Beech wood train with smooth wheels and eco-friendly paints.",
    size: "84cm L x 11cm H x 13cm W",
    image: "images/wooden-train.jpg",
  },
  {
    name: "Wooden Boat",
    age: "All ages",
    description:
      "Solid Maine white pine boat that floats with peg lobster people.",
    size: '10.5"W x 3.5"H',
    image: "images/wooden-boat.jpg",
  },
  {
    name: "Wooden Block Set",
    age: "3+",
    description: "72-piece hardwood blocks with wooden storage crate.",
    size: "13” L x 12” W x 2” H",
    image: "images/wooden-blocks.jpg",
  },
  {
    name: "Wooden Car",
    age: "All ages",
    description:
      "Heirloom-quality car handcrafted from domestic and exotic hardwoods.",
    size: "Varies",
    image: "images/wooden-car.jpg",
  },
  {
    name: "Wooden Puzzle",
    age: "3+",
    description: "Eco-friendly wooden jigsaw puzzle with animal shapes.",
    size: "12” x 12”",
    image: "images/wooden-puzzle.jpg",
  },
  {
    name: "Wooden Stacking Rings",
    age: "Toddlers",
    description: "Colorful handcrafted stacking rings to develop motor skills.",
    size: '6"H x 4" diameter',
    image: "images/stacking-rings.jpg",
  },
  {
    name: "Wooden Kitchen Set",
    age: "3+",
    description: "Complete wooden play kitchen with utensils and stove.",
    size: "24” H x 18” W x 12” D",
    image: "images/wooden-kitchen.jpg",
  },
];

function renderProducts() {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = products
    .map(
      (p) => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" />
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-age">${p.age}</p>
        <p class="product-desc">${p.description}</p>
        <p class="product-size">Size: ${p.size}</p>
      </div>
    </div>
  `
    )
    .join("");
}

window.onload = renderProducts;
