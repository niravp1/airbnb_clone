function myFunction() {
   window.location.href = 'test.html';
}
function goBack() {
   window.location.href = 'index.html';
}
async function getData() {
   response = await fetch('https://picsum.photos/v2/list')
   data = await response.json()
   // use for loop to render 5 images then style them ; dynamically create new elements to do so
   for (let i = 0; i < 5; i++){
      loadImage(data[i].download_url)
   } }
function loadImage(url){
   document.getElementById("test-image").setAttribute("src",url)
}