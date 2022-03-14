function clikker(){
    try{
        fetch("https://jsonplaceholder.typicode.com/users")
   
    // Converting received data to JSON
        .then(response => response.json())
        .then(json => {
  
        // Create a variable to store HTML
            let li = `<h2>Lists of Users</h2>`;
       
        // Loop through each data and add a table row
            json.forEach(user => {
                li += `<div class="player">
                <div class="strength">Name : ${user.name}</div>
                <div>Email   : ${user.email}</div>
                <div>Phone   : ${user.phone}</div>
                <div>Website : ${user.website}</div>
                <div>Company : ${user.company.name}</div>
                <div>City    : ${user.address.city}</div>
                <div>Zipcode : ${user.address.zipcode}</div>
               </div>`;
            });
  
        // Display result
        document.getElementById("message").innerHTML = li;
        });
    }
    catch(error) {
        console.log('Promise rejected.');
        console.log(error.message);
    };
}