import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

// Define props for the PayPalButton component
interface PayPalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
  onError: (error: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider options={{ clientId }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(_,actions) => {
          return actions.order.create({
            intent: "CAPTURE", // Explicitly define intent
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(_,actions) => {
          if (!actions.order) {
            onError(new Error("Order capture failed: actions.order is undefined"));
            return Promise.reject("Order capture failed");
          }
          return actions.order.capture().then(onSuccess);
        }}
        onError={(error) => {
          console.error("PayPal Error:", error);
          onError(error);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
