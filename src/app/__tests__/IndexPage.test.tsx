import { render } from "@testing-library/react";
import IndexPage from "../page";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import axios from "axios";

jest.mock("axios");


const createWrapper = (children: any) => {
    const queryClient = new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
  }

describe('IndexPage', () => {
    test('render', () => {
        const componentWithWrapper = createWrapper(
            <IndexPage />
        );

        render(componentWithWrapper);
    });
    test('render with results', () => {
        const mockedAxios = jest.mocked(axios);
        mockedAxios.get.mockResolvedValue({products: [{id: 1, name: 'Test', description: 'Test'}]});
        const componentWithWrapper = createWrapper(
            <IndexPage />
        );

        render(componentWithWrapper);
    });
});