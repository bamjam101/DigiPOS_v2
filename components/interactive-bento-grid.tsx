"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChefHat,
  Circle,
  Clock,
  CreditCard,
  Minus,
  Plus,
  QrCode,
  Receipt,
  ShoppingBag,
  Smartphone,
  Timer,
  Trash2,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Glassmorphism styles
const glassCard =
  "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl";
const glassCardDark =
  "bg-gray-900/80 backdrop-blur-md border border-gray-800/50 shadow-xl";

export default function InteractiveBentoGrid() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Restaurant management made simple
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easy process to streamline your operations and enhance your customer
            experience without any hassle.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Billing Card - Dark */}
          <div className="col-span-12 md:col-span-4">
            <CheckoutCard />
          </div>

          {/* Kitchen Display - White */}
          <div className="col-span-12 md:col-span-4">
            <PrepareCard />
          </div>

          {/* Online Ordering - Dark */}
          <div className="col-span-12 md:col-span-4">
            <div className="relative h-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                custom={2}
                className={`${glassCardDark} text-white rounded-xl overflow-hidden max-md:h-[320px] md:h-full relative`}
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="bg-gray-700/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
                    STEP 3
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-orange-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Deliver</h3>
                    <p className="text-gray-300 text-sm max-w-[250px] mx-auto">
                      Deliver your food in the most convenient way for your
                      customers
                    </p>
                    <div className="text-xs text-gray-400 mt-4">
                      Average delivery time: 15-20 minutes
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Analytics Card - White with Chart */}
          <div className="col-span-12 md:col-span-6">
            <AnalyticsCard />
          </div>

          {/* Payment Card - Dark with Icon */}
          <div className="col-span-12 md:col-span-6">
            <PaymentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

