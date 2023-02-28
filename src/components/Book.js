import React from "react";
import Author from "./Author";
import Image from "./Image";
import Title from "./Title";

const Book = (props) => {
    const{img, title, author } = props.book;
    return (
        <section >
            <article className="max-w-2xl mx-auto border border-slate-100 shadow-xl my-2 space-y-2 py-4 rounded-md flex flex-col justify-center">
            <img src={img} alt="" />
            
            <p className="text-center text-2xl text-slate-500 px-4">{title} </p>
            <h3 className="uppercase text-xl text-center text-amber-500 font-semibold ">{author}</h3>
          
            
            </article>
            {console.log({img,title, author})}
        </section>
    );
}
export default Book;