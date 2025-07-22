"use client";

import { useState } from "react";

export default function CommentForm({ postId }: { postId: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/createComment", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, postId }),
    });
    setSubmitted(true);
  };

  return submitted ? (
    <p className="text-green-600">
      Thank you! Your comment is awaiting approval.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        required
        className="border p-2 w-full"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="border p-2 w-full"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Comment"
        required
        className="border p-2 w-full"
        rows={4}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
