function getWord() {
    var x = document.getElementById("myField");
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "words_alpha+", true);
    XHR.send();
    XHR.onload = function () {
        var txt = XHR.responseText.split("\n");
        const w1n = Math.floor(Math.random() * (367516 - 1));
        const w2n = Math.floor(Math.random() * (367516 - 1));
        const w3n = Math.floor(Math.random() * (367516 - 1));
        const p1 = Math.floor(Math.random() * (99 - 10) + 10);
        const p2 = Math.floor(Math.random() * (99 - 10) + 10);
        var w1 = txt[w1n]
        var w2 = txt[w2n]
        var w3 = txt[w3n]
        if (Math.random() < 0.5) {
            w1 = txt[w1n].charAt(0).toUpperCase() + txt[w1n].slice(1);
        }
        if (Math.random() < 0.5) {
            w2 = txt[w2n].charAt(0).toUpperCase() + txt[w2n].slice(1);
        }
        if (Math.random() < 0.5) {
            w3 = txt[w3n].charAt(0).toUpperCase() + txt[w3n].slice(1);
        }
        x.value = w1 + p1 + w2 + p2 + w3;
        console.log(w1 + p1 + w2 + p2 + w3);
    };
}