export async function getOrderById(id){
    return await fetch(`http://localhost:9090/order/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}
export async function getUnpaidOrder(){
    return await fetch(`http://localhost:9090/payment/`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitPayment(id, payment) {
    const paymentInput = JSON.stringify(payment);
    return await fetch(`http://localhost:9090/payment/${id}`,
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: paymentInput
        })
        .then((response) => {
           return response.json();
        })
}