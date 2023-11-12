let allMusic = [
    {
        name: "Yêu Là Tha Thứ",
        artist: "--Wind--",
        img: "1phut",
        src: "music/YeuLaThaThu.mp3",
        idMusic: "YeuLaThaThu"
    },
    {
        name: "Âm Thầm Bên Em",
        artist: "--Wind--",
        img: "AmThamBenEm",
        src: "music/AmThamBenEm.mp3",
        idMusic: "AmThamBenEm"
    },
    {
        name: "Đáp Án Cuối Cùng",
        artist: "--Wind--",
        img: "DapAnCuoiCung",
        src: "music/DapAnCuoiCung.mp3",
        idMusic: "DapAnCuoiCung"
    },
    {
        name: "Giấu Mặt",
        artist: "--Wind--",
        img: "GiauMat",
        src: "music/GiauMat.mp3",
        idMusic: "GiauMat"
    },
    {
        name: "Yêu Lại Từ Đầu",
        artist: "--Wind--",
        img: "YeuLaiTuDau",
        src: "music/YeuLaiTuDau.mp3",
        idMusic: "YeuLaiTuDau"
    },
    {
        name: "Giấu Mặt",
        artist: "--Wind--",
        img: "GiauMat",
        src: "music/GiauMat.mp3",
        idMusic: "GiauMat"
    },
    {
        name: "Bông Hoa Đẹp Nhất",
        artist: "--Wind--",
        img: "BongHoaDepNhat",
        src: "music/BongHoaDepNhat.mp3",
        idMusic: "BongHoaDepNhat"
    },
    {
        name: "Lạ Lùng",
        artist: "--Wind--",
        img: "LaLung",
        src: "music/LaLung.mp3",
        idMusic: "LaLung"
    },
    {
        name: "Mất Anh Em Có Buồn",
        artist: "--Wind--",
        img: "MatAnhEmCoBuon",
        src: "music/MatAnhEmCoBuon.mp3",
        idMusic: "MatAnhEmCoBuon"
    },
    {
        name: "Ngàn Yêu Thương Về Đâu",
        artist: "--Wind--",
        img: "NganYeuThuongVeDau",
        src: "music/NganYeuThuongVeDau.mp3",
        idMusic: "NganYeuThuongVeDau"
    },
    {
        name: "Người Tôi Yêu",
        artist: "--Wind--",
        img: "NguoiToiYeu",
        src: "music/NguoiToiYeu.mp3",
        idMusic: "NguoiToiYeu"
    },
    {
        name: "Người Ấy",
        artist: "--Wind--",
        img: "NguoiAy",
        src: "music/NguoiAy.mp3",
        idMusic: "NguoiAy"
    },
    {
        name: "Sau Tất Cả",
        artist: "--Wind--",
        img: "SauTatCa",
        src: "music/SauTatCa.mp3",
        idMusic: "SauTatCa"
    },
    {
        name: "Suy Nghĩ Trong Anh",
        artist: "--Wind--",
        img: "SuyNghiTrongAnh",
        src: "music/SuyNghiTrongAnh.mp3",
        idMusic: "SuyNghiTrongAnh"
    },
    {
        name: "Tìm Lại Bầu Trời",
        artist: "--Wind--",
        img: "TimLaiBauTroi",
        src: "music/TimLaiBauTroi.mp3",
        idMusic: "TimLaiBauTroi"
    },
    {
        name: "Thế Hệ Tan Vỡ",
        artist: "--Wind--",
        img: "TheHeTanVo",
        src: "music/TheHeTanVo.mp3",
        idMusic: "TheHeTanVo"
    },
    {
        name: "Thương Em Là Điều Anh Không Thể Ngờ",
        artist: "--Wind--",
        img: "ThuongEmLaDieuAnhKhongTheNgo",
        src: "music/ThuongEmLaDieuAnhKhongTheNgo.mp3",
        idMusic: "ThuongEmLaDieuAnhKhongTheNgo"
    },
    {
        name: "Hồi Kết",
        artist: "--Wind--",
        img: "HoiKet",
        src: "music/HoiKet.mp3",
        idMusic: "HoKet"
    },
]

const wrapper = document.querySelector(".wrapper")
imgMusic = wrapper.querySelector('.img-music')
musicImg = wrapper.querySelector(".img-music img")
musicName = wrapper.querySelector(".name-music .name")
musicArtist = wrapper.querySelector(".name-music .artist")
progress = wrapper.querySelector('.progress')
progressbar = wrapper.querySelector(".progress-bar")
play = wrapper.querySelector('#play');
prev = wrapper.querySelector('#prev');
next = wrapper.querySelector('#next');