// Checkout Card with Interactive Order Management
function CheckoutCard() {
  const [items, setItems] = useState([
    { id: 1, name: "Chicken Burger", price: 12.99, quantity: 1 },
    { id: 2, name: "French Fries", price: 4.99, quantity: 1 },
  ]);
  const [checkoutState, setCheckoutState] = useState<
    "idle" | "processing" | "complete"
  >("idle");

  const addItem = () => {
    const newItems = [
      ...items,
      {
        id: Date.now(),
        name: ["Pizza", "Salad", "Pasta", "Ice Cream", "Soda"][
          Math.floor(Math.random() * 5)
        ],
        price: Number.parseFloat((Math.random() * 10 + 5).toFixed(2)),
        quantity: 1,
      },
    ];
    setItems(newItems);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const getSubtotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTax = () => {
    return getSubtotal() * 0.08;
  };

  const getTotal = () => {
    return getSubtotal() + getTax();
  };

  const handleCheckout = () => {
    setCheckoutState("processing");
    setTimeout(() => {
      setCheckoutState("complete");
      setTimeout(() => {
        setCheckoutState("idle");
        setItems([]);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="relative h-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        custom={0}
        className={`${glassCardDark} text-white rounded-xl overflow-hidden h-full relative p-5`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="uppercase text-xs font-medium text-gray-400 mb-1">
              Step 1
            </div>
            <h3 className="text-2xl font-bold">Checkout</h3>
          </div>
          <Receipt className="h-6 w-6 text-gray-400" />
        </div>

        <AnimatePresence mode="wait">
          {checkoutState === "complete" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center h-[300px]"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Order Complete!</h3>
              <p className="text-gray-400 text-center mb-4">
                Your order has been processed successfully.
              </p>
              <div className="text-2xl font-bold text-green-400">
                ${getTotal().toFixed(2)}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 mb-4 max-h-[240px] overflow-y-auto">
                <div className="text-sm font-medium mb-2">Current Order</div>
                {items.length === 0 ? (
                  <div className="text-gray-500 text-sm text-center py-4">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="space-y-2">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-between bg-gray-700/50 backdrop-blur-sm p-2 rounded"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-xs text-gray-400">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-400 hover:text-white p-1"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-400 hover:text-white p-1"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 p-1 ml-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center py-1">
                  <div className="text-sm text-gray-400">Subtotal</div>
                  <div className="text-sm">${getSubtotal().toFixed(2)}</div>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div className="text-sm text-gray-400">Tax (8%)</div>
                  <div className="text-sm">${getTax().toFixed(2)}</div>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-gray-700 mt-1">
                  <div className="font-bold">Total</div>
                  <div className="font-bold text-lg">
                    ${getTotal().toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={addItem}
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Item
                </Button>
                <Button
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={handleCheckout}
                  disabled={
                    items.length === 0 || checkoutState === "processing"
                  }
                >
                  {checkoutState === "processing" ? (
                    <span className="flex items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="mr-2"
                      >
                        <Clock className="h-4 w-4" />
                      </motion.div>
                      Processing...
                    </span>
                  ) : (
                    "Complete Order"
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Prepare Card with Interactive Kitchen Tasks
function PrepareCard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Prepare order #1234 (Table 5)", completed: true },
    { id: 2, text: "Restock chicken and vegetables", completed: true },
    { id: 3, text: "Update special menu items", completed: false },
    { id: 4, text: "Clean preparation stations", completed: false },
  ]);

  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
        setProgress((prev) => prev + 100 / 180);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timer]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const addTask = () => {
    const newTasks = [
      ...tasks,
      {
        id: Date.now(),
        text: [
          "Check inventory levels",
          "Prepare desserts",
          "Clean kitchen area",
          "Organize refrigerator",
          "Prep ingredients for tomorrow",
        ][Math.floor(Math.random() * 5)],
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const toggleTimer = () => {
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    setTimer(180);
    setProgress(0);
    setTimerActive(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const completionPercentage = (completedTasks / tasks.length) * 100;

  return (
    <div className="relative h-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        custom={1}
        className={`${glassCard} rounded-xl overflow-hidden h-full relative p-5`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="uppercase text-xs font-medium text-gray-500 mb-1">
              Step 2
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Prepare</h3>
          </div>
          <ChefHat className="h-6 w-6 text-gray-400" />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <div className="text-sm font-medium text-gray-700">
              Task Completion
            </div>
            <div className="text-xs text-gray-500">
              {completedTasks} of {tasks.length}
            </div>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>

        <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 mb-4 max-h-[180px] overflow-y-auto">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Kitchen To-do List
          </div>
          <div className="space-y-2">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                className={`flex items-start p-2 rounded cursor-pointer transition-colors ${
                  task.completed ? "bg-green-50" : "bg-gray-50"
                }`}
                onClick={() => toggleTask(task.id)}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {task.completed ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-gray-400" />
                  )}
                </div>
                <div
                  className={`ml-2 text-sm ${
                    task.completed
                      ? "text-gray-500 line-through"
                      : "text-gray-700"
                  }`}
                >
                  {task.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 mb-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Preparation Timer
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl font-bold text-gray-900">
              {formatTime(timer)}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={toggleTimer}
                className={`p-2 rounded-full ${
                  timerActive
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {timerActive ? (
                  <div className="h-4 w-4 rounded bg-red-600"></div>
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={resetTimer}
                className="p-2 rounded-full bg-gray-100 text-gray-600"
              >
                <Timer className="h-4 w-4" />
              </button>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-100"
            onClick={addTask}
          >
            <Plus className="h-4 w-4 mr-1" /> Add Task
          </Button>
          <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
            Mark All Complete
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

// Analytics Card Component with Interactive Tabs and Random Charts
function AnalyticsCard() {
  const [timeRange, setTimeRange] = useState("daily");
  const [chartData, setChartData] = useState<Record<string, any[]>>({
    daily: [],
    weekly: [],
    monthly: [],
  });

  useEffect(() => {
    const generateRandomData = (
      min: number,
      max: number,
      count: number,
      labels: string[]
    ) => {
      return Array.from({ length: count }, (_, i) => ({
        label: labels[i],
        value: Math.floor(Math.random() * (max - min + 1)) + min,
      }));
    };

    const labels = {
      daily: ["8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM"],
      weekly: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      monthly: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    };

    setChartData({
      daily: generateRandomData(30, 90, 7, labels.daily),
      weekly: generateRandomData(100, 220, 7, labels.weekly),
      monthly: generateRandomData(700, 1500, 7, labels.monthly),
    });
  }, [timeRange]); // Added timeRange as a dependency

  const currentData = chartData[timeRange as keyof typeof chartData] || [];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      custom={3}
      className={`${glassCard} rounded-xl overflow-hidden h-full p-6`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="uppercase text-xs font-medium text-gray-500 mb-1">
            Insights
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Analytics</h3>
        </div>
        <BarChart3 className="h-6 w-6 text-gray-400" />
      </div>

      <Tabs
        defaultValue="daily"
        value={timeRange}
        onValueChange={setTimeRange}
        className="mb-6"
      >
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="mt-0">
          <div className="text-sm text-gray-500 mb-2">Today's performance</div>
        </TabsContent>
        <TabsContent value="weekly" className="mt-0">
          <div className="text-sm text-gray-500 mb-2">
            This week's performance
          </div>
        </TabsContent>
        <TabsContent value="monthly" className="mt-0">
          <div className="text-sm text-gray-500 mb-2">
            This month's performance
          </div>
        </TabsContent>
      </Tabs>

      <div className="h-48 w-full">
        <ChartContainer
          config={{
            value: {
              label: "Value",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-full w-full"
        >
          <BarChart
            accessibilityLayer
            data={currentData}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              opacity={0.2}
            />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis hide domain={[0, "dataMax"]} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent formatter={(value) => `$${value}`} />
              }
            />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              fill="var(--color-value)"
              fillOpacity={0.9}
              barSize={30}
            />
          </BarChart>
        </ChartContainer>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3">
          <div className="text-sm text-gray-500">Revenue</div>
          <div className="text-xl font-bold text-gray-900">
            $
            {timeRange === "daily"
              ? "1,250"
              : timeRange === "weekly"
              ? "8,540"
              : "32,450"}
          </div>
          <div className="text-xs text-green-600 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            {timeRange === "daily"
              ? "8.5%"
              : timeRange === "weekly"
              ? "12.3%"
              : "15.7%"}
          </div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3">
          <div className="text-sm text-gray-500">Orders</div>
          <div className="text-xl font-bold text-gray-900">
            {timeRange === "daily"
              ? "48"
              : timeRange === "weekly"
              ? "312"
              : "1,248"}
          </div>
          <div className="text-xs text-green-600 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            {timeRange === "daily"
              ? "5.2%"
              : timeRange === "weekly"
              ? "9.8%"
              : "11.2%"}
          </div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3">
          <div className="text-sm text-gray-500">Avg. Order</div>
          <div className="text-xl font-bold text-gray-900">
            $
            {timeRange === "daily"
              ? "26"
              : timeRange === "weekly"
              ? "27.4"
              : "26.8"}
          </div>
          <div className="text-xs text-red-600 flex items-center mt-1">
            <TrendingDown className="w-3 h-3 mr-1" />
            {timeRange === "daily"
              ? "1.2%"
              : timeRange === "weekly"
              ? "0.8%"
              : "0.5%"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Payment Card Component with Interactive Payment Methods
function PaymentCard() {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success" | "failed"
  >("idle");
  const [showQR, setShowQR] = useState(false);

  const handlePayment = () => {
    if (paymentStatus !== "idle") return;

    setPaymentStatus("processing");
    setTimeout(() => {
      setPaymentStatus("success");
      setTimeout(() => {
        setPaymentStatus("idle");
      }, 3000);
    }, 2000);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      custom={4}
      className={`${glassCardDark} text-white rounded-xl overflow-hidden h-full p-6`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="uppercase text-xs font-medium text-gray-400 mb-1">
            Payments
          </div>
          <h3 className="text-2xl font-bold">Payment Integration</h3>
        </div>
        <CreditCard className="h-6 w-6 text-gray-400" />
      </div>

      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-3">Select Payment Method</div>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => {
              setSelectedMethod("card");
              setShowQR(false);
            }}
            className={`p-3 rounded-lg border ${
              selectedMethod === "card"
                ? "border-indigo-500 bg-gray-800/50"
                : "border-gray-700/50 bg-gray-800/30"
            } flex flex-col items-center transition-all hover:border-indigo-400 backdrop-blur-sm`}
          >
            <CreditCard
              className={`h-6 w-6 mb-1 ${
                selectedMethod === "card" ? "text-indigo-400" : "text-gray-400"
              }`}
            />
            <span className="text-xs">Card</span>
          </button>
          <button
            onClick={() => {
              setSelectedMethod("upi");
              setShowQR(false);
            }}
            className={`p-3 rounded-lg border ${
              selectedMethod === "upi"
                ? "border-indigo-500 bg-gray-800/50"
                : "border-gray-700/50 bg-gray-800/30"
            } flex flex-col items-center transition-all hover:border-indigo-400 backdrop-blur-sm`}
          >
            <Smartphone
              className={`h-6 w-6 mb-1 ${
                selectedMethod === "upi" ? "text-indigo-400" : "text-gray-400"
              }`}
            />
            <span className="text-xs">UPI</span>
          </button>
          <button
            onClick={() => {
              setSelectedMethod("qr");
              setShowQR(true);
            }}
            className={`p-3 rounded-lg border ${
              selectedMethod === "qr"
                ? "border-indigo-500 bg-gray-800/50"
                : "border-gray-700/50 bg-gray-800/30"
            } flex flex-col items-center transition-all hover:border-indigo-400 backdrop-blur-sm`}
          >
            <QrCode
              className={`h-6 w-6 mb-1 ${
                selectedMethod === "qr" ? "text-indigo-400" : "text-gray-400"
              }`}
            />
            <span className="text-xs">QR Code</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 mb-6 h-[180px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          {showQR ? (
            <motion.div
              key="qr"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-4"
            >
              <div className="text-center mb-2">
                <div className="text-sm font-medium mb-1">Scan to Pay</div>
                <div className="text-xs text-gray-400">
                  Use your phone camera to scan
                </div>
              </div>
              <div
                className="bg-white p-3 rounded-lg cursor-pointer"
                onClick={handlePayment}
              >
                <div className="w-[120px] h-[120px] relative">
                  <Image
                    src="/qr-code.png"
                    alt="QR Code"
                    width={120}
                    height={120}
                    className="rounded"
                  />
                  {paymentStatus === "processing" && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Clock className="h-8 w-8 text-white" />
                      </motion.div>
                    </div>
                  )}
                  {paymentStatus === "success" && (
                    <div className="absolute inset-0 bg-green-500/80 flex items-center justify-center rounded">
                      <CheckCircle2 className="h-12 w-12 text-white" />
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                {paymentStatus === "idle" && "Tap QR code to simulate payment"}
                {paymentStatus === "processing" && "Processing payment..."}
                {paymentStatus === "success" && "Payment successful!"}
              </div>
            </motion.div>
          ) : selectedMethod === "card" ? (
            <motion.div
              key="card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <div className="text-sm font-medium mb-3">Card Details</div>
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 mb-3">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs text-gray-400">Credit Card</div>
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-sm font-medium mb-1">
                  **** **** **** 4242
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>John Doe</span>
                  <span>05/25</span>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Amount:</span>
                <span className="font-medium">$45.80</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="upi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <div className="text-sm font-medium mb-3">UPI Payment</div>
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 mb-3">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs text-gray-400">UPI ID</div>
                  <Smartphone className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-sm font-medium mb-3">
                  restaurant@upibank
                </div>
                <div className="bg-gray-700/50 backdrop-blur-sm rounded p-2 text-xs text-center">
                  Tap to pay with your UPI app
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Amount:</span>
                <span className="font-medium">$45.80</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex space-x-3">
        <Button
          variant="outline"
          className="flex-1 border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:text-white backdrop-blur-sm"
        >
          Cancel
        </Button>
        <Button
          className="flex-1 bg-indigo-600/90 hover:bg-indigo-700/90 text-white backdrop-blur-sm"
          onClick={handlePayment}
          disabled={paymentStatus !== "idle"}
        >
          {paymentStatus === "idle" && "Process Payment"}
          {paymentStatus === "processing" && (
            <span className="flex items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="mr-2"
              >
                <Clock className="h-4 w-4" />
              </motion.div>
              Processing...
            </span>
          )}
          {paymentStatus === "success" && (
            <span className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Payment Complete
            </span>
          )}
        </Button>
      </div>
    </motion.div>
  );
}
