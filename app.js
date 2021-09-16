let btn = _("btnGet");
btn.addEventListener("click", () => {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/users");
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(Error("Error while fetching data"));
    };
    req.send();
  });

  promise.then(
    (data) => {
      let res = JSON.parse(data);
      display(res);
    },
    (error) => {
      console.log("There was a error");
      console.log(error);
    }
  );
});

let display = (data) => {
  var player = "<h2>Lists of Users</h2>";
  for (let i = 0; i < data.length; i++) {
    player += `<div class="player">
      <div class="strength">Name : ${data[i].name}</div>
      <div>Email   : ${data[i].email}</div>
      <div>Phone   : ${data[i].phone}</div>
      <div>Website : ${data[i].website}</div>
      <div>Company : ${data[i].company.name}</div>
      <div>City    : ${data[i].address.city}</div>
      <div>Zipcode : ${data[i].address.zipcode}</div>
     </div>`;
  }
  _("message").innerHTML = player;
};

function _(id) {
  return document.getElementById(id);
}
