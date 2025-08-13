import greet, { add, multiply } from './mathUtils.js';
console.log(add(5, 3));       
console.log(multiply(2, 4));  
greet('Alice');               
import { createProfileCard } from './profile.js';

document.getElementById('addProfileBtn').addEventListener('click', () => {
    const name = prompt('Enter name:');
    const role = prompt('Enter role:');
    
    if (name && role) {
        createProfileCard(name, role);
    }
});