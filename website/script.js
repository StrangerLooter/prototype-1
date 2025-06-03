function changeBackground() {
  const colors = ["#FFDDC1", "#C1FFD7", "#C1E1FF", "#F1C1FF"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
