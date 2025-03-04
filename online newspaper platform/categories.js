// Function to get category from the URL
function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("category"); // Get category from URL
}

// Function to update category content and show relevant section


    // Example category data (replace with real content)
    const categoryData = {
        politics: {
            title: "Politics",
            content: "Latest updates on global and national politics.",
            image: "images/politics.jpg"
        },
        sports: {
            title: "Sports",
            content: "Scores, transfers, and sports highlights.",
            image: "images/sports.jpg"
        },
        entertainment: {
            title: "Entertainment",
            content: "Movies, music, celebrity news, and more.",
            image: "images/entertainment.jpg"
        },
        technology: {
            title: "Technology",
            content: "Innovations, gadgets, and tech trends.",
            image: "images/technology.jpg"
        },
        health: {
            title: "Health",
            content: "Wellness, medical research, and fitness.",
            image: "images/health.jpeg"
        },
        business: {
            title: "Business",
            content: "Market trends, startups, and financial news.",
            image: "images/business.jpg"
        }
    };
    // Function to update category content
    function updateCategoryContent(category) {
        if (!category) return;

    // Hide all category sections first
    let sections = document.querySelectorAll(".category-section");
    sections.forEach((section) => (section.style.display = "none"));

    const data = categoryData[category];

    if (data) {
        // Update content
        document.getElementById("category-title").textContent = data.title;
        document.getElementById("category-content").textContent = data.content;
        document.getElementById("category-image").src = data.image;
        document.getElementById("category-image").style.display = "block"; // Ensure image is visible

        // Show the selected category section
        let selectedSection = document.getElementById(category);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    } else {
        // Handle unknown categories
        document.getElementById("category-title").textContent = "Category Not Found";
        document.getElementById("category-content").textContent = "No content available.";
        document.getElementById("category-image").style.display = "none";
    }
}
// Function to handle category selection from dropdown
function showCategory(categoryId) {
    updateCategoryContent(categoryId);
}

// Function to load category from URL when page loads
function loadCategoryContent() {
    const category = getCategoryFromURL();
    updateCategoryContent(category);
}


// Load category on page load
window.onload = loadCategoryContent;
