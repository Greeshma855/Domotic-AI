import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  Home,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = ({ isExpanded, onLogout }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Home, label: "Smart Home", href: "/dashboard", active: true },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ width: isExpanded ? "16rem" : "4rem" }}
      className="fixed top-0 left-0 h-screen shadow-lg bg-white/80 backdrop-blur-sm border-r border-white/20"
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="p-4 flex items-center justify-between">
            <motion.div
              initial={false}
              animate={{ gap: isExpanded ? "0.5rem" : "0" }}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">D</span>
              </div>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="font-semibold text-lg bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
                >
                  DomoticAI
                </motion.span>
              )}
            </motion.div>
          </div>

          <div className="flex-1">
            <div className={`p-4 ${isExpanded ? "" : "flex flex-col items-center"}`}>
              {isExpanded && (
                <div className="text-xs font-semibold text-gray-400 uppercase mb-4">
                  Menu
                </div>
              )}
              <nav className="space-y-1 w-full">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.href);
                    }}
                    className={`flex items-center ${
                      isExpanded ? "space-x-2" : "justify-center"
                    } px-3 py-2 rounded-lg text-sm ${
                      item.active
                        ? "bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700"
                        : "text-gray-600 hover:bg-gray-50"
                    } transition-all duration-300`}
                    title={!isExpanded ? item.label : undefined}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5" />
                    {isExpanded && <span>{item.label}</span>}
                  </motion.a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className={`p-4 border-t ${isExpanded ? "" : "flex justify-center"}`}>
          <motion.button
            onClick={onLogout}
            className={`flex items-center ${
              isExpanded ? "space-x-2 w-full" : ""
            } px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-all duration-300`}
            title={!isExpanded ? "Logout" : undefined}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="w-5 h-5" />
            {isExpanded && <span>Logout</span>}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;