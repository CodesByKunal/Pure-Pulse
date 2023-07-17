/* JavaScript part used to add animation to left side of main-player ⬇️*/
const leftSliderIconParent = document.getElementById("left-slider-icon-parent");
const leftSliderIcon = document.getElementById("left-slider-icon");
const playlistItemsParent = document.getElementById("playlist-items-parent");

leftSliderIcon.addEventListener("click", leftanimation)
function leftanimation() {
    playlistItemsParent.classList.toggle("playlist-items-parent-out");
    leftSliderIconParent.classList.toggle("left-slider-icon-parent-out");
    leftSliderIcon.classList.toggle("left-slider-icon-out");
};

/* JavaScript part used to add animation to right side of main-player ⬇️*/

const rightSliderIconParent = document.getElementById(
    "right-slider-icon-parent"
);
const rightSliderIcon = document.getElementById("right-slider-icon");
const songItemsParent = document.getElementById("song-items-parent");

rightSliderIcon.addEventListener("click", rigthanimation)
function rigthanimation() {
    songItemsParent.classList.toggle("song-items-parent-out");
    rightSliderIconParent.classList.toggle("right-slider-icon-parent-out");
    rightSliderIcon.classList.toggle("right-slider-icon-out");
};

rigthanimation()
leftanimation()
/* This is DataBase*/

let songsDataBase = [
    {
        tittle: "Been a While",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/d4f529f1721c0ca0430cb3a9dcc88044/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1YPzjn-VjemGJ-EYSA8_YK4T7N1RVMlPi",
    },
    {
        tittle: "Count On Me",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/c630d76bafa4c43163db40131442dd9c/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1a4i_exkIZAM7p3k_rSzDSZD808EjmnlG",
    },
    {
        tittle: "Happy Hour",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/a1b315d317560bb413d560449ad903fc/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1SX-BBO-vj-I47DRlpP3YBys6skN9_Hoe",
    },
    {
        tittle: "Hasti Rahe Tu",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/34255eaa15d8fa9429887df9bdddc153/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1qX7n_GCImpe1_GAvfGr4HuMj7gdcWmNn",
    },
    {
        tittle: "Open Letter",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/a1b315d317560bb413d560449ad903fc/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1OBxP1xbL2Xv7TSFCOxCTWAHBMP_Y_RZB",
    },
    {
        tittle: "Raah",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/7babfe62d727b258e5d9255a302dc289/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1CmI_T2u2SyYWtOG8YARcbbzRsW-03Azp",
    },
    {
        tittle: "We Made It",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/37fe760a7c31ed132bd26ab08de8f54f/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1m6Yxi9mkHkoe6Y1WA5BiwN8WfglP0JkS",
    },
    {
        tittle: "Adore",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/0fae23d91dd3a7e7e2df60195af25272/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1tg_CT81PRd82MkZGg88hr7kXSbXihwbY",
    },
    {
        tittle: "You Know the Drill",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/8f056c3fd6cfe7c62d407250b18a052e/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=16BnHV-8oe47VLZ7jU_7UqAAiJAHTs9PR",
    },
    {
        tittle: "Yaar",
        playlist_id: "Me and I",
        song_cover_src:
            "https://e-cdns-images.dzcdn.net/images/cover/5b82dc0606f6192767f003965fd9a0e0/500x500-000000-80-0-0.jpg",
        audio_src:
            "https://drive.google.com/uc?id=1qfn3V47CMMR7sclUH3r4pw_KRE5YaHHf",
    },
    {
        tittle: "Still Rollin",
        playlist_id: "Me and I",
        song_cover_src: "https://e-cdns-images.dzcdn.net/images/cover/447c91c56795daef15d61f8977a82e9c/500x500-000000-80-0-0.jpg",
        audio_src: "https://drive.google.com/uc?id=1sjD5jKwCrrWcFSl8R9TvKKsHuyhnpzOg"
    }
];

