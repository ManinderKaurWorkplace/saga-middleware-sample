import * as employee from "./employee";

const baseUrl = process.env.API_URL || "http://dummy.restapiexample.com/api/v1";

const fetchData = async (url, options) => {
  try {
    return await fetch(baseUrl + url, options);
  } catch (error) {
    return { error };
  }
};

const getApi = async (url, options = {}) => {
  options.headers = {
    ...options.headers,
  };
  const response = await fetchData(url, options);
  return response.json();
};

const postApi = async (url, options = {}) => {
  options.headers = {
    ...options.headers,
    Method: "POST",
  };

  const response = await fetchData(url, options);
  return response.json();
};

export { employee, getApi, postApi };
