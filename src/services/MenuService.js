export async function fetchDataMenu(){
    const data = await fetch(`http://localhost:9090/list-menu`,{method:"GET"})
        .then((response)=>{
            return response.json()
        });
    return data;
}

export async function submitDataMenu(menu, image) {
    let menuInput = JSON.stringify(menu);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('menuInput', menuInput);
    const data = await fetch("http://localhost:9090/menu/upload",
        {method:"PUT", body: formData})
        .then((response)=>{
            alert('save data success');
            window.location.reload();
            return response.json()
        }).catch(reason => console.log(reason));
    console.log(data);
    return data;
}

export async function deleteMenu(id){
    const data = await fetch(`http://localhost:9090/menu/${id}`,{method:"DELETE"})
        .then((response)=>{
            alert('data dihapus');
            window.location.reload();
        });
    return data;
}

export async function getDataMenuById(id){
    const data = await fetch(`http://localhost:9090/menu/${id}`,{method:"GET"})
        .then((response)=>{
            return response.json()
        });
    return data;
}

export async function editDataMenu(menu) {
    let menuInput = JSON.stringify(menu);
    const data = await fetch("http://localhost:9090/menu",
        {method:"POST", headers:{'Content-Type': 'application/json'}, body: menuInput})
        .then((response)=>{
            alert('save data success');
            window.location.reload();
            return response.json()
        }).catch(reason => console.log(reason));
    console.log(data);
    return data;
}
