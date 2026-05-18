interface Order {
  id: string;
  supplier: string;
  amount: number;
  status: "delivered" | "pending" | "shipped" | "delayed";
  date: string;
}

const ordersData: Order[] = [
  {
    id: "PO-2024-001",
    supplier: "ABC Industries",
    amount: 25000,
    status: "delivered",
    date: "2026-05-10",
  },
  {
    id: "PO-2024-002",
    supplier: "XYZ Supplies",
    amount: 18500,
    status: "shipped",
    date: "2026-05-15",
  },
  {
    id: "PO-2024-003",
    supplier: "Tech Solutions Ltd",
    amount: 32000,
    status: "pending",
    date: "2026-05-16",
  },
  {
    id: "PO-2024-004",
    supplier: "Global Traders",
    amount: 15000,
    status: "delayed",
    date: "2026-05-12",
  },
  {
    id: "PO-2024-005",
    supplier: "Prime Vendors",
    amount: 28000,
    status: "delivered",
    date: "2026-05-08",
  },
  {
    id: "PO-2024-006",
    supplier: "ABC Industries",
    amount: 21000,
    status: "shipped",
    date: "2026-05-17",
  },
];

const statusConfig = {
  delivered: { bg: "bg-green-100", text: "text-green-700", label: "Delivered" },
  pending: { bg: "bg-orange-100", text: "text-orange-700", label: "Pending" },
  shipped: { bg: "bg-blue-100", text: "text-blue-700", label: "Shipped" },
  delayed: { bg: "bg-red-100", text: "text-red-700", label: "Delayed" },
};

export default function Orders() {
  const totalOrders = ordersData.length;
  const totalAmount = ordersData.reduce((sum, order) => sum + order.amount, 0);
  const deliveredCount = ordersData.filter(
    (o) => o.status === "delivered"
  ).length;

  return (
    <div className="space-y-6">
      <h1 className="text-gray-900">Purchase Orders</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-2">Total Orders</p>
          <p className="text-3xl text-gray-900">{totalOrders}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-2">Total Amount</p>
          <p className="text-3xl text-gray-900">₹{totalAmount.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-2">Delivered</p>
          <p className="text-3xl text-gray-900">
            {deliveredCount}/{totalOrders}
          </p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-gray-700">PO ID</th>
              <th className="text-left px-6 py-4 text-gray-700">Supplier</th>
              <th className="text-left px-6 py-4 text-gray-700">Amount</th>
              <th className="text-left px-6 py-4 text-gray-700">Date</th>
              <th className="text-left px-6 py-4 text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => {
              const config = statusConfig[order.status];
              return (
                <tr
                  key={order.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-900">{order.supplier}</td>
                  <td className="px-6 py-4 text-gray-900">
                    ₹{order.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${config.bg} ${config.text}`}
                    >
                      {config.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
