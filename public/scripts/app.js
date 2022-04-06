// img preview
function showPreview(event) {
  if (event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("file-ip");
    preview.src = src;
    preview.style.display = "block";
  }
}

// layout changer
const buttons = document.querySelectorAll(".layout-changer div button");
const section = document.querySelector("main:first-of-type section");
const a = document.querySelectorAll("main:first-of-type section a");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    section.classList = button.value;

    a.forEach((a) => {
      a.classList = button.value;
    });
  });
});
