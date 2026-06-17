import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b6a?w=400&q=80",
    category: "Air Purifying",
  },
  {
    id: 2,
    name: "Spider Plant",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80",
    category: "Air Purifying",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1593691509543-c38e2fc7d0e0?w=400&q=80",
    category: "Air Purifying",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1596547609652-9c10da5bcaa1?w=400&q=80",
    category: "Air Purifying",
  },
  {
    id: 5,
    name: "Bamboo Palm",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80",
    category: "Air Purifying",
  },
  {
    id: 6,
    name: "Boston Fern",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1613488329064-aafb0dd2c7ba?w=400&q=80",
    category: "Air Purifying",
  },
  {
    id: 7,
    name: "Areca Palm",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1598294803521-f13e0a173b55?w=400&q=80",
    category: "Air Purifying",
  },
  {
    id: 8,
    name: "Lavender",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&q=80",
    category: "Aromatic",
  },
  {
    id: 9,
    name: "Rosemary",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1597671893556-d3d16146c5a4?w=400&q=80",
    category: "Aromatic",
  },
  {
    id: 10,
    name: "Mint",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400&q=80",
    category: "Aromatic",
  },
  {
    id: 11,
    name: "Basil",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1618164436241-4473940d21f2?w=400&q=80",
    category: "Aromatic",
  },
  {
    id: 12,
    name: "Thyme",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1620897332675-20ce51f3a4b7?w=400&q=80",
    category: "Aromatic",
  },
  {
    id: 13,
    name: "Oregano",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1620585499185-dc3f13539415?w=400&q=80",
    category: "Aromatic",
  },
  {
    id: 14,
    name: "Sage",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1595625298282-e0b2cfda3b19?w=400&q=80",
    category: "Aromatic",
  },
  {
    id: 15,
    name: "Orchid",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1524595040752-eb1e4d18a3a5?w=400&q=80",
    category: "Indoor Flowering",
  },
  {
    id: 16,
    name: "African Violet",
    price: 259,
    image:
      "https://images.unsplash.com/photo-1589718709504-65b370c38a6b?w=400&q=80",
    category: "Indoor Flowering",
  },
  {
    id: 17,
    name: "Anthurium",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1617697888139-6a24e6b4b98a?w=400&q=80",
    category: "Indoor Flowering",
  },
  {
    id: 18,
    name: "Begonia",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1594628834743-ce25a06ca642?w=400&q=80",
    category: "Indoor Flowering",
  },
  {
    id: 19,
    name: "Kalanchoe",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1587131896367-09c7e416888e?w=400&q=80",
    category: "Indoor Flowering",
  },
  {
    id: 20,
    name: "Bromeliad",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1585916418494-5fbc17d89e5f?w=400&q=80",
    category: "Indoor Flowering",
  },
  {
    id: 21,
    name: "Jasmine",
    price: 379,
    image:
      "https://images.unsplash.com/photo-1585916418688-74e10fdc4b20?w=400&q=80",
    category: "Indoor Flowering",
  },
];

const categories = ["All", "Air Purifying", "Aromatic", "Indoor Flowering"];

function ProductList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list-page">
      <h2>Our Plants</h2>

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">&#8377;{product.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