let playlistDataBase = [
    {
        playlist_tittle: "Me and I",
        cover_src: "https://i.pinimg.com/564x/fb/41/94/fb41949c9035d2b07a78f6ada3282a52.jpg",
    },
    {
        playlist_tittle: "Old is Gold",
        cover_src:
            "https://img.freepik.com/free-vector/hand-drawn-nostalgic-90-s-youtube-thumbnail_23-2149056785.jpg",
    },
    {
        playlist_tittle: "Random Hits",
        cover_src: "/icons/sample-thumbnail.jpg",
    },
];
let playlist_name = "Me and I";
renderSongList();
const currentSelectedSong = document.querySelector("#current-selected-song");
currentSelectedSong.volume = 0.5
/* Render Playlists  */
const playlistitemsparent = document.getElementById("playlist-items-parent");
for (let index = 0; index < playlistDataBase.length; index++) {
    playlistItemsParent.innerHTML += `<div class="playlist-block">
        <div class="playlist-details-control-parent">
            <div class="playlist-tittle-parent"><span>${playlistDataBase[index].playlist_tittle}</span></div>
            <div class="playlist-control-parent"><img class="playlist-play-pause-icon" src="https://drive.google.com/uc?id=1SDVErLSrn4-8OHkdbYdeOIBlQFluBloc" width="45px"></div>
        </div>
    </div>`;
}

/* Render Playlist Cover*/
const playlistBlock = document.querySelectorAll(".playlist-block");
for (let index = 0; index < playlistDataBase.length; index++) {
    playlistBlock[
        index
    ].style.backgroundImage = `url('${playlistDataBase[index].cover_src}')`;
}

/* playlist play button to get playlist_name and call render song in that playlist */
// let playlistPlayPauseIcon = document.querySelectorAll(
//     ".playlist-play-pause-icon"
// );
// playlistPlayPauseIcon.forEach((element) => {
//     element.addEventListener("click", (event) => {
//         playlist_name =
//             event.target.parentElement.previousElementSibling.firstElementChild
//                 .innerText;
//         renderSongList();
//     });
// });

/* rendersonglist to display songs that match playlist_name and playlist_id function */
function renderSongList() {
    songItemsParent.innerHTML = "";
    for (let index = 0; index < songsDataBase.length; index++) {
        if (songsDataBase[index].playlist_id === playlist_name) {
            songItemsParent.innerHTML += `<div class="songs-details-control-parent">
            <div class="song-mini-cover-parent" style="background-image: url('${songsDataBase[index].song_cover_src}');"></div>
            <div class="song-title-parent"><span>${songsDataBase[index].tittle}</span></div>
            <div class="song-control-parent">
            <img class="playing-visualize" src="" width="40px">
            <img class="mini-pause-play-icon" src="https://drive.google.com/uc?id=1A9Y1mS2VYXK1c1lnCqVipVTWE1sBuNbb" width="24px">
            </div>
            </div>`;
        }
    }
    miniPausePlay();
}

/* get name of song to be played from songs list */
previous_song_name = ""; //this used to make music play pause from mini control
function miniPausePlay() {
    let miniPausePlayIcon = document.querySelectorAll(".mini-pause-play-icon");
    miniPausePlayIcon.forEach((element) => {
        element.addEventListener("click", (event) => {
            song_name =
                event.target.parentElement.previousElementSibling.firstElementChild;
            targetedplaypause = event.target;
            targetedvisualizer = event.target.previousElementSibling;
            if (previous_song_name === song_name.innerText) {
                play_pause();
            } else {
                rendermaincovertittle();
                adjustplayinmini();
                play_pause();
            }
        });
    });
}

/* Auto play next song if current song Ends */
currentSelectedSong.addEventListener("ended", () => {
    playpauseButton.src = "https://drive.google.com/uc?id=1sntL0LqLwTVoF35Bn8bIFeVArNXCgG_V"; //playbtn
    targetedplaypause.src = "https://drive.google.com/uc?id=1A9Y1mS2VYXK1c1lnCqVipVTWE1sBuNbb"; ///icons/mini-play-icon.png
    targetedvisualizer.src = "";
    song_name = song_name.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
    targetedplaypause = song_name.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
    targetedvisualizer = song_name.parentElement.nextElementSibling.firstElementChild;
    rendermaincovertittle();
    adjustplayinmini();
    play_pause();
});

