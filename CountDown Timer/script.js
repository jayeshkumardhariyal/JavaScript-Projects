const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
const updateCount = (deadline) => {
  const currentTime = new Date();
  const timeDifference = deadline - currentTime;

  // claculate days,mins,hours,secs
  let calsecs = Math.floor(timeDifference / 1000) % 60;
  let calmins = Math.floor(timeDifference / 1000 / 60) % 60;
  let calhours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  let caldays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

  secs.textContent = formatTime(calsecs);
  mins.textContent = formatTime(calmins);
  hours.textContent = formatTime(calhours);
  days.textContent = formatTime(caldays);
};
const countDown = (targetDate) => {
  setInterval(() => updateCount(targetDate), 1000);
};
const targetDate = new Date("July 01 2026 7:00");
countDown(targetDate);
