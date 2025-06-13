
import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isSpecial?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.isSpecial && (
          <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Özel El Yapımı
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-green-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-green-600 mb-2 capitalize">
          {product.category}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-700">
            {product.price.toLocaleString('tr-TR')} ₺
          </span>
          
          <Link
            to={`/product/${product.id}`}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            İncele
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
