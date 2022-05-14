const application = document.querySelector('.container')

const getUrl = new URLSearchParams(window.location.search) // Obtains url after ?
id = getUrl.get('id')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(`${url}/${id}`)
.then(response => response.json())
.then(data => console.log(data)) 
.catch(error => console.log(error))