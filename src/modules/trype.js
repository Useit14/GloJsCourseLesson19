const trype = () => {
  const dataDebouncing = {
    prevCall: 0,
    lastCall: 0,
    idInterval: 0,
  };

  const paragraph = document.querySelector(".paragraph");
  const input = document.querySelector("#input");

  const addText = () => {
    paragraph.textContent = input.value;
  };

  const debouncing = (func, time) => {
    return () => {
      dataDebouncing.prevCall = dataDebouncing.lastCall;
      dataDebouncing.lastCall = Date.now();
      if (
        dataDebouncing.prevCall != 0 &&
        dataDebouncing.lastCall - dataDebouncing.prevCall < time
      ) {
        clearTimeout(dataDebouncing.idInterval);
        dataDebouncing.idInterval = 0;
      }
      dataDebouncing.idInterval = setTimeout(func, time);
    };
  };
  input.addEventListener("input", debouncing(addText, 300));
};
export default trype;
