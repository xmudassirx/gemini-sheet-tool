// This function will be called by Gemini
function addRowToSheet(item, category, notes) {
  // Check if the input is valid
  if (!item) {
    return 'Error: The "item" field is required.';
  }

  // Get the specific sheet by its name (e.g., "Groceries", "Tasks")
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');

  // Get the current date for a timestamp
  const timestamp = new Date();

  // The data to be added as a new row
  const rowData = [timestamp, item, category || 'N/A', notes || 'N/A'];

  // Append the row to the sheet
  sheet.appendRow(rowData);

  // Return a success message
  return `Successfully added '${item}' to the sheet.`;
}