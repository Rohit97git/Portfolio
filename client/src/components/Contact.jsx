import { useState } from "react";
import api from "../api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/messages", form);
      console.log(res.data);
      alert("Message sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={sendMessage} className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="email"
        placeholder="Your email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="border p-2 w-full"
      />

      <button className="bg-blue-600 text-white px-4 py-2">Send</button>
    </form>
  );
}
