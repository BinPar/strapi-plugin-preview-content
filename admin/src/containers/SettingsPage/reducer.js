"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
var immutable_1 = require("immutable");
var initialState = (0, immutable_1.fromJS)({
    isLoading: true,
    initialData: {
        previewUrl: "",
        baseUrl: "",
    },
    modifiedData: {
        previewUrl: "",
        baseUrl: "",
    },
});
exports.initialState = initialState;
var reducer = function (state, action) {
    switch (action.type) {
        case "CANCEL_CHANGES":
            return state.update("modifiedData", function () { return state.get("initialData"); });
        case "GET_DATA_SUCCEEDED":
            return state
                .update("isLoading", function () { return false; })
                .update("initialData", function () { return (0, immutable_1.fromJS)(action.data); })
                .update("modifiedData", function () { return (0, immutable_1.fromJS)(action.data); });
        case "ON_CHANGE":
            return state.updateIn(__spreadArray(["modifiedData"], __read(action.keys.split(".")), false), function () { return action.value; });
        case "SUBMIT_SUCCEEDED":
            return state.update("initialData", function () { return state.get("modifiedData"); });
        default:
            return state;
    }
};
exports.default = reducer;
//# sourceMappingURL=reducer.js.map