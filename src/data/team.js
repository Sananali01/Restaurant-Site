import marcoAlvarez from "../assets/Chef/Marco Alvarez.jpg";
import hanaKobayashi from "../assets/Chef/Hana Kobayashi.jpg";
import eliseFontaine from "../assets/Chef/Elise Fontaine.jpg";
import jamalCarter from "../assets/Chef/Jamal Carter.jpg";
import giuliaRomano from "../assets/Chef/Giulia Romano.jpg";
import weiZhang from "../assets/Chef/Wei Zhang.jpg";

export const chefs = [
  {
    id: 'chef-1',
    name: 'Marco Alvarez',
    role: 'Master Chef',
    specialty: 'Modern European',
    experience: '18 years',
    awards: ['Michelin Recommended 2023', 'Golden Toque 2021'],
    bio: 'Marco leads the kitchen with a philosophy of restraint — a handful of ingredients, treated with total precision.',
    image: marcoAlvarez,
  },
  {
    id: 'chef-2',
    name: 'Hana Kobayashi',
    role: 'Sous Chef',
    specialty: 'Japanese Fusion',
    experience: '11 years',
    awards: ['Rising Talent Award 2022'],
    bio: 'Hana trained in Osaka before bringing her precision knife-work and umami-forward style to Embers.',
    image: hanaKobayashi,
  },
  {
    id: 'chef-3',
    name: 'Elise Fontaine',
    role: 'Pastry Chef',
    specialty: 'French Patisserie',
    experience: '14 years',
    awards: ['World Pastry Cup Finalist 2020'],
    bio: 'Elise treats dessert as architecture — structured, seasonal, and never overly sweet.',
    image: eliseFontaine,
  },
  {
    id: 'chef-4',
    name: 'Jamal Carter',
    role: 'BBQ Chef',
    specialty: 'Wood-Fired & Smoke',
    experience: '16 years',
    awards: ['Pitmaster Circuit Champion 2019'],
    bio: 'Jamal runs the fire pit like a science lab — every cut gets its own wood, timing, and rest.',
    image: jamalCarter,
  },
  {
    id: 'chef-5',
    name: 'Giulia Romano',
    role: 'Italian Chef',
    specialty: 'Regional Italian',
    experience: '13 years',
    awards: ['Slow Food Ambassador 2022'],
    bio: 'Giulia makes pasta fresh every morning, drawing on recipes passed down through four generations.',
    image: giuliaRomano,
  },
  {
    id: 'chef-6',
    name: 'Wei Zhang',
    role: 'Asian Chef',
    specialty: 'Pan-Asian Wok Cuisine',
    experience: '15 years',
    awards: ['Wok Master Guild 2021'],
    bio: 'Wei brings wok-hei intensity to every stir-fry, balancing heat, timing, and seasoning by instinct.',
    image: weiZhang,
  },
];
export const testimonials = [
  { id: 't1', name: 'Sarah Whitfield', rating: 5, text: 'Every course felt intentional — the steak was the best I\u2019ve had this year, and the service matched the food.', role: 'Google Review' },
  { id: 't2', name: 'David Chen', rating: 5, text: 'The tasting menu was a genuine surprise from start to finish. Reservation process was effortless too.', role: 'Google Review' },
  { id: 't3', name: 'Amara Okafor', rating: 4.5, text: 'Beautiful room, warm staff, and the butter chicken is now my standard for comparison.', role: 'Google Review' },
  { id: 't4', name: 'Tom Bradley', rating: 5, text: 'Brought my whole team here for a celebration dinner. Flawless from the welcome to the last dessert.', role: 'Google Review' },
  { id: 't5', name: 'Priya Nair', rating: 4.8, text: 'The chef\u2019s tasting board is worth the trip alone. Will be back for the seasonal menu change.', role: 'Google Review' },
  { id: 't6', name: 'Lucas Ferreira', rating: 5, text: 'Consistently the best BBQ in the city — smoked exactly right, every single visit.', role: 'Google Review' },
];

export const offers = [
  { id: 'o1', title: 'Weekend Deal', description: '20% off all dinner mains, Friday through Sunday evenings.', tag: 'Weekend', discount: '20% OFF', validUntil: 'Every weekend', image: 'https://picsum.photos/seed/embers-offer-weekend/560/400' },
  { id: 'o2', title: 'Family Combo', description: 'Four mains, two starters, and a shared dessert board for the table.', tag: 'Family', discount: 'From $89', validUntil: 'Ongoing', image: 'https://picsum.photos/seed/embers-offer-family/560/400' },
  { id: 'o3', title: 'Lunch Special', description: 'Two-course express lunch, served in under 40 minutes.', tag: 'Lunch', discount: '$18 fixed', validUntil: 'Mon–Fri, 12–3pm', image: 'https://picsum.photos/seed/embers-offer-lunch/560/400' },
  { id: 'o4', title: 'Student Discount', description: '15% off with a valid student ID, any day of the week.', tag: 'Student', discount: '15% OFF', validUntil: 'Ongoing', image: 'https://picsum.photos/seed/embers-offer-student/560/400' },
  { id: 'o5', title: 'Seasonal Menu', description: 'A limited six-course menu built around this season\u2019s harvest.', tag: 'Seasonal', discount: '$65 per guest', validUntil: 'Through the season', image: 'https://picsum.photos/seed/embers-offer-seasonal/560/400' },
  { id: 'o6', title: 'Festival Offer', description: 'Celebration set menu with a complimentary round of dessert wine.', tag: 'Festival', discount: 'Free dessert wine', validUntil: 'Festival week', image: 'https://picsum.photos/seed/embers-offer-festival/560/400' },
  { id: 'o7', title: 'Happy Hour', description: 'Half-price cocktails and small plates at the bar.', tag: 'Happy Hour', discount: '50% OFF', validUntil: 'Daily, 5–7pm', image: 'https://picsum.photos/seed/embers-offer-happyhour/560/400' },
];

