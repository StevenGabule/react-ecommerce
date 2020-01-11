const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://reactreserve-hh196uap4.now.sh"
    : "http://localhost:3000";
export default baseUrl;
