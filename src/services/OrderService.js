export async function submitOrder(payload, orderDetails) {
    const order = {...payload, orderDetails: orderDetails};
    return await fetch("http://localhost:9090/order",
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then((response) => {
            return response.json();
        })
}