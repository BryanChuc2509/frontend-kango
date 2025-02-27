import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton: React.FC = () => {
  const [amount, setAmount] = useState<string | null>(null);
  const idReserva = localStorage.getItem("id_reserva");
  console.log("ID de reserva que se está enviando:", idReserva);
  const idPasajero = localStorage.getItem("id");

  // Obtener el precio de la reserva desde el backend
  useEffect(() => {
    if (!idReserva) {
      console.error("No hay id_reserva en localStorage");
      return;
    }

    fetch(`http://127.0.0.1:5000/api/precio/${idReserva}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.precio) {
          setAmount(data.precio);
        } else {
          console.error("No se encontró el precio en la reserva");
        }
      })
      .catch((error) => console.error("Error obteniendo la reserva:", error));
  }, [idReserva]);

  // Función para manejar el éxito del pago y enviarlo al backend
  const handlePaymentSuccess = (details: any) => {
    if (!idPasajero || !idReserva) {
      console.error("Faltan datos del pasajero o la reserva");
      return;
    }

    const paymentData = {
      id: idPasajero, // ID del pasajero que realiza el pago
      id_reserva: idReserva, // ID de la reserva
      id_transaccion: details.id, // ID de la transacción de PayPal
      monto: details.purchase_units[0].amount.value, // Monto pagado
      estado: details.status, // Estado del pago (Aprobado, Fallido, etc.)
    };

    fetch("http://127.0.0.1:5000/payments/process-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Pago guardado en MongoDB:", data);
        alert("Pago completado con éxito. ¡Gracias por su compra! ✅");
      })
      .catch((error) => {
        console.error("Error guardando el pago:", error);
        alert("Hubo un error al procesar el pago. Inténtelo de nuevo.");
      });
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AdzbAOTlXBFbbcw-NPdudBvV5u6EYKOj20gG56nOWSutvLfaQJhaBZITh6q3IAx5jrEw53lKRDRwmJYM",
      }}
    >
      <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}>
        <h3>Pago con PayPal</h3>
        {amount ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: amount },
                    description: "Pago por reserva de KanGo",
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              if (!actions.order) return;
              const details = await actions.order.capture();
              handlePaymentSuccess(details);
            }}
            onCancel={() => {
              alert("Pago cancelado ❌");
            }}
            onError={(err) => {
              alert("Hubo un error con PayPal ⚠️");
              console.error(err);
            }}
          />
        ) : (
          <p>Cargando precio de la reserva...</p>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalButton;