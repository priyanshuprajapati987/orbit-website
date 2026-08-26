"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Mail,
  Settings,
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Trash2,
  Eye,
} from "lucide-react";
import Link from "next/link";

interface PreOrder {
  email: string;
  date: string;
  status: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [preorders, setPreorders] = useState<PreOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (status === "authenticated") {
      fetchPreorders();
    }
  }, [status, router]);

  const fetchPreorders = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/preorders");
      const data = await res.json();
      setPreorders(data.preorders || []);
    } catch (error) {
      console.error("Failed to fetch preorders");
    } finally {
      setLoading(false);
    }
  };

  const deletePreorder = async (email: string) => {
    try {
      await fetch("/api/preorders", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      fetchPreorders();
    } catch (error) {
      console.error("Failed to delete preorder");
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const stats = [
    { label: "Total Pre-Orders", value: preorders.length, icon: Users, color: "text-red-400" },
    { label: "Pending", value: preorders.filter((p) => p.status === "pending").length, icon: Clock, color: "text-yellow-400" },
    { label: "Confirmed", value: preorders.filter((p) => p.status === "confirmed").length, icon: CheckCircle, color: "text-green-400" },
    { label: "Conversion Rate", value: preorders.length > 0 ? "12%" : "0%", icon: TrendingUp, color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-zinc-900/50 border-r border-zinc-800 p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
            <span className="text-lg font-black text-white">O</span>
          </div>
          <div>
            <span className="text-lg font-bold text-white">ORBIT</span>
            <span className="text-[10px] block text-zinc-500">Admin Dashboard</span>
          </div>
        </Link>

        {/* Nav Items */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 transition-all"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            href="#preorders"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all"
          >
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Pre-Orders</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium">Messages</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>

        {/* User Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 rounded-xl bg-zinc-800/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white">P</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{session.user?.name}</p>
                <p className="text-xs text-zinc-500 truncate">{session.user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-700/50 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all text-sm"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-zinc-400">Welcome back, {session.user?.name}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-xs text-zinc-500">Last 30 days</span>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Pre-Orders Table */}
        <div id="preorders" className="glass-card rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <div>
              <h2 className="text-xl font-bold text-white">Pre-Orders</h2>
              <p className="text-sm text-zinc-400">Manage your waitlist</p>
            </div>
            <button
              onClick={fetchPreorders}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-zinc-400 mt-4">Loading...</p>
            </div>
          ) : preorders.length === 0 ? (
            <div className="p-12 text-center">
              <AlertCircle className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
              <p className="text-zinc-400 mb-2">No pre-orders yet</p>
              <p className="text-sm text-zinc-500">When users sign up, they will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left p-4 text-sm font-medium text-zinc-400">Email</th>
                    <th className="text-left p-4 text-sm font-medium text-zinc-400">Date</th>
                    <th className="text-left p-4 text-sm font-medium text-zinc-400">Status</th>
                    <th className="text-right p-4 text-sm font-medium text-zinc-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {preorders.map((order) => (
                    <tr key={order.email} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                            <Mail className="w-4 h-4 text-zinc-400" />
                          </div>
                          <span className="text-sm text-white">{order.email}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-zinc-400">
                        {new Date(order.date).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "confirmed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deletePreorder(order.email)}
                            className="p-2 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/" className="glass-card rounded-xl p-6 hover:border-red-500/30 transition-all">
            <h3 className="text-lg font-bold text-white mb-2">View Website</h3>
            <p className="text-sm text-zinc-400">See your live website</p>
          </Link>
          <Link href="/docs" className="glass-card rounded-xl p-6 hover:border-red-500/30 transition-all">
            <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
            <p className="text-sm text-zinc-400">Manage docs content</p>
          </Link>
          <Link href="/docs/api" className="glass-card rounded-xl p-6 hover:border-red-500/30 transition-all">
            <h3 className="text-lg font-bold text-white mb-2">API Reference</h3>
            <p className="text-sm text-zinc-400">View API endpoints</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
