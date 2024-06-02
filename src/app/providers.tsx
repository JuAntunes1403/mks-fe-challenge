'use client'

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext<any>(undefined);

import { toast } from 'react-toastify';

export default function Providers({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [items, setItems] = useState<any[]>([]);
    const [quantity, setQuantity] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const addItem = (product: any) => {
        const index = items.findIndex((item: any) => item.id === product.id);
        if(index >= 0) {
          const prev: any = [...items];
          prev[index].quantity += 1;
          setItems(prev);
        } else {
          setItems([...items, {...product, quantity: 1}]);
        }

        toast.success(`${product.name} adicionado com sucesso!`, {
            autoClose: 2000,
            theme: 'colored'
        });
    };

    const addQuantity = (product: any) => {
        const index = items.findIndex((item) => item.id === product.id);
        const newItems = [...items];
        newItems[index].quantity += 1;
        setItems(newItems);
    };

    const removeQuantity = (product: any) => {
        const index = items.findIndex((item) => item.id === product.id);
        const newItems = [...items];
        newItems[index].quantity -= 1;
        setItems(newItems.filter((item) => !!item.quantity));
    };

    const sumQuantity = () => {
        const totalQuantity = items.reduce((a, b) => a + b.quantity, 0);
        setQuantity(totalQuantity);
    };

    const sumTotalValue = () => {
        let values: number[] = [];
        items.map((item: any) => values.push(item.quantity * item.price));
        const total = values.reduce((a,b) => a + b, 0);
        setTotalValue(total);
    };

    const removeItem = (product: any) => {
        const index = items.findIndex((item) => item.id === product.id);
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    useEffect(() => {
        sumQuantity();
        sumTotalValue();
    }, [items]);
    
    return (
        <CartContext.Provider value={{ items, quantity, addItem, addQuantity, removeQuantity, removeItem, totalValue }}>
            {children}
        </CartContext.Provider>
    )
}