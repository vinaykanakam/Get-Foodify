import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

it("should render Restaurant Card component with prop data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name=screen.getByText('Chinese Wok');

    expect(name).toBeInTheDocument();
})