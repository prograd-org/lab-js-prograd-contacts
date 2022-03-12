//Enter your code here..

let users = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            let message = document.querySelector("#message")
            let h2 = document.createElement("h2")
            h2.innerHTML = 'Lists of Users'
            message.append(h2)
            data.map((ele) => {
                displaycontact(ele)

            })
        })

    .catch((error) => {
        console.log('Promise rejected.');
        console.log(error.message);
    })
}

document.querySelector("#btnGet").addEventListener("click", users)

function displaycontact(user) {
    let message = document.querySelector("#message")

    let player = document.createElement("div")
    player.setAttribute("class", "player")

    let name = document.createElement("div")
    name.setAttribute("class", "strength")
    name.innerHTML = 'Name : ' + user.name

    let email = document.createElement("div")
    email.innerHTML = 'Email : ' + user.email

    let phone = document.createElement("div")
    phone.innerHTML = 'Phone : ' + user.phone

    let website = document.createElement("div")
    website.innerHTML = 'Website : ' + user.website

    let company = document.createElement("div")
    company.innerHTML = 'Company : ' + user.company.name

    let city = document.createElement("div")
    city.innerHTML = 'City : ' + user.address.city

    let zipcode = document.createElement("div")
    zipcode.innerHTML = 'Zipcode : ' + user.address.zipcode




    player.appendChild(name)
    player.appendChild(email)
    player.appendChild(phone)
    player.appendChild(website)
    player.appendChild(company)
    player.appendChild(city)
    player.appendChild(zipcode)

    message.appendChild(player)
}