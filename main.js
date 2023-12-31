// ----SpeechRecognition CODE---

const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Maya";
      texts.appendChild(p);
    }
    if (text.includes("open my Github")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening GitHub";
      texts.appendChild(p);
      console.log("opening GitHub");
      window.open("https://github.com/jaydip-codex");
    }

    if (text.includes("open my Linked in")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Linked-in";
      texts.appendChild(p);
      console.log("opening Linked-in");
      window.open("https://www.linkedin.com/in/jaydip-patel-755814282/");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();



// ----FUNCTION TO CHANGE THEME----
const changeTheme = (theme) => {
  document.body.classList = ''
  document.body.classList.add(theme)
}

