// display numbers from 1-20
for(let i=1; i<=20; i++){
    console.log(i);
}
// display elements of an array
const fruits = ["banana", "apple", "mango", "grapes"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// skipping even numbers
for(let i=1; i<=20; i++){
    if(i%2 === 0){  
        continue;  // skip even numbers
    }
    console.log(i);
}

// looping backwards
for(let i=20; i>=1; i--){
    console.log(i);
}

// looping backwards through an array
const colors = ["red", "green", "blue", "yellow"];
for(let i=colors.length - 1; i>=0; i--){
    console.log(colors[i]);
}


