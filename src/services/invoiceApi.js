import axios from 'axios'

const API_BASE = '/demoOracleAPI/api/invoices'

export const updateInvoiceCredit = async (invoiceId, creditAmount) => {
  const response = await axios.post(`${API_BASE}/update-credit`, {
    invoiceId,
    creditAmount,
  }, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response.data
}
