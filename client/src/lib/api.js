const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const fetchPortfolio = async () => {
  const res = await fetch(`${API_BASE}/api/portfolio`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to load portfolio: ${res.status}`);
  }

  return res.json();
};

