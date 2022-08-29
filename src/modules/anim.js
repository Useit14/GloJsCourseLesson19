const anim = () => {
  const baloon = document.querySelectorAll(".baloon");
  const needle = document.querySelectorAll(".needle");
  const buttonStart = document.querySelector(".start");
  const buttonReset = document.querySelector(".reset");
  const balArr = [];
  let isStart = false;
  let animId = 0;
  let winNumber = null;
  let predictNumber = "";

  const render = () => {
    balArr.forEach((bal, index) => {
      baloon[index].style.top = bal.top + "px";
      baloon[index].style.left = bal.left + "px";
      baloon[index].style.right = bal.right + "px";
    });
  };
  const init = () => {
    baloon.forEach((bal, index) => {
      const randNumbLeft = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      const randNumbTop = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
      balArr[index] = {
        id: index,
        top: randNumbTop,
        left: randNumbLeft,
        right: bal.getBoundingClientRect().right,
      };
    });
    render();
  };

  const down = () => {
    animId = requestAnimationFrame(down);
    if (!winNumber) {
      balArr.forEach((bal, index) => {
        if (bal.top >= needle[0].getBoundingClientRect().top) {
          winNumber = index;
        }

        balArr[index].top =
          bal.top + 10 * Math.floor(Math.random() * (3 - 2 + 1)) + 2;
      });
      render();
    } else {
      cancelAnimationFrame(animId);
      alert(`${winNumber === predictNumber ? "Вы выйграли" : "Вы проиграли"}`);
    }
  };

  init();
  buttonStart.addEventListener("click", () => {
    isStart = !isStart;
    if (isStart) {
      down();
    } else {
      cancelAnimationFrame(animId);
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      predictNumber = +prompt("Угадайте номер какого шара первый лопнет?", "0");
    }, 300);
  });
  buttonReset.addEventListener("click", () => {
    init();
    isStart = false;
    winNumber = null;
  });
};

export default anim;
