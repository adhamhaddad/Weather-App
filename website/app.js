const button = document.querySelector("#generate"),
    temp = document.getElementById("temp"),
    date = document.getElementById("date"),
    content = document.getElementById("content"),
    api = "https://api.openweathermap.org/data/2.5/weather?zip=",
    key = "&units=metric&appid=39fff0ccd01e57393e4e890860e1327f";
    

const generate = () => {
    document.querySelector("#entryHolder").style.display = 'block';
    const zipCode = document.querySelector("#zip").value,
        currentDate = new Date().toLocaleString(),
        feel = document.getElementById("feelings").value;
    getData(`${api}${zipCode}${key}`)
    .then(data => {
        postData("/postData", {
            temperature: data.main.temp,
            date: currentDate,
            userResponse: feel
        });
        retrieveData();
    })
}

// GET Request
const getData = async (url) => {
    const response = await fetch(url)
    try {
        const newData = await response.json();
        return newData;
    } catch (err) {
        console.log("Error", err);
    }
}

// POST Request
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
    })
    try {
        const newData = await response.json();
        return newData;
    } catch (err) {
        console.log("Error", err);
    }
}

// Update UI
const retrieveData = async () => {
    const request = await fetch("/getData");
    try {
        const allData = await request.json();
        temp.textContent = `Temperature: ${Math.round(allData.temperature)} degrees`;
        date.textContent = `Date: ${allData.date}`;
        content.textContent = `User input: ${allData.userResponse}`;
    } catch (err) {
        console.log("Error", err);
    }
}

// Generate Button
button.addEventListener('click', generate);