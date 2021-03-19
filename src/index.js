import runStore from "./configs/runConcent";
import runConfigure from "./configs/runConfigure";
import runModel from "./configs/runModel";
import * as vars from "./configs/vars";
import renderI18nKeyToText from "./views/index";
// function
import getI18nStates from "./functions/getState";
import getI18nReudcers from "./functions/getReducer";
import getI18nComputed from "./functions/getComputed";
// hooks
import useI18nState from "./hooks/useI18nState";
import useI18nReducer from "./hooks/useI18nReducer";
import useI18nComputed from "./hooks/useI18nComputed";
import useI18nKeyToText from "./hooks/useI18nKeyToText";

export default {
  /**
   * ------------------------static var--------------------------
   */
  ...vars,
  /**
   * ------------------------resgiter API-----------------------
   */
  i18nRun: runStore,
  ir: runStore,

  registerI18n: runConfigure,
  ri: runConfigure,

  i18nModel: runModel,
  im: runModel,

  /**
   * ------------------------function API-----------------------
   */
  renderI18nKeyToText,
  fr: renderI18nKeyToText,

  ...getI18nStates,
  ...getI18nReudcers,
  /**
   * ------------------------computed API------------------------------
   */
  ...getI18nComputed,
  /**
   * ------------------------hook API-------------------------------
   */
  useI18nState,
  useI18nReducer,
  useI18nComputed,
  useI18nKeyToText,
};
