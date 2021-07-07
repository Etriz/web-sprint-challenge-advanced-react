import React from "react";
import { useForm } from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = () => {
  // const [showSuccessMessage, setShowSuccessMessage] = useForm(false);
  // const [values, setValues] = useForm(initialValue);
  const [values, setValues] = useForm([initialValue, false]);

  const handleChanges = (e) => {
    // setValues({ ...values, [e.target.name]: e.target.value });
    setValues([{ ...values[0], [e.target.name]: e.target.value }, values[1]]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setShowSuccessMessage(true);
    setValues([values[0], true]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            data-testid="firstName"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            data-testid="lastName"
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            data-testid="address"
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} data-testid="city" />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} data-testid="state" />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} data-testid="zip" />
        </label>
        <button>Checkout</button>
      </form>

      {values[1] && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values[0].firstName} {values[0].lastName}
          </p>
          <p>{values[0].address}</p>
          <p>
            {values[0].city}, {values[0].state} {values[0].zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
