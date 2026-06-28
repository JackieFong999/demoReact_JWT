import { useNavigate } from 'react-router-dom'

export default function Introduction() {
  const navigate = useNavigate()

  return (
    <div className="intro-page">
      <h1 className="intro-title">Introduction</h1>

      <div className="intro-welcome">
        <p><strong>Welcome to Richmond Hill College!</strong></p>
        <p>This system helps you manage students, teachers, classes, and invoices efficiently.</p>
      </div>

      <div className="infoPage">
        <div className="infoHeader">Registration for Dealers in Precious Metals and Stones</div>

        <div className="infoP_Header">Background</div>
        <p style={{ textAlign: 'justify' }}>
          To enhance the regulatory regime for combating money laundering and terrorist financing ("ML/TF") in
          fulfilment of Hong Kong's obligations under the Financial Action Task Force ("FATF"), the Anti-Money
          Laundering and Counter-Terrorist Financing Ordinance ("AMLO") (Cap. 615) has been amended to
          introduce a registration regime for dealers in precious metals and stones for commencement on 1 April 2023.
          The Customs and Excise Department would take charge of the regime to enforce the registration requirements
          and supervise the anti-money laundering and counter-terrorist financing ("AML/CTF") conduct of registrants.
        </p>

        <div className="infoP_Header">Dealer in precious metals and stones</div>
        <p>Any person carries on any of the following activities by way of business —</p>
        <ul style={{ listStyleType: 'lower-alpha' }}>
          <li>trading in (including purchasing and selling), exporting or importing precious metals, precious stones or precious products;</li>
          <li>manufacturing, refining or carrying out any value adding work on precious metals, precious stones or precious products;</li>
          <li>issuing, redeeming or trading in precious-asset backed instruments; or</li>
          <li>acting as an intermediary in respect of any of the activities a, b or c;</li>
        </ul>
        <p>Except the person carries on a logistics service business, only imports or exports precious metals, precious stones or precious products in the ordinary course of that business.</p>

        <div className="infoP_Header">Articles covered in the regulatory regime</div>
        <p>There are four types of articles:</p>
        <ul style={{ listStyleType: 'lower-alpha' }}>
          <li><u>Precious metal</u>: gold, silver, platinum, iridium, osmium, palladium, rhodium or ruthenium, in a manufactured or unmanufactured state;</li>
          <li><u>Precious stone</u>: diamond, sapphire, ruby, emerald, jade or pearl, whether natural or otherwise;</li>
          <li><u>Precious product</u>: any jewellery and watch that is made up of, containing or having attached to it, any precious metal or precious stone, or both;</li>
          <li><u>Precious-asset-backed instrument</u>: means any certificate or instrument backed by one or more precious metals, precious stones or precious products that entitles the holder to such assets (in entirety or in part); but does not include—
            <ul style={{ listStyleType: 'lower-roman' }}>
              <li>any securities, a futures contract, any interest in a collective investment scheme, a structured product or an OTC derivative product as defined by the Securities and Futures Ordinance (Cap 571); or</li>
              <li>a virtual asset.</li>
            </ul>
          </li>
        </ul>

        <hr style={{ border: '3px solid #d4b461' }} />

        <div className="infoP_Header">Two categories of registration</div>
        <p>
          Any person who is seeking to carry on a business of dealing in precious metals and stones in Hong Kong
          and engage in any transaction(s) (whether making or receiving a payment) with total value at or above
          HKD120,000<sup>1</sup> in Hong Kong is required to register with the Commissioner of Customs and Excise.
        </p>
        <p>There are two categories under the registration regime as follows:</p>
        <ul style={{ listStyleType: 'lower-alpha' }}>
          <li>Any dealer who intends to engage in non-cash transaction(s) with total value at or above HKD120,000 in the course of business is required to register as a <b>Category A registrant</b>.</li>
          <li>Any dealer who is seeking to engage in cash transactions with total value at or above HKD120,000 and non-cash transactions with total value at or above HKD120,000 in the course of business is required to register as a <b>Category B registrant</b>. A Category B registrant is subject to AML/CTF supervision.</li>
        </ul>

        <p><small><sup>1</sup>The HKD120,000 threshold includes an equivalent amount in another currency</small></p>

        <div className="infoP_Header">Transitional period</div>
        <p>To facilitate existing dealers migration to the Regime, precious metals and stones dealers who have been in operation before commencement of the Regime are allowed to apply for registration within 9 months after commencement of the Regime (i.e. Apr – Dec 2023). Any person, who would like to start up a precious metals and stones business after commencement of the Regime and plan to carry out specified transactions and/or specified cash transactions, is required to register before carrying out any specified transactions and/or specified cash transactions.</p>

        <div className="infoP_Header">Penalty</div>
        <p>Any person, other than a registrant, carries out a specified transaction or a specified cash transaction, claims to be authorized to carry out a specified transaction or a specified cash transaction, or claims to be a registrant, is liable on conviction to a maximum fine of HK$100,000 and imprisonment for six months.</p>

        <hr style={{ border: '3px solid #d4b461' }} />

        <div className="infoP_Header">Non-Hong Kong Precious Metals and Stones Dealers</div>
        <div>
          A non-Hong Kong precious metals and stones dealer is a person who deals in precious metals and stones in Hong Kong where—
          <ul style={{ listStyleType: 'lower-alpha' }}>
            <li>the person—
              <ul style={{ listStyleType: 'lower-roman' }}>
                <li>either—
                  <ul style={{ listStyleType: 'upper-alpha' }}>
                    <li>is an individual who does not ordinarily reside in Hong Kong; or</li>
                    <li>is a legal person, other than an individual, that is incorporated or established outside Hong Kong and is neither a registered non-Hong Kong company nor a re-domiciled company; and</li>
                  </ul>
                </li>
                <li>does not have a place of business in Hong Kong; and</li>
              </ul>
            </li>
            <li>the total number of days on which the person's precious metals and stones business is carried on in Hong Kong does not exceed 60 days in a calendar year.</li>
          </ul>
        </div>

        <div className="infoP_Header">Obligations of a non-Hong Kong precious metals and stones dealer</div>
        <p>A non-Hong Kong precious metals and stones dealer must file a cash transaction report which shall include travel information and particulars of the dealer and/or the person acting on behalf of the dealer (as appropriate), particulars of the customer and transaction details to the Customs and Excise Department for any specified cash transactions carried out within 1 day after the transaction, or the earliest time when the dealer or the person acting on behalf of the dealer leaves Hong Kong, whichever is earlier.</p>

        <div className="infoP_Header">Penalty</div>
        <p>Any non-Hong Kong precious metals and stones dealer fails to report a specified cash transaction is liable on conviction to a maximum fine of HK$50,000 and imprisonment for three months.</p>
      </div>

      <div className="intro-back-section">
        <button onClick={() => navigate('/')} className="btn-public btn-back">Back to Home</button>
      </div>
    </div>
  )
}
