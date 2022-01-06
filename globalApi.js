const application = document.querySelector('.container')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    const p = document.createElement('p')
    p.setAttribute('id', item.id)
    p.innerHTML = item.name
    application.appendChild(p)
  });
})
.catch(error => console.log(error))

