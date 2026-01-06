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
  console.log(data)
  data.forEach(element => renderCard(element))
} 

function renderCard(data) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const newContent = document.createTextNode(data.author);
  image.src = data.download_url;
  image.className = "w-[155px] h-[174px] rounded-xl"
  card.appendChild(image);
  card.appendChild(newContent);
  grid.appendChild(card);
  
}
