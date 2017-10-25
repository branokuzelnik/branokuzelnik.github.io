function videoShow() {
    var vid = document.getElementById("js-video");
    document.getElementById('js-video-wrapper').style.display = 'flex';
    vid.play();
}
function videoHide() {
    var vid = document.getElementById("js-video");
    document.getElementById('js-video-wrapper').style.display = 'none';
    vid.pause();
}