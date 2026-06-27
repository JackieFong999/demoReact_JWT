import api from './axios'

const API_BASE = '/api/invoices'

export const updateInvoiceCredit = async (invoiceId, creditAmount) => {
  const response = await api.post(`${API_BASE}/update-credit`, {
    invoiceId,
    creditAmount,
  })
  return response.data
}
