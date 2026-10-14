// Link CSS file
const link = document.createElement("link");

link.rel = "stylesheet";
link.href = "/static/css/style.css";

document.head.appendChild(link);

// Main container
const newDiv = document.createElement("div");

newDiv.id = "container";
newDiv.className = "container";

document.body.appendChild(newDiv);

// Title message
const h1 = document.createElement("h1");
const mainDiv = document.getElementById("container");

h1.id = "message";
h1.textContent = "Enter password.";

mainDiv.appendChild(h1);

// Text input box
const input = document.createElement("input");

input.id = "input";
input.type = "text";
input.placeholder = "Do not enter your REAL password!";
input.autocomplete = "off";

mainDiv.appendChild(input);

// Submit button
const button = document.createElement("button");

button.id = "button";
button.type = "button";
button.textContent = "Submit";

function checkInput() {
  const input = document.getElementById("input").value.trim().toLowerCase();
  const message = document.getElementById("message");
  const passwordInput = document.getElementById("input");

  if (input === "password") {
    message.textContent = "Password is incorrect";
    message.className = "error";
    passwordInput.value = "";
  } else if (input === "incorrect") {
    message.textContent = "Try again";
    message.className = "error";
    passwordInput.value = "";
  } else if (input === "again") {
    document.body.innerHTML = `
                <video id="video" autoplay playsinline>
                    <source
                        src="/static/video.mp4"
                        type="video/mp4">
                </video>
            `;

    const video = document.getElementById("video");

    video.play().catch((err) => {
      console.log("Autoplay blocked:", err);
    });
  }
}

button.addEventListener("click", checkInput);

document.getElementById("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkInput();
  }
});

mainDiv.appendChild(button);
