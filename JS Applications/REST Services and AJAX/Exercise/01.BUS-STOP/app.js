function getInfo() {
    let busStop = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${busStop}.json`;
    //clears the list(ul)
    document.getElementById('buses').innerHTML = null;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let buses = Object.entries(data.buses);
            document.getElementById('stopName').textContent = data.name;
            let list = document.getElementById('buses');
            buses.forEach(elem => {
                list.innerHTML += `<li>Bus ${elem[0]} arrives in ${elem[1]}</li>`;
            });
        })
        .catch(err => {
            document.getElementById('stopName').textContent = 'Error';
        });

    document.getElementById('stopId').value = null;
}