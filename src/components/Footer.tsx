import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20 border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wider">MILENA'S BOUTIQUE</h3>
            <p className="text-sm text-muted-foreground">
              Premium fashion for everyone. Quality clothing that speaks elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products?category=Women" className="hover:text-foreground transition-colors">Women</Link></li>
              <li><Link to="/products?category=Men" className="hover:text-foreground transition-colors">Men</Link></li>
              <li><Link to="/products?category=Kids" className="hover:text-foreground transition-colors">Kids</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/profile" className="hover:text-foreground transition-colors">My Account</Link></li>
              <li><Link to="/cart" className="hover:text-foreground transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Teryan 105, Yerevan</li>
              <li>+374 96 220 983</li>
              <li>tovmasyanmilena2025@gmail.com</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Milena's Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
