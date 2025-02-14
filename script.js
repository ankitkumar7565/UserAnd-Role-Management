document.getElementById("addItemButton").addEventListener("click", addItem);

let grandTotal = 0;

function addItem() {
  const itemName = document.getElementById("itemName").value;
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);
  const itemQuantity = parseInt(document.getElementById("itemQuantity").value);

  if (!itemName || isNaN(itemPrice) || isNaN(itemQuantity)) {
    alert("Please fill out all fields correctly!");
    return;
  }

  const itemTotal = itemPrice * itemQuantity;

  const tableBody = document.getElementById("billingTableBody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${itemName}</td>
    <td>$${itemPrice.toFixed(2)}</td>
    <td>${itemQuantity}</td>
    <td>$${itemTotal.toFixed(2)}</td>
  `;
  tableBody.appendChild(row);

  grandTotal += itemTotal;
  document.getElementById("grandTotal").textContent = `Grand Total: $${grandTotal.toFixed(2)}`;

  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";
  document.getElementById("itemQuantity").value = "";
}
