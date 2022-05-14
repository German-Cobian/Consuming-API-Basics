const application = document.querySelector('.container')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    const p = document.createElement('p')
    p.setAttribute('id', item.id)
    p.innerHTML = item.name
    p.addEventListener('click', function(){
      window.location.href = `./item.html?id=${item.id}`
    })
    application.appendChild(p)
  });
})
.catch(error => console.log(error))
