/**
 * Google Apps Script — Wedding RSVP to Google Sheet
 *
 * HOW TO SET UP:
 * ──────────────
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 * 2. Name it something like "Wedding RSVPs".
 * 3. In Row 1, add these headers:
 *      A1: Timestamp  |  B1: Name  |  C1: Phone  |  D1: Attending  |  E1: Message
 *
 * 4. Go to Extensions → Apps Script.
 * 5. Delete any existing code, and paste this entire file's contents.
 * 6. Click "Deploy" → "New deployment".
 * 7. Select type: "Web app".
 * 8. Set "Execute as": Me (your Google account).
 * 9. Set "Who has access": Anyone.
 * 10. Click "Deploy" and copy the Web App URL.
 * 11. Paste the URL into your .env.local file as NEXT_PUBLIC_GOOGLE_SCRIPT_URL.
 * 12. Restart your dev server (npm run dev).
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.phone || "",
      data.attending || "",
      data.message || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight (though we use no-cors on the client)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "RSVP endpoint is active" })
  ).setMimeType(ContentService.MimeType.JSON);
}
