**Log Element as Completed**
Dependencies:
npm install express mongoose body-parser dotenv

1. Requesting data from the microservice
   - The requests are made using Axios HTTP method POST
   - The endpoint is http://localhost:5000/api/log
   - The request body for POST is comprised of:
     - elementId: The _id of habit element created in a similar manner (view /models/Element.js for Schema)
     - note: String, describes additional details
     - loggedAt: Date, timestamp for the log
     - completed: Bool, in this case true to indicate habit is completed

Example call:
const axios = require("axios");
const BASE_URL = http://localhost:5000/api;

(async () => {
  try {
const logResponse = await axios.post(`${BASE_URL}/log`, {
            elementId: element._id,
            note: "string",
            loggedAt: Date.now(),
            completed: true,
  });
}
})();

2. Receiving data from the microservice
   - Responses from the microservice contain either the JSON data log object or an error message:
       - Success (200 OK) containing object extracted using response.data and displayed with console.log:
           - _id: identifier for log entry
           - element_Id: identifier for habit element
           - note, loggedAt, and completed: values in POST request
        - Error (404) Element not found.
        - Error (500) Server error.

Example call:
const axios = require("axios");
const BASE_URL = http://localhost:5000/api;

(async () => {
  try {
    // FROM ABOVE CODE
    // const logResponse = await axios.post(`{BASE_URL}/log`, {});
    console.log(log.Response.data);
}  catch(error){
  console.error("Error:", error.response?.data || error.message);
  }
})();

![Sequence diagram](https://github.com/user-attachments/assets/c2f5791f-0567-4a00-9825-cc8c28f5070f)
