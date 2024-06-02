import { render } from "@testing-library/react";
import Providers from "../providers";

describe('Providers', () => {
    test('render', () => {
        render(<Providers><h1>Test</h1></Providers>)
    });
});