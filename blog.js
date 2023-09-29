// Get the search input, select element, and table
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');
const table = document.getElementById('myTable');

// Function to filter and display table rows
function filterTable() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  // Loop through the table rows
  const rows = table.getElementsByTagName('tr');
  for (let i = 1; i < rows.length; i++) { // Start from index 1 to skip the header row
    const nameCell = rows[i].getElementsByTagName('td')[0];
    const categoryCell = rows[i].getElementsByTagName('td')[1];
    if (nameCell && categoryCell) {
      const name = nameCell.textContent.toLowerCase();
      const category = categoryCell.textContent.trim();
      
      // Check if the name matches the search term and the category matches the selected category
      const nameMatch = name.includes(searchTerm) || searchTerm === '';
      const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
      
      if (nameMatch && categoryMatch) {
        rows[i].style.display = ''; // Show the row if it matches both criteria
      } else {
        rows[i].style.display = 'none'; // Hide the row if it doesn't match both criteria
      }
    }
  }
}

// Add event listeners to the search input and category filter select element
searchInput.addEventListener('input', filterTable);
categoryFilter.addEventListener('change', filterTable);

// Initially filter the table based on the default values
filterTable();
