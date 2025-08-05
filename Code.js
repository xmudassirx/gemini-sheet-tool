/**
 * Adds a row of content strategy data to the sheet.
 * This function is designed to be called by an AI agent.
 */
function addRowToSheet(mainCategory, title, urlSlug, pageType, focusKeywords, secondaryKeywords, intent, llmQuestions, kd, searchVolume) {
  
  // IMPORTANT: Make sure the sheet name here matches the name of your tab in Google Sheets.
  // If your tab is not named 'Sheet1', change it here.
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  
  // If the sheet isn't found, stop and return an error.
  if (!sheet) {
    return "Error: Could not find a sheet named 'Sheet1'. Please check the tab name.";
  }
  
  // This creates the array of data in the correct order for your columns.
  const rowData = [
    mainCategory || 'N/A',
    title || 'N/A',
    urlSlug || 'N/A',
    pageType || 'N/A',
    focusKeywords || 'N/A',
    secondaryKeywords || 'N/A',
    intent || 'N/A',
    llmQuestions || 'N/A',
    kd || 'N/A',
    searchVolume || 'N/A'
  ];
  
  // Append the new row to the sheet.
  sheet.appendRow(rowData);
  
  // Return a success message.
  return `Success: The title '${title}' was added to the sheet.`;
}
