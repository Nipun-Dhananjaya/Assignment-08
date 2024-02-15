let colors = ["red",  "green", "blue", "yellow", "lightpink", "deeppink"];
let interval = null;

function changeColor() {
    for (let i = 0; i < colors.length; i++) {
        $(".squre").eq(i).css("background", colors[i]);
    }
    colors.unshift(colors.pop())
}
$("#start").on('click', () => {
    if (interval == null) {
        interval =  setInterval(changeColor, 1000);
    }
});

$("#stop").on('click', () => {
    clearInterval(interval);
    interval = null;
});
