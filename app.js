const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//changing the version
yargs.version('1.1.0')

//create add command
yargs.command({
    command :'Add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command : 'list',
    describe : 'Displays the notes',
    handler (argv) {
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command : 'read',
    describe : 'Read your notes',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
        
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()
