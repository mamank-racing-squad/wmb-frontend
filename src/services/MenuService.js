import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export async function fetchMenu(){
    return await fetch(`http://localhost:9090/list-menu`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitMenu(payload, image) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('menuInput', JSON.stringify(payload));
    return await fetch("http://localhost:9090/menu/upload",
        {
            method: payload.idMenu !== "" ? "POST" : "PUT",
            body: formData

        })
        .then(()=>{
            MySwal.fire({
                icon: 'success',
                title: 'Your data has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(reason => console.log(reason));
}

export async function deleteMenuById(id){
    return await fetch(`http://localhost:9090/menu/${id}`, {method: "DELETE"})
        .then(() => {
            MySwal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
            )
        });
}

export async function getMenuById(id){
    return await fetch(`http://localhost:9090/menu/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}