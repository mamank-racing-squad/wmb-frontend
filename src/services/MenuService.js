import {handleNumberFormatCurrency} from "../constants/Constanta";

export async function fetchMenu() {
    return await fetch(`http://localhost:9090/menus`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitMenu(payload, image) {
    payload.price = handleNumberFormatCurrency(payload.price);
    payload.price = payload.price.replace(/\D+/g, "");
    const formData = new FormData();
    formData.append('image', image);
    formData.append('menuInput', JSON.stringify(payload));
    return await fetch("http://localhost:9090/menu",
        {
            method: payload.idMenu !== "" ? "POST" : "PUT",
            body: formData
        })
        .then((respond) => {
            return respond.json();
        })
}

export async function deleteMenuById(id) {
    return await fetch(`http://localhost:9090/menu/${id}`, {method: "DELETE"});
}

export async function getMenuById(id) {
    return await fetch(`http://localhost:9090/menu/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}