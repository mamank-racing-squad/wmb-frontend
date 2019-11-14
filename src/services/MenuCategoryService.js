export async function fetchMenuCategory() {
    return await fetch(`http://localhost:9090/menu-categories`, {method: "GET"})
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
        .then((respond) => {
            return respond.json();
        });
}

export async function getMenuCategoryById(id) {
    return await fetch(`http://localhost:9090/menu-category/${id}`, {method: "GET"})
        .then((response) => {
            return response.json();
        });
}

export async function deleteMenuCategoryById(id) {
    return await fetch(`http://localhost:9090/menu-category/${id}`, {method: "DELETE"});
}