'use client';
// components/common/ChatBot.jsx
import { useState } from "react";
import { Bot, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const questionsAnswers = [
  {
    question: "Platforma haqida ma'lumot bera olasizmi?",
    answer:
      "Edvent - bu onlayn ta'lim platformasi bo‘lib, turli sohalarda sifatli kurslar taklif etadi. Bizning maqsadimiz bilim va ko‘nikmalarni oshirishga yordam berishdir. Mutaxassislikni tanlab tahsil olasiz, kuchli imtihonlar asosida bitirasiz.",
  },
  {
    question: "Kurslar haqida ma'lumot bera olasizmi?",
    answer:
      "Kurslar 3 turga bo'lingan.\n1. **Fundamental kurslar** - boshlang'ich bilimlarni olish uchun.\n2. **Mutaxassislik kurslar** - zamonaviy kasblarni egallashga qaratilgan kurslar.\n3. **Tarif kurslar** - Bir sohaga oid bo'lgan bir nechta mutaxassislik kurslarini o'z ichiga oladi.",
  },
  {
    question: "Ustozlar kimlar?",
    answer:
      "Ustozlarimiz o‘z sohasining tajribali mutaxassislari. Har kurs sahifasida ustoz haqida ma’lumot berilgan.",
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQuestionClick = async (qa) => {
    // Foydalanuvchi savolini qo‘shish
    setMessages((prev) => [...prev, { type: "user", text: qa.question }]);
    setLoading(true);

    // Bot javobini 2 sekunddan so‘ng qo‘shish
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: qa.answer }]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="w-80 bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b bg-indigo-600 text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <h3 className="text-sm font-semibold">Savollar bormi?</h3>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-96 bg-gray-50 flex flex-col">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 text-sm mt-10">
                Savoldan birini tanlang 👇
              </div>
            )}
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                    msg.type === "user"
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-gray-800 self-start mr-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm max-w-[80%] self-start mr-auto italic"
                >
                  Bot javob yozmoqda...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-3 border-t bg-white">
            <div className="flex flex-wrap gap-2">
              {questionsAnswers.map((qa, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(qa)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full transition"
                >
                  {qa.question}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg transition"
        >
          <Bot size={24} />
        </motion.button>
      )}
    </div>
  );
}
