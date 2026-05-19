import { useState } from "react";
import { Search, Star, Check, X } from "lucide-react";

interface Supplier {
  id: number;
  company: string;
  email: string;
  phone: string;
  address: string;
  rating: number;
  status: "approved" | "pending";
}

const suppliersData: Supplier[] = [
  {
    id: 1,
    company: "ABC Industries",
    email: "contact@abc.com",
    phone: "+91 98765 43210",
    address: "123 Main St, Mumbai",
    rating: 4.5,
    status: "approved",
  },
  {
    id: 2,
    company: "XYZ Supplies",
    email: "info@xyz.com",
    phone: "+91 98765 43211",
    address: "456 Park Ave, Delhi",
    rating: 4.0,
    status: "approved",
  },
  {
    id: 3,
    company: "Tech Solutions Ltd",
    email: "sales@techsol.com",
    phone: "+91 98765 43212",
    address: "789 Tech Park, Bangalore",
    rating: 4.8,
    status: "pending",
  },
  {
    id: 4,
    company: "Global Traders",
    email: "contact@global.com",
    phone: "+91 98765 43213",
    address: "321 Market Road, Chennai",
    rating: 3.5,
    status: "approved",
  },
  {
    id: 5,
    company: "Prime Vendors",
    email: "support@prime.com",
    phone: "+91 98765 43214",
    address: "654 Business District, Pune",
    rating: 4.2,
    status: "pending",
  },
];

export default function Suppliers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "approved" | "pending">("all");
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(
    null
  );

  const filteredSuppliers = suppliersData.filter((supplier) => {
    const matchesSearch =
      supplier.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" || supplier.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-900">Supplier Management</h1>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 items-center">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search suppliers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2.5 rounded-lg transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("approved")}
            className={`px-4 py-2.5 rounded-lg transition-colors ${
              filter === "approved"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2.5 rounded-lg transition-colors ${
              filter === "pending"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            Pending
          </button>
        </div>
      </div>

      {/* Suppliers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-gray-700">Company</th>
              <th className="text-left px-6 py-4 text-gray-700">Email</th>
              <th className="text-left px-6 py-4 text-gray-700">Rating</th>
              <th className="text-left px-6 py-4 text-gray-700">Status</th>
              <th className="text-left px-6 py-4 text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.map((supplier) => (
              <tr
                key={supplier.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-900">{supplier.company}</td>
                <td className="px-6 py-4 text-gray-600">{supplier.email}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(supplier.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">
                      {supplier.rating}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      supplier.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {supplier.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedSupplier(supplier)}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Supplier Detail Modal */}
      {selectedSupplier && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-gray-900">Supplier Details</h2>
              <button
                onClick={() => setSelectedSupplier(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  {selectedSupplier.company.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Company Name</p>
                <p className="text-gray-900">{selectedSupplier.company}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-gray-900">{selectedSupplier.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-gray-900">{selectedSupplier.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="text-gray-900">{selectedSupplier.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Rating</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.floor(selectedSupplier.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-gray-900">
                    {selectedSupplier.rating}
                  </span>
                </div>
              </div>
            </div>

            {selectedSupplier.status === "pending" && (
              <div className="flex gap-3">
                <button className="flex-1 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <Check size={18} />
                  Approve
                </button>
                <button className="flex-1 bg-red-600 text-white px-4 py-2.5 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <X size={18} />
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
