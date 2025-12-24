function myFunction() {
   window.location.href = 'test.html';
}
function goBack(){
   window.location.href = 'index.html';
}
function getData(){
fetch('https://picsum.photos/v2/list')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch( error => console.error(error));
}