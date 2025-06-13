
import React from 'react';

interface WhatsAppButtonProps {
  productName: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ productName, className = "" }) => {
  const handleWhatsAppOrder = () => {
    const message = `Merhaba, Şifa Dünyası Demre. ${productName} ürününü sipariş etmek istiyorum.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/905449199720?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppOrder}
      className={`bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 ${className}`}
    >
      <span>WhatsApp ile Sipariş Ver</span>
    </button>
  );
};

export default WhatsAppButton;
