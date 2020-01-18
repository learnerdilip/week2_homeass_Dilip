
window.onload = function() {
  fetch('https://swapi.co/api/people/1')
  .then(response => response.json())
  .then(myJson =>{
    // console.log(myJson)
    document.querySelector('#data').innerHTML = "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })
}

document.querySelector('#getdata').addEventListener('click', getDataNow)

function getDataNow() {
  fetch('https://swapi.co/api/people/4/')
  .then(response => response.json())
  .then(myJson => {
    document.querySelector('#data').innerHTML = "<pre>" + JSON.stringify(myJson,null," ") + "</pre>"
  })
}