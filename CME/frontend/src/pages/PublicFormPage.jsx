import { useEffect, useState } from "react";
import { apiClient } from "../api/client.js";
import SectionCard from "../components/SectionCard.jsx";

export default function PublicFormPage() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", eventId: "" });
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  useEffect(() => {
    apiClient
      .get("/events")
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        setStatus((current) => ({ ...current, error: error.message }));
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const data = await apiClient.post("/submit", form);
      setStatus({ loading: false, error: "", success: data.message });
      setForm({ name: "", email: "", eventId: "" });
    } catch (error) {
      setStatus({ loading: false, error: error.message, success: "" });
    }
  };

  return (
    <div className="page-grid">
      <SectionCard
        title="Attendee Certificate Request"
        subtitle="Register for your event and receive a personalized CME certificate by email."
      >
        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              placeholder="Dr. Jane Smith"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              placeholder="jane@example.com"
              required
            />
          </label>

          <label>
            <span>Event</span>
            <select
              value={form.eventId}
              onChange={(event) => setForm((current) => ({ ...current, eventId: event.target.value }))}
              required
            >
              <option value="">Select an event</option>
              {events.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.eventName} | {new Date(item.date).toLocaleDateString()}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" disabled={status.loading}>
            {status.loading ? "Submitting..." : "Send Certificate"}
          </button>
        </form>

        {status.error ? <p className="feedback error">{status.error}</p> : null}
        {status.success ? <p className="feedback success">{status.success}</p> : null}
      </SectionCard>
    </div>
  );
}
