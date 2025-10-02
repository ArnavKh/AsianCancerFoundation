import React from 'react'

const BankDetails = () => {
  return (
    <section className="px-4 md:px-20 pb-15 bg-[#583490] text-white md:mb-25 mb-10">

        <h3 className="text-lg md:text-3xl text-[#D2635D] font-semibold mb-6 font-visby">
          Help us save lives. Donate or partner today.
        </h3>

        {/* Bank Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base font-didact">
          <div>
            <h4 className="mb-2 md:text-xl">Bank Details</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-white rounded-lg border border-gray-300 border-collapse">
                <tbody>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300 bg-[#60438f]">
                      Account Name
                    </td>
                    <td className="py-2 px-3 border border-gray-300 bg-[#60438f]">
                      Asian Cancer Foundation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Account No
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      00802560000419
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Account Type
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      Current
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Bank Name
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      HDFC Bank
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Branch
                    </td>
                    <td className="py-2 px-3 border border-gray-300">Worli</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      IFSC Code
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      HDFC0000080
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* International Donors */}
          <div>
            <h4 className="mb-2 md:text-xl">Bank Details (For International Donors)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-white rounded-lg border border-gray-300 border-collapse">
                <tbody>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300 bg-[#60438f]">
                      Account Name
                    </td>
                    <td className="py-2 px-3 border border-gray-300 bg-[#60438f]">
                      Asian Cancer Foundation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Account No
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                    43851259104
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Account Type
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      Current
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Bank Name
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                    SBI Bank
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Branch
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                    New Delhi Main Branch
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      IFSC Code
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                    SBIN0000691
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="pt-15 font-didact text-lg md:text-3xl">
          <p className="mb-8">
            Asia Cancer Foundation is registered & compliant under Indian
            nonprofit & CSR <br></br>guidelines:{" "}
          </p>

          <p>12A Certificate - Yes</p>
          <p>
            80G Certificate - Yes. All donations are eligible for tax exemption
            under Section 80G
          </p>
          <p>
            CSR Compliance Certificate - Yes
          </p>
          <p>
            FCRA Registration - Approved to receive foreign donations
          </p>
          <p>
            Unique Registration Number (URN): AABTA5859LF20210
          </p>
        </div>
      </section>
  )
}

export default BankDetails
