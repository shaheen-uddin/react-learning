import React from "react";
import Book from "./Book";

const books = [{
    img : 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
    title: 'Atomic Habits : An Easy & Porven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    id: 1,
},
{
    img : 'https://d1b14unh5d6w7g.cloudfront.net/0316453188.01.S001.LXXXXXXX.jpg?Expires=1677682480&Signature=P~yTpU4AY2b2Ce4-bz30qfi52SPUM9TX6PfB3xSB41irjTBmEngJRUNERHRn7hIWBn3tQvaBtoDcWVj4qWOymK66hEXPtK4Ow~m-ep0WmHJlj4ihp~3E6afswasCQPduXcK5nz-cWqXFkgNZ7CkxqFGMbrzYLxgNwcVWtQQ3Wgg_&Key-Pair-Id=APKAIUO27P366FGALUMQ',
    title : 'Young Forever: The Secrets to Living Your Longest, Healthiest Life ',
    author: 'Dr. Mark Hyman MD',
    id: 2,
}];


const BookList = () => {
    return (
        <div className="bg-purple-50 space-y-4">
            {
                books.map((book)=> {
                 const {img, title, author, id } = book;
                  return (
                        <Book 
                        book = {book}
                        key = {id}
                        />
                      );  
                    })
            }
            
           
        </div>
    );
}
export default BookList;