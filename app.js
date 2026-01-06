const grid = document.getElementById("grid-display");
document.addEventListener("DOMContentLoaded",getData())
function myFunction() {
  window.location.href = "test.html";
}

function goBack() {
  window.location.href = "index.html";
}

async function getData() {
  const response = await fetch("https://picsum.photos/v2/list");
  const data = await response.json();
  console.log(data)
  data.forEach(element => renderCard(element))
} 

function renderCard(data) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const newContent = document.createTextNode(data.author);
  image.src = data.download_url;
  image.className = "w-[165px] h-[180px] rounded-xl mt-6"
  card.appendChild(image);
  card.appendChild(newContent);
  grid.appendChild(card);
  
}
