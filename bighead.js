const songname = document.getElementById('song-name');
const bandname = document.getElementById('band-name');
const cover = document.getElementById('imagem');
const song = document.getElementById('audio');
const play = document.getElementById('play-pause');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const like = document.getElementById("like")

const pt1 = {
    songname : 'Father Stretch My Hands Pt. 1',
    artist : 'Kanye West',
    file : 'Father Stretch My Hands Pt. 1'
};

const pt2 = {
    songname : 'Father Stretch My Hands Pt. 2',
    artist : 'Kanye West',
    file : 'Pt. 2'
};

const low = {
    songname : 'Low Lights',
    artist : 'Kanye West',
    file : 'Low lights'
};

let isplaying = true;

let liked = false

const playlist = [pt1, pt2, low];
let index = 0;


function playsong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isplaying = true;
}

function pausesong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isplaying = false;
}

function playpausedecider(){
    if(isplaying === true){
        pausesong();
    }
    else{
        playsong();
    }
}

function initializesong(){
    song.src = `songs/${playlist[index].file}.mp3`;
    songname.innerText = playlist[index].songname;
    bandname.innerText = playlist[index].artist;
}

function previoussong(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else{
        index = index - 1;
    }
    initializesong();
    playsong();
}

function nextsong(){
    if(index === playlist.length - 1){
        index = 0
    }
    else{
        index = index + 1
    }
    initializesong();
    playsong();
}

function likesong(){
    like.querySelector('.bi').classList.add('bi-heart-fill');
    like.querySelector('.bi').classList.remove('bi-heart');
    liked = true
}

function deslikesong(){
    like.querySelector('.bi').classList.add('bi-heart');
    like.querySelector('.bi').classList.remove('bi-heart-fill');
    liked = false
}

function likedecider(){
    if(liked === false){
        likesong()
    }
    else{
        deslikesong()
    }

}

initializesong();

play.addEventListener('click', playpausedecider);
previous.addEventListener('click', previoussong);
next.addEventListener('click', nextsong);
like.addEventListener("click", likedecider);