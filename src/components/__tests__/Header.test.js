import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from '../Header';
import appStore from "../../utils/appStore";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

it("should load header component with a login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton= screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();    
    
});

it("should load header component with 0 cart items", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems= screen.getByText("Cart- (0 items)");

    expect(cartItems).toBeInTheDocument();    
    
});

it("should load header component with cart items", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartItems= screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();    
    
});

it("should change login to logout on a click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton= screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton= screen.getByRole("button", {name: "Logout"})
    expect(logoutButton).toBeInTheDocument();
})