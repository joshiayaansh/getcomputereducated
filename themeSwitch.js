let isLight = true;

function switchTheme() {
  const themeLink = document.getElementById("themeStylesheet");
  const currentHref = themeLink.getAttribute("href");

  // Get base path (like "../../../") by removing the file name
  const basePath = currentHref.substring(0, currentHref.lastIndexOf("/") + 1);

  // Toggle filename
  const newFile = isLight ? "styles-dark.css" : "styles-light.css";

  // Update the href with the new full path
  themeLink.setAttribute("href", basePath + newFile);

  isLight = !isLight;
}
