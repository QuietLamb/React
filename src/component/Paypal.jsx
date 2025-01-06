import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalCheckout = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "K6CYECR4TW2AQ" }}>
      <div>
        <h1>PayPal Sandbox Checkout</h1>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Test amount
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Sandbox transaction completed by ${details.payer.name.given_name}`);
            });
          }}
          onError={(err) => {
            console.error("Sandbox PayPal Checkout Error:", err);
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;