let musicIndex = 0;
let autoplay = 0;
let timer = 0;
let play_song = false;
let songAudio = document.createElement('audio');

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    playLiMusic();
})
function loadMusic(index) {
    reset_music();
    autoplay_song();
    musicName.innerText = allMusic[index].name;
    musicArtist.innerText = allMusic[index].artist;
    musicImg.src = `image/${allMusic[index].img}.jpg`;
    songAudio.src = allMusic[index].src;
    songAudio.load();

    timer = setInterval(range_slider, 1000);
}
loadMusic(musicIndex);
function musicPlay() {
    if (play_song == false) {
        playsong();
    }
    else {
        pausesong();
    }
}
function playsong() {
    songAudio.play();
    play_song = true;
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pausesong() {
    songAudio.pause();
    play_song = false;
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
}

// ---------next Music----------
function nextMusic() {
    if (musicIndex < allMusic.length - 1) {
        musicIndex++;
        loadMusic(musicIndex);
        playsong();
        playLiMusic();
    } else {
        musicIndex = 0;
        loadMusic(musicIndex);
        playsong();
        playLiMusic();
    }
}
// ---------prev Music----------
function prevMusic() {
    if (musicIndex > 0) {
        musicIndex--;
        loadMusic(musicIndex);
        playsong();
    } else {
        musicIndex = allMusic.length - 1;
        loadMusic(musicIndex);
        playsong();
    }
}
next.addEventListener("click", () => {
    nextMusic();
})

prev.addEventListener("click", () => {
    prevMusic();
})

// -------------update progress-------
songAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressbar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current")
    let musicDuration = wrapper.querySelector(".duration")
    songAudio.addEventListener("loadeddata", () => {
        let audioduration = songAudio.duration;
        let totalMusicmin = Math.floor(audioduration / 60);
        let totalMusicsec = Math.floor(audioduration % 60);
        if (totalMusicsec < 10) {
            totalMusicsec = `0${totalMusicsec}`;
        }
        musicDuration.innerText = `${totalMusicmin}:${totalMusicsec}`;
    });
    let currentMusicmin = Math.floor(currentTime / 60);
    let currentMusicsec = Math.floor(currentTime % 60);
    if (currentMusicsec < 10) {
        currentMusicsec = `0${currentMusicsec}`;
    }
    musicCurrentTime.innerText = `${currentMusicmin}:${currentMusicsec}`;

});

// -----------tua nhạc-------
progress.addEventListener("click", (e) => {
    let progressWidthval = progress.clientWidth;
    let clickOffsetX = e.offsetX;
    let songDuration = songAudio.duration;
    songAudio.currentTime = (clickOffsetX / progressWidthval) * songDuration
    playsong();
})

// --------tự chuyển bài----------
function autoplay_song() {
    if (autoplay == 1) {
        autoplay = 0;
    } else {
        autoplay = 1;
    }
}
function range_slider() {
    if (songAudio.ended) {
        play.innerHTML = `<i class="fa-solid fa-play"></i>`;
        if (autoplay == 1) {
            nextMusic();
            loadMusic(musicIndex);
            playsong();
        }
    }
}
// --------reset music---------
function reset_music() {
    progressbar.value = 0;
}

// --------Volume--------

let recent_volume = wrapper.querySelector('#volume')
function volume_change() {
    songAudio.volume = recent_volume.value / 100;
}



// --------danh sách nhạc----------

const showMusic = document.querySelector("#fa-list")
const closeMusic = document.querySelector(".fa-close")
const listMusic = document.querySelector(".list-music")
const ulMusic = wrapper.querySelector("ul")

showMusic.addEventListener("click", function () {
    listMusic.classList.add("show")
})
closeMusic.addEventListener("click", function () {
    listMusic.classList.remove("show")
})

for (let i = 0; i < allMusic.length; i++) {
    let liMusic = `<li Musicindex="${i}">
                        <div class="song-title">
                            <span>${allMusic[i].name}</span>
                            <p>${allMusic[i].artist}</p>
                        </div>
                        <audio class="${allMusic[i].idMusic}" src="${allMusic[i].src}"></audio>
                        <span id="${allMusic[i].idMusic}" class="audio-duration">3:04</span>
                    </li>`;
    ulMusic.insertAdjacentHTML("beforeend", liMusic);
    let liAudioDuration = ulMusic.querySelector(`#${allMusic[i].idMusic}`)
    let liAudioTag = ulMusic.querySelector(`.${allMusic[i].idMusic}`)

    // -------hiển thị thời gian bài hát------------
    liAudioTag.addEventListener("loadeddata", () => {
        let audioDuration = liAudioTag.duration;
        let totalMusicmin = Math.floor(audioDuration / 60);
        let totalMusicsec = Math.floor(audioDuration % 60);
        if (totalMusicsec < 10) {
            totalMusicsec = `0${totalMusicsec}`;
        }
        liAudioDuration.innerText = `${totalMusicmin}:${totalMusicsec}`;
    });

}
// -----------------------------------------------

const allLiMusic = ulMusic.querySelectorAll("li");
function playLiMusic() {
    for (let j = 0; j < allLiMusic.length; j++) {
        if (allLiMusic[j].classList.contains("playMusic")) {
            allLiMusic[j].classList.remove("playMusic")
        }
        if (allLiMusic[j].getAttribute("Musicindex") == musicIndex) {
            allLiMusic[j].classList.add("playMusic");
        }
        allLiMusic[j].setAttribute("onclick", "clicked(this)");
    }
}

function clicked(index) {
    let getLiIndex = index.getAttribute("Musicindex");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playsong();
    playLiMusic();
}

