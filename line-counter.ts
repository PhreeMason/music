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
        if (line.length === 0 ) {
            return ''
        }
        const syllables = syllablesInALine(line)
        
        return line + ' ' + syllables
    }).join('\n')
}

console.log(verseWithSyllableCount(
`
There's a field with angels movin' around me
I just worship thee, for all he's done for me
It's a new day, I have been born again
I've been born again, I've been born again
In His spirit, and His name, I'm sanctified!
Lord I testify, he's right by my side
I believe it be, His word is so clear to me
Yeah, yeah

[Chorus: Big Sean & Kanye West]
Okay, all I want's a hundred million dollars and a bad bitch
Plus that paper chasin', it done turn me to a savage
Groupies in the lobby, they just tryna get established
God, I've been guilty, fornicatin' from my status
All I wanted was a hundred million dollars and a bad bitch
Plus that paper chasin', it had turned me to a savage
Groupies in the lobby they just tryna get established
God, I've been guilty, fornicatin' from my status

[Verse 1: Kanye West & Rick Ross]
Niggas be lovin' the old Ye
They sayin' the new Ye, that nigga be spazzin'
But when Ali turn up and be Ali
You can't ever change that nigga back to Cassius
So you can gon' and make up lies, but I'm so sanctified
I don't sweat it, wipe my forehead with a handkerchief
And wash my sins in the blood of Jesus (Hunt)
People sayin', "Ye, we need another Yeezus" (Hunt)
Lames try to tell me, "Cut the wildin' out, out"
But who the fuck is you reachin'?
Pass me 30 bottles, champagne procession
That's that Holy water, sanctified refreshments
God sent me a message, said I'm too aggressive
Really!? Me!? Too aggressive!?

[Bridge: Betty Wright]
I can feel his blessings wash away my sins
I'm sanctified and I have been born again
Now I proclaim, hallowed be thy name
Ohhh

[Chorus: Big Sean]
Okay, all I want's a hundred million dollars and a bad bitch
Plus that paper chasin', it done turn me to a savage
Groupies in the lobby, they just tryna get established
God, I've been guilty, fornicatin' from my status

[Verse 2: Rick Ross]
Keys to my success, I get new keys and new address
Bitches that I date don't get degrees but they can dress
Fellatio's amazin', make grilled cheese for you the best
Major cult figure, I'm the fresh David Koresh
Soldiers all in gators, new Mercedes for cadets
Balmain uniform, you know Donda designed the vest
Double M, that be the Army, better yet, the Navy
Baby seen me in that Wraith, wanna have my baby
All I wanted was a hundred million dollars and a bad bitch
Now I want two hundred and ménage in my palace
Walkin' out the jeweler with no mothafuckin' balance
Somewhere in Jamaica I'm still holdin' on my chalice
Rims on my Ferrari, my bitch said that I was childish
'Til I fuck a girl, that girl tweeted that I was stylish
When we fucked again, she told me "That was just some foul shit"
I walk into the room, you can even hear all the silence

Never touched a crack pipe cause i know that shit gonna be good. 
Laundry on the bed, at night i move it ovah to the couch
Vaccuum up the litter that my cat left all through the house
My shorty breast so perky i can see her nipples through her blouse 
Throat me in the whip cause I couldnt wait to get in the house.
Tie her up and choke her then I get behind and dig her out
Enough green to cover Everest and I'm looking for a bigger mount.

Sleep on me thats a tough decision 
Number one super star is the mission
I know she thinking damn i miss him
Dime pieces only we not Lincoln
Lock in on the court, highest scoring
That’s Carter, Kobe, Scotty Pippin
He lifted me up, my hands to heaven
I stay ten toes down with the Brethren
`
))