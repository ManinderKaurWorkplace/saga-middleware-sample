import Config from "./config";
import { getApi } from "./index";

export const getEmployees = async () => {
  return await getApi(Config.getEmployees.url);
};
