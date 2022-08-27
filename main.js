let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true, 
    delay: 75,
});

typewriter
    .pauseFor(3500)
    .typeString("日本から始まるあたしの会社です")
    .pauseFor(200)
    .deleteChars(100)
    .start();