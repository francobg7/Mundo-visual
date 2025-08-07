"use client";

import { CartItemsType } from "@/types";
import { MessageCircle } from "lucide-react";

interface WhatsAppFormProps {
  cart: CartItemsType;
}

const generateWhatsAppMessage = (cart: CartItemsType) => {
  let message = "Hola, soy mayorista y estoy interesado en solicitar cotización para los siguientes productos:\n\n";
  
  cart.forEach((item, index) => {
    message += `${index + 1}- ${item.name} de color ${item.selectedColor}`;
    if (item.selectedSize && item.selectedSize !== "estándar" && item.selectedSize !== "completo" && item.selectedSize !== "universal") {
      message += `, tamaño ${item.selectedSize}`;
    }
    message += ` - ${item.quantity} unidades`;
    message += `\n`;
  });
  
  message += `\nValor total: $${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}`;
  message += `\n\nNecesito cotización para mayoristas. Gracias por su atención.`;
  
  return message;
};

const WhatsAppForm = ({ cart }: WhatsAppFormProps) => {
  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage(cart);
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <MessageCircle className="w-16 h-16 text-green-500" />
      <h2 className="text-xl font-semibold">Solicitar Cotización por WhatsApp</h2>
      <p className="text-gray-600 text-center">
        Enviaremos un mensaje de WhatsApp con los productos seleccionados para solicitar cotización mayorista.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg w-full max-w-md">
        <h3 className="font-medium mb-2">Cotización que se enviará:</h3>
        <div className="text-sm text-gray-600 whitespace-pre-line">
          {generateWhatsAppMessage(cart)}
        </div>
      </div>
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
        Solicitar Cotización
      </button>
    </div>
  );
};

export default WhatsAppForm; 