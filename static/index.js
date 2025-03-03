"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
function autofill(url) {
  address.value = url;
  form.requestSubmit(); // Automatically submit the form
}
const texts = [
  "flint street",
  "im",
  "happy birthday to my angel bodybymont",
  "new meme hawk tuah funny joke hawk tuah spit on that th",
  "sd2016",
  "the other only tells lies",
  "one of us only tells the truth",
  "everytime i lie i cut down a cherry tree",
  "no using the letter g or the letter f",
  "rule 2: tefflon pans are banned",
  "po lice beind me",
  "i have three demons",
  "frenzy, diablo, killer",
  "the phas code is 614111",
  "konichiwarrrts",
  "if you email me an address i'll dog their house",
  "four tick marks",
  "torftastic",
  "rule 43: no memes in #general",
  "i cant do shellshockers pls stop asking",
  "press the android button for roblox",
  "press the xbox button for fortnite",
  "is liking femboys gay?",
  "image.png",
  "nettspend so fye",
  "osa mason",
  "can i borrow 5 bucks",
  "4215 gaming",
  "adrian",
  "gfjiowjkdgsjl;w",
  "d",
  "educational website",
  "/static/load",
  "explain our friend group",
  "ground up cow",
  "202024 2018",
  "mat",
  "wyll ahaa",
  "any1 dtf?",
  "ryan did NOT make this ts",
  "goole",
  "beur work",
  "my first jar of pickles",
  "esoterically",
  "mat alert",
  "fuhuhluhtoogan",
  "sirry",
  "faurney",
  "hi James from IT",
  "once upon a time, there was a man.",
  "teach a man, fish day, man a fish, lifetime.",
  "wgat",
  "gat 8 what it is",
  "read that again",
  "It all begins with the preparation. The surface must be clean, dry, and free of any imperfections that might distract from the main event. The paint, a dazzling shade of \"Off-White Beige,\" is carefully stirred to ensure an even consistency. The brush, a sturdy 2-inch polyester filament brush, is dipped into the paint with the precision of a neurosurgeon. The room is silent, save for the faint hum of a fluorescent light overhead, casting an eerie glow over the proceedings. And then, the moment of truth: the first stroke. The brush glides across the surface with the grace of a swan, leaving behind a trail of wet, glistening paint. The tension is palpable. Will the paint dry evenly? Will it bubble? Will it—gasp—take more than 20 minutes to dry? The world holds its breath.",
  "check behind your ear",
  "clothes are comin OFF",
  "maurnkey",
  "<marquee>",
  "-.-- --- ..- .-. / .--. .- .-. . -. - ... / -.. --- -. - / .-.. --- ...- . / -.-- --- ..-",
];

// Function to initialize the text
function initializeText() {
  // Get a reference to the text container
  const textContainer = document.getElementById('randomtext');
  
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * texts.length);
  
  // Set the text content
  textContainer.textContent = texts[randomIndex];
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeText);