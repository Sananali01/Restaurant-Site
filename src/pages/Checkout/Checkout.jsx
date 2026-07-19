import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiCreditCard,
  FiDollarSign,
  FiSmartphone,
  FiGift,
  FiShield,
} from "react-icons/fi";
import { useCart } from "../../context/CartContext.jsx";
import styles from "./Checkout.module.css";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaPaypal,
  FaGooglePay,
  FaApplePay,
  FaStripe,
  FaUniversity,
  FaBitcoin,
} from "react-icons/fa";

const PAYMENTS = [
  {
    id: "visa",
    label: "Visa",
    description: "Pay securely with your Visa card.",
    icon: FaCcVisa,
  },
  {
    id: "mastercard",
    label: "MasterCard",
    description: "Pay securely with your MasterCard.",
    icon: FaCcMastercard,
  },
  {
    id: "amex",
    label: "American Express",
    description: "Pay with Amex, earn your usual rewards.",
    icon: FaCcAmex,
  },
  {
    id: "paypal",
    label: "PayPal",
    description: "Checkout fast with your PayPal balance or card.",
    icon: FaPaypal,
  },
  {
    id: "googlepay",
    label: "Google Pay",
    description: "One-tap checkout with Google Pay.",
    icon: FaGooglePay,
  },
  {
    id: "applepay",
    label: "Apple Pay",
    description: "Pay with Face ID or Touch ID.",
    icon: FaApplePay,
  },
  {
    id: "stripe",
    label: "Stripe",
    description: "Card payments processed securely by Stripe.",
    icon: FaStripe,
  },
  {
    id: "card",
    label: "Debit / Credit Card",
    description: "Any major debit or credit card.",
    icon: FiCreditCard,
  },
  {
    id: "bank",
    label: "Bank Transfer",
    description: "Direct transfer from your bank account.",
    icon: FaUniversity,
  },
  {
    id: "cash",
    label: "Cash on Delivery",
    description: "Pay in cash when your order arrives.",
    icon: FiDollarSign,
  },
  {
    id: "gift",
    label: "Gift Card",
    description: "Redeem your gift card balance.",
    icon: FiGift,
  },
  {
    id: "crypto",
    label: "Crypto (UI only)",
    description: "Demo option — not processed.",
    icon: FaBitcoin,
  },
];

