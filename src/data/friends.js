const abhya = new URL('../assets/abhya.jpg', import.meta.url).href
const avatar2 = new URL('../assets/abhya.jpg', import.meta.url).href
const avatar3 = new URL('../assets/abhya.jpg', import.meta.url).href
const trio = new URL('../assets/trio.jpg', import.meta.url).href
const gokak = new URL('../assets/gokak.jpg', import.meta.url).href
const group2 = new URL('../assets/group2.jpg', import.meta.url).href

const anki_profile = new URL('../assets/anki_profile.jpg', import.meta.url).href
const Anku = new URL('../assets/anku.jpg', import.meta.url).href
const mGA = new URL('../assets/mGA.jpg', import.meta.url).href
const anku3 = new URL('../assets/anku3.jpg', import.meta.url).href


const manja = new URL('../assets/manja.jpg', import.meta.url).href
const manja_modi = new URL('../assets/mnaj_modi.jpg', import.meta.url).href


const suma = new URL('../assets/suma.jpg', import.meta.url).href
const group3 = new URL('../assets/group3.jpg', import.meta.url).href


const tony = new URL('../assets/tony.jpg', import.meta.url).href
const tonya = new URL('../assets/tonya.jpg', import.meta.url).href
const grp_good = new URL('../assets/grp_good.jpg', import.meta.url).href


const Ashish = new URL('../assets/Ashish.jpg', import.meta.url).href
const boys = new URL('../assets/boys.jpg', import.meta.url).href
const ashya_gagan = new URL('../assets/ashya_gagan.jpg', import.meta.url).href


const arya = new URL('../assets/arya.jpeg', import.meta.url).href
const Arya_baby = new URL('../assets/Aaru_baby.jpg', import.meta.url).href
const group1 = new URL('../assets/group1.jpg', import.meta.url).href

const gagan = new URL('../assets/gagan.jpeg', import.meta.url).href



const photoA = trio
const photoB = gokak
const photoC = group2

const PhotoD = Anku
const PhotoE = anku3
const PhotoF = mGA

const PhotoG = manja_modi






const friends = [
  {
    slug: 'Abhya',
    name: 'Abhya',
    short: 'The Globe Abhya',
    quote: '🌍 “Globe Abhya — the guy who carries kindness in his heart, mischief in his smile, and the whole world in his vibe.” 💫',
    about: 'He’s the kind of person who’s always ready to help, no matter how chaotic your thoughts are or how tangled your day gets. With a chapotic mind full of curiosity and a heartful dose of mischief, Abhya brings laughter, warmth, and a spark of madness wherever he goes. A true globe of good vibes — caring, naughty, and endlessly kind.',
    avatar: abhya,
    photos: [photoA, photoB, photoC]
  },
  {
    slug: 'Anki',
    name: 'Anki',
    short: 'Short and Chaotic',
    quote: '“Small in height but giant in heart — Ankita is that bundle of care, chaos, and endless gossip who makes every moment brighter.” 💖',
    about: 'Ankita is the friend everyone wishes they had — caring, loyal, and always there no matter what. She may be short in height, but her spirit stands tall in every situation. With her mischievous grin and a never-ending collection of gossips, she can turn even the dullest day into a laughter riot. A true partner in crime and comfort, Ankita is the heartbeat of every group she’s in.',
    avatar: anki_profile,
    photos: [grp_good, PhotoE, PhotoF]
  },
  {
    slug: 'Manja',
    name: 'Manja',
    short: 'The Late Manja',
    quote: '“I may be late, but at least I show up with good vibes.”',
    about: ' Manjunath is the funny latecomer who somehow needs to “go home early” right after arriving. He’s his mom’s full-time princess 👑, part-time comedian, and the emotional kind who overthinks for days if he hurts someone. When it comes to friendship though — no one beats him!',
    avatar: manja,
    photos: [PhotoG, mGA, photoB]
  },
  {
    slug: 'Suma',
    name: 'Summi',
    short: 'The TATA SUMMA',
    quote: 'If laughing at serious stuff was a talent, I’d have a trophy by now',
    about: ' Suma is the perfect combo of silence and chaos — she’ll cry if you get a paper cut, talk nonstop when she’s supposed to be quiet, and somehow find a reason to laugh at the most dramatic moments. Basically, an emotional rollercoaster with Wi-Fi.',
    avatar: suma,
    photos: [photoB, group2, group3]
  },
   {
    slug: 'Tony',
    name: 'Tony',
    short: 'Dumma Tony',
    quote: 'Why settle for less when luxury exists?',
    about: 'Tony is the penguin with a planner — the mastermind behind every successful trip (and the reason everyone actually reaches the destination). He only believes in first-class vibes — from food to footwear — if it’s not high-class, it’s not Tony-approved.',
    avatar: tonya,
    photos: [tony, group2, grp_good]
  },
  {
    slug: 'Ashya',
    name: 'Ashya',
    short: 'Jhand Ashya',
    quote: 'I’d ask Mom before saying anything cool',
    about: 'TAshish is the walking gentleman manual — polite, calm, and the kind of guy who needs mom’s approval even to sneeze. Don’t be fooled by the silence though — when he jokes it hits harder than expected. Basically, Sanskari with a sense of humor.',
    avatar: Ashish,
    photos: [boys, ashya_gagan, grp_good]
  },
  {
    slug: 'Aryaa',
    name: 'Arya',
    short: 'Gagan ki dilruba',
    quote: 'Brains, moves, and a walk that deserves its own runway',
    about: 'the Macchi girl with shark-level intelligence and toddler-level chaos. She can solve problems like a genius, dance like she owns the stage, and walk in a way that makes even models question their careers. Basically, a full package with fins and flair.',
    avatar: arya,
    photos: [Arya_baby,group1, gokak]
  },
  {
    slug: 'Gagan',
    name: 'Gagan',
    short: 'The Giant',
    quote: 'Lifts weights and codes, drops neither',
    about: 'Gagan is the gym freak with a brain chip installed, one minute he"s counting calories, the next he"s counting bugs. Diets vanish when meets his gang ,protective and his vocabulary needs its own censor board',
    avatar: gagan,
    photos: [Arya_baby,mGA, gokak]
  },
]

export default friends
