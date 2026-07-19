// 52 dishes across every category referenced in the brief.
// Images are neutral placeholders (picsum, seeded per dish) — swap for real
// food photography before shipping to production.

const RAW = [
  ['Margherita Pizza', 'Pizza', 'Italian', ['Tomato', 'Mozzarella', 'Basil', 'Olive Oil'], 640, 14, 1, 12.5, true],
  ['Pepperoni Pizza', 'Pizza', 'Italian', ['Pepperoni', 'Mozzarella', 'Tomato Sauce'], 780, 15, 2, 14.0, false],
  ['Chicken Alfredo Pasta', 'Pasta', 'Italian', ['Fettuccine', 'Chicken', 'Cream', 'Parmesan'], 720, 18, 1, 15.5, false],
  ['Lasagna', 'Pasta', 'Italian', ['Beef', 'Bechamel', 'Pasta Sheets', 'Cheese'], 810, 35, 1, 16.0, false],
  ['Grilled Steak', 'Steaks', 'BBQ', ['Ribeye', 'Rosemary', 'Garlic Butter'], 690, 22, 2, 32.0, true],
  ['BBQ Chicken', 'BBQ', 'BBQ', ['Chicken Thigh', 'Smoked Paprika', 'BBQ Glaze'], 560, 25, 2, 17.5, false],
  ['Cheeseburger', 'Burger', 'Fast Food', ['Beef Patty', 'Cheddar', 'Brioche Bun'], 650, 12, 1, 11.0, true],
  ['Beef Burger', 'Burger', 'Fast Food', ['Beef Patty', 'Lettuce', 'Tomato', 'Special Sauce'], 620, 12, 1, 11.5, false],
  ['Chicken Burger', 'Burger', 'Fast Food', ['Crispy Chicken', 'Slaw', 'Pickles'], 590, 13, 2, 10.5, false],
  ['Club Sandwich', 'Starters', 'Lunch', ['Turkey', 'Bacon', 'Egg', 'Sourdough'], 480, 10, 1, 9.5, false],
  ['Caesar Salad', 'Salads', 'Healthy Food', ['Romaine', 'Parmesan', 'Croutons', 'Anchovy Dressing'], 320, 9, 1, 10.0, false],
  ['Greek Salad', 'Salads', 'Healthy Food', ['Feta', 'Olives', 'Cucumber', 'Tomato'], 280, 8, 1, 9.5, true],
  ['Tomato Soup', 'Soups', 'Lunch', ['Roasted Tomato', 'Basil', 'Cream'], 190, 15, 1, 6.5, false],
  ['Mushroom Soup', 'Soups', 'Lunch', ['Wild Mushroom', 'Thyme', 'Cream'], 210, 15, 1, 7.0, false],
  ['Chicken Wings', 'Starters', 'BBQ', ['Chicken Wings', 'Hot Sauce', 'Butter'], 540, 20, 3, 11.0, true],
  ['Fried Chicken', 'Starters', 'Fast Food', ['Chicken', 'Buttermilk', 'Spiced Flour'], 610, 22, 2, 13.0, false],
  ['Fish & Chips', 'Seafood', 'Seafood', ['Cod', 'Beer Batter', 'Fries'], 720, 20, 1, 16.5, false],
  ['Grilled Salmon', 'Seafood', 'Seafood', ['Salmon', 'Lemon', 'Herb Butter'], 480, 18, 1, 22.0, true],
  ['Shrimp Pasta', 'Pasta', 'Seafood', ['Shrimp', 'Linguine', 'Garlic', 'Chili'], 620, 18, 2, 19.5, false],
  ['Butter Chicken', 'Indian', 'Indian', ['Chicken', 'Tomato Cream', 'Garam Masala'], 590, 25, 2, 15.0, true],
  ['Chicken Biryani', 'Indian', 'Indian', ['Basmati', 'Chicken', 'Saffron', 'Whole Spices'], 680, 35, 2, 14.5, true],
  ['Paneer Tikka', 'Indian', 'Indian', ['Paneer', 'Yogurt', 'Tandoori Spice'], 420, 20, 3, 12.0, false],
  ['Chicken Karahi', 'Indian', 'Indian', ['Chicken', 'Tomato', 'Ginger', 'Green Chili'], 610, 28, 3, 15.5, false],
  ['Chicken Tikka', 'Indian', 'Indian', ['Chicken', 'Yogurt Marinade', 'Tandoori Masala'], 400, 22, 3, 13.5, false],
  ['Seekh Kebab', 'BBQ', 'Indian', ['Minced Lamb', 'Onion', 'Coriander'], 460, 20, 3, 13.0, false],
  ['Sushi Platter', 'Asian', 'Japanese', ['Salmon', 'Tuna', 'Rice', 'Nori'], 380, 25, 0, 24.0, true],
  ['Ramen', 'Asian', 'Japanese', ['Pork Broth', 'Noodles', 'Soft Egg', 'Scallion'], 620, 25, 1, 16.0, false],
  ['Chicken Noodles', 'Asian', 'Chinese', ['Egg Noodles', 'Chicken', 'Vegetables'], 540, 18, 1, 12.0, false],
  ['Fried Rice', 'Asian', 'Chinese', ['Jasmine Rice', 'Egg', 'Soy', 'Scallion'], 460, 15, 1, 10.5, false],
  ['Tacos', 'Mexican', 'Mexican', ['Corn Tortilla', 'Beef', 'Salsa', 'Lime'], 430, 15, 2, 11.0, false],
  ['Burrito', 'Mexican', 'Mexican', ['Flour Tortilla', 'Rice', 'Beans', 'Chicken'], 690, 15, 2, 12.5, false],
  ['Chocolate Cake', 'Desserts', 'Desserts', ['Dark Chocolate', 'Butter', 'Cocoa'], 480, 10, 0, 8.5, true],
  ['Brownie', 'Desserts', 'Desserts', ['Chocolate', 'Walnut', 'Butter'], 420, 25, 0, 7.5, false],
  ['Ice Cream Sundae', 'Ice Cream', 'Desserts', ['Vanilla Ice Cream', 'Fudge', 'Nuts'], 380, 5, 0, 7.0, false],
  ['Cheesecake', 'Desserts', 'Desserts', ['Cream Cheese', 'Biscuit Base', 'Berry Compote'], 460, 20, 0, 9.0, true],
  ['Tiramisu', 'Desserts', 'Italian', ['Mascarpone', 'Espresso', 'Cocoa'], 410, 20, 0, 9.5, false],
  ['Donuts', 'Desserts', 'Breakfast', ['Dough', 'Glaze', 'Sprinkles'], 320, 20, 0, 5.5, false],
  ['French Fries', 'Starters', 'Fast Food', ['Potato', 'Sea Salt'], 380, 10, 1, 6.0, false],
  ['Garlic Bread', 'Starters', 'Italian', ['Baguette', 'Garlic Butter', 'Parsley'], 340, 12, 1, 6.5, false],
  ['Hot Dog', 'Fast Food', 'Fast Food', ['Beef Sausage', 'Bun', 'Mustard'], 480, 8, 1, 8.0, false],
  ['Pancakes', 'Breakfast', 'Breakfast', ['Buttermilk', 'Maple Syrup', 'Butter'], 520, 15, 0, 8.5, true],
  ['Waffles', 'Breakfast', 'Breakfast', ['Belgian Waffle', 'Berries', 'Whipped Cream'], 560, 15, 0, 9.0, false],
  ['Fresh Orange Juice', 'Fresh Juices', 'Drinks', ['Orange'], 120, 5, 0, 4.5, false],
  ['Mango Shake', 'Milkshakes', 'Drinks', ['Mango', 'Milk', 'Honey'], 260, 6, 0, 5.5, true],
  ['Cold Coffee', 'Coffee', 'Coffee', ['Espresso', 'Milk', 'Ice', 'Sugar'], 220, 6, 0, 5.0, false],
  ['Cappuccino', 'Coffee', 'Coffee', ['Espresso', 'Steamed Milk', 'Foam'], 120, 4, 0, 4.5, false],
  ['Espresso', 'Coffee', 'Coffee', ['Espresso Beans'], 15, 3, 0, 3.5, false],
  ['Green Tea', 'Tea', 'Coffee', ['Green Tea Leaves'], 5, 4, 0, 3.5, false],
  ['Mojito', 'Cocktails', 'Drinks', ['Mint', 'Lime', 'Soda'], 160, 5, 0, 6.5, false],
  ['Lemonade', 'Soft Drinks', 'Drinks', ['Lemon', 'Sugar', 'Mint'], 140, 5, 0, 4.0, false],
  ['Margherita Flatbread', 'Pizza', 'Italian', ['Flatbread', 'Tomato', 'Basil'], 520, 12, 1, 11.0, false],
  ['Beef Steak Frites', 'Steaks', 'BBQ', ['Sirloin', 'Fries', 'Peppercorn Sauce'], 710, 20, 2, 29.0, false],
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
    image: `https://picsum.photos/seed/embers-${slug}/640/520`,
  };
});

export const bestSellers = dishes.filter((d) => d.popular).slice(0, 8);
export const chefPicks = dishes.filter((d) => d.chefRecommended);
export const todaysSpecial = dishes[Math.min(20, dishes.length - 1)];
