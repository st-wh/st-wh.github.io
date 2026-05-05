import PropTypes from "prop-types";

const AppFallback = ({ error }) => (
  <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "center", alignItems: "center", padding: "2rem", fontFamily: "sans-serif" }}>
    <p style={{ marginBottom: "1rem", color: "#555" }}>Something went wrong.</p>
    <pre style={{ color: "red", whiteSpace: "pre-wrap", maxWidth: "600px" }}>
      {`${error.name}: ${error.message}`}
    </pre>
  </main>
);

AppFallback.propTypes = { error: PropTypes.object.isRequired };

export default AppFallback;
