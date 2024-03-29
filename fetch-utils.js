const fetch = require("cross-fetch");
const API_URL = "https://error-affirmations.herokuapp.com";

async function fetchCategories(id) {
    const resp = await fetch(`${API_URL}/api/v1/categories/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    const data = await resp.json();
    return data;
}

module.exports = fetchCategories;
