const secondHand = document.querySelector('.second-hand');
function setDate() {
  console.log("hi");
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  const secondDegrees = (seconds / 60 * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

}

setInterval(setDate, 1000);
