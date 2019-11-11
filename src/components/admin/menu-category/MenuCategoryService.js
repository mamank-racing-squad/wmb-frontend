export async function fetchMenuCategory(){
    const data = await fetch(`http://localhost:9090/all-menu-category`,{method:"GET"})
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
    return data;
}

export async function deleteMenuCategory(id){
    const data = await fetch(`http://localhost:9090/menu-category/${id}`,{method:"DELETE"})
        .then((response)=>{
            alert('data dihapus')
            }
        );
    return data;
}