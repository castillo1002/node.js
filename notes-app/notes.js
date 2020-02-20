const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
	return 'Your notes....'
}

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNotes = notes.find(current => current.title === title)
	debugger

	if (!duplicateNotes) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse('New note added!!!'))
	} else {
		console.log(chalk.red.inverse('Note title taken'))
	}

	saveNotes(notes)
}

const removeNote = title => {
	const notes = loadNotes()
	const removedNote = notes.filter(current => current.title !== title)
	if (removedNote.length === notes.length) {
		console.log(chalk.red.inverse('The note title does not exist'))
	} else {
		saveNotes(removedNote)
		console.log(chalk.green.inverse('Note deleted!!!'))
	}
}

const listNotes = () => {
	const notes = loadNotes()
	console.log(chalk.white.inverse('These are your notes:\n'))
	notes.forEach(cur => console.log(`Title: ${cur.title}`))
}

const readNote = title => {
	try {
		const notes = loadNotes()
		const readNotes = notes.find(cur => cur.title === title)
		console.log(chalk.greenBright.inverse(readNotes.title))
		console.log(readNotes.body)
	} catch (e) {
		console.log('Note does not exist')
	}

}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}


const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes, null, '\t')
	fs.writeFileSync('notes.json', dataJsON)
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}