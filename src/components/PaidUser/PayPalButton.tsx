import React, { useEffect, useRef } from "react";
import { loadScript } from "@paypal/paypal-js";

const PayPalButton: React.FC = () => {
  const paypalButtonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializePayPalButton = async () => {
      try {
        const paypal = await loadScript({
          clientId: "AQX2FZmaPNkW9NvOAVm8YUpNZRALQDWuj0TtN2wpL4HegCX1rhMOOye4a6P_InnT1gMTXCjk-3fM8kLK", // Reemplaza con un Client ID válido
          currency: "MXN",
        });

        
        if (paypalButtonContainerRef.current) {
          paypalButtonContainerRef.current.innerHTML = "";
        }

        if (paypal && paypalButtonContainerRef.current) {
          paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: "240.00" },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Pago completado por ${details.payer.name.given_name}`);
              });
            },
            onError: (err) => {
              console.error("Error en el pago:", err);
              alert("Ocurrió un error durante el pago. Por favor, intenta de nuevo.");
            },
          }).render(paypalButtonContainerRef.current);
        }
      } catch (error) {
        console.error("Error al cargar el SDK de PayPal:", error);
      }
    };

    initializePayPalButton();

    return () => {
      if (paypalButtonContainerRef.current) {
        paypalButtonContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <div ref={paypalButtonContainerRef} className="w-full max-w-md p-4 bg-white rounded-lg shadow-md"></div>
    </div>
  );
};

export default PayPalButton;
