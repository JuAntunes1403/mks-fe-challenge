import { render } from "@testing-library/react";
import ProductItem from "../components/ProductItem";
import { CartContext } from "../providers";

describe('ProductItem', () => {
    test('render', () => {
        const mockedProduct = {id: 1, name: 'Test', description: 'loren ipsum', price: '100', brand: 'Brand', photo: '', createdAt: '', updatedAt: ''};
        const addItem = jest.fn();
        render(
            <CartContext.Provider value={{addItem}}>
                <ProductItem product={mockedProduct} />
            </CartContext.Provider>
        );
    });
})