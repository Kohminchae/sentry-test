"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0";
exports.ids = ["vendor-chunks/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0"];
exports.modules = {

/***/ "(instrument)/./node_modules/.pnpm/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/sql-common/build/src/index.js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/sql-common/build/src/index.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/*\n * Copyright The OpenTelemetry Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      https://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addSqlCommenterComment = void 0;\nconst api_1 = __webpack_require__(/*! @opentelemetry/api */ \"(instrument)/./node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/index.js\");\nconst core_1 = __webpack_require__(/*! @opentelemetry/core */ \"(instrument)/./node_modules/.pnpm/@opentelemetry+core@1.27.0_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/core/build/esm/index.js\");\n// NOTE: This function currently is returning false-positives\n// in cases where comment characters appear in string literals\n// (\"SELECT '-- not a comment';\" would return true, although has no comment)\nfunction hasValidSqlComment(query) {\n    const indexOpeningDashDashComment = query.indexOf('--');\n    if (indexOpeningDashDashComment >= 0) {\n        return true;\n    }\n    const indexOpeningSlashComment = query.indexOf('/*');\n    if (indexOpeningSlashComment < 0) {\n        return false;\n    }\n    const indexClosingSlashComment = query.indexOf('*/');\n    return indexOpeningDashDashComment < indexClosingSlashComment;\n}\n// sqlcommenter specification (https://google.github.io/sqlcommenter/spec/#value-serialization)\n// expects us to URL encode based on the RFC 3986 spec (https://en.wikipedia.org/wiki/Percent-encoding),\n// but encodeURIComponent does not handle some characters correctly (! ' ( ) *),\n// which means we need special handling for this\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent\nfunction fixedEncodeURIComponent(str) {\n    return encodeURIComponent(str).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);\n}\nfunction addSqlCommenterComment(span, query) {\n    if (typeof query !== 'string' || query.length === 0) {\n        return query;\n    }\n    // As per sqlcommenter spec we shall not add a comment if there already is a comment\n    // in the query\n    if (hasValidSqlComment(query)) {\n        return query;\n    }\n    const propagator = new core_1.W3CTraceContextPropagator();\n    const headers = {};\n    propagator.inject(api_1.trace.setSpan(api_1.ROOT_CONTEXT, span), headers, api_1.defaultTextMapSetter);\n    // sqlcommenter spec requires keys in the comment to be sorted lexicographically\n    const sortedKeys = Object.keys(headers).sort();\n    if (sortedKeys.length === 0) {\n        return query;\n    }\n    const commentString = sortedKeys\n        .map(key => {\n        const encodedValue = fixedEncodeURIComponent(headers[key]);\n        return `${key}='${encodedValue}'`;\n    })\n        .join(',');\n    return `${query} /*${commentString}*/`;\n}\nexports.addSqlCommenterComment = addSqlCommenterComment;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K3NxbC1jb21tb25AMC40MC4xX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvc3FsLWNvbW1vbi9idWlsZC9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCO0FBQzlCLGNBQWMsbUJBQU8sQ0FBQyx5SUFBb0I7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLHNLQUFxQjtBQUM1QztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSwyQ0FBMkM7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksSUFBSSxhQUFhO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBLGNBQWMsT0FBTyxJQUFJLGNBQWM7QUFDdkM7QUFDQSw4QkFBOEI7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ab3BlbnRlbGVtZXRyeStzcWwtY29tbW9uQDAuNDAuMV9Ab3BlbnRlbGVtZXRyeSthcGlAMS45LjAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L3NxbC1jb21tb24vYnVpbGQvc3JjL2luZGV4LmpzP2M1MjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hZGRTcWxDb21tZW50ZXJDb21tZW50ID0gdm9pZCAwO1xuY29uc3QgYXBpXzEgPSByZXF1aXJlKFwiQG9wZW50ZWxlbWV0cnkvYXBpXCIpO1xuY29uc3QgY29yZV8xID0gcmVxdWlyZShcIkBvcGVudGVsZW1ldHJ5L2NvcmVcIik7XG4vLyBOT1RFOiBUaGlzIGZ1bmN0aW9uIGN1cnJlbnRseSBpcyByZXR1cm5pbmcgZmFsc2UtcG9zaXRpdmVzXG4vLyBpbiBjYXNlcyB3aGVyZSBjb21tZW50IGNoYXJhY3RlcnMgYXBwZWFyIGluIHN0cmluZyBsaXRlcmFsc1xuLy8gKFwiU0VMRUNUICctLSBub3QgYSBjb21tZW50JztcIiB3b3VsZCByZXR1cm4gdHJ1ZSwgYWx0aG91Z2ggaGFzIG5vIGNvbW1lbnQpXG5mdW5jdGlvbiBoYXNWYWxpZFNxbENvbW1lbnQocXVlcnkpIHtcbiAgICBjb25zdCBpbmRleE9wZW5pbmdEYXNoRGFzaENvbW1lbnQgPSBxdWVyeS5pbmRleE9mKCctLScpO1xuICAgIGlmIChpbmRleE9wZW5pbmdEYXNoRGFzaENvbW1lbnQgPj0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPcGVuaW5nU2xhc2hDb21tZW50ID0gcXVlcnkuaW5kZXhPZignLyonKTtcbiAgICBpZiAoaW5kZXhPcGVuaW5nU2xhc2hDb21tZW50IDwgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4Q2xvc2luZ1NsYXNoQ29tbWVudCA9IHF1ZXJ5LmluZGV4T2YoJyovJyk7XG4gICAgcmV0dXJuIGluZGV4T3BlbmluZ0Rhc2hEYXNoQ29tbWVudCA8IGluZGV4Q2xvc2luZ1NsYXNoQ29tbWVudDtcbn1cbi8vIHNxbGNvbW1lbnRlciBzcGVjaWZpY2F0aW9uIChodHRwczovL2dvb2dsZS5naXRodWIuaW8vc3FsY29tbWVudGVyL3NwZWMvI3ZhbHVlLXNlcmlhbGl6YXRpb24pXG4vLyBleHBlY3RzIHVzIHRvIFVSTCBlbmNvZGUgYmFzZWQgb24gdGhlIFJGQyAzOTg2IHNwZWMgKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BlcmNlbnQtZW5jb2RpbmcpLFxuLy8gYnV0IGVuY29kZVVSSUNvbXBvbmVudCBkb2VzIG5vdCBoYW5kbGUgc29tZSBjaGFyYWN0ZXJzIGNvcnJlY3RseSAoISAnICggKSAqKSxcbi8vIHdoaWNoIG1lYW5zIHdlIG5lZWQgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhpc1xuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZW5jb2RlVVJJQ29tcG9uZW50XG5mdW5jdGlvbiBmaXhlZEVuY29kZVVSSUNvbXBvbmVudChzdHIpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBjID0+IGAlJHtjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG59XG5mdW5jdGlvbiBhZGRTcWxDb21tZW50ZXJDb21tZW50KHNwYW4sIHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPT0gJ3N0cmluZycgfHwgcXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG4gICAgLy8gQXMgcGVyIHNxbGNvbW1lbnRlciBzcGVjIHdlIHNoYWxsIG5vdCBhZGQgYSBjb21tZW50IGlmIHRoZXJlIGFscmVhZHkgaXMgYSBjb21tZW50XG4gICAgLy8gaW4gdGhlIHF1ZXJ5XG4gICAgaWYgKGhhc1ZhbGlkU3FsQ29tbWVudChxdWVyeSkpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgICBjb25zdCBwcm9wYWdhdG9yID0gbmV3IGNvcmVfMS5XM0NUcmFjZUNvbnRleHRQcm9wYWdhdG9yKCk7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgIHByb3BhZ2F0b3IuaW5qZWN0KGFwaV8xLnRyYWNlLnNldFNwYW4oYXBpXzEuUk9PVF9DT05URVhULCBzcGFuKSwgaGVhZGVycywgYXBpXzEuZGVmYXVsdFRleHRNYXBTZXR0ZXIpO1xuICAgIC8vIHNxbGNvbW1lbnRlciBzcGVjIHJlcXVpcmVzIGtleXMgaW4gdGhlIGNvbW1lbnQgdG8gYmUgc29ydGVkIGxleGljb2dyYXBoaWNhbGx5XG4gICAgY29uc3Qgc29ydGVkS2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlcnMpLnNvcnQoKTtcbiAgICBpZiAoc29ydGVkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgICBjb25zdCBjb21tZW50U3RyaW5nID0gc29ydGVkS2V5c1xuICAgICAgICAubWFwKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IGZpeGVkRW5jb2RlVVJJQ29tcG9uZW50KGhlYWRlcnNba2V5XSk7XG4gICAgICAgIHJldHVybiBgJHtrZXl9PScke2VuY29kZWRWYWx1ZX0nYDtcbiAgICB9KVxuICAgICAgICAuam9pbignLCcpO1xuICAgIHJldHVybiBgJHtxdWVyeX0gLyoke2NvbW1lbnRTdHJpbmd9Ki9gO1xufVxuZXhwb3J0cy5hZGRTcWxDb21tZW50ZXJDb21tZW50ID0gYWRkU3FsQ29tbWVudGVyQ29tbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/.pnpm/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/sql-common/build/src/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/sql-common/build/src/index.js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/sql-common/build/src/index.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/*\n * Copyright The OpenTelemetry Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      https://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addSqlCommenterComment = void 0;\nconst api_1 = __webpack_require__(/*! @opentelemetry/api */ \"(rsc)/./node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/index.js\");\nconst core_1 = __webpack_require__(/*! @opentelemetry/core */ \"(rsc)/./node_modules/.pnpm/@opentelemetry+core@1.27.0_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/core/build/esm/index.js\");\n// NOTE: This function currently is returning false-positives\n// in cases where comment characters appear in string literals\n// (\"SELECT '-- not a comment';\" would return true, although has no comment)\nfunction hasValidSqlComment(query) {\n    const indexOpeningDashDashComment = query.indexOf('--');\n    if (indexOpeningDashDashComment >= 0) {\n        return true;\n    }\n    const indexOpeningSlashComment = query.indexOf('/*');\n    if (indexOpeningSlashComment < 0) {\n        return false;\n    }\n    const indexClosingSlashComment = query.indexOf('*/');\n    return indexOpeningDashDashComment < indexClosingSlashComment;\n}\n// sqlcommenter specification (https://google.github.io/sqlcommenter/spec/#value-serialization)\n// expects us to URL encode based on the RFC 3986 spec (https://en.wikipedia.org/wiki/Percent-encoding),\n// but encodeURIComponent does not handle some characters correctly (! ' ( ) *),\n// which means we need special handling for this\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent\nfunction fixedEncodeURIComponent(str) {\n    return encodeURIComponent(str).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);\n}\nfunction addSqlCommenterComment(span, query) {\n    if (typeof query !== 'string' || query.length === 0) {\n        return query;\n    }\n    // As per sqlcommenter spec we shall not add a comment if there already is a comment\n    // in the query\n    if (hasValidSqlComment(query)) {\n        return query;\n    }\n    const propagator = new core_1.W3CTraceContextPropagator();\n    const headers = {};\n    propagator.inject(api_1.trace.setSpan(api_1.ROOT_CONTEXT, span), headers, api_1.defaultTextMapSetter);\n    // sqlcommenter spec requires keys in the comment to be sorted lexicographically\n    const sortedKeys = Object.keys(headers).sort();\n    if (sortedKeys.length === 0) {\n        return query;\n    }\n    const commentString = sortedKeys\n        .map(key => {\n        const encodedValue = fixedEncodeURIComponent(headers[key]);\n        return `${key}='${encodedValue}'`;\n    })\n        .join(',');\n    return `${query} /*${commentString}*/`;\n}\nexports.addSqlCommenterComment = addSqlCommenterComment;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQG9wZW50ZWxlbWV0cnkrc3FsLWNvbW1vbkAwLjQwLjFfQG9wZW50ZWxlbWV0cnkrYXBpQDEuOS4wL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9zcWwtY29tbW9uL2J1aWxkL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEI7QUFDOUIsY0FBYyxtQkFBTyxDQUFDLGtJQUFvQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMsK0pBQXFCO0FBQzVDO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLDJDQUEyQztBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxJQUFJLGFBQWE7QUFDdkMsS0FBSztBQUNMO0FBQ0EsY0FBYyxPQUFPLElBQUksY0FBYztBQUN2QztBQUNBLDhCQUE4QjtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BvcGVudGVsZW1ldHJ5K3NxbC1jb21tb25AMC40MC4xX0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvc3FsLWNvbW1vbi9idWlsZC9zcmMvaW5kZXguanM/NjU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZFNxbENvbW1lbnRlckNvbW1lbnQgPSB2b2lkIDA7XG5jb25zdCBhcGlfMSA9IHJlcXVpcmUoXCJAb3BlbnRlbGVtZXRyeS9hcGlcIik7XG5jb25zdCBjb3JlXzEgPSByZXF1aXJlKFwiQG9wZW50ZWxlbWV0cnkvY29yZVwiKTtcbi8vIE5PVEU6IFRoaXMgZnVuY3Rpb24gY3VycmVudGx5IGlzIHJldHVybmluZyBmYWxzZS1wb3NpdGl2ZXNcbi8vIGluIGNhc2VzIHdoZXJlIGNvbW1lbnQgY2hhcmFjdGVycyBhcHBlYXIgaW4gc3RyaW5nIGxpdGVyYWxzXG4vLyAoXCJTRUxFQ1QgJy0tIG5vdCBhIGNvbW1lbnQnO1wiIHdvdWxkIHJldHVybiB0cnVlLCBhbHRob3VnaCBoYXMgbm8gY29tbWVudClcbmZ1bmN0aW9uIGhhc1ZhbGlkU3FsQ29tbWVudChxdWVyeSkge1xuICAgIGNvbnN0IGluZGV4T3BlbmluZ0Rhc2hEYXNoQ29tbWVudCA9IHF1ZXJ5LmluZGV4T2YoJy0tJyk7XG4gICAgaWYgKGluZGV4T3BlbmluZ0Rhc2hEYXNoQ29tbWVudCA+PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9wZW5pbmdTbGFzaENvbW1lbnQgPSBxdWVyeS5pbmRleE9mKCcvKicpO1xuICAgIGlmIChpbmRleE9wZW5pbmdTbGFzaENvbW1lbnQgPCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhDbG9zaW5nU2xhc2hDb21tZW50ID0gcXVlcnkuaW5kZXhPZignKi8nKTtcbiAgICByZXR1cm4gaW5kZXhPcGVuaW5nRGFzaERhc2hDb21tZW50IDwgaW5kZXhDbG9zaW5nU2xhc2hDb21tZW50O1xufVxuLy8gc3FsY29tbWVudGVyIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vZ29vZ2xlLmdpdGh1Yi5pby9zcWxjb21tZW50ZXIvc3BlYy8jdmFsdWUtc2VyaWFsaXphdGlvbilcbi8vIGV4cGVjdHMgdXMgdG8gVVJMIGVuY29kZSBiYXNlZCBvbiB0aGUgUkZDIDM5ODYgc3BlYyAoaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGVyY2VudC1lbmNvZGluZyksXG4vLyBidXQgZW5jb2RlVVJJQ29tcG9uZW50IGRvZXMgbm90IGhhbmRsZSBzb21lIGNoYXJhY3RlcnMgY29ycmVjdGx5ICghICcgKCApICopLFxuLy8gd2hpY2ggbWVhbnMgd2UgbmVlZCBzcGVjaWFsIGhhbmRsaW5nIGZvciB0aGlzXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9lbmNvZGVVUklDb21wb25lbnRcbmZ1bmN0aW9uIGZpeGVkRW5jb2RlVVJJQ29tcG9uZW50KHN0cikge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGMgPT4gYCUke2MuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gKTtcbn1cbmZ1bmN0aW9uIGFkZFNxbENvbW1lbnRlckNvbW1lbnQoc3BhbiwgcXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9PSAnc3RyaW5nJyB8fCBxdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgICAvLyBBcyBwZXIgc3FsY29tbWVudGVyIHNwZWMgd2Ugc2hhbGwgbm90IGFkZCBhIGNvbW1lbnQgaWYgdGhlcmUgYWxyZWFkeSBpcyBhIGNvbW1lbnRcbiAgICAvLyBpbiB0aGUgcXVlcnlcbiAgICBpZiAoaGFzVmFsaWRTcWxDb21tZW50KHF1ZXJ5KSkge1xuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuICAgIGNvbnN0IHByb3BhZ2F0b3IgPSBuZXcgY29yZV8xLlczQ1RyYWNlQ29udGV4dFByb3BhZ2F0b3IoKTtcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgcHJvcGFnYXRvci5pbmplY3QoYXBpXzEudHJhY2Uuc2V0U3BhbihhcGlfMS5ST09UX0NPTlRFWFQsIHNwYW4pLCBoZWFkZXJzLCBhcGlfMS5kZWZhdWx0VGV4dE1hcFNldHRlcik7XG4gICAgLy8gc3FsY29tbWVudGVyIHNwZWMgcmVxdWlyZXMga2V5cyBpbiB0aGUgY29tbWVudCB0byBiZSBzb3J0ZWQgbGV4aWNvZ3JhcGhpY2FsbHlcbiAgICBjb25zdCBzb3J0ZWRLZXlzID0gT2JqZWN0LmtleXMoaGVhZGVycykuc29ydCgpO1xuICAgIGlmIChzb3J0ZWRLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuICAgIGNvbnN0IGNvbW1lbnRTdHJpbmcgPSBzb3J0ZWRLZXlzXG4gICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgZW5jb2RlZFZhbHVlID0gZml4ZWRFbmNvZGVVUklDb21wb25lbnQoaGVhZGVyc1trZXldKTtcbiAgICAgICAgcmV0dXJuIGAke2tleX09JyR7ZW5jb2RlZFZhbHVlfSdgO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcsJyk7XG4gICAgcmV0dXJuIGAke3F1ZXJ5fSAvKiR7Y29tbWVudFN0cmluZ30qL2A7XG59XG5leHBvcnRzLmFkZFNxbENvbW1lbnRlckNvbW1lbnQgPSBhZGRTcWxDb21tZW50ZXJDb21tZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/sql-common/build/src/index.js\n");

/***/ })

};
;