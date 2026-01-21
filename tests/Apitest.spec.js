
const { test, expect } = require('@playwright/test');
const { request } = require('http');

test('Get users', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const Respjson = await response.json();
  console.log(Respjson);
  expect(Respjson).toHaveProperty("phone","1-770-736-8031 x56442");
});


test('Create user', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Nabeel',
        job: 'QA Engineer'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  expect(response.status()).toBe(201);
  console.log(await response.json());
});


// Updating User Via --PUT Request

test('Update user with PUT', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/users/1', // PUT target
    {
      data: {
        name: 'Nabeel Updated',
        job: 'Senior QA Engineer'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  // Assert status
  expect(response.status()).toBe(200);

  // Display response in console
  const responseBody = await response.json();
  console.log('Response from PUT:', responseBody);

  // Optional: assert updated values
  expect(responseBody.name).toBe('Nabeel Updated');
  expect(responseBody.job).toBe('Senior QA Engineer');
});

// Using Delete Request 


test('Delete user', async ({ request }) => {

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  // Status assertion
  expect(response.status()).toBe(200);

  // ✅ Display response (usually empty object)
  const responseBody = await response.json();
  console.log('Delete response:', responseBody);
});
//Otwani files----Get API request 
// test("Post call Booking ID ",async({request})=>{

//   const Authdata={
//     "username" : "admin",
//     "password" : "password123"
//   }

//   const response= await request.post("https://restful-booker.herokuapp.com/auth"
// ,{
//     headers:
//           {
//             "Content-Type":"application/json"
//           },data: {Authdata}
          
//   });
//   console.log(response.status());
//   expect(response.status()).toBe(200);
// })





