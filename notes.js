const fs = require('fs')
const chalk = require('chalk')

//method to add notes
const addNote = (title, body) => {
    const notes = loadNote()
    
    const duplicate = notes.find((note) => note.title === title)

    if(!duplicate){
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New note added!'))
    }
    else{
        console.log(chalk.inverse.red('Title already exists, try another one!'))
    }
}

//method to remove notes
const removeNotes = (title) => {
    const notes = loadNote()

    const newNotes = notes.filter((note) => note.title !== title)
    

    if(notes.length === newNotes.length){
       console.log(chalk.inverse.red('No note found!'))
    }
    else{
        console.log(chalk.inverse.green('Note removed!'))
    }
    saveNotes(newNotes)
    
}

//method to list all the notes
const listNotes = () => {
    const notes = loadNote()
    console.log(chalk.bold.blue('Your Notes'))

    notes.forEach((note) => {
      console.log(note.title)  
    })
}

//method to read the notes
const readNotes = (title) =>{
    const notes = loadNote()
    const findNote = notes.find((note) => note.title === title)
    
    if(findNote){
        console.log(chalk.bold.inverse.white(findNote.title))
        console.log(findNote.body)
    }

    else{
        console.log(chalk.inverse.red('The note does not exist'))
    }
}

//method to save notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNote = () => {
    
    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    
    } catch(e){
        return []
    }
}

//exporting functions
module.exports = {
    addNote : addNote,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}