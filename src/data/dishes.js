import { IMAGE_MAP } from "./dishesimages";

const RAW = [
  // ======================
  // 🍕 Pizza
  // ======================
  ['Margherita Pizza', 'Pizza', 'Italian', ['Tomato', 'Mozzarella', 'Basil', 'Olive Oil'], 640, 14, 1, 12.5, true],

  // ======================
  // 🍝 Pasta
  // ======================
  ['Chicken Alfredo Pasta', 'Pasta', 'Italian', ['Fettuccine', 'Chicken', 'Cream', 'Parmesan'], 720, 18, 1, 15.5, true],

  // ======================
  // 🥩 Steaks & BBQ
  // ======================
  ['Grilled Steak', 'Steaks', 'BBQ', ['Ribeye', 'Rosemary', 'Garlic Butter'], 690, 22, 2, 32.0, true],
  ['BBQ Chicken', 'BBQ', 'BBQ', ['Chicken Thigh', 'Smoked Paprika', 'BBQ Glaze'], 560, 25, 2, 17.5, true],

  // ======================
  // 🍔 Burgers
  // ======================
  ['Cheeseburger', 'Burger', 'Fast Food', ['Beef Patty', 'Cheddar', 'Brioche Bun'], 650, 12, 1, 11.0, true],

  // ======================
  // 🥪 Starters
  // ======================
  ['Club Sandwich', 'Starters', 'Lunch', ['Turkey', 'Bacon', 'Egg', 'Sourdough'], 480, 10, 1, 9.5, false],

  // ======================
  // 🥗 Salads
  // ======================
  ['Caesar Salad', 'Salads', 'Healthy Food', ['Romaine', 'Parmesan', 'Croutons', 'Anchovy Dressing'], 320, 9, 1, 10.0, false],

  // ======================
  // 🍲 Soups
  // ======================
  ['Tomato Soup', 'Soups', 'Lunch', ['Roasted Tomato', 'Basil', 'Cream'], 190, 15, 1, 6.5, false],

  // ======================
  // 🐟 Seafood
  // ======================
  ['Grilled Salmon', 'Seafood', 'Seafood', ['Salmon', 'Lemon', 'Herb Butter'], 480, 18, 1, 22.0, true],

  // ======================
  // 🍛 Desi
  // ======================
  ['Butter Chicken', 'Desi', 'Desi', ['Chicken', 'Tomato Cream', 'Garam Masala'], 590, 25, 2, 15.0, true],
  ['Chicken Karahi', 'Desi', 'Desi', ['Chicken', 'Tomato', 'Ginger', 'Green Chili'], 610, 28, 3, 15.5, true],
  ['Chicken Tikka', 'Desi', 'Desi', ['Chicken', 'Yogurt', 'Tandoori Masala'], 400, 22, 2, 13.5, true],
  ['Seekh Kebab', 'Desi', 'Desi', ['Minced Beef', 'Onion', 'Coriander', 'Green Chili'], 460, 20, 2, 13.0, true],
  ['Nihari', 'Desi', 'Desi', ['Beef Shank', 'Spices', 'Ginger', 'Flour'], 720, 180, 2, 17.5, true],
  ['Chicken Biryani', 'Desi', 'Desi', ['Basmati', 'Chicken', 'Saffron', 'Whole Spices'], 680, 35, 2, 14.5, true],

  // ======================
  // 🍣 Asian
  // ======================
  ['Sushi Platter', 'Asian', 'Japanese', ['Salmon', 'Tuna', 'Rice', 'Nori'], 380, 25, 0, 24.0, true],
  ['Chicken Noodles', 'Asian', 'Chinese', ['Egg Noodles', 'Chicken', 'Vegetables'], 540, 18, 1, 12.0, false],

  // ======================
  // 🌮 Mexican
  // ======================
  ['Tacos', 'Mexican', 'Mexican', ['Corn Tortilla', 'Beef', 'Salsa', 'Lime'], 430, 15, 2, 11.0, false],

  // ======================
  // 🍰 Desserts
  // ======================
  ['Chocolate Cake', 'Desserts', 'Desserts', ['Dark Chocolate', 'Butter', 'Cocoa'], 480, 10, 0, 8.5, true],

  // ======================
  // 🥞 Breakfast
  // ======================
  ['Pancakes', 'Breakfast', 'Breakfast', ['Buttermilk', 'Maple Syrup', 'Butter'], 520, 15, 0, 8.5, true],

 // ======================
// 🧃 Fresh Juices
// ======================
['Fresh Orange Juice', 'Fresh Juices', 'Drinks', ['Fresh Oranges'], 120, 5, 0, 4.5, false],
['Mango Juice', 'Fresh Juices', 'Drinks', ['Fresh Mango'], 150, 5, 0, 5.0, true],
['Watermelon Juice', 'Fresh Juices', 'Drinks', ['Watermelon', 'Mint'], 90, 5, 0, 4.5, false],
['Apple Juice', 'Fresh Juices', 'Drinks', ['Fresh Apples'], 110, 5, 0, 4.5, false],

// ======================
// ☕ Coffee
// ======================
['Cold Coffee', 'Coffee', 'Coffee', ['Espresso', 'Milk', 'Ice', 'Sugar'], 220, 6, 0, 5.0, false],

// ======================
// 🍵 Tea
// ======================
['Green Tea', 'Tea', 'Tea', ['Green Tea Leaves'], 5, 4, 0, 3.5, false],
['Karak Tea', 'Tea', 'Tea', ['Black Tea', 'Milk', 'Cardamom'], 110, 6, 0, 4.0, true],
['Masala Tea', 'Tea', 'Tea', ['Black Tea', 'Milk', 'Mixed Spices'], 120, 6, 0, 4.5, true],
['Lemon Tea', 'Tea', 'Tea', ['Black Tea', 'Lemon', 'Honey'], 20, 5, 0, 3.5, false],

// ======================
// 🍹 Cocktails
// ======================
['Mojito', 'Cocktails', 'Drinks', ['Mint', 'Lime', 'Soda'], 160, 5, 0, 6.5, false],
['Blue Lagoon', 'Cocktails', 'Drinks', ['Blue Curacao', 'Lemonade', 'Ice'], 180, 5, 0, 7.0, true],
['Strawberry Mocktail', 'Cocktails', 'Drinks', ['Strawberry', 'Lemon', 'Soda', 'Mint'], 140, 5, 0, 6.5, true],
['Pina Colada', 'Cocktails', 'Drinks', ['Pineapple Juice', 'Coconut Cream', 'Ice'], 220, 5, 0, 7.5, false],
];

