export const baseApiEndpoint =
  process.env.API_ROOT || `http://localhost:${process.env.PORT || 5000}/api`;

export const apiEndpoints = Object.freeze({
  user: `${baseApiEndpoint}/user`,
});
