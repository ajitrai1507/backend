const express = require("express");
const app = express();
app.use(express.json());

const bookstore = [
  { id: 1, title: "Atomic Habits", author: "James Clear", genre: "Self-help", price: 399, inStock: true },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", price: 299, inStock: true },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", genre: "History", price: 499, inStock: false },
  { id: 4, title: "Ikigai", author: "Francesc Miralles", genre: "Self-help", price: 350, inStock: true },
  { id: 5, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Finance", price: 450, inStock: true },
  { id: 6, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", genre: "Autobiography", price: 320, inStock: true },
  { id: 7, title: "The Psychology of Money", author: "Morgan Housel", genre: "Finance", price: 399, inStock: false },
  { id: 8, title: "1984", author: "George Orwell", genre: "Dystopian", price: 280, inStock: true },
  { id: 9, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", price: 350, inStock: true },
  { id: 10, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 270, inStock: true },
  { id: 11, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "Self-help", price: 399, inStock: false },
  { id: 12, title: "The Power of Now", author: "Eckhart Tolle", genre: "Spirituality", price: 360, inStock: true },
  { id: 13, title: "Think and Grow Rich", author: "Napoleon Hill", genre: "Motivational", price: 300, inStock: true },
  { id: 14, title: "You Can Win", author: "Shiv Khera", genre: "Motivational", price: 280, inStock: true },
  { id: 15, title: "Do Epic Shit", author: "Ankur Warikoo", genre: "Self-help", price: 350, inStock: false },
  { id: 16, title: "The Monk Who Sold His Ferrari", author: "Robin Sharma", genre: "Spiritual Fiction", price: 340, inStock: true },
  { id: 17, title: "Man's Search for Meaning", author: "Viktor E. Frankl", genre: "Psychology", price: 370, inStock: true },
  { id: 18, title: "Start With Why", author: "Simon Sinek", genre: "Business", price: 420, inStock: true },
  { id: 19, title: "The Intelligent Investor", author: "Benjamin Graham", genre: "Finance", price: 550, inStock: false },
  { id: 20, title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", price: 450, inStock: true },
];

//Fetch the entire book
app.get("/book", (req, res)=>{
    res.send(bookstore);
    console.log("Book Data fetched");
})

//Find a specific book

app.get("/book/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const book = bookstore.find( (book)=>book.id===id)
    res.send(book)
})

//Add New Data to the bookstore
app.post("/book", (req, res)=>{
    const data = req.body;
    bookstore.push(data);
    res.send("Data is added");
})


//To delete a book
app.delete("/book/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const index = bookstore.findIndex((value)=>value.id===id)
    bookstore.splice(index, 1);
    res.send(bookstore);
})




const port = 3000;
app.listen(port, ()=>{
    console.log("Server is started");
})