export default function Checkout() {
  const { items, totals, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("card");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    ["name", "email", "phone", "address", "city", "zip"].forEach((k) => {
      if (!form[k].trim()) e[k] = "Required";
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const placeOrder = (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (!validate()) return;
    const orderId = `EMB-${Math.floor(100000 + Math.random() * 900000)}`;
    clearCart();
    navigate("/order-success", { state: { orderId, total: totals.total } });
  };

  if (items.length === 0) {
    return (
      <section className={`section ${styles.emptySection}`}>
        <div className="container">
          <p>Your cart is empty — add a few dishes before checking out.</p>
          <Link to="/dishes" className="btn btn-primary">
            Browse Dishes
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout — Embers</title>
        <meta
          name="description"
          content="Complete your order — delivery details and payment."
        />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Almost There</span>
          <h1>Checkout</h1>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <form className={styles.grid} onSubmit={placeOrder}>
            <div className={styles.formCol}>
              <div className={styles.card}>
                <h3>Customer Details</h3>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                    {errors.name && (
                      <span className={styles.error}>Required</span>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                    {errors.email && (
                      <span className={styles.error}>Required</span>
                    )}
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <span className={styles.error}>Required</span>
                  )}
                </div>
              </div>

              <div className={styles.card}>
                <h3>Delivery Address</h3>
                <div className={styles.field}>
                  <label htmlFor="address">Street Address</label>
                  <input
                    id="address"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                  />
                  {errors.address && (
                    <span className={styles.error}>Required</span>
                  )}
                </div>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      value={form.city}
                      onChange={(e) => update("city", e.target.value)}
                    />
                    {errors.city && (
                      <span className={styles.error}>Required</span>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="zip">ZIP Code</label>
                    <input
                      id="zip"
                      value={form.zip}
                      onChange={(e) => update("zip", e.target.value)}
                    />
                    {errors.zip && (
                      <span className={styles.error}>Required</span>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Payment Method</h3>
                <div className={styles.payments}>
                  {PAYMENTS.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      className={`${styles.paymentOption} ${payment === p.id ? styles.paymentActive : ""}`}
                      onClick={() => setPayment(p.id)}
                    >
                      <>
                        <p.icon className={styles.paymentIcon} />
                        <div className={styles.paymentInfo}>
                          <strong>{p.label}</strong>
                          <small>{p.description}</small>
                          <span className={styles.secure}>
                            <FiShield /> Secure
                          </span>
                        </div>
                      </>
                    </button>
                  ))}
                </div>
                {/* Card Payments */}
                {["visa", "mastercard", "amex", "stripe", "card"].includes(
                  payment,
                ) && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>Card Holder Name</label>
                      <input placeholder="John Doe" />
                    </div>

                    <div className={styles.field}>
                      <label>Card Number</label>
                      <input placeholder="4242 4242 4242 4242" />
                    </div>

                    <div className={styles.row2}>
                      <div className={styles.field}>
                        <label>Expiry Date</label>
                        <input placeholder="MM/YY" />
                      </div>

                      <div className={styles.field}>
                        <label>CVV</label>
                        <input placeholder="123" />
                      </div>
                    </div>

                    <span className={styles.note}>
                      Demo payment only — no real transaction will be processed.
                    </span>
                  </div>
                )}

                {/* PayPal */}
                {payment === "paypal" && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>PayPal Email</label>
                      <input type="email" placeholder="example@email.com" />
                    </div>

                    <span className={styles.note}>
                      You would normally be redirected to PayPal.
                    </span>
                  </div>
                )}

                {/* Google Pay */}
                {payment === "googlepay" && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>Google Account Email</label>
                      <input type="email" placeholder="google@gmail.com" />
                    </div>

                    <span className={styles.note}>
                      Google Pay authentication is simulated.
                    </span>
                  </div>
                )}

                {/* Apple Pay */}
                {payment === "applepay" && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>Apple ID Email</label>
                      <input type="email" placeholder="apple@icloud.com" />
                    </div>

                    <span className={styles.note}>
                      Face ID / Touch ID verification is simulated.
                    </span>
                  </div>
                )}

                {/* Bank Transfer */}
                {payment === "bank" && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>Account Holder Name</label>
                      <input placeholder="John Doe" />
                    </div>

                    <div className={styles.field}>
                      <label>IBAN / Account Number</label>
                      <input placeholder="PK00 XXXX XXXX XXXX" />
                    </div>

                    <div className={styles.field}>
                      <label>Bank Name</label>
                      <input placeholder="HBL / UBL / Meezan Bank" />
                    </div>
                  </div>
                )}

                {/* Cash on Delivery */}
                {payment === "cash" && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>Special Delivery Instructions</label>
                      <textarea
                        rows={3}
                        placeholder="Gate number, apartment, landmark..."
                      />
                    </div>

                    <span className={styles.note}>
                      Please keep the exact amount ready on delivery.
                    </span>
                  </div>
                )}

                {/* Gift Card */}
                {payment === "gift" && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>Gift Card Code</label>
                      <input placeholder="GV-XXXX-XXXX-XXXX" />
                    </div>

                    <div className={styles.field}>
                      <label>PIN (if applicable)</label>
                      <input placeholder="1234" />
                    </div>
                  </div>
                )}

                {/* Crypto */}
                {payment === "crypto" && (
                  <div className={styles.cardFields}>
                    <div className={styles.field}>
                      <label>Wallet Address</label>
                      <input placeholder="0x1234..." />
                    </div>

                    <div className={styles.field}>
                      <label>Currency</label>
                      <select>
                        <option>Bitcoin (BTC)</option>
                        <option>Ethereum (ETH)</option>
                        <option>USDT</option>
                      </select>
                    </div>

                    <span className={styles.note}>
                      Demo only — cryptocurrency payments are not processed.
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.summary}>
              <h3>Order Summary</h3>
              <div className={styles.itemsList}>
                {items.map((i) => (
                  <div key={i.id} className={styles.itemRow}>
                    <span>
                      {i.qty}&times; {i.name}
                    </span>
                    <span>${(i.price * i.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className={styles.divider} />
              <div className={styles.row2b}>
                <span>Subtotal</span>
                <span>${totals.subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.row2b}>
                <span>Tax</span>
                <span>${totals.tax.toFixed(2)}</span>
              </div>
              <div className={styles.row2b}>
                <span>Delivery</span>
                <span>
                  {totals.delivery > 0
                    ? `$${totals.delivery.toFixed(2)}`
                    : "Free"}
                </span>
              </div>
              <div className={styles.divider} />
              <div className={styles.total}>
                <span>Total</span>
                <span>${totals.total.toFixed(2)}</span>
              </div>
              <button type="submit" className="btn btn-primary">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
