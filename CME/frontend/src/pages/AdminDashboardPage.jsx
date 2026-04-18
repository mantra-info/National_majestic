import { useEffect, useState } from "react";
import { apiClient } from "../api/client.js";
import SectionCard from "../components/SectionCard.jsx";

const initialEventForm = {
  eventName: "",
  eventType: "",
  date: ""
};

export default function AdminDashboardPage() {
  const [events, setEvents] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [filters, setFilters] = useState({ event: "", search: "" });
  const [eventForm, setEventForm] = useState(initialEventForm);
  const [templateForm, setTemplateForm] = useState({
    eventId: "",
    html: "",
    templateFile: null,
    signatureFile: null
  });
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const loadEvents = async () => {
    const data = await apiClient.get("/admin/events");
    setEvents(data);
  };

  const loadSubmissions = async () => {
    const query = new URLSearchParams();
    if (filters.event) query.set("event", filters.event);
    if (filters.search) query.set("search", filters.search);
    const data = await apiClient.get(`/admin/submissions?${query.toString()}`);
    setSubmissions(data);
  };

  useEffect(() => {
    Promise.all([loadEvents(), loadSubmissions()]).catch((requestError) => {
      setError(requestError.message);
    });
  }, []);

  useEffect(() => {
    loadSubmissions().catch((requestError) => setError(requestError.message));
  }, [filters.event, filters.search]);

  const createEvent = async (event) => {
    event.preventDefault();
    setError("");
    setFeedback("");

    try {
      await apiClient.post("/admin/events", eventForm);
      setEventForm(initialEventForm);
      setFeedback("Event created successfully.");
      await loadEvents();
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  const saveTemplate = async (event) => {
    event.preventDefault();
    setError("");
    setFeedback("");

    const formData = new FormData();
    formData.append("eventId", templateForm.eventId);
    if (templateForm.html.trim()) {
      formData.append("html", templateForm.html);
    }
    if (templateForm.templateFile) {
      formData.append("template", templateForm.templateFile);
    }
    if (templateForm.signatureFile) {
      formData.append("signature", templateForm.signatureFile);
    }

    try {
      await apiClient.post("/admin/templates", formData, true);
      setTemplateForm({ eventId: "", html: "", templateFile: null, signatureFile: null });
      setFeedback("Template and signature saved successfully.");
      await loadEvents();
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  const resendCertificate = async (submissionId) => {
    setError("");
    setFeedback("");

    try {
      await apiClient.post("/admin/resend", { submissionId });
      setFeedback("Certificate resent successfully.");
      await loadSubmissions();
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  return (
    <div className="page-grid admin-grid">
      <SectionCard
        title="Event Management"
        subtitle="Create CME events that will receive dedicated templates and signatures."
      >
        <form className="form-grid compact" onSubmit={createEvent}>
          <label>
            <span>Event Name</span>
            <input
              value={eventForm.eventName}
              onChange={(event) =>
                setEventForm((current) => ({ ...current, eventName: event.target.value }))
              }
              required
            />
          </label>
          <label>
            <span>Event Type</span>
            <input
              value={eventForm.eventType}
              onChange={(event) =>
                setEventForm((current) => ({ ...current, eventType: event.target.value }))
              }
              required
            />
          </label>
          <label>
            <span>Date</span>
            <input
              type="date"
              value={eventForm.date}
              onChange={(event) => setEventForm((current) => ({ ...current, date: event.target.value }))}
              required
            />
          </label>
          <button type="submit">Create Event</button>
        </form>
      </SectionCard>

      <SectionCard
        title="Template Studio"
        subtitle="Upload HTML files or paste HTML directly. Signatures are stored per event."
      >
        <form className="form-grid" onSubmit={saveTemplate}>
          <label>
            <span>Event</span>
            <select
              value={templateForm.eventId}
              onChange={(event) =>
                setTemplateForm((current) => ({ ...current, eventId: event.target.value }))
              }
              required
            >
              <option value="">Select an event</option>
              {events.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.eventName}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>HTML Template</span>
            <textarea
              rows="10"
              value={templateForm.html}
              onChange={(event) =>
                setTemplateForm((current) => ({ ...current, html: event.target.value }))
              }
              placeholder={`<html><body><h1>Certificate of Participation</h1><p>This certifies {{NAME}}</p><p>{{EVENT}}</p><p>{{DATE}}</p><p>ID: {{CERT_ID}}</p></body></html>`}
            />
          </label>
          <label>
            <span>Template File</span>
            <input
              type="file"
              accept=".html,text/html"
              onChange={(event) =>
                setTemplateForm((current) => ({ ...current, templateFile: event.target.files?.[0] || null }))
              }
            />
          </label>
          <label>
            <span>Signature Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                setTemplateForm((current) => ({ ...current, signatureFile: event.target.files?.[0] || null }))
              }
            />
          </label>
          <button type="submit">Save Template</button>
        </form>
      </SectionCard>

      <SectionCard
        title="Submission Dashboard"
        subtitle="Search attendees, filter by event, resend emails, and download generated certificates."
      >
        <div className="toolbar">
          <label>
            <span>Filter Event</span>
            <select
              value={filters.event}
              onChange={(event) => setFilters((current) => ({ ...current, event: event.target.value }))}
            >
              <option value="">All events</option>
              {events.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.eventName}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Search</span>
            <input
              value={filters.search}
              onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))}
              placeholder="Name or email"
            />
          </label>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Event</th>
                <th>Status</th>
                <th>Certificate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission._id}>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td>{submission.event?.eventName || "-"}</td>
                  <td>
                    <span className={`status-pill ${submission.status}`}>{submission.status}</span>
                  </td>
                  <td>
                    {submission.certificateUrl ? (
                      <a href={submission.certificateUrl} target="_blank" rel="noreferrer">
                        Download
                      </a>
                    ) : (
                      "Pending"
                    )}
                  </td>
                  <td>
                    <button type="button" className="ghost-button" onClick={() => resendCertificate(submission._id)}>
                      Resend
                    </button>
                  </td>
                </tr>
              ))}
              {!submissions.length ? (
                <tr>
                  <td colSpan="6" className="empty-state">
                    No submissions found for the current filters.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {error ? <p className="feedback error">{error}</p> : null}
      {feedback ? <p className="feedback success">{feedback}</p> : null}
    </div>
  );
}
