import React, { useEffect, useState } from "react";

function HealthCheck() {
  const [data, setData] = useState(null);
  const apiBase = process.env.REACT_APP_API_BASE || "http://localhost:3000";

  useEffect(() => {
    fetch(`${apiBase}/health`)
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setData({ error: e.message }));
  }, [apiBase]);

  return (
    <div style={{ padding: 16 }}>
      <h2>Backend Health</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default HealthCheck;