/* render main-cover song-tittle currentSelectedSong based on song_name */
function rendermaincovertittle() {
    const songTittleMain = document.getElementById("song-tittle-main");
    const songCoverParent = document.querySelector("#song-cover-parent");
    previous_song_name = song_name.innerText;
    for (let index = 0; index < songsDataBase.length; index++) {
        if (song_name.innerText === songsDataBase[index].tittle) {
            songCoverParent.style.backgroundImage = `url('${songsDataBase[index].song_cover_src}')`;
            songTittleMain.firstElementChild.innerText = `${songsDataBase[index].tittle}`;
            currentSelectedSong.src = `${songsDataBase[index].audio_src}`;
        }
    }
    currentSelectedSong.addEventListener("loadedmetadata", () => {
        progressbar.max = currentSelectedSong.duration;
        let totalTime = document.getElementById("total-time");
        progressbar.max = currentSelectedSong.duration;
        totalTime.innerText = `${formatTime(
            Math.floor(currentSelectedSong.duration)
        )}`;
    });
}

/* play song from main-control */
const playpauseButton = document.getElementById("play-pause-button");
playpauseButton.addEventListener("click", play_pause);
function play_pause() {
    if (currentSelectedSong.paused) {
        currentSelectedSong.play();
        playpauseButton.src = "https://drive.google.com/uc?id=1Sjmq0WHiux68kEErg4u1E_CM9xhM8CG8";//---/icons/pause-button.png
        targetedplaypause.src = "https://drive.google.com/uc?id=1X63gJ1gQN2csUoQt_NBiU4TojqX994ck";//----/icons/mini-pause-icon.png
        targetedvisualizer.src = "https://drive.google.com/uc?id=1IPvRGsiSGKsgOs-sNQGdVgZWS8iR6jpy"; //--/icons/giphy.gif
    } else {
        currentSelectedSong.pause();
        playpauseButton.src = "https://drive.google.com/uc?id=1sntL0LqLwTVoF35Bn8bIFeVArNXCgG_V";
        targetedplaypause.src = "https://drive.google.com/uc?id=1A9Y1mS2VYXK1c1lnCqVipVTWE1sBuNbb";
        targetedvisualizer.src = "";
    }
}

/* make miniplaypause functional acc to audio state */
function adjustplayinmini() {
    let miniPausePlayIcon = document.querySelectorAll(".mini-pause-play-icon");
    for (let index = 0; index < miniPausePlayIcon.length; index++) {
        miniPausePlayIcon[index].src = "https://drive.google.com/uc?id=1A9Y1mS2VYXK1c1lnCqVipVTWE1sBuNbb";///icons/mini-play-icon.png
    }
    let visualizer = document.querySelectorAll(".playing-visualize");
    for (let index = 0; index < miniPausePlayIcon.length; index++) {
        visualizer[index].src = "";
    }
}

/* Update progressbar */
const progressbar = document.getElementById("progressbar");
const elapsedTime = document.getElementById("elapsed-time");
setInterval(() => {
    progressbar.value = currentSelectedSong.currentTime;
    elapsedTime.innerText = `${formatTime(
        Math.floor(currentSelectedSong.currentTime)
    )}`;
}, 1000);

progressbar.addEventListener("input", () => {
    currentSelectedSong.currentTime = progressbar.value;
});

/* format time into mm:ss format */
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
}

/* forward button functionality */
const forwardButton = document.getElementById("forward-button");
forwardButton.addEventListener("click", () => {
    playpauseButton.src = "https://drive.google.com/uc?id=1sntL0LqLwTVoF35Bn8bIFeVArNXCgG_V"; //play-button
    targetedplaypause.src = "https://drive.google.com/uc?id=1X63gJ1gQN2csUoQt_NBiU4TojqX994ck"; //mini-play-btn
    targetedvisualizer.src = "";
    song_name =
        song_name.parentElement.parentElement.nextElementSibling.firstElementChild
            .nextElementSibling.firstElementChild;
    targetedplaypause =
        song_name.parentElement.nextElementSibling.firstElementChild
            .nextElementSibling;
    targetedvisualizer =
        song_name.parentElement.nextElementSibling.firstElementChild;
    rendermaincovertittle();
    adjustplayinmini();
    play_pause();
});

/* backward button functionality */
bacwardButton = document.getElementById("backward-button")
bacwardButton.addEventListener("click", () => {
    song_name = song_name.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild;
    targetedplaypause = song_name.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
    targetedvisualizer = song_name.parentElement.nextElementSibling.firstElementChild;
    rendermaincovertittle();
    adjustplayinmini();
    play_pause();
})

/* volume button */
const volumeControler = document.getElementById("volume-controler")
volumeControler.addEventListener("input", () => {
    currentSelectedSong.volume = volumeControler.value / 100
})