import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "All");
  const [sortBy, setSortBy] = useState<string>("newest");

  const categories = ["Բոլորը", "Կանայք", "Տղամարդիկ", "Երեխաներ"];
  const categoryMapping: Record<string, string> = {
    "Բոլորը": "All",
    "Կանայք": "Women",
    "Տղամարդիկ": "Men",
    "Երեխաներ": "Kids"
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by category
    const englishCategory = categoryMapping[selectedCategory] || selectedCategory;
    if (englishCategory !== "All") {
      filtered = filtered.filter((p) => p.category === englishCategory);
    }

    // Sort products
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // newest
        sorted.sort((a, b) => b.id - a.id);
    }

    return sorted;
  }, [selectedCategory, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const englishCategory = categoryMapping[category] || category;
    if (englishCategory === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", englishCategory);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light mb-2">Բոլոր ապրանքները</h1>
          <p className="text-muted-foreground">
            {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'ապրանք' : 'ապրանք'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Տեսակավորել՝</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Նորագույն</SelectItem>
                <SelectItem value="price-low">Գին՝ Ցածրից բարձր</SelectItem>
                <SelectItem value="price-high">Գին՝ Բարձրից ցածր</SelectItem>
                <SelectItem value="name">Անուն</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Այս կատեգորիայում ապրանքներ չեն գտնվել։</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
