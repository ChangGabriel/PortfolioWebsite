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

    alert("Thank you for submitting a recommendation!");

    //Clear input fields after submission
    document.getElementById('name').value = "";
    document.getElementById('recommendation').value = "";
}

// Function to scroll to top 
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

 // Function to show or hide the scroll to top button based on scroll position
 window.onscroll = function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100; //calculate scroll percentage
    
    // Show the button if scrolled down more than x% of the page
    if (scrollPercentage > 50) {
        scrollToTopBtn.style.display = 'block'; // Show button when more than x% of the page is scrolled
    } else {
        scrollToTopBtn.style.display = 'none'; // Hide button when less than x%
    }
};