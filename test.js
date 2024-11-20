const axios = require("axios");

const BASE_URL = "http://localhost:5000/api";

(async () => {
    try {
        console.log("Adding element...");
        const elementResponse = await axios.post(`${BASE_URL}/element`, {
            name: "Brush Teeth",
            date: Date.now(),
        });
        const element = elementResponse.data.element;
        console.log("Element added:", element);

        console.log("\nLogging element as completed");
        const logResponse = await axios.post(`${BASE_URL}/log`, {
            elementId: element._id,
            note: "Brushed my teeth for 2 minutes.",
            loggedAt: Date.now(),
            completed: true,
        });
        console.log("Element logged:", logResponse.data);
    }   catch(error) {
        console.error("Error:", error.response?.data || error.message);
    }
})();