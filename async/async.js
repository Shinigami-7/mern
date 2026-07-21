async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/4')
    let data =  await response.json();
    console.log(data);
    console.log('yoo');
}

getData();