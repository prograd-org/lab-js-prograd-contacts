//Enter your code here..
document.getElementById("btnGet").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(result => {
        console.log(result);
        var player = '<h2>Lists of Users</h2>';
        result.forEach(function (user) {
            player +=
                `<div class="player">
                          <div class="strength">Name : ${user.name}</div>
                          <div>Email   : ${user.email}</div>
                          <div>Phone   : ${user.phone}</div>
                          <div>Website : ${user.website}</div>
                          <div>Company : ${user.company.name}</div>
                          <div>City    : ${user.address.city}</div>
                          <div>Zipcode : ${user.address.zipcode}</div>
                         </div>`
        });
        document.getElementById("message").innerHTML = player;
    }).catch(error => {
        console.log('Promise rejected.');
        console.log(error.message);
    });
})