// this just allows us to import the navigation bar instead of having to type it in all of the html files
// laziness and efficiency because we can edit all the pages at once

fetch("nav.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar-placeholder").innerHTML = html;
  })
  .catch((error) => console.error("Error loading the navbar:", error));

