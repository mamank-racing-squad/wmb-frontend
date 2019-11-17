export async function getOrderById(id){
    return await fetch(`http://localhost:9090/order/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function getUnpaidOrder(){
    return await fetch(`http://localhost:9090/unpaid-order/`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}
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