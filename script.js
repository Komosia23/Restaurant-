function sendReservation(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  let message = `Hello, I want to reserve a table.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Date: ${date}%0A
Time: ${time}`;

  window.open(`https://wa.me/254798917694?text=${message}`, "_blank");
}
