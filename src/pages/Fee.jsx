import { useNavigate } from 'react-router-dom'

export default function Fee() {
  const navigate = useNavigate()

  return (
    <div className="fee-page">
      <div className="infoP_Header_Main">Reference Table on Application Fee</div>
      <table className="fee-table">
        <thead>
          <tr className="fee-table-header">
            <th scope="col">Particulars</th>
            <th scope="col">Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fee-td">Application for registration as a Category A registrant</td>
            <td className="fee-td">$260</td>
          </tr>
          <tr>
            <td className="fee-td">Annual fee payable by a Category A registrant under section 53ZUH</td>
            <td className="fee-td">$195</td>
          </tr>
          <tr>
            <td className="fee-td">
              Application for registration
              <ul style={{ listStyleType: 'lower-alpha', marginTop: 5, marginBottom: 0 }}>
                <li>as a category B registrant</li>
                <li>plus for each person who is subject to the fit and proper person test</li>
              </ul>
            </td>
            <td className="fee-td">
              <ul style={{ listStyleType: 'lower-alpha', paddingLeft: 30 }}>
                <li>$1,970</li>
                <li>$650</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="fee-td">
              Application for the renewal of registration
              <ul style={{ listStyleType: 'lower-alpha', marginTop: 5, marginBottom: 0 }}>
                <li>as a category B registrant</li>
                <li>plus for each person who is subject to the fit and proper person test</li>
              </ul>
            </td>
            <td className="fee-td">
              <ul style={{ listStyleType: 'lower-alpha', paddingLeft: 30 }}>
                <li>$1,060</li>
                <li>$650</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="fee-td">Application for an approval to become a Category B registrant's ultimate owner</td>
            <td className="fee-td">$690 for each person in relation to whom the application is made</td>
          </tr>
          <tr>
            <td className="fee-td">Application for an approval to become a Category B registrant's partner</td>
            <td className="fee-td">$690 for each person in relation to whom the application is made</td>
          </tr>
          <tr>
            <td className="fee-td">Application for an approval to become a Category B registrant's director</td>
            <td className="fee-td">$690 for each person in relation to whom the application is made</td>
          </tr>
        </tbody>
      </table>

      <div className="intro-back-section">
        <button onClick={() => navigate('/')} className="btn-public btn-back">Back to Home</button>
      </div>
    </div>
  )
}
