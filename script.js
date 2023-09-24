let musicAndImageData = [
    {
        background: './assets/images/HighWayToHellBackground.png',
        preView: './assets/images/HighWayToHellPreView.jpg',
        music:'./assets/music/AC-DC - Highway To Hell.mp3',
        name:'Highway To Hell',
        author:'AC DC'
    },
    {
        background: './assets/images/ThunderFlightBackground.jpg',
        preView: './assets/images/PreViewThunderFlight.jpg',
        music:'./assets/music/AC-DC - Thunderstruck.mp3',
        name:'Thunderstruck',
        author:'AC DC'
    },
    {
        background: './assets/images/UkranianGimnBackground.jpg',
        preView: './assets/images/UkrainianGimnPreView.jpg',
        music:'./assets/music/gimn-ukrainy-Ponomarev.mp3',
        name:'Гімн України',
        author:'Михайла Вербицького, Павла Чубинського'
    },
    {
        background: './assets/images/naIchiBackground.jpg',
        preView: './assets/images/naIchiPreView.jpg',
        music:'./assets/music/leat-eq-tokyo-mp3.mp3'
    },
    {
        background: './assets/images/commotionBackground.png',
        preView: './assets/images/commotionPreView.jpg',
        music:'./assets/music/ndls404_-_Commotion_(musmore.com).mp3'
    },
]
let count=0
let divPlayer = document.createElement('div')
let img=document.createElement('img')
let h3NameMusic= document.createElement('h3')
let pAuthorMusic=document.createElement('p')
let divButtons=document.createElement('div')
let buttonRight=document.createElement('button')
let imgRight=document.createElement('img')
let imgLeft=document.createElement('img')
let buttonPause=document.createElement('button')
let imgPause=document.createElement('img')
let buttonLeft=document.createElement('button')
let audio=document.createElement('audio')
let input=document.createElement('input')
let inputVolume=document.createElement('input')
let divInputRanges=document.createElement('div')
let pTime=document.createElement('p')

img.style.width='200px'
img.style.height='200px'
img.style.margin='0 auto'
img.style.marginBottom='15px'


document.body.style.backgroundSize='cover'
document.body.style.display='flex'
document.body.style.justifyContent='center'
document.body.style.alignItems='center'
document.body.style.height='100vh'
document.body.style.backgroundPosition='center'

divPlayer.style.display='flex'
divPlayer.style.flexDirection='column'
divPlayer.style.justifyContent='center'
divPlayer.style.background='rgba(255,255,255,0.3)'
divPlayer.style.paddingTop='20px'
divPlayer.style.border='2px solid gray'
divPlayer.style.width='300px'
divButtons.style.width='100%'
divButtons.style.display='flex'
divButtons.style.justifyContent='space-around'
divButtons.style.marginBottom='20px'

buttonRight.style.width ='30px'
buttonRight.style.height ='30px'
buttonRight.style.border = '0px'
buttonRight.style.cursor = "pointer"
buttonRight.style.backgroundColor='transparent'

buttonPause.style.width ='30px'
buttonPause.style.height ='30px'
buttonPause.style.border = '0px'
buttonPause.style.cursor = "pointer"
buttonPause.style.backgroundColor='transparent'


buttonLeft.style.width ='30px'
buttonLeft.style.height ='30px'
buttonLeft.style.borderRadius='50%'
buttonLeft.style.border = '0px'
buttonLeft.style.cursor = "pointer"
buttonLeft.style.backgroundColor='transparent'

audio.style.display='block'

input.classList.add('musicSeconds')

divInputRanges.style.display='flex'
divInputRanges.style.justifyContent='space-around'
divInputRanges.style.alignItems='center'
divInputRanges.style.position='relative'

inputVolume.style.width='50px'
inputVolume.style.height='20px'
inputVolume.type='range'
inputVolume.classList.add('musicVolume')

imgRight.style.width='30px'
imgRight.src='./assets/images/1564517_music_next_player_icon.png'

