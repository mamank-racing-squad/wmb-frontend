export async function getPaymentById(id){
    return await fetch(`http://localhost:9090/payment/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitPayment(id, payment) {
    payment.pay = payment.pay.replace(/\D+/g, '');
    return await fetch(`http://localhost:9090/payment`,
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...payment, idOrder: id})
        })
        .then((response) => {
            return response.json();
        });
}