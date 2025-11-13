import { Product } from "@/types";

export const mockProducts: Product[] = [
  // Women's Collection
  {
    id: 1,
    name: "Էլեգանտ մետաքսե բլուզ",
    slug: "elegant-silk-blouse",
    description: "Շքեղ մետաքսե բլուզ նուրբ պաստառներով։ Կատարյալ գրասենյակի կամ երեկոյան հագուստի համար։",
    price: 89.99,
    category_id: 1,
    category: "Women",
    image_url: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800",
    stock_quantity: 45,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Փղոսկրագույն", "Սև", "Վարդագույն"]
  },
  {
    id: 2,
    name: "Բարձր գոտկատեղով տաս խլացված տաբատ",
    slug: "high-waist-tailored-trousers",
    description: "Դասական խլացված տաբատ ժամանակակից բարձր գոտկատեղային հարմարությամբ։",
    price: 79.99,
    category_id: 1,
    category: "Women",
    image_url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
    stock_quantity: 30,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Սև", "Մուգ կապույտ", "Բեժ"]
  },
  {
    id: 3,
    name: "Քաշմիրի խառնուրդով սվիտեր",
    slug: "cashmere-blend-sweater",
    description: "Փափուկ քաշմիրի խառնուրդով սվիտեր վերջնական հարմարավետության և ոճի համար։",
    price: 129.99,
    category_id: 1,
    category: "Women",
    image_url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    stock_quantity: 25,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Սրուչագույն", "Մոխրագույն", "Ուղտագույն"]
  },
  {
    id: 4,
    name: "Միջին երկարության փաթաթված զգեստ",
    slug: "midi-wrap-dress",
    description: "Բազմակողմանի փաթաթված զգեստ, որը գեղեցիկ է բոլորի համար։ Օրվա և գիշերվա էլեգանտություն։",
    price: 99.99,
    category_id: 1,
    category: "Women",
    image_url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    stock_quantity: 40,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Սև", "Գինու գույն", "Անտառային կանաչ"]
  },
  
  // Men's Collection
  {
    id: 5,
    name: "Նեղ հարմարված Օքսֆորդ վերնաշապիկ",
    slug: "slim-fit-oxford-shirt",
    description: "Դասական օքսֆորդ վերնաշապիկ ժամանակակից նեղ հարմարությամբ։ Անհրաժեշտ հագուստային հիմնական։",
    price: 69.99,
    category_id: 2,
    category: "Men",
    image_url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    stock_quantity: 50,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Սպիտակ", "Բաց կապույտ", "Վարդագույն"]
  },
  {
    id: 6,
    name: "Խլացված բրդյա բլեյզեր",
    slug: "tailored-wool-blazer",
    description: "Պրեմիում բրդյա բլեյզեր անթերի խլացումով։ Կատարյալ ցանկացած առիթի համար։",
    price: 249.99,
    category_id: 2,
    category: "Men",
    image_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    stock_quantity: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Մուգ կապույտ", "Ածխագույն", "Սև"]
  },
  {
    id: 7,
    name: "Ուղիղ ոտքերով ջինս",
    slug: "straight-leg-denim",
    description: "Դասական ուղիղ ոտքերով ջինս պրեմիում ճապոնական սելվեջ գործվածքից։",
    price: 119.99,
    category_id: 2,
    category: "Men",
    image_url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
    stock_quantity: 35,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Մուգ լվացում", "Բաց լվացում", "Սև"]
  },
  {
    id: 8,
    name: "Մերինո բրդյա V-բաց սվիտեր",
    slug: "merino-wool-vneck",
    description: "Թեթև մերինո բրդյա սվիտեր։ Ջերմաստիճանի կարգավորող և շնչող։",
    price: 89.99,
    category_id: 2,
    category: "Men",
    image_url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
    stock_quantity: 30,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Մուգ կապույտ", "Մոխրագույն", "Բուրգունդի"]
  },

  // Kids Collection
  {
    id: 9,
    name: "Բամբակյա գրաֆիկական մարզաշապիկ",
    slug: "cotton-graphic-tee",
    description: "Փափուկ բամբակյա մարզաշապիկ զվարճալի գրաֆիկայով։ Կատարյալ ամենօրյա խաղի համար։",
    price: 24.99,
    category_id: 3,
    category: "Kids",
    image_url: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
    stock_quantity: 60,
    sizes: ["4Տ", "6Տ", "8Տ", "10Տ", "12Տ"],
    colors: ["Սպիտակ", "Մուգ կապույտ", "Կարմիր"]
  },
  {
    id: 10,
    name: "Ջինսե բաճկոն",
    slug: "kids-denim-jacket",
    description: "Դասական ջինսե բաճկոն երեխաների չափերով։ Ամուր և ոճային։",
    price: 49.99,
    category_id: 3,
    category: "Kids",
    image_url: "https://images.unsplash.com/photo-1514090458221-65af845436d4?w=800",
    stock_quantity: 35,
    sizes: ["4Տ", "6Տ", "8Տ", "10Տ", "12Տ"],
    colors: ["Բաց կապույտ", "Մուգ կապույտ"]
  },
  {
    id: 11,
    name: "Հարմարավետ հուդի",
    slug: "cozy-hoodie",
    description: "Ջերմ և հարմարավետ հուդի զով օրերի համար։ Փափուկ ֆլիս ներսից։",
    price: 39.99,
    category_id: 3,
    category: "Kids",
    image_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
    stock_quantity: 45,
    sizes: ["4Տ", "6Տ", "8Տ", "10Տ", "12Տ"],
    colors: ["Մոխրագույն", "Մուգ կապույտ", "Վարդագույն"]
  },
  {
    id: 12,
    name: "Էլաստիկ ջոգերներ",
    slug: "stretch-joggers",
    description: "Հարմարավետ էլաստիկ ջոգերներ։ Հիանալի է ակտիվ երեխաների համար։",
    price: 34.99,
    category_id: 3,
    category: "Kids",
    image_url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
    stock_quantity: 50,
    sizes: ["4Տ", "6Տ", "8Տ", "10Տ", "12Տ"],
    colors: ["Սև", "Մոխրագույն", "Մուգ կապույտ"]
  }
];