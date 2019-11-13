import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export async function fetchMenuCategory() {
    return await fetch(`http://localhost:9090/all-menu-category`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitMenuCategory(payload) {
    return await fetch("http://localhost:9090/menu-category",
        {
            method: payload.idMenuCategory !== "" ? "POST" : "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(() => {
            MySwal.fire({
                icon: 'success',
                title: 'Your data has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        });
}

export async function getMenuCategoryById(id) {
    return await fetch(`http://localhost:9090/menu-category/${id}`, {method: "GET", mode: "no-cors"})
        .then((response) => {
            console.log(response)
        });
}

export async function deleteMenuCategoryById(id) {
    return await fetch(`http://localhost:9090/menu-category/${id}`, {method: "DELETE"})
        .then((response) => {
            MySwal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
            )
        });
}