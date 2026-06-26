import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateInvoiceCredit } from '../services/invoiceApi'

export default function UpdateInvoiceCredit() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    invoiceId: '',
    creditAmount: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const invoiceId = parseInt(formData.invoiceId, 10)
    const creditAmount = parseFloat(formData.creditAmount)

    if (!invoiceId || isNaN(invoiceId)) {
      setError('Invoice ID is required and must be a number.')
      return
    }
    if (isNaN(creditAmount) || creditAmount < 0) {
      setError('Credit Amount is required and must be a valid number.')
      return
    }

    setSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      const result = await updateInvoiceCredit(invoiceId, creditAmount)
      setSuccess(
        `Invoice #${invoiceId} updated successfully!` +
        (result.message ? ` (${result.message})` : '')
      )
      setFormData({ invoiceId: '', creditAmount: '' })
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      setError(`Failed to update invoice: ${msg}`)
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-container">
      <h2>Update Invoice Credit</h2>
      <p className="text-muted">
        Enter an Invoice ID and Credit Amount to call the stored procedure.
      </p>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="invoice-form">
        <div className="mb-3">
          <label htmlFor="invoiceId" className="form-label">Invoice ID</label>
          <input
            type="number"
            id="invoiceId"
            name="invoiceId"
            className="form-control"
            placeholder="e.g. 1002"
            value={formData.invoiceId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="creditAmount" className="form-label">Credit Amount</label>
          <input
            type="number"
            step="0.01"
            id="creditAmount"
            name="creditAmount"
            className="form-control"
            placeholder="e.g. 129.00"
            value={formData.creditAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-1" role="status" />
                Updating...
              </>
            ) : (
              'Update Credit'
            )}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  )
}
