let texts = ["A", "B", "C", "D", "E", "F"];
let interval = null;

function changeText() {
    for (let i = 0; i < texts.length; i++) {
        $(".text").eq(i).text(texts[i]);
    }
    texts.unshift(texts.pop())
}
$("#start").on('click', () => {
    if (interval == null) {
        interval =  setInterval(changeText, 1000);
    }
});

$("#stop").on('click', () => {
    clearInterval(interval);
    interval = null;
});