export default function json2html(data) {
  // Create the opening table tag with the specified data-user attribute
  let tableHTML = '<table data-user="manaswigowni6@gmail.com">';
  
  // Add the table header with the column names (Name, Age, Gender)
  tableHTML += '<thead><tr>';
  tableHTML += '<th>Name</th><th>Age</th><th>Gender</th>';
  tableHTML += '</tr></thead>';
  
  // Add the table body with data from the array of objects
  tableHTML += '<tbody>';
  data.forEach(item => {
    tableHTML += '<tr>';
    tableHTML += `<td>${item.Name}</td><td>${item.Age}</td>`;
    tableHTML += item.Gender ? `<td>${item.Gender}</td>` : ''; // Add Gender if available
    tableHTML += '</tr>';
  });
  tableHTML += '</tbody>';
  
  // Close the table tag
  tableHTML += '</table>';
  
  // Return the final HTML table as a string
  return tableHTML;
}
