export async function fetchMenuCategory(){
    const data = await fetch(`http://localhost:9090/all-menu-category`,{method:"GET"})
        .then((response)=>{
            return response.json()
        });
    return data;
}

export async function getMenuCategoryById(id){
    const data = await fetch(`http://localhost:9090/menu-category/${id}`,{method:"GET"})
        .then((response)=>{
            return response.json()
        });
    return data;
}

export async function submitMenuCategory(menuCategory) {
    let menuCategoryInput = JSON.stringify(menuCategory);
    const data = await fetch("http://localhost:9090/menu-category",
        {method:"PUT", headers:{'Content-Type': 'application/json'}, body: menuCategoryInput})
        .then((response)=>{
            return response.json()
        }).catch(reason => console.log(reason));
    console.log(data);
    if(data.status===400){
        alert('data tidak boleh kosong');
    }else{
        alert('save data success');
    }
    return data;
}

export async function deleteMenuCategory(id){
    const data = await fetch(`http://localhost:9090/menu-category/${id}`,{method:"DELETE"})
        .then((response)=>{
            alert('data dihapus');
            window.location.reload();
            }
        );
    return data;
}