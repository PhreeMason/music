import { verse as sanctifiedVerse } from './Sanctified'
import {verse as BillGatesVerse, myVerse } from './BillGates'

// why does this work with the word 'people'
function syllablesInAWord(word: string) {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;

    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');

    return word.match(/[aeiouy]{1,2}/g)?.length;
}

function syllablesInALine(line: string) {
    return line.split(' ').reduce((acc, word) => acc + (syllablesInAWord(word) || 0), 0)
}

function verseWithSyllableCount(verse: string) {
    const lines = verse.split('\n')
    return lines.map(line => {
        if (line.length === 0) {
            return ''
        }
        const syllables = syllablesInALine(line)

        return line + ' ' + syllables
    }).join('\n')
}

console.log(verseWithSyllableCount(myVerse))