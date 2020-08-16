import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import Notes from "../Notes";
import notes from "../Notes";

function createnote(noteItem){
    return(
        <Note
            title = {noteItem.title}
            content = {noteItem.content}
        />
    );
}
function App()
{
    return(
        <div>
            <Header/>
            notes.map(createnote)
            <Footer/>
        </div>
    );
}
export default App;