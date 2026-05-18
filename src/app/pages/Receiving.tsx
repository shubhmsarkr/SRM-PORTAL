import { useState } from "react";
import { Package } from "lucide-react";

export default function Receiving() {
  const [formData, setFormData] = useState({
    orderId: "",
    receivedQuantity: "",
    damagedQuantity: "",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      orderId: "",
      receivedQuantity: "",
      damagedQuantity: "",
      remarks: "",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-gray-900">Goods Receiving</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Receiving Form */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="text-blue-600" size={24} />
            </div>
            <h2 className="text-gray-900">Record Receipt</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Order ID</label>
              <select
                value={formData.orderId}
                onChange={(e) =>
                  setFormData({ ...formData, orderId: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Order</option>
                <option value="PO-2024-001">PO-2024-001 - ABC Industries</option>
                <option value="PO-2024-002">PO-2024-002 - XYZ Supplies</option>
                <option value="PO-2024-003">
                  PO-2024-003 - Tech Solutions Ltd
                </option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Received Quantity
              </label>
              <input
                type="number"
                value={formData.receivedQuantity}
                onChange={(e) =>
                  setFormData({ ...formData, receivedQuantity: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter quantity received"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Damaged Quantity
              </label>
              <input
                type="number"
                value={formData.damagedQuantity}
                onChange={(e) =>
                  setFormData({ ...formData, damagedQuantity: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter damaged quantity"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Remarks</label>
              <textarea
                value={formData.remarks}
                onChange={(e) =>
                  setFormData({ ...formData, remarks: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Enter any remarks or notes"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Receipt
            </button>
          </form>
        </div>

        {/* Recent Receipts */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-6">Recent Receipts</h2>
          <div className="space-y-4">
            {[
              {
                id: "PO-2024-001",
                supplier: "ABC Industries",
                qty: 100,
                damaged: 2,
                date: "2026-05-17",
              },
              {
                id: "PO-2024-005",
                supplier: "Prime Vendors",
                qty: 75,
                damaged: 0,
                date: "2026-05-16",
              },
              {
                id: "PO-2024-003",
                supplier: "Tech Solutions Ltd",
                qty: 50,
                damaged: 1,
                date: "2026-05-15",
              },
            ].map((receipt, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-gray-900">{receipt.id}</p>
                    <p className="text-sm text-gray-600">{receipt.supplier}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(receipt.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex gap-4 mt-3 text-sm">
                  <div>
                    <span className="text-gray-600">Received: </span>
                    <span className="text-gray-900">{receipt.qty}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Damaged: </span>
                    <span
                      className={
                        receipt.damaged > 0 ? "text-red-600" : "text-green-600"
                      }
                    >
                      {receipt.damaged}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
