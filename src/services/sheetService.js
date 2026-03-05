const SPREADSHEET_ID = '1Tdxx6a3nKK8JmQvL8BwVzJhbFalWcHEAgd07cmt9uG0';

/**
 * Fetches and parses a Google Sheet tab as JSON.
 * @param {string} sheetName - The name of the tab to fetch.
 * @returns {Promise<Array<Object>>} - Array of objects representing the rows.
 */
export async function fetchSheet(sheetName) {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error fetching sheet: ${response.statusText}`);

        const csvData = await response.text();
        return parseCSV(csvData);
    } catch (error) {
        console.error(`SheetService Error (${sheetName}):`, error);
        return [];
    }
}

/**
 * Basic CSV Parser that handles quoted values with commas inside.
 */
function parseCSV(csvText) {
    const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length < 1) return [];

    const headers = parseCSVLine(lines[0]);

    const result = lines.slice(1).map(line => {
        const values = parseCSVLine(line);
        const obj = {};
        headers.forEach((header, index) => {
            // Clean header and value (remove quotes)
            const cleanHeader = header.replace(/^"(.*)"$/, '$1').trim();
            const cleanValue = values[index] ? values[index].replace(/^"(.*)"$/, '$1').trim() : '';
            obj[cleanHeader] = cleanValue;
        });
        return obj;
    });

    return result;
}

function parseCSVLine(line) {
    const result = [];
    let curValue = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
            curValue += char;
        } else if (char === ',' && !inQuotes) {
            result.push(curValue);
            curValue = '';
        } else {
            curValue += char;
        }
    }
    result.push(curValue);
    return result;
}
