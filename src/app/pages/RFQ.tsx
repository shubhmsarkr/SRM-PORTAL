import { useState } from "react";
import { Plus, X } from "lucide-react";

interface RFQItem {
  id: string;
  name: string;
  category: string;
  status: "open" | "closed" | "awarded";
  deadline: string;
}

const rfqData: RFQItem[] = [
  {
    id: "RFQ-001",
    name: "Office Supplies Q2",
    category: "Stationery",
    status: "open",
    deadline: "2026-05-25",
  },
  {
    id: "RFQ-002",
    name: "IT Equipment",
    category: "Electronics",
    status: "open",
    deadline: "2026-05-22",
  },
  {
    id: "RFQ-003",
    name: "Cleaning Services",
    category: "Services",
    status: "closed",
    deadline: "2026-05-15",
  },
  {
    id: "RFQ-004",
    name: "Raw Materials",
    category: "Manufacturing",
    status: "awarded",
    deadline: "2026-05-10",
  },
];

export default function RFQ() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    description: "",
    deadline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCreateForm(false);
    setFormData({
      name: "",
      category: "",
      quantity: "",
      description: "",
      deadline: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-900">Request for Quotation (RFQ)</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus size={18} />
          Create RFQ
        </button>
      </div>

      {/* RFQ Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-gray-700">ID</th>
              <th className="text-left px-6 py-4 text-gray-700">Name</th>
              <th className="text-left px-6 py-4 text-gray-700">Category</th>
              <th className="text-left px-6 py-4 text-gray-700">Deadline</th>
              <th className="text-left px-6 py-4 text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {rfqData.map((rfq) => (
              <tr
                key={rfq.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-900">{rfq.id}</td>
                <td className="px-6 py-4 text-gray-900">{rfq.name}</td>
                <td className="px-6 py-4 text-gray-600">{rfq.category}</td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(rfq.deadline).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      rfq.status === "open"
                        ? "bg-blue-100 text-blue-700"
                        : rfq.status === "awarded"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {rfq.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create RFQ Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-gray-900">Create New RFQ</h2>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">RFQ Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter RFQ name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Stationery">Stationery</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Services">Services</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter quantity"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Enter description"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Deadline</label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) =>
                    setFormData({ ...formData, deadline: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit RFQ
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