imgLeft.style.width='30px'
imgLeft.style.rotate='180deg'
imgLeft.src='./assets/images/1564517_music_next_player_icon.png'

imgPause.style.width='30px'
imgPause.src='./assets/images/6613346_button_media_music_pause_player_icon.png'

input.type ='range'
input.value='0'
input.style.margin='0 auto'
input.style.marginBottom='10px'

h3NameMusic.innerHTML=`${musicAndImageData[count].name}`
h3NameMusic.style.textAlign='center'
h3NameMusic.style.fontSize='17px'
h3NameMusic.style.marginBottom='10px'

pAuthorMusic.innerHTML=`${musicAndImageData[count].author}`
pAuthorMusic.style.textAlign='center'
pAuthorMusic.style.fontSize='12px'
pAuthorMusic.style.marginBottom='10px'

pTime.style.position='absolute'
pTime.style.top='-20px'
pTime.style.right='78px'
pTime.style.fontSize='14px'
pTime.innerHTML=`${ (Math.floor(audio.currentTime/60))}:${(Math.floor(audio.currentTime)%60)} / 0:0`
let minute = 0
audio.ontimeupdate = function() {
    input.value = `${(100 * audio.currentTime) / audio.duration}`
        pTime.innerHTML=`${ (Math.floor(audio.currentTime/60))}:${(Math.floor(audio.currentTime)%60)} / ${Math.floor(audio.duration/60)}:${Math.floor(audio.duration)%60}`
}
  console.log(+audio.currentTime % 60 === 0);
  input.addEventListener("mouseup", () => {
    audio.currentTime = (input.value/100) * audio.duration
  })

  inputVolume.addEventListener("mouseup", (e) => {
    audio.volume = inputVolume.value/100
  })
  
  

buttonRight.addEventListener('click', ()=>{
    if(count >= musicAndImageData.length-1){
       console.log(musicAndImageData.length);
        count=-1
    }else{ count++
        console.log(count);
        img.src=`${musicAndImageData[count].preView}`
        h3NameMusic.innerHTML=`${musicAndImageData[count].name}`
        pAuthorMusic.innerHTML=`${musicAndImageData[count].author}`
        audio.src=`${musicAndImageData[count].music}`
        document.body.style.backgroundImage =`url(${musicAndImageData[count].background})`
        imgPause.src='./assets/images/6613346_button_media_music_pause_player_icon.png'
    }
})

buttonLeft.addEventListener('click', ()=>{
    if(count <= 0){
        count=musicAndImageData.length
    }else{
         count--
        img.src=`${musicAndImageData[count].preView}`
        audio.src=`${musicAndImageData[count].music}`
        document.body.style.backgroundImage =`url(${musicAndImageData[count].background})`
        imgPause.src='./assets/images/6613346_button_media_music_pause_player_icon.png'
    }
})

buttonPause.addEventListener('click',()=>{
    if(audio.paused == true){
        audio.play()
        imgPause.src='./assets/images/6613370_button_media_music_play_player_icon.png'
    }else{
        audio.pause()
        imgPause.src='./assets/images/6613346_button_media_music_pause_player_icon.png'

    }
})

audio.controls=true

img.src=`${musicAndImageData[count].preView}`
audio.src=`${musicAndImageData[count].music}`
document.body.style.backgroundImage =`url(${musicAndImageData[count].background})`

document.querySelector('body').appendChild(divPlayer)
divPlayer.appendChild(img)
divPlayer.appendChild(h3NameMusic)
divPlayer.appendChild(pAuthorMusic)
divPlayer.appendChild(divButtons)
divButtons.appendChild(buttonLeft)
divButtons.appendChild(buttonPause)
divButtons.appendChild(buttonRight)
buttonRight.appendChild(imgRight)
buttonPause.appendChild(imgPause)
buttonLeft.appendChild(imgLeft)
divPlayer.appendChild(divInputRanges)
divInputRanges.appendChild(pTime)
divInputRanges.appendChild(input)
divInputRanges.appendChild(inputVolume)