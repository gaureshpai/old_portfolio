import React from 'react';

const Introduction = () => {
  return (
    <div>
      <div className="content1">
        <table className="info">
          <tbody> {/* Wrap table rows in tbody */}
            <tr>
              <td className="a1">Name</td>
              <td>Gauresh G Pai</td>
            </tr>
            <tr>
              <td className="a1">Age</td>
              <td>20</td>
            </tr>
            <tr>
              <td className="a1">Date of Birth</td>
              <td>17-January-2004</td>
            </tr>
            <tr>
              <td className="a1">Mailing Address</td>
              <td>Pai Lands, Bhandaribettu, Bypass Road, Bantwal 574211</td>
            </tr>
            <tr>
              <td className="a1">Email Address</td>
              <td>paigauresh@gmail.com</td>
            </tr>
            <tr>
              <td className="a1">Father's Name</td>
              <td>Gurudath Pai</td>
            </tr>
            <tr>
              <td className="a1">Mother's Name</td>
              <td>Gauthami G Pai</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Introduction;
