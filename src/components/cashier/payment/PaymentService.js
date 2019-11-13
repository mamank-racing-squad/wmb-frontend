import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {handleNumberFormatCurrency} from "../../admin/menu/MenuAction";

const MySwal = withReactContent(Swal);

export async function getTrxById(id){
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

export async function submitPayment(id, payment, totalPrice) {
    const change = payment.pay-totalPrice;
    const paymentInput = JSON.stringify(payment);
    return await fetch(`http://localhost:9090/payment/${id}`,
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: paymentInput
        })
        .then( async (response) => {
            if (response.status === 200) {
                await MySwal.fire({
                    icon: 'success',
                    title: 'Transaction Success',
                    text: 'Change : Rp. '+ handleNumberFormatCurrency(change)
                })
            } else {
                response = await response.json();
                await MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.message,
                })
            }
        })
}