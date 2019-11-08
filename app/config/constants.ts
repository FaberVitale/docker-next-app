export const PORT = process.env.PORT || 5000;

export const baseApiEndpoint =
  process.env.API_ROOT || `http://localhost:${PORT}/api`;

export const apiEndpoints = Object.freeze({
  root: baseApiEndpoint,
  user: `${baseApiEndpoint}/user`,
});
