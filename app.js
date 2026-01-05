const grid = document.getElementById("grid-display");
function myFunction() {
  window.location.href = "test.html";
}

function goBack() {
  window.location.href = "index.html";
}

async function getData() {
  const response = await fetch("https://picsum.photos/v2/list");
  const data = await response.json();
  renderCard(data[1]);
}
function renderCard(data) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  image.src = data.download_url;
  image.className = "w-full h-64"
  card.appendChild(image);
  grid.appendChild(card);
  
}
