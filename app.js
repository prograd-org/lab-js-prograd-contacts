//Enter your code here..
let button = document.querySelector("#btnGet");
var msg = document.querySelector("#message");
btn.onclick = function () {
  const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.onerror = () => {
      reject(Error("Error Occured"));
    };
    request.send();
  });

  promise.then(
    (data) => {
      console.log(data);
      const result = JSON.parse(data);
      var player = "<h2>Lists of Users</h2>";
      result.forEach(function (user) {
        player += `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
            </div>`;
        msg.innerHTML = player;
      });
    },
    (error) => {
      console.log(error.message);
    }
  );
};
