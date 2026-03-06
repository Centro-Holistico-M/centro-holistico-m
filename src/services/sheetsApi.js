export const CONTACTO_API = "https://opensheet.elk.sh/1Tdxx6a3nKK8JmQvL8BwVzJhbFaIWcHEAgd07cmt9uG0/Contacto";
export const SERVICIOS_API = "https://opensheet.elk.sh/1Tdxx6a3nKK8JmQvL8BwVzJhbFaIWcHEAgd07cmt9uG0/Servicios";

/**
 * Fetches data from a given API endpoint.
 * @param {string} api - The endpoint URL.
 * @returns {Promise<Array|Object>} - The parsed JSON data.
 */
export async function fetchData(api) {
    try {
        const response = await fetch(api);
        if (!response.ok) throw new Error(`Fetch error: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error(`SheetApi Error (${api}):`, error);
        return [];
    }
}
