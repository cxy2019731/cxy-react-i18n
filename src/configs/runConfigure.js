import { configure } from "concent";
import { MODEL_NAME } from "./vars";
import store from "../i18n/index";

const runConfigure = () => {
  configure(MODEL_NAME, store);
};

export default runConfigure;
