import React from "react";

const BiddingRulesPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Bidding Rules & Guidelines
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          For Startups (Users)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Eligibility:</strong> Only startups with registered accounts
            can participate in the bidding process. Ensure all required fields
            like company valuation, equity, reach, and future plans are filled
            out during the registration process.
          </li>
          <li>
            <strong>Valuation Accuracy:</strong> Ensure that the valuation of
            your company is accurate and backed by proper documentation. Any
            misleading information may lead to disqualification from future
            biddings.
          </li>
          <li>
            <strong>Equity Percentage:</strong> Startups must provide a clear
            percentage of equity they are willing to offer in exchange for
            investment. The percentage should be realistic and match your
            valuation.
          </li>
          <li>
            <strong>Market Reach:</strong> Be honest about your market
            reach—whether it is local, national, or global. This will affect the
            decision-making process of potential investors.
          </li>
          <li>
            <strong>Future Plans:</strong> Clearly define your company’s roadmap
            and how you plan to utilize the investments. This will increase the
            likelihood of attracting better bids.
          </li>
          <li>
            <strong>Live Bidding:</strong> You will be able to see live bidding
            during your scheduled time. Once bidding starts, no changes can be
            made to the submitted company information.
          </li>
          <li>
            <strong>Withdrawal:</strong> Startups are allowed to withdraw from
            the bidding at any time before the live bidding starts. However,
            withdrawal after the bidding process begins may lead to penalties.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          For Admins (Investors)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Eligibility:</strong> Only verified admins/investors are
            allowed to bid. Admins are required to register and provide details
            about the companies they represent.
          </li>
          <li>
            <strong>Bidding Criteria:</strong> Bids must be based on company
            valuation, offered equity, market reach, and the company’s future
            plans. Ensure your bid reflects these factors accurately.
          </li>
          <li>
            <strong>Maximum Bids:</strong> Admins may place multiple bids on
            different startups but are limited to one bid per startup to avoid
            monopolizing the process.
          </li>
          <li>
            <strong>Bid Amounts:</strong> Bids must align with the valuation and
            equity offered by the startup. Overly aggressive or under-valued
            bids may be rejected by the platform moderators.
          </li>
          <li>
            <strong>Bid Deadlines:</strong> Admins must submit their bids before
            the scheduled bidding end time. Late bids will not be considered.
          </li>
          <li>
            <strong>Live Bidding:</strong> Admins will have access to live
            bidding windows during the startup's allocated bidding time. Once
            bidding starts, no changes to bids can be made.
          </li>
          <li>
            <strong>Confidentiality:</strong> All information shared during the
            bidding process is confidential and should not be disclosed outside
            the platform.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          General Guidelines
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Platform Security:</strong> Both startups and admins are
            encouraged to keep their login credentials safe and secure. Any
            suspicious activity should be reported immediately.
          </li>
          <li>
            <strong>Fair Bidding:</strong> Any attempt to manipulate the bidding
            process will result in immediate disqualification for both startups
            and admins.
          </li>
          <li>
            <strong>Notifications:</strong> Both startups and admins will
            receive notifications regarding their bidding schedule and reminders
            before the bidding starts.
          </li>
          <li>
            <strong>Feedback System:</strong> After the bidding process ends,
            both startups and admins are encouraged to provide feedback on their
            experience to improve future events.
          </li>
          <li>
            <strong>Dispute Resolution:</strong> Any disputes regarding the
            bidding process will be handled by the platform’s support team.
            Their decision will be final.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BiddingRulesPage;
