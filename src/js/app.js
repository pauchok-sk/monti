import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import catalog from "./files/catalog.js";
import modal from "./files/modal.js";

functions.mediaAdaptive();
spoller();
catalog();
modal();