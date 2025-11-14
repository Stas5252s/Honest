let seconds = 0;
let clicks = 0;
let messagesShown = [];

const messages = [
  { time: 30, text: "30 seconds spent. Not much, but not nothing either." },
  { time: 60, text: "1 minute. You're committed now." },
  { time: 120, text: "2 minutes. This is getting real." },
  { time: 180, text: "3 minutes. Honestly impressive dedication." },
  {
    time: 300,
    text: "5 minutes. You've officially wasted a decent chunk of time.",
  },
  { time: 600, text: "10 minutes. I have nothing more to say." },
];

const clickMessages = [
  { clicks: 5, text: "🎯 Milestone: 5 clicks" },
  { clicks: 10, text: "🎯 Milestone: 10 clicks" },
  { clicks: 25, text: "🎯 Milestone: 25 clicks" },
  { clicks: 50, text: "🎯 Milestone: 50 clicks" },
  { clicks: 100, text: "🎯 Milestone: 100 clicks (seriously?)" },
];

const buttonTexts = [
  "Click Here",
  "Click Again",
  "Still Clicking?",
  "One More Time",
  "Keep Going",
  "Why Not",
  "Sure, Whatever",
  "Still Here",
  "Okay Then",
  "Fine",
];

setInterval(() => {
  seconds++;
  document.getElementById("time").textContent = seconds;

  const progress = Math.min((seconds / 600) * 100, 100);
  document.getElementById("progress").style.width = progress + "%";
  document.getElementById("progressPercent").textContent =
    Math.floor(progress) + "%";

  messages.forEach((msg) => {
    if (seconds === msg.time && !messagesShown.includes(msg.time)) {
      showMessage(msg.text);
      messagesShown.push(msg.time);
    }
  });
}, 1000);

document.getElementById("uselessBtn").addEventListener("click", function () {
  clicks++;
  document.getElementById("clicks").textContent = clicks;

  if (clicks < buttonTexts.length) {
    this.textContent = buttonTexts[clicks];
  } else {
    this.textContent = "Click #" + clicks;
  }

  clickMessages.forEach((msg) => {
    if (clicks === msg.clicks) {
      showAchievement(msg.text);
    }
  });
});

function showMessage(text) {
  const messagesDiv = document.getElementById("messages");
  const messageEl = document.createElement("div");
  messageEl.className = "message";
  messageEl.textContent = text;
  messagesDiv.appendChild(messageEl);
}

function showAchievement(text) {
  const achievementsDiv = document.getElementById("achievements");
  const achievementEl = document.createElement("div");
  achievementEl.className = "achievement";
  achievementEl.textContent = text;
  achievementEl.style.display = "block";
  achievementsDiv.appendChild(achievementEl);
}
