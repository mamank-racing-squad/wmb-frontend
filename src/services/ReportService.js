export async function getPayments() {
    return await fetch(`http://localhost:9090/payments`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function getTotalIncome() {
    return await fetch(`http://localhost:9090/reports`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}