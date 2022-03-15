//Enter your code here..
const btn = document.querySelector("#btnGet")
const msg = document.querySelector("#message")
btn.onclick = async () => {
  const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.onload = () => {
      request.status === 200
        ? resolve(request.response)
        : reject(new Error(request.statusText))
    }
    request.onerror = () => {
      reject(new Error("Error Occured"))
    }
    request.send()
  })
  try {
    const data = await promise
    const users = JSON.parse(data)
    let player = "<h2>Lists of Users</h2>"
    users.forEach((user) => {
      player += `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
            </div>`
      msg.innerHTML = player
    })
  } catch (e) {
    console.log(e.message)
  }
}
