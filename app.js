//Enter your code here..
const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');
btn.onclick = function() {
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/users');

        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response); // we got data here, so resolve the Promise
            } else {
                reject(Error(request.statusText)); // status is not 200 OK, so reject
            }
        };

        request.onerror = () => {
            reject(Error('Error fetching data.')); // error occurred, reject the  Promise
        };

        request.send(); // send the request
    });

    console.log('Asynchronous request made.');

    promise.then((data) => {
        console.log(data)
        console.log('Got data! Promise fulfilled.');
        const result = JSON.parse(data)
        var player = '<h2>Lists of Users</h2>';
        result.forEach(function(user) {
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

        msg.innerHTML = player;
    }, (error) => {
        console.log('Promise rejected.');
        console.log(error.message);
    });
}