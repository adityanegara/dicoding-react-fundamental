const fetchUsers = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
}

const createUser = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            id: 33,
            name: "Aditya Negara",
            username: "Adit",
            email: "aditnegara51@gmail.com",
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const newUser = await response.json();
    console.log(newUser);
}

createUser();