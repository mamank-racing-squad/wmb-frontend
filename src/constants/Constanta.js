export function handleNumberFormatCurrency (payload) {
    return new Intl.NumberFormat('id').format(payload);
}

export function handleAvailability (payload) {
    if (payload) return "Available";
    return "Not Available"
}