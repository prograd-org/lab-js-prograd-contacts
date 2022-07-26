//Enter your code here..
document.getElementById("btnGet").onclick = () =>{   
    fetch("https://jsonplaceholder.typicode.com/users", {method: 'GET'})
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
        data.forEach(element => {
            document.getElementById("message").innerHTML += `
            <div class="user-card">
                <p>
                    <b class="user-name">Name: ${element.name}</b><br>
                    Email: ${element.email}<br>
                    Phone: ${element.phone}<br>
                    Website: ${element.website}<br>
                    Company: ${element.company.name}<br>
                    City: ${element.address.city}<br>
                    Zipcode: ${element.address.zipcode}<br>
                </p>
            </div>`
        });
    })
}