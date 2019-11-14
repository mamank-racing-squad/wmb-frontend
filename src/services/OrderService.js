import React from "react";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export async function submitOrder(payload, orderDetails) {
    const order = {...payload, orderDetails: orderDetails};
    console.log(order, "data order")
    return await fetch("http://localhost:9090/order",
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then( async (response) => {
            if (response.status === 200) {
                await MySwal.fire({
                    icon: 'success',
                    title: 'Order Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                response = await response.json()
                await MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Please Complete the data first",
                })
            }
        })
}