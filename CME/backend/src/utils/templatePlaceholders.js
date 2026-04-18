export const DEFAULT_PLACEHOLDERS = ["{{NAME}}", "{{EVENT}}", "{{DATE}}", "{{CERT_ID}}"];

export const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const normalizePlaceholders = (html = "") => {
  const matches = html.match(/{{[A-Z_]+}}/g) || [];
  return [...new Set([...DEFAULT_PLACEHOLDERS, ...matches])];
};
