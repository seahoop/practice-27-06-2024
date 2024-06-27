//Assign an empty array to a variable named books.
//Add ‘The Shining’ and ‘Pride and Prejudice’ or 2 other books of your choice to the books array.
const books = [`The Shining`, `Pride and Prejudice`];
//console.log() the second element of books.
console.log(books[1]);
//Update the second element by assigning to it ‘Dune’ or another book of your choice.
books[1] = `Dune`;
//Iterate over the entire books array and console.log() each book string.
for (let i=0; i < books.length; i++)
    {
        console.log(books[i]);
    }