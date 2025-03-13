"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
const TickectForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;

  const router = useRouter();

  // handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Error creating ticket");
      } else {
        router.push("/");
        router.refresh();
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Error creating ticket");
      } else {
        router.push("/");
        router.refresh();
      }
    }
  };

  // default state
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="rounded-xl p-4 flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl">
          {EDITMODE ? "Update" : " Create"} your ticket
        </h3>
        <label className="mt-4">Title</label>
        <input
          id="title"
          name="title"
          className="m-1 rounded bg-[#47566a] p-1 outline-none"
          onChange={handleChange}
          required={true}
          value={formData.title}
          type="text"
        />

        <label className="mt-4">Description</label>
        <textarea
          id="description"
          name="description"
          className="m-1 rounded bg-[#47566a] p-1 outline-none"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label className="mt-4">Description</label>
        <select
          name="category"
          id=""
          onChange={handleChange}
          className="m-1 rounded bg-[#47566a] p-1 outline-none"
          type="select"
          value={formData.category}
        >
          <option value="Hardware problem">Hardware problem</option>
          <option value="Software problem">Software problem</option>
          <option value="Project">Project</option>
        </select>

        <label className="mt-4">Priority</label>
        <div>
          <input
            onChange={handleChange}
            id="priority-1"
            name="priority"
            type="radio"
            value={1}
            checked={formData.priority == 1}
          />
          <label className="mr-2">1</label>

          <input
            onChange={handleChange}
            id="priority-2"
            name="priority"
            type="radio"
            value={2}
            checked={formData.priority == 2}
          />
          <label className="mr-2">2</label>

          <input
            onChange={handleChange}
            id="priority-3"
            name="priority"
            type="radio"
            value={3}
            checked={formData.priority == 3}
          />
          <label className="mr-2">3</label>

          <input
            onChange={handleChange}
            id="priority-4"
            name="priority"
            type="radio"
            value={4}
            checked={formData.priority == 4}
          />
          <label className="mr-2">4</label>

          <input
            onChange={handleChange}
            id="priority-5"
            name="priority"
            type="radio"
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChange}
          className="m-1 rounded bg-[#47566a] p-1 outline-none"
          type="select"
          value={formData.status}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="hover: no-underline bg-[#009fff] hover:[#009fff] text-[#18222f] tracking-wider w-full text-center font-bold uppercase cursor-pointer px-4 py-2 rounded transition-colors block;"
          value={EDITMODE ? `Update Ticket` : `Create Ticket`}
        />
      </form>
    </div>
  );
};

export default TickectForm;
