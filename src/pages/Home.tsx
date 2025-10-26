import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockData";
import heroImage from "@/assets/hero-banner.jpg";
import womenCollection from "@/assets/women-collection.jpg";
import menCollection from "@/assets/men-collection.jpg";

const Home = () => {
  const newArrivals = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Milena's Boutique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
          <div className="container-custom">
            <div className="max-w-xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
                New Season
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Discover our latest collection of timeless pieces
              </p>
              <Link to="/products">
                <Button size="lg" className="btn-primary">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container-custom py-20">
        <h2 className="text-3xl font-light text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/products?category=Women" className="group relative overflow-hidden aspect-[4/5]">
            <img
              src={womenCollection}
              alt="Women's Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end p-8">
              <div className="text-white">
                <h3 className="text-3xl font-light mb-2">Women</h3>
                <p className="text-sm">Explore collection</p>
              </div>
            </div>
          </Link>

          <Link to="/products?category=Men" className="group relative overflow-hidden aspect-[4/5]">
            <img
              src={menCollection}
              alt="Men's Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end p-8">
              <div className="text-white">
                <h3 className="text-3xl font-light mb-2">Men</h3>
                <p className="text-sm">Explore collection</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link to="/products?category=Kids">
            <Button variant="outline" size="lg">
              Kids Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-muted py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-light text-center mb-12">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="container-custom py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light mb-4">Special Offer</h2>
          <p className="text-muted-foreground mb-8">
            Sign up for our newsletter and get 10% off your first order
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-border rounded-sm flex-1 max-w-md bg-background"
            />
            <Button className="btn-primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
