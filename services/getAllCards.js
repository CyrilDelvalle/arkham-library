const getAllCards = () => new Promise((resolve) => {
  fetch("https://arkhamdb.com/api/public/cards/")
    .then((response) => response.json())
    .then((data) => {
      data.filter(
        (elem) => elem.url !== "https://arkhamdb.comundefined"
      );
      resolve(data);
    });
});

export default getAllCards;
