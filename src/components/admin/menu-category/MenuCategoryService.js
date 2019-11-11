export async function fetchMenuCategory(){
    const data = await fetch(`http://localhost:9090/all-menu-category`,{method:"GET"})
        .then((response)=>{
            return response.json()
        });
    return data;
}

export async function submitMenuCategory(menu, image) {
    let menuInput = JSON.stringify(menu);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('menuInput', menuInput);
    const data = await fetch("http://localhost:9090/menu/upload",
        {method:"PUT", body: formData})
        .then((response)=>{
            return response.json()
        }).catch(reason => console.log(reason));
    console.log(data);
    return data;
}