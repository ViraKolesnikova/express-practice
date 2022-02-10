// console.log("sending post request");

const ourRequest=fetch("http://localhost:3000/ajax", {
  method: "POST",  
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({
    name: "Vira"
  })
})
ourRequest.then((response)=>{
  console.log(response);
})