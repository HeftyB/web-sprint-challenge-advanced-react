import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

test("form header renders", () => {
    render(<CheckoutForm/>);
    const formHeader = screen.getByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const fNameInput = screen.getByLabelText(/First Name:/i);
    const lNameInput = screen.getByLabelText(/Last Name:/i);
    const addressInput = screen.getByLabelText(/Address:/i);
    const cityInput = screen.getByLabelText(/City:/i);
    const stateInput = screen.getByLabelText(/State:/i);
    const zipInput = screen.getByLabelText(/Zip:/i);
    const checkoutBtn = screen.getByTestId(/checkoutBtn/i);
    
    fireEvent.change(fNameInput, {
        target: {
            name: "firstName", value: "firstnametest"
        }
    });
    fireEvent.change(lNameInput, {
        target: {
            name: "lastName", value: "lastnametest"
        }
    });
    fireEvent.change(addressInput, {
        target: {
            name: "address", value: "adresstest"
        }
    });
    fireEvent.change(cityInput, {
        target: {
            name: "city", value: "citytest"
        }
    });
    fireEvent.change(stateInput, {
        target: {
            name: "state", value: "statetest"
        }
    });
    fireEvent.change(zipInput, {
        target: {
            name: "zip", value: "ziptest"
        }
    });
    fireEvent.click(checkoutBtn);
    const successMess = screen.getByTestId("successMessage");
    expect.stringContaining("firstnametest lastnametest addresstest citytest, statetest ziptest")
});
