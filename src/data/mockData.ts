import { Product } from "@/types";

export const mockProducts: Product[] = [
  // Women's Collection
  {
    id: 1,
    name: "Elegant Silk Blouse",
    slug: "elegant-silk-blouse",
    description: "Luxurious silk blouse with delicate draping. Perfect for office or evening wear.",
    price: 89.99,
    category_id: 1,
    category: "Women",
    image_url: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800",
    stock_quantity: 45,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Blush"]
  },
  {
    id: 2,
    name: "High-Waist Tailored Trousers",
    slug: "high-waist-tailored-trousers",
    description: "Classic tailored trousers with a modern high-waist fit.",
    price: 79.99,
    category_id: 1,
    category: "Women",
    image_url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
    stock_quantity: 30,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Beige"]
  },
  {
    id: 3,
    name: "Cashmere Blend Sweater",
    slug: "cashmere-blend-sweater",
    description: "Soft cashmere blend sweater for ultimate comfort and style.",
    price: 129.99,
    category_id: 1,
    category: "Women",
    image_url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    stock_quantity: 25,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "Grey", "Camel"]
  },
  {
    id: 4,
    name: "Midi Wrap Dress",
    slug: "midi-wrap-dress",
    description: "Versatile wrap dress that flatters every figure. Day to night elegance.",
    price: 99.99,
    category_id: 1,
    category: "Women",
    image_url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    stock_quantity: 40,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Wine", "Forest Green"]
  },
  
  // Men's Collection
  {
    id: 5,
    name: "Slim Fit Oxford Shirt",
    slug: "slim-fit-oxford-shirt",
    description: "Classic oxford shirt with a modern slim fit. Essential wardrobe staple.",
    price: 69.99,
    category_id: 2,
    category: "Men",
    image_url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    stock_quantity: 50,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink"]
  },
  {
    id: 6,
    name: "Tailored Wool Blazer",
    slug: "tailored-wool-blazer",
    description: "Premium wool blazer with impeccable tailoring. Perfect for any occasion.",
    price: 249.99,
    category_id: 2,
    category: "Men",
    image_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    stock_quantity: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Charcoal", "Black"]
  },
  {
    id: 7,
    name: "Straight Leg Denim",
    slug: "straight-leg-denim",
    description: "Classic straight leg denim in premium Japanese selvedge fabric.",
    price: 119.99,
    category_id: 2,
    category: "Men",
    image_url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
    stock_quantity: 35,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Dark Wash", "Light Wash", "Black"]
  },
  {
    id: 8,
    name: "Merino Wool V-Neck",
    slug: "merino-wool-vneck",
    description: "Lightweight merino wool sweater. Temperature regulating and breathable.",
    price: 89.99,
    category_id: 2,
    category: "Men",
    image_url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
    stock_quantity: 30,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Grey", "Burgundy"]
  },

  // Kids Collection
  {
    id: 9,
    name: "Cotton Graphic Tee",
    slug: "cotton-graphic-tee",
    description: "Soft cotton tee with fun graphics. Perfect for everyday play.",
    price: 24.99,
    category_id: 3,
    category: "Kids",
    image_url: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
    stock_quantity: 60,
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["White", "Navy", "Red"]
  },
  {
    id: 10,
    name: "Denim Jacket",
    slug: "kids-denim-jacket",
    description: "Classic denim jacket sized for kids. Durable and stylish.",
    price: 49.99,
    category_id: 3,
    category: "Kids",
    image_url: "https://images.unsplash.com/photo-1514090458221-65af845436d4?w=800",
    stock_quantity: 35,
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Light Blue", "Dark Blue"]
  },
  {
    id: 11,
    name: "Cozy Hoodie",
    slug: "cozy-hoodie",
    description: "Warm and comfortable hoodie for cool days. Soft fleece interior.",
    price: 39.99,
    category_id: 3,
    category: "Kids",
    image_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
    stock_quantity: 45,
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Grey", "Navy", "Pink"]
  },
  {
    id: 12,
    name: "Stretch Joggers",
    slug: "stretch-joggers",
    description: "Comfortable stretch joggers. Great for active kids.",
    price: 34.99,
    category_id: 3,
    category: "Kids",
    image_url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
    stock_quantity: 50,
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Black", "Grey", "Navy"]
  }
];
