const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListner('click', (e) =>{
    e.preventDefault()

const data = {
    username: username.value,
    password: password.value
}

  console.log(data)
}) 