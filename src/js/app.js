import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import catalog from "./files/catalog.js";
import modal from "./files/modal.js";
import slider from "./files/slider.js";
import rentSale from "./files/rentSale.js";
import fancy from "./files/fancy.js";
import map from "./files/map.js";

functions.mediaAdaptive();
spoller();
catalog();
modal();
slider();
rentSale();
fancy();
map();