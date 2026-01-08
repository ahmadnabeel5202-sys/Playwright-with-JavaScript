const { test, expect } = require('@playwright/test');
const { request } = require('http');

//Otwani files----Get API request 
test("Post call Booking ID ",async({request})=>{

  const Authdata={
    "username" : "admin",
    "password" : "password123"
  }

  const response= await request.post("https://restful-booker.herokuapp.com/auth"
,{
    headers:
          {
            "Content-Type":"application/json"
          },data: {Authdata}
          
  });
  console.log(response.status());
  expect(response.status()).toBe(200);
})

//Post call example with booking ID 
test("Post call Booking ID", async({request})=>{
    const bookingdata=
    {
         "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
    }
     const response= await request.post("https://restful-booker.herokuapp.com/booking"
,{
    headers:
          {
            "Content-Type":"application/json"
          },data: bookingdata })
        console.log(response.status());
        const respdata=await response.json();
        console.log(respdata);   
})
