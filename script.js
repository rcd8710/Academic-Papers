function filterPapers() {
    // Get the search input value
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Get all document elements
    var documents = document.querySelectorAll('.document');

    // Loop through each document
    documents.forEach(function(document) {
        // Get the text content of the document
        var documentText = document.innerText.toLowerCase();

        // Check if the document text contains the search term
        if (documentText.includes(searchTerm)) {
            // Show the document if it matches the search term
            document.style.display = 'block';
        } else {
            // Hide the document if it doesn't match the search term
            document.style.display = 'none';
        }
    });
}

// Attach the filterPapers function to the input's oninput event
document.getElementById("searchInput").addEventListener("input", filterPapers);

function filterDocuments(className) {
    var documents = document.querySelectorAll('document');

    // Loop through each document
    documents.forEach(function(document) {
        // Check if the document has the specified class
        if (document.classList.contains(className)) {
            // Show the document
            document.style.display = 'block';
        } else {
            // Hide the document
            document.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the URL contains "computer_science.html"
    if (currentUrl.includes("cs.html")) {
        // Show only documents with the "computer-science" class
        filterDocuments("computer-science");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the URL contains "computer_science.html"
    if (currentUrl.includes("bs.html")) {
        // Show only documents with the "computer-science" class
        filterDocuments("computer-science");
    }
});
