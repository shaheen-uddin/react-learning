import React from "react";

const EventExample = ()=> {
    const handleFormInput = (e)=> {
        console.log(e);
        console.log(e.target.name);
        console.log(e.target.value);
    };
    const handleButtonClick = (e)=>{
        console.log(e.target.name)
        alert("handle button click");
    }
    const handleFormSubmit = (e)=> {
        e.preventDefault()
        console.log("form submitted!!!")
    };

    return (
        <section className="bg-cyan-100 py-3">

                <form  onSubmit={handleFormSubmit} action="" className="max-w-xl bg-slate-200 mx-auto my-3 p-3 flex flex-col flex-col justify-center items-center rounded-md shadow-md mt-3">
                    <h2 className="text-2xl text-center">Typical Form</h2>
                    <input 
                        type="text" 
                        name ="example"
                        onChange={handleFormInput} 
                        className="m-2 text-center"/>

                <button onClick={handleButtonClick} className="bg-blue-200 py-1 px-4 text-center rounded-md hover:opacity-60">Click me</button>
                </form>
        </section>
    )
}
export default EventExample;