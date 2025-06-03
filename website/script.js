function changeBackground() {
  const bgColors = ["#FFDDC1", "#C1FFD7", "#C1E1FF", "#F1C1FF"];
  const btnColors = ["#FF5733", "#33B5E5", "#4CAF50", "#FFC107"];

  const randomIndex = Math.floor(Math.random() * bgColors.length);

  document.body.style.backgroundColor = bgColors[randomIndex];
  const button = document.querySelector("button");
  button.style.backgroundColor = btnColors[randomIndex];
}
