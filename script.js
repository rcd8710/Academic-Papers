function filterPapers() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var documents = document.querySelectorAll('.document');

    documents.forEach(function(document) {
        var documentText = document.innerText.toLowerCase();

        if (documentText.includes(searchTerm)) {
            document.style.display = 'block';
        } else {
            document.style.display = 'none';
        }
    });
}

document.getElementById("searchInput").addEventListener("input", filterPapers);

function filterDocuments(className) {
    var documents = document.querySelectorAll('.document');

    documents.forEach(function(document) {
        if (document.classList.contains(className)) {
            document.style.display = 'block';
        } else {
            document.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;

    if (currentUrl.includes("cs.html")) {
        filterDocuments("computer-science");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;

    if (currentUrl.includes("bs.html")) {
        filterDocuments("backscatter");
    }
});
