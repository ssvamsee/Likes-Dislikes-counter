var button = document.getElementById("likes");
var counter = document.getElementById("likecount"),
    count = 0;
button.onclick = function likes() {
    count += 1;
    counter.innerHTML = ": " + count;
};
var button1 = document.getElementById("dislikes");
var counter1 = document.getElementById("dislikecount"),
    count1 = 0;
button1.onclick = function dislikes() {
    count1 += 1;
    counter1.innerHTML = ": " + count1;
};