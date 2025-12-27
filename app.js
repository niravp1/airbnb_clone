function myFunction() {
   window.location.href = 'test.html';
}

function goBack() {
   window.location.href = 'index.html';
}

async function getData() {
   const response = await fetch('https://picsum.photos/v2/list');
   const data = await response.json();

   const gallery = document.getElementById("gallery");

   for (let i = 0; i < 5; i++) {
      createCard(data[i], gallery);
   }
}

function createCard(imageData, container) {
   const card = document.createElement("div");
   card.className = "card";

   const img = document.createElement("img");
   img.src = imageData.download_url;
   img.className = "card-image";

   // optional text
   const caption = document.createElement("p");
   caption.textContent = imageData.author;
   caption.className = "card-text";

   card.appendChild(img);
   card.appendChild(caption);
   container.appendChild(card);
}