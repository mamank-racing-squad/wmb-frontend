import Swal from "sweetalert2";
import {printIframe} from "../components/cashier/payment/PaymentForm";

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
    payment.pay = payment.pay.replace(/\D+/g, '');
    return await fetch(`http://localhost:9090/payment/${id}`,
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payment)
        })
        .then((response) => {
            return response.json();
        });
}