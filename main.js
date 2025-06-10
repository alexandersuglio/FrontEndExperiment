//const API_BASE = 'http://localhost:3001/dogs';
const API_BASE = 'https://backendexperiment.onrender.com/dogs';

document.getElementById('getAll').onclick = async () => {

    const res = await fetch(API_BASE, {
        method: 'GET'
    });
    const data = await res.json();
    document.getElementById('getAllResult').textContent = JSON.stringify(data);
};

document.getElementById('getByID').onclick = async () => {

    const id = document.getElementById('getIDInput').value.trim();

    if (!id) return alert('please enter an ID to proceed!');

    const res = await fetch(`${API_BASE}/${id}`, {
        method: 'GET'
    });

    const data = await res.json();
    document.getElementById('getByIDResult').textContent = JSON.stringify(data);

};

document.getElementById('postDog').onclick = async () => {

    const name = document.getElementById('postNameInput').value.trim();
    const breed = document.getElementById('postBreedInput').value.trim();
    const color = document.getElementById('postColorInput').value.trim();

    if (!name) return alert('please enter a Name to proceed!');
    if (!breed) return alert('please enter a Breed to proceed!');
    if (!color) return alert('please enter a Color to proceed!');

    const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, breed, color })
    });
    const data = await res.json();
    document.getElementById('postDogResult').textContent = "Dog Added";

};

document.getElementById('putDog').onclick = async () => {
    const id = document.getElementById('putIDInput').value.trim();
    const name = document.getElementById('putNameInput').value.trim();
    const breed = document.getElementById('putBreedInput').value.trim();
    const color = document.getElementById('putColorInput').value.trim();

    if (!id) return alert('please enter an ID to proceed!');
    if (!name) return alert('please enter a Name to proceed!');
    if (!breed) return alert('please enter a Breed to proceed!');
    if (!color) return alert('please enter a Color to proceed!');

    const res = await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, breed, color })
    });
    const data = await res.json();
    document.getElementById('putDogResult').textContent = "Dog Updated";

};

document.getElementById('deleteDog').onclick = async () => {

    const id = document.getElementById('deleteIDInput').value.trim();

    if (!id) return alert('please enter an ID to proceed!');

    const res = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    document.getElementById('deleteDogResult').textContent = "Dog Deleted";

};

console.log("pugs!");