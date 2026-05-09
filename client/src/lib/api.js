const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

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

export const sendContact = async (contactData) => {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (!res.ok) {
    throw new Error(`Failed to send contact: ${res.status}`);
  }

  return res.json();
};

export const createPortfolioItem = async (itemData) => {
  const res = await fetch(`${API_BASE}/api/portfolio`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  });

  if (!res.ok) {
    throw new Error(`Failed to create portfolio item: ${res.status}`);
  }

  return res.json();
};

export const updatePortfolioItem = async (id, itemData) => {
  const res = await fetch(`${API_BASE}/api/portfolio/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  });

  if (!res.ok) {
    throw new Error(`Failed to update portfolio item: ${res.status}`);
  }

  return res.json();
};

export const deletePortfolioItem = async (id) => {
  const res = await fetch(`${API_BASE}/api/portfolio/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete portfolio item: ${res.status}`);
  }

  return res.ok;
};

