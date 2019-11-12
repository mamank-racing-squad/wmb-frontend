export async function fetchDiningTable(){
    return await fetch(`http://localhost:9090/dining-tables`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
}

export async function submitDiningTable(payload) {
    return await fetch("http://localhost:9090/dining-table",
        {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            })
        .then((response) => {
            return response.json()
        }).catch(reason => console.log(reason));
}