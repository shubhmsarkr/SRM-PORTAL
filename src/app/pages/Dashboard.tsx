import { Users, FileText, ShoppingCart, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const summaryCards = [
  {
    title: "Total Suppliers",
    value: "53",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Pending RFQ",
    value: "6",
    icon: FileText,
    color: "bg-orange-500",
  },
  {
    title: "Active Orders",
    value: "12",
    icon: ShoppingCart,
    color: "bg-green-500",
  },
  {
    title: "Revenue",
    value: "₹20,000",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
];

const recentActivity = [
  { text: "ABC Supplier submitted quotation", time: "2 hours ago" },
  { text: "XYZ order shipped", time: "4 hours ago" },
  { text: "New supplier registered", time: "6 hours ago" },
  { text: "PO-2024-001 approved", time: "1 day ago" },
];

const notifications = [
  { text: "RFQ deadline tomorrow", type: "warning" },
  { text: "Pending supplier approval", type: "info" },
  { text: "Delivery delayed", type: "error" },
  { text: "New quotation received", type: "success" },
];

const rfqData = [
  { month: "Jan", count: 12 },
  { month: "Feb", count: 19 },
  { month: "Mar", count: 15 },
  { month: "Apr", count: 22 },
  { month: "May", count: 18 },
];

const orderStatusData = [
  { name: "Delivered", value: 45, color: "#10b981" },
  { name: "Pending", value: 20, color: "#f59e0b" },
  { name: "Shipped", value: 25, color: "#3b82f6" },
  { name: "Delayed", value: 10, color: "#ef4444" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-gray-900">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${card.color} p-3 rounded-lg mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {card.value}
                </div>
                <div className="text-gray-600 text-sm">{card.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Activity and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-gray-900 text-sm">{activity.text}</p>
                  <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-4">Notifications</h2>
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  notification.type === "warning"
                    ? "bg-orange-50 border border-orange-200"
                    : notification.type === "error"
                    ? "bg-red-50 border border-red-200"
                    : notification.type === "success"
                    ? "bg-green-50 border border-green-200"
                    : "bg-blue-50 border border-blue-200"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    notification.type === "warning"
                      ? "bg-orange-500"
                      : notification.type === "error"
                      ? "bg-red-500"
                      : notification.type === "success"
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                ></div>
                <p className="text-gray-900 text-sm">{notification.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-4">RFQ Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rfqData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-4">Order Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
