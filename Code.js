/**
 * @customfunction
 * This function adds a new row of content marketing ideas to the active Google Sheet.
 * It is designed to be called by an AI agent (like a Gemini Gem) with structured data.
 */
function addContentIdea(mainCategory, title, urlSlug, pageType, focusKeywords, secondaryKeywords, intent, llmQuestions, kd, searchVolume) {

  // --- CONFIGURATION ---
  // IMPORTANT: Change 'Sheet1' to the exact name of the tab in your spreadsheet where you want to add the data.
  const sheetName = 'Sheet1'; 
  // -------------------

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);

    // If the sheet isn't found, stop and return a helpful error.
    if (!sheet) {
      return `Error: A sheet tab named '${sheetName}' could not be found. Please check the sheetName in the script's CONFIGURATION section.`;
    }

    // This creates the array of data in the correct order for your columns.
    // If a value is not provided by the AI, it will default to 'N/A'.
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

    // Return a clear success message.
    return `Success! The content idea '${title}' has been added to the '${sheetName}' sheet.`;

  } catch (e) {
    // If any other error occurs, log it for debugging and return an error message.
    Logger.log(e);
    return `An error occurred: ${e.message}`;
  }
}
