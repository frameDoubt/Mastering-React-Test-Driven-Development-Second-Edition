import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
    let container;
    const render = component => act(() => ReactDOM.createRoot(container).render(component));

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    it("renders the customer's first name", () => {
        const customer = { firstName: "Ashley" };
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Ashley");
    });

    it("renders another customer's first name", () => {
        const customer = { firstName: "Jordan" };
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Jordan");
    });
});