module.exports = ({ email, paymentId, flightName, flightFrom, flightTo, departingDate, returningDate, totalPrice, paymentTime }) => {
    const today = new Date();
    return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Poppins', 'sans-serif',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 20px;
             line-height: 25px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><h1>MEDIA <span style=${{color: '#00BFA6'}}>TRAVEL</span> AGENCY</h1></td>
                            <td>
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Customer Email: ${email}
                            </td>
                            <td>
                               Payment number: ${paymentId}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Flight Name:</td>
                   <td>${flightName}</td>
                </tr>
                <tr class="item">
                   <td>Flight From</td>
                   <td>${flightFrom}</td>
                </tr>
                <tr class="item">
                   <td>flight To:</td>
                   <td>${flightTo}</td>
                </tr>
                <tr class="item">
                    <td>Booking Data:</td>
                    <td>${departingDate}</td>
                </tr>
                <tr class="item">
                    <td>Return Data:</td>
                    <td>${returningDate}</td>
                 </tr>
                <tr class="item">
                    <td>Total Price:</td>
                    <td>$ ${totalPrice}</td>
                </tr>
                <tr class="item">
                    <td>Payment Time:</td>
                    <td>${paymentTime}</td>
                </tr>
             </table>
          </div>
       </body>
    </html>
    `;
};