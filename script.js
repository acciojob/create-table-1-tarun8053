function insert_Row() {
  const table = document.getElementById("sampleTable");
 
  // Create new row and two cells
  const newRow = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");

  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);

  // If there is a tbody, insert into its first position.
  const tb = table.tBodies && table.tBodies[0];
  if (tb && tb.rows.length > 0) {
    tb.insertBefore(newRow, tb.rows[0]);
  } else if (tb) {
    // tbody exists but empty
    tb.appendChild(newRow);
  } else {
    // No tbody: insert before first table row
    const firstRow = table.rows[0] || null;
    table.insertBefore(newRow, firstRow);
  }
}
