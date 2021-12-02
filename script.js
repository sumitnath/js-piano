const WHITE_KEYS = ['q','w','e','r','t','y','u','i','o','p','z','x']
const BLACK_KEYS = ['a','s','d','f','g','h','j','k','l']

const keys= document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.Black')

keys.forEach(key=>{
  key.addEventListener('click',()=>playNotes(key))
})
document.addEventListener('keydown', e=>{

const key = e.key

const whiteKeyIndex = WHITE_KEYS.indexOf(key)
const blackKeyIndex = BLACK_KEYS.indexOf(key)
if(whiteKeyIndex > -1) playNotes(whiteKeys[whiteKeyIndex])

if(blackKeyIndex > -1) playNotes(blackKeys[blackKeyIndex])
})

function playNotes(key){
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended',()=>{
    key.classList.remove('active')
  })
}

