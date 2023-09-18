let musicAndImageData = [
    {
        background: './assets/images/HighWayToHellBackground.png',
        preView: './assets/images/HighWayToHellPreView.jpg',
        music:'./assets/music/AC-DC - Highway To Hell.mp3'
    },
    {
        background: './assets/images/ThunderFlightBackground.jpg',
        preView: './assets/images/PreViewThunderFlight.jpg',
        music:'./assets/music/AC-DC - Thunderstruck.mp3'
    },
    {
        background: './assets/images/UkranianGimnBackground.jpg',
        preView: './assets/images/UkrainianGimnPreView.jpg',
        music:'./assets/music/gimn-ukrainy-Ponomarev.mp3'
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
let p=document.createElement('p')
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

img.style.width='200px'
img.style.height='200px'
img.style.margin='0 auto'
img.style.marginBottom='30px'

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

audio.ontimeupdate = function(e) {
    input.value = `${(100 * audio.currentTime) / audio.duration}`
  }
  
  input.addEventListener("mouseup", (e) => {
    audio.currentTime = (input.value/100) * audio.duration
  })

  inputVolume.addEventListener("mouseup", (e) => {
    audio.volume = inputVolume.value/100
  })
  
  

buttonRight.addEventListener('click', ()=>{
    if(count >= musicAndImageData.length-2){
       console.log(musicAndImageData.length);
        count=-1
    }else{ count++
        console.log(count);
        img.src=`${musicAndImageData[count].preView}`
        audio.src=`${musicAndImageData[count].music}`
        document.body.style.backgroundImage =`url(${musicAndImageData[count].background})`
        
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
divPlayer.appendChild(p)
divPlayer.appendChild(divButtons)
divButtons.appendChild(buttonLeft)
divButtons.appendChild(buttonPause)
divButtons.appendChild(buttonRight)
buttonRight.appendChild(imgRight)
buttonPause.appendChild(imgPause)
buttonLeft.appendChild(imgLeft)
divPlayer.appendChild(divInputRanges)
divInputRanges.appendChild(input)
divInputRanges.appendChild(inputVolume)