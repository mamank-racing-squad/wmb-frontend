import React from "react";
import Swal from 'sweetalert2'

export async function submitOrder(payload, orderDetails ) {
    const order = {...payload, orderDetails:orderDetails};
    console.log(order,"data order")
    return await fetch("http://localhost:9090/order",
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Your data has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        });
}