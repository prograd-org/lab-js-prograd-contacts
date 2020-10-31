//Enter your code here..
const btn = document.querySelector('#btnGet');
const message = document.querySelector('#message'); //select the region wherein the data will be displayed//
btn.onclick = function () {
    //create a new promise object named promise//
    const promise = new Promise((resolve, reject) => {
        //creating a new http request//
        const request = new XMLHttpRequest();
        //getting the requested http link//
        request.open('GET', 'https://jsonplaceholder.typicode.com/users');
        //mention what should be done after loading//
        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };

        request.onerror = () =>
            //request.onerror specifies what should be done when the http link fails to get fetched// 
            {
                reject(Error('Error'));
            };

        request.send(); //sending the created request//
    });

    promise.then((data) =>
        //promise.then specifies what event takes place after the success//
        {
            console.log(data)
            console.log('Got data! Promise fulfilled.');
            const result = JSON.parse(data)
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

            message.innerHTML = player; //creating the above layout for each and every user//
        }, (error) => {
            console.log('Promise rejected.');
            console.log(error.message);
        });
}
