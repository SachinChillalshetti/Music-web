console.log("Welcome to Spotify");

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let  gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songname: "asa", filePath: "songs/1.mp3",coverPath:"cover.webp"},
    {songname: "asfwefa", filePath: "songs/2.mp3",coverPath:"cover.webp"},
    {songname: "awwsa", filePath: "songs/3.mp3",coverPath:"cover.webp"},
    {songname: "asuua", filePath: "songs/4.mp3",coverPath:"cover.webp"},
    {songname: "asaaaa", filePath: "songs/5.mp3",coverPath:"cover.webp"},
    {songname: "aserta", filePath: "songs/1.mp3",coverPath:"cover.webp"},
    {songname: "acvvcsa", filePath: "songs/7.mp3",coverPath:"cover.webp"},
    {songname: "asmma", filePath: "songs/1.mp3",coverPath:"cover.webp"},
    {songname: "asnnna", filePath: "songs/1.mp3",coverPath:"cover.webp"},
    {songname: "aspa", filePath: "songs/1.mp3",coverPath:"cover.webp"},
]   
 
songItem.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
   
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
       
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{ 
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})