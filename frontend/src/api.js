// frontend/src/api.js
const API_BASE = "http://localhost:5000/api"; // backend runs on port 5000

export async function registerMember(data) {
  const res = await fetch(`${API_BASE}/members/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginMember(data) {
  const res = await fetch(`${API_BASE}/members/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
