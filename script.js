function toggleNav(event) {
    event.stopPropagation();
    let sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "65%") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "65%"; /* Expands Sidebar to 65% */
    }
}

function closeNav(event) {
    let sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "65%") {
        sidebar.style.width = "0";
    }
}