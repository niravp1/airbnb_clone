function myFunction() {
   window.location.href = 'test.html';
}
function goBack() {
   window.location.href = 'index.html';
}
async function getData() {
   response = await fetch('https://picsum.photos/v2/list')
   data = await response.json()
   console.log(data[0])
   loadImage(data[0].download_url)
}
function loadImage(url){
   document.getElementById("test-image").setAttribute("src",url)
}