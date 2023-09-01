/* We are going to create a program that will randomly describe an inputted name.
1. Create an array of descriptive words.
2. Create a function that contains a prompt asking the user for a name.
3. Select a random value from the array using Math.random.
4. Output into the console the prompt value and the randomly selected array
value.
5. Invoke the function. */ 


let arr = ['beautiful', 'intelligent', 'resourceful', 'elegant', 'charming'];

function userName() {
  let name = prompt('What is your name');

  while (name === "") {
    name = prompt('Please enter your name');
  }

  let randomVal = arr[Math.floor(Math.random() * arr.length)];
  return `${name} is very ${randomVal}`;
}

console.log(userName());


// i modified this code to ensure that the modal windows persists until the user enters a name