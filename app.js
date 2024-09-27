const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning Ashish Sunil Thomas Master...");
  } else if (hour > 12 && hour < 17) {
    speak("Good Afternoon Ashish Sunil Thomas Master...");
  } else {
    speak("Good Evenining Ashish Sunil Thomas Master...");
  }
}

window.addEventListener("load", () => {
  speak("Initializing JARVIS AI....");
  wishMe();
});

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();

let recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
let isRecognitionStarted = false;

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  if (!isRecognitionStarted) {
    content.textContent = "Listening....";
    recognition.start();
    isRecognitionStarted = true;
  } else {
    content.textContent = "Already listening...";
  }
});

// Optionally, handle when recognition ends
recognition.onend = function () {
  isRecognitionStarted = false;
  content.textContent = "Stopped listening";
};

// Optionally, handle errors
recognition.onerror = function (event) {
  console.error("Speech recognition error detected: " + event.error);
};

// btn.addEventListener("click", () => {
//   content.textContent = "Listening....";
//   recognition.start();
// });

// recognition.onerror = (event) => {
//   content.textContent = "Sorry, I didn't catch that. Can you please repeat?";
//   speak("Sorry, I didn't catch that. Can you please repeat?");
// };

function takeCommand(message) {
  if (message.includes("hey") || message.includes("hello")) {
    speak("Hello Sir, How May I Help You?");
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("open instagram")) {
    window.open("https://www.instagram.com/", "_blank");
    const finalText = "Opening Instagram";
    speak(finalText);
  } else if (message.includes("open facebook")) {
    window.open("https://www.facebook.com/", "_blank");
    const finalText = "Opening Facebook";
    speak(finalText);
  } else if (message.includes("open twitter")) {
    window.open("https://x.com/home", "_blank");
    const finalText = "Opening Twitter";
    speak(finalText);
  } else if (message.includes("open whatsapp")) {
    window.open("https://web.whatsapp.com/");
    const finalText = "Opening Whatsapp";
    speak(finalText);
  } else if (message.includes("open linkedin")) {
    window.open("https://www.linkedin.com/");
    const finalText = "Opening LinkedIn";
    speak(finalText);
  } else if (message.includes("open github")) {
    window.open("https://github.com/");
    const finalText = "Opening Github";
    speak(finalText);
  } else if (message.includes("open youtube")) {
    window.open("https://www.youtube.com/");
    const finalText = "Opening Youtube";
    speak(finalText);
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on internet regarding " + message;
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finalText = "This is what i found on wikipedia regarding " + message;
    speak(finalText);
  } else if (message.includes("open gmail")) {
    window.open("https://mail.google.com/mail/u/0/#inbox");
    const finalText = "Opening Gmail";
    speak(finalText);
  } else if (message.includes("open stackoverflow")) {
    window.open("https://stackoverflow.com/");
    const finalText = "Opening Stackoverflow";
    speak(finalText);
  } else if (message.includes("open google drive")) {
    window.open("https://drive.google.com/drive/my-drive");
    const finalText = "Opening Google Drive";
    speak(finalText);
  } else if (message.includes("open google meet")) {
    window.open("https://meet.google.com/");
    const finalText = "Opening Google Meet";
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = time;
    speak(finalText);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = date;
    speak(finalText);
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else if (message.includes("calendar")) {
    const url = "https://calendar.google.com/";
    window.open(url, "_blank"); // opens in a new tab
    const finalText = "Opening Calendar";
    speak(finalText);
  } else if (message.includes("word")) {
    const url = "https://office.live.com/start/Word.aspx";
    window.open(url, "_blank"); // opens in a new tab
    const finalText = "Opening Word";
    speak(finalText);
  } else if (message.includes("excel")) {
    const url = "https://office.live.com/start/Excel.aspx";
    window.open(url, "_blank"); // opens in a new tab
    const finalText = "Opening Excel";
    speak(finalText);
  } else if (message.includes("powerpoint")) {
    const url = "https://office.live.com/start/PowerPoint.aspx";
    window.open(url, "_blank"); // opens in a new tab
    const finalText = "Opening PowerPoint";
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on google";
    speak(finalText);
  }
}
