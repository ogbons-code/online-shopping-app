function onlineShopping() {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const selectItems = document.getElementById("items").value;

  if (firstName === "" || lastName === "" || items === "") {
    alert("Empty request...please drop your request");
  } else {
    const result = document.getElementById("result");
    // console.log(result);

    result.innerHTML = `${firstname.value} ${lastname.value}, ${items.value} are available,Make your choice and call us on +2348130714038 for the price and your delivery`;
  }
}
