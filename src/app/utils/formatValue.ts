const formatValue = (valueToFormat: string | number) => {
    const formatted = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(
        +valueToFormat
    );
    return formatted;
}

export { formatValue };