function toggleNav(event) {
    event.stopPropagation();
    let sidebar = document.getElementById("mySidebar");
    sidebar.style.width = (sidebar.style.width === "65%") ? "0" : "65%";
}

document.addEventListener("click", function (event) {
    let sidebar = document.getElementById("mySidebar");
    let menuBtn = document.querySelector(".menu-btn");

    // Close sidebar if clicked outside and it's open
    if (sidebar.style.width === "65%" && !sidebar.contains(event.target) && event.target !== menuBtn) {
        sidebar.style.width = "0";
    }
});