const SPICE = ['Mild', 'Medium', 'Hot'];


export const dishes = RAW.map(([name, category, cuisine, ingredients, calories, minutes, spice, price, popular], i) => {
  const id = `dish-${i + 1}`;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const isVeg = !/chicken|beef|pork|salmon|shrimp|fish|lamb|turkey|bacon|tuna|sausage|anchovy/i.test(
    ingredients.join(' ') + name
  );
  const rating = Math.round((3.9 + ((i * 37) % 11) / 100) * 10) / 10; // 3.9 - 5.0, deterministic
  const reviews = 40 + ((i * 53) % 260);
  const chefPick = i % 6 === 0;
  return {
    id,
    slug,
    name,
    category,
    cuisine,
    description: `${name} — a signature ${category.toLowerCase()} dish, cooked to order and finished with care.`,
    ingredients,
    calories,
    cookingTime: minutes,
    spiceLevel: SPICE[spice] || 'Mild',
    price,
    rating,
    reviews,
    popular: Boolean(popular),
    vegetarian: isVeg,
    spicy: spice >= 2,
    chefRecommended: chefPick,
   image: IMAGE_MAP[name],
  };
});

export const bestSellers = dishes.filter((d) => d.popular).slice(0, 8);
export const chefPicks = dishes.filter((d) => d.chefRecommended);
export const todaysSpecial = dishes[Math.min(20, dishes.length - 1)];
