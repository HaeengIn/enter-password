function checkInput() {
  const input = document
    .getElementById("passwordInput")
    .value.trim()
    .toLowerCase();

  const message = document.getElementById("message");
  const passwordInput = document.getElementById("passwordInput");

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

document
  .getElementById("passwordInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkInput();
    }
  });
