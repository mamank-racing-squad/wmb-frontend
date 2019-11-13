import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export async function fetchDiningTable() {
    return await fetch(`http://localhost:9090/dining-tables`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitDiningTable(payload) {
    return await fetch("http://localhost:9090/dining-table",
        {
            method: payload.idDiningTable !== "" ? "POST" : "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then( async (response) => {
            if (response.status === 200) {
                await MySwal.fire({
                    icon: 'success',
                    title: 'Your data has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                response = await response.json()
                await MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.message,
                })
            }
        })
}

export async function getDataDiningTableById(id) {
    return await fetch(`http://localhost:9090/dining-table/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function deleteDiningTableById(id) {
    return await fetch(`http://localhost:9090/dining-table/${id}`, {method: "DELETE"})
        .then(() => {
            MySwal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
            )
        });
}
