import { run } from "concent";
import { MODEL_NAME } from "./vars";
import store from "../i18n/index";

const runStore = () => {
  run(
    { [MODEL_NAME]: store },
    {
      middlewares: [],
      plugins: [],
      isHot: true,
      isStrict: false,
      log: false,
      alwaysRenderCaller: true,

      computedCompare: true,
      watchCompare: true,
      watchImmediate: true,
      reComputed: true,
      objectValueCompare: true,
      nonObjectValueCompare: true,
      localStorage: true,
    }
  );
};

export default runStore;
