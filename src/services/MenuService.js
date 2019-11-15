export async function fetchMenu() {
    return await fetch(`http://localhost:9090/menus`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitMenu(payload, image) {
    console.log(image)
    payload.price = payload.price.toString().replace(/\D+/g, "");
    const formData = new FormData();
    formData.append('image', image);
    formData.append('menuInput', JSON.stringify(payload));

    if (image !== null) {
        return await fetch("http://localhost:9090/menu/upload",
            {
                method: payload.idMenu !== "" ? "POST" : "PUT",
                body: formData
            })
            .then((respond) => {
                return respond.json();
            })
    } else {
        return await fetch("http://localhost:9090/menu",
            {
                headers: {'Content-Type': 'application/json'},
                method: payload.idMenu !== "" ? "POST" : "PUT",
                body: JSON.stringify(payload)
            })
            .then((respond) => {
                return respond.json();
            })
    }
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