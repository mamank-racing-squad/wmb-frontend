export async function fetchMenu(){
    const data = await fetch(`http://localhost:9090/list-menu`,{method:"GET"})
        .then((response)=>{
            return response.json()
        });
    return data;
}