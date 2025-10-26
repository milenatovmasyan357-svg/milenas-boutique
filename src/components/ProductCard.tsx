import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Card } from "./ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.slug}`}>
      <Card className="group overflow-hidden border-border product-card-hover bg-card">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-light text-sm mb-2 line-clamp-1">{product.name}</h3>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
