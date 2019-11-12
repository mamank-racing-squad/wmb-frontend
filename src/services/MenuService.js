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
            body: formData})
        .then((response)=>{
            alert('save data success');
            return response.json()
        })
        .catch(reason => console.log(reason));
}

export async function deleteMenuById(id){
    return await fetch(`http://localhost:9090/menu/${id}`, {method: "DELETE"})
        .then((response) => {
            alert('data dihapus');
        });
}

export async function getMenuById(id){
    return await fetch(`http://localhost:9090/menu/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}