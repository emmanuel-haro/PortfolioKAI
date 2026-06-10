exports.errorHandler = (err, _req, res, _next) => {
  if (err?.message?.startsWith("CORS blocked")) {
    return res.status(403).json({ message: err.message });
  }

  const status = err?.status || 500;
  const message = err?.message || "Internal server error";
  console.error(err);
  res.status(status).json({ message });
};