export const blogPosts = [
  { id: 'b1', title: 'Five Weeknight Recipes from Our Pasta Station', category: 'Recipes', excerpt: 'Simple techniques our Italian kitchen uses to get restaurant-quality pasta on a weeknight schedule.', date: 'Jun 3, 2026', image: 'https://picsum.photos/seed/embers-blog-recipes/700/460' },
  { id: 'b2', title: 'How We Season a Ribeye Before It Ever Sees the Grill', category: 'Cooking Tips', excerpt: 'Dry-brining, resting, and timing — the unglamorous steps that make the difference.', date: 'May 22, 2026', image: 'https://picsum.photos/seed/embers-blog-tips/700/460' },
  { id: 'b3', title: 'Embers Is Expanding the Private Dining Room', category: 'Restaurant News', excerpt: 'A second private room opens next month, seating up to sixteen guests.', date: 'May 10, 2026', image: 'https://picsum.photos/seed/embers-blog-news/700/460' },
  { id: 'b4', title: 'Behind the Scenes: Our Autumn Harvest Dinner', category: 'Events', excerpt: 'A look at how the seasonal tasting menu came together, from farm visit to final plate.', date: 'Apr 28, 2026', image: 'https://picsum.photos/seed/embers-blog-events/700/460' },
  { id: 'b5', title: 'Building a Lighter Menu Without Losing Flavor', category: 'Healthy Eating', excerpt: 'Our approach to healthy plates that still taste like a night out.', date: 'Apr 12, 2026', image: 'https://picsum.photos/seed/embers-blog-healthy/700/460' },
  { id: 'b6', title: 'Chef Hana on Growing Up in an Osaka Kitchen', category: 'Chef Stories', excerpt: 'A conversation about family recipes, discipline, and why umami is never an accident.', date: 'Mar 30, 2026', image: 'https://picsum.photos/seed/embers-blog-chef/700/460' },
];

export const galleryImages = [
  { id: 'g1', category: 'Restaurant', image: 'https://picsum.photos/seed/embers-g-restaurant/700/900' },
  { id: 'g2', category: 'Food', image: 'https://picsum.photos/seed/embers-g-food1/700/560' },
  { id: 'g3', category: 'Kitchen', image: 'https://picsum.photos/seed/embers-g-kitchen/700/700' },
  { id: 'g4', category: 'Events', image: 'https://picsum.photos/seed/embers-g-events/700/900' },
  { id: 'g5', category: 'Interior', image: 'https://picsum.photos/seed/embers-g-interior1/700/560' },
  { id: 'g6', category: 'Chef', image: 'https://picsum.photos/seed/embers-g-chef/700/900' },
  { id: 'g7', category: 'Outdoor Dining', image: 'https://picsum.photos/seed/embers-g-outdoor/700/560' },
  { id: 'g8', category: 'Private Rooms', image: 'https://picsum.photos/seed/embers-g-private/700/900' },
  { id: 'g9', category: 'Food', image: 'https://picsum.photos/seed/embers-g-food2/700/700' },
  { id: 'g10', category: 'Interior', image: 'https://picsum.photos/seed/embers-g-interior2/700/560' },
  { id: 'g11', category: 'Restaurant', image: 'https://picsum.photos/seed/embers-g-restaurant2/700/900' },
  { id: 'g12', category: 'Kitchen', image: 'https://picsum.photos/seed/embers-g-kitchen2/700/560' },
];

export const faqs = [
  { q: 'Do I need a reservation, or do you accept walk-ins?', a: 'Walk-ins are welcome based on availability, but we recommend reserving a table, especially for weekend evenings.' },
  { q: 'Can you accommodate dietary restrictions or allergies?', a: 'Yes — let us know any allergies or dietary needs when booking, or mention them to your server, and the kitchen will adapt the menu.' },
  { q: 'Is there a dress code?', a: 'We ask for smart casual attire. Dressy jeans, collared shirts, and closed shoes are always welcome.' },
  { q: 'Do you offer private dining or event space?', a: 'We have two private rooms available for groups of 8–16, bookable through our contact page.' },
  { q: 'Is parking available near the restaurant?', a: 'Complimentary valet parking is available in the evenings, and a public garage sits directly across the street.' },
  { q: 'What is your cancellation policy for reservations?', a: 'We ask for at least 4 hours notice for cancellations so we can offer the table to another guest.' },
  { q: 'Do you deliver, or is ordering online for pickup only?', a: 'We offer both delivery and pickup for our full online menu, with live order tracking after checkout.' },
];
