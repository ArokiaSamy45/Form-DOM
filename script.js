function handleSubmit() {
  // prevent the form from submitting
  event.preventDefault();

  // get the input values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const gender = document.querySelector('input[name="gender"]:checked').title;

  // create a new table row
  const tableBody = document.getElementById('table-body');
  const newRow = tableBody.insertRow(-1);

  // insert cells in the new row and add the input values
  const firstNameCell = newRow.insertCell(0);
  firstNameCell.innerHTML = firstName;

  const lastNameCell = newRow.insertCell(1);
  lastNameCell.innerHTML = lastName;

  const genderCell = newRow.insertCell(2);
  genderCell.innerHTML = gender;

  const addressCell = newRow.insertCell(3);
  addressCell.innerHTML = address;

  const pincodeCell = newRow.insertCell(4);
  pincodeCell.innerHTML = pincode;

  // clear the form inputs
  document.getElementById('form').reset();
}

