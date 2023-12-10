const appContainer = document.querySelector(".app-container");
console.log(appContainer);

let exercises = [
  { pic: 0, time: 1 },
  { pic: 1, time: 1 },
  { pic: 2, time: 1 },
  { pic: 3, time: 1 },
  { pic: 4, time: 1 },
  { pic: 5, time: 1 },
  { pic: 6, time: 1 },
  { pic: 7, time: 1 },
  { pic: 8, time: 1 },
  { pic: 9, time: 1 },
];

class Exercice {
  constructor(pic, time) {
    this.pic = pic;
    this.time = time;
  }

  display = function (params) {};
}

let utils = {
  display: function (title, content, button) {
    appContainer.innerHTML = `<h3>${title}</h3>
        <div class="content">${content}</div>
        ${button ? button : ""}`;
  },
};

let pageDisplay = {
  lobby: function () {
    utils.display("Lobby", "This is the lobby", `<button id="start">Start</button>`);
  },

  exercises: function () {
    utils.display("Exercice", "Exercice single", null);
  },

  end: function () {
    utils.display("It's over", "Exercice single", `<button id="start">Start</button>)`);
  },
};

window.onload = function () {
  pageDisplay.exercises();
};

let cards = {};
