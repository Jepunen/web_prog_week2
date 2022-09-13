import "./styles.css";

const table = document.getElementById("table");
const submitBtn = document.getElementById("submit-data");
const clearTableBtn = document.getElementById("empty-table");
const imageElement = document.getElementById("input-image");

let usernamesInTable = ["Webmaster", "User123", "AnotherUser222"];

submitBtn.addEventListener("click", () => addRowToTable());
clearTableBtn.addEventListener("click", () => {
  table.innerHTML =
    '<table id="table" style="text-align: left;"><tr><th>Username</th><th>Email</th><th>Address</th><th>Admin</th><th>Image</th></tr></table>';
  usernamesInTable = [];
});

// Help with insertRow: https://www.w3schools.com/jsref/met_table_insertrow.asp
function addRowToTable() {
  let username = document.getElementById("input-username").value;
  let email = document.getElementById("input-email").value;
  let address = document.getElementById("input-address").value;
  let admin = document.getElementById("input-admin");

  if (usernamesInTable.includes(username)) {
    let rowOfUsername = usernamesInTable.indexOf(username);
    console.log(rowOfUsername)
    let usernameRow = document.getElementById("table-row-" + (rowOfUsername + 2));

    usernameRow.cells[0].innerHTML = username;
    usernameRow.cells[1].innerHTML = email;
    usernameRow.cells[2].innerHTML = address;
    usernameRow.cells[3].innerHTML = admin.checked ? "X" : "-";

    if (imageElement.value !== "") {
      let image = document.createElement("img");
      image.src = URL.createObjectURL(imageElement.files[0]);
      image.height = 64;
      image.width = 64;
      usernameRow.cells[4].appendChild(image);
    } else {
      usernameRow.cells[4].innerHTML = "<td></td>";
    }
  } else {
    usernamesInTable.push(username);

    var newRow = table.insertRow(-1);
    var usernameCell = newRow.insertCell();
    var emailCell = newRow.insertCell();
    var AddressCell = newRow.insertCell();
    var AdminCell = newRow.insertCell();
    var imageCell = newRow.insertCell();

    newRow.setAttribute("id", "table-row-" + table.rows.length);
    usernameCell.innerHTML = username;
    emailCell.innerHTML = email;
    AddressCell.innerHTML = address;
    AdminCell.innerHTML = admin.checked ? "X" : "-";

    if (imageElement.value !== "") {
      let image = document.createElement("img");
      image.src = URL.createObjectURL(imageElement.files[0]);
      image.height = 64;
      image.width = 64;
      imageCell.appendChild(image);
    } else {
      imageCell.innerHTML = "<td></td>";
    }
  }
}
