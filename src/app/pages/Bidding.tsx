import { Star, Award } from "lucide-react";

interface Quotation {
  supplier: string;
  price: number;
  deliveryDays: number;
  rating: number;
}

const quotations: Quotation[] = [
  {
    supplier: "ABC Industries",
    price: 25000,
    deliveryDays: 5,
    rating: 4.5,
  },
  {
    supplier: "XYZ Supplies",
    price: 23500,
    deliveryDays: 7,
    rating: 4.0,
  },
  {
    supplier: "Tech Solutions Ltd",
    price: 24000,
    deliveryDays: 4,
    rating: 4.8,
  },
  {
    supplier: "Global Traders",
    price: 26000,
    deliveryDays: 6,
    rating: 3.5,
  },
];

export default function Bidding() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-gray-900">Bidding & Quotations</h1>
          <p className="text-gray-600 mt-1">RFQ-001: Office Supplies Q2</p>
        </div>
      </div>

      {/* Quotation Comparison Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-gray-900">Quotation Comparison</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-gray-700">Supplier</th>
              <th className="text-left px-6 py-4 text-gray-700">Price</th>
              <th className="text-left px-6 py-4 text-gray-700">
                Delivery Days
              </th>
              <th className="text-left px-6 py-4 text-gray-700">Rating</th>
              <th className="text-left px-6 py-4 text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {quotations
              .sort((a, b) => a.price - b.price)
              .map((quote, index) => (
                <tr
                  key={quote.supplier}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index === 0 ? "bg-green-50" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900">{quote.supplier}</span>
                      {index === 0 && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                          Best Price
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    ₹{quote.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {quote.deliveryDays} days
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(quote.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-600">
                        {quote.rating}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Award size={16} />
                      Select Winner
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-2">Lowest Bid</p>
          <p className="text-2xl text-gray-900">
            ₹{Math.min(...quotations.map((q) => q.price)).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-2">Average Bid</p>
          <p className="text-2xl text-gray-900">
            ₹
            {(
              quotations.reduce((sum, q) => sum + q.price, 0) /
              quotations.length
            ).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-2">Total Bids</p>
          <p className="text-2xl text-gray-900">{quotations.length}</p>
        </div>
      </div>
    </div>
  );
}
