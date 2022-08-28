const date = () => {
  let idInterval = 0;
  const getTime = () => {
    const date = new Date();
    const dateStop = new Date(`1 January  ${date.getFullYear() + 1}`).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = dateStop - dateNow;
    const daysRemainder =
      Math.floor(timeRemaining / 8.64e7) < 0
        ? "0"
        : Math.floor(timeRemaining / 8.64e7);
    const hours = date.getHours();
    const day = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ][date.getDay()];
    const now = date.toLocaleTimeString("en");

    let timeOfDay = "";
    if (hours < 10) {
      timeOfDay = "утро";
    } else if (hours < 18) {
      timeOfDay = "день";
    } else {
      timeOfDay = "вечер";
    }

    return {
      timeOfDay,
      day,
      now,
      daysRemainder,
    };
  };

  const addTimeInfo = () => {
    const { timeOfDay, day, now, daysRemainder } = getTime();
    const box = document.createElement("div");
    const app = document.querySelector(".app");
    const innHTML = (box.innerHTML = `
    Добрый ${timeOfDay} <br>
    Сегодня: ${day} <br>
    Текущее время: ${now} <br>
    До нового года осталось ${daysRemainder} дней <br>
    `);
    if (app.innerHTML !== "") {
      app.innerHTML = innHTML;
    } else {
      app.append(box);
    }

    if (daysRemainder < 0) {
      clearInterval(idInterval);
    }
  };

  idInterval = setInterval(addTimeInfo, 1000);
};

export default date;
