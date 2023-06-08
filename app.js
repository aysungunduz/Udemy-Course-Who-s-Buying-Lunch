function whosPaying(names) {
    let output = (names[(Math.floor(Math.random()*names.length))]);
    console.log(`${output} is going to buy lunch today!`);
}

let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);


// function whosPaying(names) {
//     let output = (names[(Math.floor(Math.random()*names.length))]);
//     return output + " is going to buy lunch today!";
// }

// // let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// // whosPaying(names);