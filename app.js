// Function to add recommendation to list
function addRecommendation() {
    const name = document.getElementById("name").value;
    const recommendation = document.getElementById("recommendation").value;

    if(recommendation === ""){
        alert("Please fill in the recommendation field before submitting.");
        return;
    }

    // Create a list item to be appended to the recommendation list
    const recommendationList = document.getElementById("recommendations-list");
    const listItem = document.createElement("li");
    listItem.className = "recommendation-item";

    // Add content to the new recommendation item
    listItem.innerHTML = `<h3>${name}</h3> <p>${recommendation}</p>`;

    //append the recommendation item to list
    recommendationList.appendChild(listItem);

    //Clear input fields after submission
    document.getElementById('name').value = "";
    document.getElementById('recommendation').value = "";
}