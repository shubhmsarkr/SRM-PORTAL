import {
  BarChart,
  Bar,
  LineChart,
  Line,
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
import { TrendingUp, Award, Clock } from "lucide-react";

const supplierRatings = [
  { name: "ABC Industries", rating: 4.5 },
  { name: "XYZ Supplies", rating: 4.0 },
  { name: "Tech Solutions", rating: 4.8 },
  { name: "Global Traders", rating: 3.5 },
  { name: "Prime Vendors", rating: 4.2 },
];

const rfqCompletion = [
  { month: "Jan", completed: 85, total: 100 },
  { month: "Feb", completed: 90, total: 105 },
  { month: "Mar", completed: 78, total: 95 },
  { month: "Apr", completed: 92, total: 100 },
  { month: "May", completed: 88, total: 98 },
];

const deliverySuccess = [
  { name: "On Time", value: 75, color: "#10b981" },
  { name: "Delayed", value: 15, color: "#f59e0b" },
  { name: "Failed", value: 10, color: "#ef4444" },
];

export default function Reports() {
  const avgRating = (
    supplierRatings.reduce((sum, s) => sum + s.rating, 0) /
    supplierRatings.length
  ).toFixed(1);
  const completionRate =
    (rfqCompletion.reduce((sum, r) => sum + r.completed, 0) /
      rfqCompletion.reduce((sum, r) => sum + r.total, 0)) *
    100;
  const onTimeRate = (deliverySuccess[0].value / 100) * 100;

  return (
    <div className="space-y-6">
      <h1 className="text-gray-900">Reports & Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award className="text-yellow-600" size={20} />
            </div>
            <p className="text-gray-600">Avg Supplier Rating</p>
          </div>
          <p className="text-3xl text-gray-900">{avgRating}/5.0</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-blue-600" size={20} />
            </div>
            <p className="text-gray-600">RFQ Completion Rate</p>
          </div>
          <p className="text-3xl text-gray-900">{completionRate.toFixed(0)}%</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="text-green-600" size={20} />
            </div>
            <p className="text-gray-600">On-Time Delivery</p>
          </div>
          <p className="text-3xl text-gray-900">{onTimeRate}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Supplier Ratings */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-4">Supplier Ratings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={supplierRatings}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Bar dataKey="rating" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Delivery Success */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-4">Delivery Success Rate</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deliverySuccess}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {deliverySuccess.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* RFQ Completion Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 lg:col-span-2">
          <h2 className="text-gray-900 mb-4">RFQ Completion Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={rfqCompletion}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="completed"
                stroke="#10b981"
                strokeWidth={2}
                name="Completed"
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Total"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
