//Enter your code
let btn=document.querySelector('#btnGet');
let msg=document.querySelector('#message');
btn.onclick=()=>{
    const promise=new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest
        request.open('Get','https://jsonplaceholder.typicode.com/users');
        request.onload=()=>{
            if(request.status===200){
                resolve(request.response);
            }
            else{
                reject(Error(request.status))
            }
        }    
        request.onerror=function(){
            reject(Error('Error fetching data'));
        }
        request.send();
    });
    promise.then((data)=>{
        console.log('Got data! Promise Executed');
        const result=JSON.parse(data);
        var players='<h2>Lists of User</h2>';
        result.forEach(function(user) {
            players+=
           `<div class="player">
             <div class="strength">Name : ${user.name}</div>
             <div>Email   : ${user.email}</div>
             <div>Phone   : ${user.phone}</div>
             <div>Website : ${user.website}</div>
             <div>Company : ${user.company.name}</div>
             <div>City    : ${user.address.city}</div>
             <div>Zipcode : ${user.address.zipcode}</div>
            </div>`
           })
           msg.innerHTML=players;
    },(error)=>{
        console.lod('Promise rejected');
        console.log(error.message);
    })
}