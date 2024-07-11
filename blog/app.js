document.getElementById("menu-btn").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("menu-hidden");
});

// Initialize Vanta.js effect
VANTA.WAVES({
  el: "#background",
  color: 0x1e3a8a,
  shininess: 50,
  waveHeight: 20,
  waveSpeed: 0.5,
  zoom: 1,
});

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-QL8XR06NXN");
