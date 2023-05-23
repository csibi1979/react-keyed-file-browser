(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-keyed-file-browser"] = factory();
	else
		root["react-keyed-file-browser"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash/flow");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "RawFileBrowser", function() { return /* reexport */ browser_RawFileBrowser; });
__webpack_require__.d(__webpack_exports__, "BaseFile", function() { return /* reexport */ base_file; });
__webpack_require__.d(__webpack_exports__, "BaseFileConnectors", function() { return /* reexport */ BaseFileConnectors; });
__webpack_require__.d(__webpack_exports__, "BaseFolder", function() { return /* reexport */ base_folder; });
__webpack_require__.d(__webpack_exports__, "BaseFolderConnectors", function() { return /* reexport */ BaseFolderConnectors; });
__webpack_require__.d(__webpack_exports__, "Headers", function() { return /* reexport */ headers_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "FileRenderers", function() { return /* reexport */ files_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "FolderRenderers", function() { return /* reexport */ folders_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "Details", function() { return /* reexport */ details_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "Filters", function() { return /* reexport */ filters_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "Groupers", function() { return /* reexport */ groupers_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "Sorters", function() { return /* reexport */ sorters_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "Icons", function() { return /* reexport */ icons_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "Utils", function() { return /* reexport */ utils_namespaceObject; });

// NAMESPACE OBJECT: ./src/details/index.js
var details_namespaceObject = {};
__webpack_require__.r(details_namespaceObject);
__webpack_require__.d(details_namespaceObject, "DefaultDetail", function() { return details_default; });

// NAMESPACE OBJECT: ./src/filters/index.js
var filters_namespaceObject = {};
__webpack_require__.r(filters_namespaceObject);
__webpack_require__.d(filters_namespaceObject, "DefaultFilter", function() { return filters_default; });

// NAMESPACE OBJECT: ./src/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "isFolder", function() { return utils_isFolder; });
__webpack_require__.d(utils_namespaceObject, "moveFilesAndFolders", function() { return moveFilesAndFolders; });

// NAMESPACE OBJECT: ./src/headers/index.js
var headers_namespaceObject = {};
__webpack_require__.r(headers_namespaceObject);
__webpack_require__.d(headers_namespaceObject, "TableHeader", function() { return table; });

// NAMESPACE OBJECT: ./src/files/index.js
var files_namespaceObject = {};
__webpack_require__.r(files_namespaceObject);
__webpack_require__.d(files_namespaceObject, "ListThumbnailFile", function() { return list_thumbnail; });
__webpack_require__.d(files_namespaceObject, "SimpleListThumbnailFile", function() { return simple_list_thumbnail; });
__webpack_require__.d(files_namespaceObject, "TableFile", function() { return files_table; });
__webpack_require__.d(files_namespaceObject, "RawListThumbnailFile", function() { return list_thumbnail_RawListThumbnailFile; });
__webpack_require__.d(files_namespaceObject, "RawTableFile", function() { return table_RawTableFile; });

// NAMESPACE OBJECT: ./src/folders/index.js
var folders_namespaceObject = {};
__webpack_require__.r(folders_namespaceObject);
__webpack_require__.d(folders_namespaceObject, "ListThumbnailFolder", function() { return folders_list_thumbnail; });
__webpack_require__.d(folders_namespaceObject, "TableFolder", function() { return folders_table; });
__webpack_require__.d(folders_namespaceObject, "RawListThumbnailFolder", function() { return list_thumbnail_RawListThumbnailFolder; });
__webpack_require__.d(folders_namespaceObject, "RawTableFolder", function() { return table_RawTableFolder; });

// NAMESPACE OBJECT: ./src/groupers/index.js
var groupers_namespaceObject = {};
__webpack_require__.r(groupers_namespaceObject);
__webpack_require__.d(groupers_namespaceObject, "GroupByFolder", function() { return by_folder; });
__webpack_require__.d(groupers_namespaceObject, "GroupByModifiedRelative", function() { return by_modified; });

// NAMESPACE OBJECT: ./src/sorters/index.js
var sorters_namespaceObject = {};
__webpack_require__.r(sorters_namespaceObject);
__webpack_require__.d(sorters_namespaceObject, "SortByName", function() { return by_name; });
__webpack_require__.d(sorters_namespaceObject, "SortByModified", function() { return sorters_by_modified; });

// NAMESPACE OBJECT: ./src/icons/index.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, "FontAwesome", function() { return FontAwesome; });

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dnd"
var external_react_dnd_ = __webpack_require__(3);

// EXTERNAL MODULE: external "react-dnd-html5-backend"
var external_react_dnd_html5_backend_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/details/default.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};


class default_Detail extends external_react_default.a.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "handleCloseClick", (event) => {
      if (event) {
        event.preventDefault();
      }
      this.props.close();
    });
  }
  render() {
    let name = this.props.file.key.split("/");
    name = name.length ? name[name.length - 1] : "";
    return /* @__PURE__ */ external_react_default.a.createElement("div", null, /* @__PURE__ */ external_react_default.a.createElement("h2", null, "Item Detail"), /* @__PURE__ */ external_react_default.a.createElement("dl", null, /* @__PURE__ */ external_react_default.a.createElement("dt", null, "Key"), /* @__PURE__ */ external_react_default.a.createElement("dd", null, this.props.file.key), /* @__PURE__ */ external_react_default.a.createElement("dt", null, "Name"), /* @__PURE__ */ external_react_default.a.createElement("dd", null, name)), /* @__PURE__ */ external_react_default.a.createElement("a", {
      href: "#",
      onClick: this.handleCloseClick
    }, "Close"));
  }
}
__publicField(default_Detail, "propTypes", {
  file: external_prop_types_default.a.shape({
    key: external_prop_types_default.a.string.isRequired,
    name: external_prop_types_default.a.string.isRequired,
    extension: external_prop_types_default.a.string.isRequired,
    url: external_prop_types_default.a.string
  }).isRequired,
  close: external_prop_types_default.a.func
});
/* harmony default export */ var details_default = (default_Detail);

// CONCATENATED MODULE: ./src/details/index.js



// CONCATENATED MODULE: ./src/filters/default.js
var default_defProp = Object.defineProperty;
var default_defNormalProp = (obj, key, value) => key in obj ? default_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var default_publicField = (obj, key, value) => {
  default_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};


class default_Filter extends external_react_default.a.Component {
  constructor() {
    super(...arguments);
    default_publicField(this, "handleFilterChange", (event) => {
      const newValue = event.target.value;
      this.props.updateFilter(newValue);
    });
  }
  render() {
    return /* @__PURE__ */ external_react_default.a.createElement("input", {
      type: "search",
      placeholder: "Sz\u0171r\u0151",
      value: this.props.value,
      onChange: this.handleFilterChange
    });
  }
}
default_publicField(default_Filter, "propTypes", {
  value: external_prop_types_default.a.string.isRequired,
  updateFilter: external_prop_types_default.a.func
});
/* harmony default export */ var filters_default = (default_Filter);

// CONCATENATED MODULE: ./src/filters/index.js



// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(5);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./src/utils.js
function utils_isFolder(file) {
  return file.key.endsWith("/");
}
function moveFilesAndFolders(props, monitor, component) {
  if (!monitor.didDrop()) {
    return;
  }
  const dropResult = monitor.getDropResult();
  const folders = [];
  const files = [];
  props.browserProps.selection.forEach((selection) => {
    selection[selection.length - 1] === "/" ? folders.push(selection) : files.push(selection);
  });
  props.browserProps.openFolder(dropResult.path);
  folders.forEach((selection) => {
    const fileKey = selection;
    const fileNameParts = fileKey.split("/");
    const folderName = fileNameParts[fileNameParts.length - 2];
    const newKey = `${dropResult.path}${folderName}/`;
    if (newKey.substr(0, fileKey.length) === fileKey)
      return;
    if (newKey !== fileKey && props.browserProps.moveFolder) {
      props.browserProps.moveFolder(fileKey, newKey);
    }
  });
  files.forEach((selection) => {
    const fileKey = selection;
    const fileNameParts = fileKey.split("/");
    const fileName = fileNameParts[fileNameParts.length - 1];
    const newKey = `${dropResult.path}${fileName}`;
    if (newKey !== fileKey && props.browserProps.moveFile) {
      props.browserProps.moveFile(fileKey, newKey);
    }
  });
}


// CONCATENATED MODULE: ./src/constants.js
const FILETYPE_EXTENSIONS = {
  Archive: [
    "zip",
    "rar",
    "7z"
  ],
  Audio: [
    "mp3",
    "ogg",
    "wav",
    "aac"
  ],
  Excel: [
    "xls",
    "xlsx"
  ],
  Image: [
    "jpg",
    "jpeg",
    "png",
    "bmp"
  ],
  PDF: [
    "pdf"
  ],
  PowerPoint: [
    "ppt",
    "pptx"
  ],
  Text: [
    "txt"
  ],
  Video: [
    "mp4",
    "flv",
    "avi",
    "wmv",
    "mov"
  ],
  Word: [
    "doc",
    "docx"
  ],
  Code: [
    "js"
  ]
};
const extensionMapping = {};
for (const [type, extensions] of Object.entries(FILETYPE_EXTENSIONS)) {
  for (const extension of extensions) {
    extensionMapping[extension] = type;
  }
}


// CONCATENATED MODULE: ./src/base-file.js
var base_file_defProp = Object.defineProperty;
var base_file_defNormalProp = (obj, key, value) => key in obj ? base_file_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var base_file_publicField = (obj, key, value) => {
  base_file_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};




class base_file_BaseFile extends external_react_default.a.Component {
  constructor() {
    super(...arguments);
    base_file_publicField(this, "state", {
      newName: this.getName()
    });
    base_file_publicField(this, "handleFileClick", (event) => {
      event && event.preventDefault();
      this.props.browserProps.preview({
        url: this.props.url,
        name: this.getName(),
        key: this.props.fileKey,
        extension: this.getExtension()
      });
    });
    base_file_publicField(this, "handleItemClick", (event) => {
      event.stopPropagation();
      this.props.browserProps.select(this.props.fileKey, "file", event.ctrlKey || event.metaKey, event.shiftKey);
    });
    base_file_publicField(this, "handleItemDoubleClick", (event) => {
      event.stopPropagation();
      this.handleFileClick();
    });
    base_file_publicField(this, "handleRenameClick", (event) => {
      if (!this.props.browserProps.renameFile) {
        return;
      }
      this.props.browserProps.beginAction("rename", this.props.fileKey);
    });
    base_file_publicField(this, "handleNewNameChange", (event) => {
      const newName = event.target.value;
      this.setState({newName});
    });
    base_file_publicField(this, "handleRenameSubmit", (event) => {
      if (event) {
        event.preventDefault();
      }
      if (!this.props.browserProps.renameFile) {
        return;
      }
      const newName = this.state.newName.trim();
      if (newName.length === 0) {
        return;
      }
      const invalidChar = ["/", "\\"];
      if (invalidChar.some((char) => newName.indexOf(char) !== -1))
        return;
      let newKey = newName;
      const slashIndex = this.props.fileKey.lastIndexOf("/");
      if (slashIndex !== -1) {
        newKey = `${this.props.fileKey.substr(0, slashIndex)}/${newName}`;
      }
      this.props.browserProps.renameFile(this.props.fileKey, newKey);
    });
    base_file_publicField(this, "handleDeleteClick", (event) => {
      if (!this.props.browserProps.deleteFile) {
        return;
      }
      this.props.browserProps.beginAction("delete", this.props.fileKey);
    });
    base_file_publicField(this, "handleDeleteSubmit", (event) => {
      event.preventDefault();
      if (!this.props.browserProps.deleteFile) {
        return;
      }
      this.props.browserProps.deleteFile(this.props.browserProps.actionTargets);
    });
    base_file_publicField(this, "handleCancelEdit", (event) => {
      this.props.browserProps.endAction();
    });
  }
  selectFileNameFromRef(element) {
    if (element) {
      const currentName = element.value;
      const pointIndex = currentName.lastIndexOf(".");
      element.setSelectionRange(0, pointIndex || currentName.length);
      element.focus();
    }
  }
  getName() {
    let name = this.props.newKey || this.props.fileKey;
    const slashIndex = name.lastIndexOf("/");
    if (slashIndex !== -1) {
      name = name.substr(slashIndex + 1);
    }
    return name;
  }
  getExtension() {
    const blobs = this.props.fileKey.split(".");
    return blobs[blobs.length - 1].toLowerCase().trim();
  }
  getFileType() {
    return extensionMapping[this.getExtension()] || "File";
  }
  connectDND(render) {
    const inAction = this.props.isDragging || this.props.action;
    if (typeof this.props.browserProps.moveFile === "function" && !inAction && !this.props.isRenaming) {
      render = this.props.connectDragSource(render);
    }
    if (typeof this.props.browserProps.createFiles === "function" || typeof this.props.browserProps.moveFile === "function" || typeof this.props.browserProps.moveFolder === "function") {
      render = this.props.connectDropTarget(render);
    }
    return render;
  }
}
base_file_publicField(base_file_BaseFile, "propTypes", {
  fileKey: external_prop_types_default.a.string,
  url: external_prop_types_default.a.string,
  newKey: external_prop_types_default.a.string,
  isRenaming: external_prop_types_default.a.bool,
  connectDragSource: external_prop_types_default.a.func,
  connectDropTarget: external_prop_types_default.a.func,
  isDragging: external_prop_types_default.a.bool,
  action: external_prop_types_default.a.string,
  browserProps: external_prop_types_default.a.shape({
    icons: external_prop_types_default.a.object,
    select: external_prop_types_default.a.func,
    beginAction: external_prop_types_default.a.func,
    endAction: external_prop_types_default.a.func,
    preview: external_prop_types_default.a.func,
    createFiles: external_prop_types_default.a.func,
    moveFile: external_prop_types_default.a.func,
    moveFolder: external_prop_types_default.a.func,
    renameFile: external_prop_types_default.a.func,
    deleteFile: external_prop_types_default.a.func
  })
});
const dragSource = {
  beginDrag(props) {
    if (!props.browserProps.selection.length || !props.browserProps.selection.includes(props.fileKey)) {
      props.browserProps.select(props.fileKey, "file");
    }
    return {
      key: props.fileKey
    };
  },
  endDrag(props, monitor, component) {
    moveFilesAndFolders(props, monitor, component);
  }
};
function dragCollect(connect, monitor) {
  return {
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
const targetSource = {
  drop(props, monitor) {
    if (monitor.didDrop()) {
      return;
    }
    const key = props.newKey || props.fileKey;
    const slashIndex = key.lastIndexOf("/");
    const path = slashIndex !== -1 ? key.substr(0, slashIndex + 1) : "";
    const item = monitor.getItem();
    if (item.files && props.browserProps.createFiles) {
      props.browserProps.createFiles(item.files, path);
    }
    return {
      path
    };
  }
};
function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({shallow: true})
  };
}
const BaseFileConnectors = {
  dragSource,
  dragCollect,
  targetSource,
  targetCollect
};
/* harmony default export */ var base_file = (base_file_BaseFile);


// CONCATENATED MODULE: ./src/headers/table.js
var table_defProp = Object.defineProperty;
var table_defNormalProp = (obj, key, value) => key in obj ? table_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var table_publicField = (obj, key, value) => {
  table_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};






class table_RawTableHeader extends external_react_default.a.Component {
  handleHeaderClick(event) {
    this.props.select(this.props.fileKey);
  }
  render() {
    const header = /* @__PURE__ */ external_react_default.a.createElement("tr", {
      className: external_classnames_default()("folder", {
        dragover: this.props.isOver,
        selected: this.props.isSelected
      })
    }, /* @__PURE__ */ external_react_default.a.createElement("th", null, "F\xE1jl"), /* @__PURE__ */ external_react_default.a.createElement("th", {
      className: "size"
    }, "M\xE9ret"), /* @__PURE__ */ external_react_default.a.createElement("th", {
      className: "modified"
    }, "M\xF3dos\xEDtva"));
    if (typeof this.props.browserProps.createFiles === "function" || typeof this.props.browserProps.moveFile === "function" || typeof this.props.browserProps.moveFolder === "function") {
      return this.props.connectDropTarget(header);
    } else {
      return header;
    }
  }
}
table_publicField(table_RawTableHeader, "propTypes", {
  select: external_prop_types_default.a.func,
  fileKey: external_prop_types_default.a.string,
  connectDropTarget: external_prop_types_default.a.func,
  isOver: external_prop_types_default.a.bool,
  isSelected: external_prop_types_default.a.func,
  browserProps: external_prop_types_default.a.shape({
    createFiles: external_prop_types_default.a.func,
    moveFolder: external_prop_types_default.a.func,
    moveFile: external_prop_types_default.a.func
  })
});
const TableHeader = Object(external_react_dnd_["DropTarget"])(["file", "folder", external_react_dnd_html5_backend_["NativeTypes"].FILE], BaseFileConnectors.targetSource, BaseFileConnectors.targetCollect)(table_RawTableHeader);
/* harmony default export */ var table = (TableHeader);


// CONCATENATED MODULE: ./src/headers/index.js



// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash/flow"
var flow_ = __webpack_require__(6);
var flow_default = /*#__PURE__*/__webpack_require__.n(flow_);

// CONCATENATED MODULE: ./src/files/utils.js
function floatPrecision(floatValue, precision) {
  floatValue = parseFloat(floatValue);
  if (isNaN(floatValue)) {
    return parseFloat("0").toFixed(precision);
  } else {
    const power = Math.pow(10, precision);
    floatValue = (Math.round(floatValue * power) / power).toFixed(precision);
    return floatValue.toString();
  }
}
function fileSize(size) {
  if (size > 1024) {
    const kbSize = size / 1024;
    if (kbSize > 1024) {
      const mbSize = kbSize / 1024;
      return `${floatPrecision(mbSize, 2)} MB`;
    }
    return `${Math.round(kbSize)} kB`;
  }
  return `${size} B`;
}


// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/files/list-thumbnail.js
var list_thumbnail_defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var list_thumbnail_defNormalProp = (obj, key, value) => key in obj ? list_thumbnail_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      list_thumbnail_defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        list_thumbnail_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var list_thumbnail_publicField = (obj, key, value) => {
  list_thumbnail_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};









class list_thumbnail_RawListThumbnailFile extends base_file {
  render() {
    const {
      thumbnail_url: thumbnailUrl,
      action,
      url,
      isDragging,
      isRenaming,
      isSelected,
      isSelectable,
      isOver,
      isDeleting,
      showName,
      showSize,
      showModified,
      browserProps,
      connectDragPreview
    } = this.props;
    let icon;
    if (thumbnailUrl) {
      icon = /* @__PURE__ */ external_react_default.a.createElement("div", {
        className: "image",
        style: {
          backgroundImage: "url(" + thumbnailUrl + ")"
        }
      });
    } else {
      icon = browserProps.icons[this.getFileType()] || browserProps.icons.File;
    }
    const inAction = isDragging || action;
    const ConfirmDeletionRenderer = browserProps.confirmDeletionRenderer;
    let name;
    if (showName) {
      if (!inAction && isDeleting && browserProps.selection.length === 1) {
        name = /* @__PURE__ */ external_react_default.a.createElement(ConfirmDeletionRenderer, {
          handleDeleteSubmit: this.handleDeleteSubmit,
          handleFileClick: this.handleFileClick,
          url
        }, this.getName());
      } else if (!inAction && isRenaming) {
        name = /* @__PURE__ */ external_react_default.a.createElement("form", {
          className: "renaming",
          onSubmit: this.handleRenameSubmit
        }, /* @__PURE__ */ external_react_default.a.createElement("input", {
          ref: this.selectFileNameFromRef,
          type: "text",
          value: this.state.newName,
          onChange: this.handleNewNameChange,
          onBlur: this.handleCancelEdit,
          autoFocus: true
        }));
      } else {
        name = /* @__PURE__ */ external_react_default.a.createElement("a", {
          href: url,
          download: "download",
          onClick: this.handleFileClick
        }, this.getName());
      }
    }
    let size;
    if (showSize) {
      if (!isRenaming && !isDeleting) {
        size = /* @__PURE__ */ external_react_default.a.createElement("span", {
          className: "size"
        }, /* @__PURE__ */ external_react_default.a.createElement("small", null, fileSize(this.props.size)));
      }
    }
    let modified;
    if (showModified) {
      if (!isRenaming && !isDeleting) {
        modified = /* @__PURE__ */ external_react_default.a.createElement("span", {
          className: "modified"
        }, "M\xF3dos\xEDtva: ", Object(external_date_fns_["formatDistanceToNow"])(this.props.modified, {addSuffix: true, locale: locale_["hu"]}));
      }
    }
    let rowProps = {};
    if (isSelectable) {
      rowProps = {
        onClick: this.handleItemClick
      };
    }
    let row = /* @__PURE__ */ external_react_default.a.createElement("li", __spreadValues({
      className: external_classnames_default()("file", {
        pending: action,
        dragging: isDragging,
        dragover: isOver,
        selected: isSelected
      }),
      onDoubleClick: this.handleItemDoubleClick
    }, rowProps), /* @__PURE__ */ external_react_default.a.createElement("div", {
      className: "item"
    }, /* @__PURE__ */ external_react_default.a.createElement("span", {
      className: "thumb"
    }, icon), /* @__PURE__ */ external_react_default.a.createElement("span", {
      className: "name"
    }, name), size, modified));
    if (typeof browserProps.moveFile === "function") {
      row = connectDragPreview(row);
    }
    return this.connectDND(row);
  }
}
list_thumbnail_publicField(list_thumbnail_RawListThumbnailFile, "defaultProps", {
  showName: true,
  showSize: true,
  showModified: true,
  isSelectable: true
});
const ListThumbnailFile = flow_default()(Object(external_react_dnd_["DragSource"])("file", BaseFileConnectors.dragSource, BaseFileConnectors.dragCollect), Object(external_react_dnd_["DropTarget"])(["file", "folder", external_react_dnd_html5_backend_["NativeTypes"].FILE], BaseFileConnectors.targetSource, BaseFileConnectors.targetCollect))(list_thumbnail_RawListThumbnailFile);
/* harmony default export */ var list_thumbnail = (ListThumbnailFile);


// CONCATENATED MODULE: ./src/files/simple-list-thumbnail.js
var simple_list_thumbnail_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var simple_list_thumbnail_getOwnPropSymbols = Object.getOwnPropertySymbols;
var simple_list_thumbnail_hasOwnProp = Object.prototype.hasOwnProperty;
var simple_list_thumbnail_propIsEnum = Object.prototype.propertyIsEnumerable;
var simple_list_thumbnail_defNormalProp = (obj, key, value) => key in obj ? simple_list_thumbnail_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var simple_list_thumbnail_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (simple_list_thumbnail_hasOwnProp.call(b, prop))
      simple_list_thumbnail_defNormalProp(a, prop, b[prop]);
  if (simple_list_thumbnail_getOwnPropSymbols)
    for (var prop of simple_list_thumbnail_getOwnPropSymbols(b)) {
      if (simple_list_thumbnail_propIsEnum.call(b, prop))
        simple_list_thumbnail_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));


class simple_list_thumbnail_SimpleListThumbnailFile extends external_react_default.a.Component {
  render() {
    return /* @__PURE__ */ external_react_default.a.createElement(list_thumbnail, __spreadProps(simple_list_thumbnail_spreadValues({}, this.props), {
      showName: false,
      showSize: false,
      showModified: false,
      isSelectable: false
    }));
  }
}
/* harmony default export */ var simple_list_thumbnail = (simple_list_thumbnail_SimpleListThumbnailFile);

// CONCATENATED MODULE: ./src/files/table.js








class table_RawTableFile extends base_file {
  render() {
    const {
      isDragging,
      isDeleting,
      isRenaming,
      isOver,
      isSelected,
      action,
      url,
      browserProps,
      connectDragPreview,
      depth,
      size,
      modified
    } = this.props;
    const icon = browserProps.icons[this.getFileType()] || browserProps.icons.File;
    const inAction = isDragging || action;
    const ConfirmDeletionRenderer = browserProps.confirmDeletionRenderer;
    let name;
    if (!inAction && isDeleting && browserProps.selection.length === 1) {
      name = /* @__PURE__ */ external_react_default.a.createElement(ConfirmDeletionRenderer, {
        handleDeleteSubmit: this.handleDeleteSubmit,
        handleFileClick: this.handleFileClick,
        url
      }, icon, this.getName());
    } else if (!inAction && isRenaming) {
      name = /* @__PURE__ */ external_react_default.a.createElement("form", {
        className: "renaming",
        onSubmit: this.handleRenameSubmit
      }, icon, /* @__PURE__ */ external_react_default.a.createElement("input", {
        ref: this.selectFileNameFromRef,
        type: "text",
        value: this.state.newName,
        onChange: this.handleNewNameChange,
        onBlur: this.handleCancelEdit,
        autoFocus: true
      }));
    } else {
      name = /* @__PURE__ */ external_react_default.a.createElement("a", {
        href: url || "#",
        download: "download",
        onClick: this.handleFileClick
      }, icon, this.getName());
    }
    let draggable = /* @__PURE__ */ external_react_default.a.createElement("div", null, name);
    if (typeof browserProps.moveFile === "function") {
      draggable = connectDragPreview(draggable);
    }
    const row = /* @__PURE__ */ external_react_default.a.createElement("tr", {
      className: external_classnames_default()("file", {
        pending: action,
        dragging: isDragging,
        dragover: isOver,
        selected: isSelected
      }),
      onClick: this.handleItemClick,
      onDoubleClick: this.handleItemDoubleClick
    }, /* @__PURE__ */ external_react_default.a.createElement("td", {
      className: "name"
    }, /* @__PURE__ */ external_react_default.a.createElement("div", {
      style: {paddingLeft: depth * 16 + "px"}
    }, draggable)), /* @__PURE__ */ external_react_default.a.createElement("td", {
      className: "size"
    }, fileSize(size)), /* @__PURE__ */ external_react_default.a.createElement("td", {
      className: "modified"
    }, typeof modified === "undefined" ? "-" : Object(external_date_fns_["formatDistanceToNow"])(modified, {addSuffix: true})));
    return this.connectDND(row);
  }
}
const TableFile = flow_default()(Object(external_react_dnd_["DragSource"])("file", BaseFileConnectors.dragSource, BaseFileConnectors.dragCollect), Object(external_react_dnd_["DropTarget"])(["file", "folder", external_react_dnd_html5_backend_["NativeTypes"].FILE], BaseFileConnectors.targetSource, BaseFileConnectors.targetCollect))(table_RawTableFile);
/* harmony default export */ var files_table = (TableFile);


// CONCATENATED MODULE: ./src/files/index.js





// CONCATENATED MODULE: ./src/base-folder.js
var base_folder_defProp = Object.defineProperty;
var base_folder_defNormalProp = (obj, key, value) => key in obj ? base_folder_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var base_folder_publicField = (obj, key, value) => {
  base_folder_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};



class base_folder_BaseFolder extends external_react_default.a.Component {
  constructor() {
    super(...arguments);
    base_folder_publicField(this, "state", {
      newName: this.props.isDraft ? "New folder" : this.getName()
    });
    base_folder_publicField(this, "handleFolderClick", (event) => {
      event.stopPropagation();
      this.props.browserProps.select(this.props.fileKey, "folder", event.ctrlKey || event.metaKey, event.shiftKey);
    });
    base_folder_publicField(this, "handleFolderDoubleClick", (event) => {
      event.stopPropagation();
      this.toggleFolder();
    });
    base_folder_publicField(this, "handleRenameClick", (event) => {
      if (!this.props.browserProps.renameFolder) {
        return;
      }
      this.props.browserProps.beginAction("rename", this.props.fileKey);
    });
    base_folder_publicField(this, "handleNewNameChange", (event) => {
      const newName = event.target.value;
      this.setState({newName});
    });
    base_folder_publicField(this, "handleRenameSubmit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!this.props.browserProps.renameFolder && !this.props.isDraft) {
        return;
      }
      const newName = this.state.newName.trim();
      if (newName.length === 0) {
        return;
      }
      const invalidChar = ["/", "\\"];
      if (invalidChar.some((char) => newName.indexOf(char) !== -1))
        return;
      let newKey = this.props.fileKey.substr(0, this.props.fileKey.substr(0, this.props.fileKey.length - 1).lastIndexOf("/"));
      if (newKey.length) {
        newKey += "/";
      }
      newKey += newName;
      newKey += "/";
      if (this.props.isDraft) {
        this.props.browserProps.createFolder(newKey);
      } else {
        this.props.browserProps.renameFolder(this.props.fileKey, newKey);
      }
    });
    base_folder_publicField(this, "handleDeleteClick", (event) => {
      if (!this.props.browserProps.deleteFolder) {
        return;
      }
      this.props.browserProps.beginAction("delete", this.props.fileKey);
    });
    base_folder_publicField(this, "handleDeleteSubmit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!this.props.browserProps.deleteFolder) {
        return;
      }
      this.props.browserProps.deleteFolder(this.props.browserProps.actionTargets);
    });
    base_folder_publicField(this, "handleCancelEdit", (event) => {
      this.props.browserProps.endAction();
    });
    base_folder_publicField(this, "toggleFolder", () => {
      this.props.browserProps.toggleFolder(this.props.fileKey);
    });
  }
  selectFolderNameFromRef(element) {
    if (element) {
      const currentName = element.value;
      element.setSelectionRange(0, currentName.length);
      element.focus();
    }
  }
  getName() {
    if (this.props.name) {
      return this.props.name;
    }
    const folders = this.props.fileKey.split("/");
    return this.props.newName || folders[folders.length - 2];
  }
  connectDND(render) {
    const inAction = this.props.isDragging || this.props.action;
    if (this.props.keyDerived) {
      if (typeof this.props.browserProps.moveFolder === "function" && !inAction && !this.props.isRenaming && !this.props.isDeleting) {
        render = this.props.connectDragSource(render);
      }
      if (typeof this.props.browserProps.createFiles === "function" || typeof this.props.browserProps.moveFolder === "function" || typeof this.props.browserProps.moveFile === "function") {
        render = this.props.connectDropTarget(render);
      }
    }
    return render;
  }
}
base_folder_publicField(base_folder_BaseFolder, "propTypes", {
  name: external_prop_types_default.a.string,
  fileKey: external_prop_types_default.a.string,
  newName: external_prop_types_default.a.string,
  keyDerived: external_prop_types_default.a.bool,
  isDraft: external_prop_types_default.a.bool,
  isRenaming: external_prop_types_default.a.bool,
  isDeleting: external_prop_types_default.a.bool,
  connectDragSource: external_prop_types_default.a.func,
  connectDropTarget: external_prop_types_default.a.func,
  isDragging: external_prop_types_default.a.bool,
  action: external_prop_types_default.a.string,
  browserProps: external_prop_types_default.a.shape({
    select: external_prop_types_default.a.func,
    toggleFolder: external_prop_types_default.a.func,
    beginAction: external_prop_types_default.a.func,
    endAction: external_prop_types_default.a.func,
    preview: external_prop_types_default.a.func,
    createFiles: external_prop_types_default.a.func,
    createFolder: external_prop_types_default.a.func,
    moveFile: external_prop_types_default.a.func,
    moveFolder: external_prop_types_default.a.func,
    renameFolder: external_prop_types_default.a.func,
    deleteFolder: external_prop_types_default.a.func
  })
});
const base_folder_dragSource = {
  beginDrag(props) {
    if (!props.browserProps.selection.length) {
      props.browserProps.select(props.fileKey, "folder");
    }
    return {
      key: props.fileKey
    };
  },
  endDrag(props, monitor, component) {
    moveFilesAndFolders(props, monitor, component);
  }
};
function base_folder_dragCollect(connect, monitor) {
  return {
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
const BaseFolderConnectors = {
  dragSource: base_folder_dragSource,
  dragCollect: base_folder_dragCollect
};
/* harmony default export */ var base_folder = (base_folder_BaseFolder);


// CONCATENATED MODULE: ./src/folders/list-thumbnail.js
var folders_list_thumbnail_defProp = Object.defineProperty;
var list_thumbnail_defProps = Object.defineProperties;
var list_thumbnail_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var list_thumbnail_getOwnPropSymbols = Object.getOwnPropertySymbols;
var list_thumbnail_hasOwnProp = Object.prototype.hasOwnProperty;
var list_thumbnail_propIsEnum = Object.prototype.propertyIsEnumerable;
var folders_list_thumbnail_defNormalProp = (obj, key, value) => key in obj ? folders_list_thumbnail_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var list_thumbnail_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (list_thumbnail_hasOwnProp.call(b, prop))
      folders_list_thumbnail_defNormalProp(a, prop, b[prop]);
  if (list_thumbnail_getOwnPropSymbols)
    for (var prop of list_thumbnail_getOwnPropSymbols(b)) {
      if (list_thumbnail_propIsEnum.call(b, prop))
        folders_list_thumbnail_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var list_thumbnail_spreadProps = (a, b) => list_thumbnail_defProps(a, list_thumbnail_getOwnPropDescs(b));








class list_thumbnail_RawListThumbnailFolder extends base_folder {
  render() {
    const {
      isOpen,
      isDragging,
      isDeleting,
      isRenaming,
      isDraft,
      isOver,
      isSelected,
      url,
      action,
      browserProps,
      depth,
      keyDerived,
      connectDragPreview
    } = this.props;
    const icon = browserProps.icons[isOpen ? "FolderOpen" : "Folder"];
    const inAction = isDragging || action;
    const ConfirmDeletionRenderer = browserProps.confirmDeletionRenderer;
    let name;
    if (!inAction && isDeleting && browserProps.selection.length === 1) {
      name = /* @__PURE__ */ external_react_default.a.createElement(ConfirmDeletionRenderer, {
        handleDeleteSubmit: this.handleDeleteSubmit,
        handleFileClick: this.handleFileClick,
        url
      }, this.getName());
    } else if (!inAction && isRenaming || isDraft) {
      name = /* @__PURE__ */ external_react_default.a.createElement("div", null, /* @__PURE__ */ external_react_default.a.createElement("form", {
        className: "renaming",
        onSubmit: this.handleRenameSubmit
      }, /* @__PURE__ */ external_react_default.a.createElement("input", {
        type: "text",
        ref: this.selectFolderNameFromRef,
        value: this.state.newName,
        onChange: this.handleNewNameChange,
        onBlur: this.handleCancelEdit,
        autoFocus: true
      })));
    } else {
      name = /* @__PURE__ */ external_react_default.a.createElement("div", null, /* @__PURE__ */ external_react_default.a.createElement("a", {
        onClick: this.toggleFolder
      }, this.getName()));
    }
    let children;
    if (isOpen && browserProps.nestChildren) {
      children = [];
      for (let childIndex = 0; childIndex < children.length; childIndex++) {
        const file = children[childIndex];
        const thisItemProps = list_thumbnail_spreadProps(list_thumbnail_spreadValues({}, browserProps.getItemProps(file, browserProps)), {
          depth: depth + 1
        });
        if (!utils_isFolder(file)) {
          children.push(/* @__PURE__ */ external_react_default.a.createElement(browserProps.fileRenderer, list_thumbnail_spreadValues(list_thumbnail_spreadProps(list_thumbnail_spreadValues(list_thumbnail_spreadValues({}, file), thisItemProps), {
            browserProps
          }), browserProps.fileRendererProps)));
        } else {
          children.push(/* @__PURE__ */ external_react_default.a.createElement(browserProps.folderRenderer, list_thumbnail_spreadValues(list_thumbnail_spreadProps(list_thumbnail_spreadValues(list_thumbnail_spreadValues({}, file), thisItemProps), {
            browserProps
          }), browserProps.folderRendererProps)));
        }
      }
      if (children.length) {
        children = /* @__PURE__ */ external_react_default.a.createElement("ul", {
          style: {padding: "0 8px", paddingLeft: "16px"}
        }, children);
      } else {
        children = /* @__PURE__ */ external_react_default.a.createElement("p", null, "No items in this folder");
      }
    }
    let folder = /* @__PURE__ */ external_react_default.a.createElement("li", {
      className: external_classnames_default()("folder", {
        expanded: isOpen && browserProps.nestChildren,
        pending: action,
        dragging: isDragging,
        dragover: isOver,
        selected: isSelected
      }),
      onClick: this.handleFolderClick,
      onDoubleClick: this.handleFolderDoubleClick
    }, /* @__PURE__ */ external_react_default.a.createElement("div", {
      className: "item"
    }, /* @__PURE__ */ external_react_default.a.createElement("span", {
      className: "thumb"
    }, icon), /* @__PURE__ */ external_react_default.a.createElement("span", {
      className: "name"
    }, name)), children);
    if (typeof browserProps.moveFolder === "function" && keyDerived) {
      folder = connectDragPreview(folder);
    }
    return this.connectDND(folder);
  }
}
const ListThumbnailFolder = flow_default()(Object(external_react_dnd_["DragSource"])("folder", BaseFolderConnectors.dragSource, BaseFolderConnectors.dragCollect), Object(external_react_dnd_["DropTarget"])(["file", "folder", external_react_dnd_html5_backend_["NativeTypes"].FILE], BaseFileConnectors.targetSource, BaseFileConnectors.targetCollect))(list_thumbnail_RawListThumbnailFolder);
/* harmony default export */ var folders_list_thumbnail = (ListThumbnailFolder);


// CONCATENATED MODULE: ./src/folders/table.js







class table_RawTableFolder extends base_folder {
  render() {
    const {
      isOpen,
      isDragging,
      isDeleting,
      isRenaming,
      isDraft,
      isOver,
      isSelected,
      action,
      url,
      browserProps,
      connectDragPreview,
      depth
    } = this.props;
    const icon = browserProps.icons[isOpen ? "FolderOpen" : "Folder"];
    const inAction = isDragging || action;
    const ConfirmDeletionRenderer = browserProps.confirmDeletionRenderer;
    let name;
    if (!inAction && isDeleting && browserProps.selection.length === 1) {
      name = /* @__PURE__ */ external_react_default.a.createElement(ConfirmDeletionRenderer, {
        handleDeleteSubmit: this.handleDeleteSubmit,
        handleFileClick: this.handleFileClick,
        url
      }, icon, this.getName());
    } else if (!inAction && isRenaming || isDraft) {
      name = /* @__PURE__ */ external_react_default.a.createElement("div", null, /* @__PURE__ */ external_react_default.a.createElement("form", {
        className: "renaming",
        onSubmit: this.handleRenameSubmit
      }, icon, /* @__PURE__ */ external_react_default.a.createElement("input", {
        type: "text",
        ref: this.selectFolderNameFromRef,
        value: this.state.newName,
        onChange: this.handleNewNameChange,
        onBlur: this.handleCancelEdit,
        autoFocus: true
      })));
    } else {
      name = /* @__PURE__ */ external_react_default.a.createElement("div", null, /* @__PURE__ */ external_react_default.a.createElement("a", {
        onClick: this.toggleFolder
      }, icon, this.getName()));
    }
    let draggable = /* @__PURE__ */ external_react_default.a.createElement("div", null, name);
    if (typeof browserProps.moveFile === "function") {
      draggable = connectDragPreview(draggable);
    }
    const folder = /* @__PURE__ */ external_react_default.a.createElement("tr", {
      className: external_classnames_default()("folder", {
        pending: action,
        dragging: isDragging,
        dragover: isOver,
        selected: isSelected
      }),
      onClick: this.handleFolderClick,
      onDoubleClick: this.handleFolderDoubleClick
    }, /* @__PURE__ */ external_react_default.a.createElement("td", {
      className: "name"
    }, /* @__PURE__ */ external_react_default.a.createElement("div", {
      style: {paddingLeft: depth * 16 + "px"}
    }, draggable)), /* @__PURE__ */ external_react_default.a.createElement("td", null), /* @__PURE__ */ external_react_default.a.createElement("td", null));
    return this.connectDND(folder);
  }
}
const TableFolder = flow_default()(Object(external_react_dnd_["DragSource"])("folder", BaseFolderConnectors.dragSource, BaseFolderConnectors.dragCollect), Object(external_react_dnd_["DropTarget"])(["file", "folder", external_react_dnd_html5_backend_["NativeTypes"].FILE], BaseFileConnectors.targetSource, BaseFileConnectors.targetCollect))(table_RawTableFolder);
/* harmony default export */ var folders_table = (TableFolder);


// CONCATENATED MODULE: ./src/folders/index.js




// CONCATENATED MODULE: ./src/confirmations/default.js


const ConfirmDeletion = (props) => {
  const {
    children,
    handleDeleteSubmit,
    handleFileClick,
    url
  } = props;
  return /* @__PURE__ */ external_react_default.a.createElement("form", {
    className: "deleting",
    onSubmit: handleDeleteSubmit
  }, /* @__PURE__ */ external_react_default.a.createElement("a", {
    href: url,
    download: "download",
    onClick: handleFileClick
  }, children), /* @__PURE__ */ external_react_default.a.createElement("div", null, /* @__PURE__ */ external_react_default.a.createElement("button", {
    type: "submit"
  }, "Confirm Deletion")));
};
ConfirmDeletion.propTypes = {
  children: external_prop_types_default.a.node,
  handleDeleteSubmit: external_prop_types_default.a.func,
  handleFileClick: external_prop_types_default.a.func,
  url: external_prop_types_default.a.string
};
ConfirmDeletion.defaultProps = {
  url: "#"
};
/* harmony default export */ var confirmations_default = (ConfirmDeletion);

// CONCATENATED MODULE: ./src/confirmations/multiple.js


const MultipleConfirmDeletion = (props) => {
  const {
    handleDeleteSubmit
  } = props;
  return /* @__PURE__ */ external_react_default.a.createElement("button", {
    className: "deleting",
    onClick: handleDeleteSubmit
  }, "Confirm Deletion");
};
MultipleConfirmDeletion.propTypes = {
  handleDeleteSubmit: external_prop_types_default.a.func
};
/* harmony default export */ var multiple = (MultipleConfirmDeletion);

// CONCATENATED MODULE: ./src/confirmations/index.js




// CONCATENATED MODULE: ./src/groupers/by-folder.js
var by_folder_defProp = Object.defineProperty;
var by_folder_defProps = Object.defineProperties;
var by_folder_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var by_folder_getOwnPropSymbols = Object.getOwnPropertySymbols;
var by_folder_hasOwnProp = Object.prototype.hasOwnProperty;
var by_folder_propIsEnum = Object.prototype.propertyIsEnumerable;
var by_folder_defNormalProp = (obj, key, value) => key in obj ? by_folder_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var by_folder_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (by_folder_hasOwnProp.call(b, prop))
      by_folder_defNormalProp(a, prop, b[prop]);
  if (by_folder_getOwnPropSymbols)
    for (var prop of by_folder_getOwnPropSymbols(b)) {
      if (by_folder_propIsEnum.call(b, prop))
        by_folder_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var by_folder_spreadProps = (a, b) => by_folder_defProps(a, by_folder_getOwnPropDescs(b));

/* harmony default export */ var by_folder = (function(files, root) {
  const fileTree = {
    contents: [],
    children: {}
  };
  files.map((file) => {
    file.relativeKey = (file.newKey || file.key).substr(root.length);
    let currentFolder = fileTree;
    const folders = file.relativeKey.split("/");
    folders.map((folder, folderIndex) => {
      if (folderIndex === folders.length - 1 && utils_isFolder(file)) {
        for (const key in file) {
          currentFolder[key] = file[key];
        }
      }
      if (folder === "") {
        return;
      }
      const isAFile = !utils_isFolder(file) && folderIndex === folders.length - 1;
      if (isAFile) {
        currentFolder.contents.push(by_folder_spreadProps(by_folder_spreadValues({}, file), {
          keyDerived: true
        }));
      } else {
        if (folder in currentFolder.children === false) {
          currentFolder.children[folder] = {
            contents: [],
            children: {}
          };
        }
        currentFolder = currentFolder.children[folder];
      }
    });
  });
  function addAllChildren(level, prefix) {
    if (prefix !== "") {
      prefix += "/";
    }
    let files2 = [];
    for (const folder in level.children) {
      files2.push(by_folder_spreadProps(by_folder_spreadValues({}, level.children[folder]), {
        contents: void 0,
        keyDerived: true,
        key: root + prefix + folder + "/",
        relativeKey: prefix + folder + "/",
        children: addAllChildren(level.children[folder], prefix + folder),
        size: 0
      }));
    }
    files2 = files2.concat(level.contents);
    return files2;
  }
  files = addAllChildren(fileTree, "");
  return files;
});

// CONCATENATED MODULE: ./src/groupers/utils.js

function relativeTimeWindows() {
  const windows = [];
  const now = new Date();
  windows.push({
    name: "Today",
    begins: Object(external_date_fns_["startOfToday"])(),
    ends: Object(external_date_fns_["endOfToday"])(),
    items: []
  });
  windows.push({
    name: "Yesterday",
    begins: Object(external_date_fns_["startOfYesterday"])(),
    ends: Object(external_date_fns_["endOfYesterday"])(),
    items: []
  });
  windows.push({
    name: "Earlier this Week",
    begins: Object(external_date_fns_["startOfWeek"])(now),
    ends: Object(external_date_fns_["endOfWeek"])(now),
    items: []
  });
  windows.push({
    name: "Last Week",
    begins: Object(external_date_fns_["startOfWeek"])(Object(external_date_fns_["addWeeks"])(now, -1)),
    ends: Object(external_date_fns_["endOfWeek"])(Object(external_date_fns_["addWeeks"])(now, -1)),
    items: []
  });
  if (Object(external_date_fns_["getMonth"])(windows[windows.length - 1].begins) === Object(external_date_fns_["getMonth"])(now)) {
    windows.push({
      name: "Earlier this Month",
      begins: Object(external_date_fns_["startOfMonth"])(now),
      ends: Object(external_date_fns_["endOfMonth"])(now),
      items: []
    });
  }
  return windows;
}


// CONCATENATED MODULE: ./src/groupers/by-modified.js
var by_modified_defProp = Object.defineProperty;
var by_modified_defProps = Object.defineProperties;
var by_modified_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var by_modified_getOwnPropSymbols = Object.getOwnPropertySymbols;
var by_modified_hasOwnProp = Object.prototype.hasOwnProperty;
var by_modified_propIsEnum = Object.prototype.propertyIsEnumerable;
var by_modified_defNormalProp = (obj, key, value) => key in obj ? by_modified_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var by_modified_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (by_modified_hasOwnProp.call(b, prop))
      by_modified_defNormalProp(a, prop, b[prop]);
  if (by_modified_getOwnPropSymbols)
    for (var prop of by_modified_getOwnPropSymbols(b)) {
      if (by_modified_propIsEnum.call(b, prop))
        by_modified_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var by_modified_spreadProps = (a, b) => by_modified_defProps(a, by_modified_getOwnPropDescs(b));



/* harmony default export */ var by_modified = (function(files, root) {
  const timeWindows = relativeTimeWindows();
  for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
    const file = files[fileIndex];
    if (utils_isFolder(file)) {
      continue;
    }
    const newFile = by_modified_spreadProps(by_modified_spreadValues({}, file), {
      keyDerived: true
    });
    let allocated = false;
    const fileModified = +newFile.modified;
    for (let windex = 0; windex < timeWindows.length; windex++) {
      const timeWindow = timeWindows[windex];
      if (fileModified > +timeWindow.begins && fileModified <= +timeWindow.ends) {
        timeWindow.items.push(newFile);
        allocated = true;
        break;
      }
    }
    if (!allocated) {
      const newWindow = {
        name: Object(external_date_fns_["format"])(newFile.modified, "MMMM yyyy"),
        begins: Object(external_date_fns_["startOfMonth"])(newFile.modified),
        ends: Object(external_date_fns_["endOfMonth"])(newFile.modified),
        items: []
      };
      newWindow.items.push(newFile);
      timeWindows.push(newWindow);
    }
  }
  const grouped = [];
  for (let windex = 0; windex < timeWindows.length; windex++) {
    const timeWindow = timeWindows[windex];
    if (!timeWindow.items.length) {
      continue;
    }
    grouped.push({
      key: `${timeWindow.name.toLowerCase().replace(" ", "_")}/`,
      name: timeWindow.name,
      children: timeWindow.items,
      size: 0
    });
  }
  return grouped;
});

// CONCATENATED MODULE: ./src/groupers/index.js




// CONCATENATED MODULE: ./src/sorters/utils.js
const NUMBER_GROUPS = /(-?\d*\.?\d+)/g;
function naturalSortComparer(a, b) {
  const aa = String(a.name).split(NUMBER_GROUPS);
  const bb = String(b.name).split(NUMBER_GROUPS);
  const min = Math.min(aa.length, bb.length);
  for (let i = 0; i < min; i++) {
    const x = parseFloat(aa[i]) || aa[i].toLowerCase();
    const y = parseFloat(bb[i]) || bb[i].toLowerCase();
    if (x < y)
      return -1;
    else if (x > y)
      return 1;
  }
  return 0;
}


// CONCATENATED MODULE: ./src/sorters/by-name.js

function naturalDraftComparer(a, b) {
  if (a.draft && !b.draft) {
    return 1;
  } else if (b.draft && !a.draft) {
    return -1;
  }
  return naturalSortComparer(a, b);
}
function naturalSort(allFiles) {
  let folders = [];
  let files = [];
  for (let fileIndex = 0; fileIndex < allFiles.length; fileIndex++) {
    const file = allFiles[fileIndex];
    const keyFolders = (file.newKey || file.key).split("/");
    if (file.children) {
      if (!file.name) {
        file.name = keyFolders[keyFolders.length - 2];
      }
      folders.push(file);
    } else {
      if (!file.name) {
        file.name = keyFolders[keyFolders.length - 1];
      }
      files.push(file);
    }
  }
  files = files.sort(naturalSortComparer);
  folders = folders.sort(naturalDraftComparer);
  for (let folderIndex = 0; folderIndex < folders.length; folderIndex++) {
    const folder = folders[folderIndex];
    folder.children = naturalSort(folder.children);
  }
  let sortedFiles = [];
  sortedFiles = sortedFiles.concat(folders);
  sortedFiles = sortedFiles.concat(files);
  return sortedFiles;
}
/* harmony default export */ var by_name = (function(files) {
  return naturalSort(files);
});

// CONCATENATED MODULE: ./src/sorters/by-modified.js

function lastModifiedSort(allFiles) {
  const folders = [];
  let files = [];
  for (let fileIndex = 0; fileIndex < allFiles.length; fileIndex++) {
    const file = allFiles[fileIndex];
    const keyFolders = (file.newKey || file.key).split("/");
    if (file.children) {
      folders.push(file);
    } else {
      file.name = keyFolders[keyFolders.length - 1];
      files.push(file);
    }
  }
  files = files.sort(external_date_fns_["compareAsc"]);
  for (let folderIndex = 0; folderIndex < folders.length; folderIndex++) {
    const folder = folders[folderIndex];
    folder.children = lastModifiedSort(folder.children);
  }
  let sortedFiles = [];
  sortedFiles = sortedFiles.concat(folders);
  sortedFiles = sortedFiles.concat(files);
  return sortedFiles;
}
/* harmony default export */ var sorters_by_modified = (function(files) {
  return lastModifiedSort(files);
});

// CONCATENATED MODULE: ./src/sorters/index.js




// CONCATENATED MODULE: ./src/actions/default.js


const Actions = (props) => {
  const {
    selectedItems,
    isFolder,
    icons,
    nameFilter,
    canCreateFolder,
    onCreateFolder,
    canRenameFile,
    onRenameFile,
    canRenameFolder,
    onRenameFolder,
    canDeleteFile,
    onDeleteFile,
    canDeleteFolder,
    onDeleteFolder,
    canDownloadFile,
    onDownloadFile,
    canDownloadFolder,
    onDownloadFolder
  } = props;
  let actions = [];
  if (selectedItems.length) {
    const selectedItemsAction = selectedItems.filter((item) => item.action);
    if (selectedItemsAction.length === selectedItems.length && [...new Set(selectedItemsAction)].length === 1) {
      let actionText;
      switch (selectedItemsAction[0].action) {
        case "delete":
          actionText = "Deleting ...";
          break;
        case "rename":
          actionText = "Renaming ...";
          break;
        default:
          actionText = "Moving ...";
          break;
      }
      actions = /* @__PURE__ */ external_react_default.a.createElement("div", {
        className: "item-actions"
      }, icons.Loading, " ", actionText);
    } else {
      if (isFolder && canCreateFolder && !nameFilter) {
        actions.push(/* @__PURE__ */ external_react_default.a.createElement("li", {
          key: "action-add-folder"
        }, /* @__PURE__ */ external_react_default.a.createElement("a", {
          onClick: onCreateFolder,
          href: "#",
          role: "button"
        }, icons.Folder, "\xA0Add Subfolder")));
      }
      const itemsWithoutKeyDerived = selectedItems.find((item) => !item.keyDerived);
      if (!itemsWithoutKeyDerived && !isFolder && canRenameFile && selectedItems.length === 1) {
        actions.push(/* @__PURE__ */ external_react_default.a.createElement("li", {
          key: "action-rename"
        }, /* @__PURE__ */ external_react_default.a.createElement("a", {
          onClick: onRenameFile,
          href: "#",
          role: "button"
        }, icons.Rename, "\xA0Rename")));
      } else if (!itemsWithoutKeyDerived && isFolder && canRenameFolder) {
        actions.push(/* @__PURE__ */ external_react_default.a.createElement("li", {
          key: "action-rename"
        }, /* @__PURE__ */ external_react_default.a.createElement("a", {
          onClick: onRenameFolder,
          href: "#",
          role: "button"
        }, icons.Rename, "\xA0Rename")));
      }
      if (!itemsWithoutKeyDerived && !isFolder && canDeleteFile) {
        actions.push(/* @__PURE__ */ external_react_default.a.createElement("li", {
          key: "action-delete"
        }, /* @__PURE__ */ external_react_default.a.createElement("a", {
          onClick: onDeleteFile,
          href: "#",
          role: "button"
        }, icons.Delete, "\xA0Delete")));
      } else if (!itemsWithoutKeyDerived && isFolder && canDeleteFolder) {
        actions.push(/* @__PURE__ */ external_react_default.a.createElement("li", {
          key: "action-delete"
        }, /* @__PURE__ */ external_react_default.a.createElement("a", {
          onClick: onDeleteFolder,
          href: "#",
          role: "button"
        }, icons.Delete, "\xA0Delete")));
      }
      if (!isFolder && canDownloadFile || isFolder && canDownloadFolder) {
        actions.push(/* @__PURE__ */ external_react_default.a.createElement("li", {
          key: "action-download"
        }, /* @__PURE__ */ external_react_default.a.createElement("a", {
          onClick: isFolder ? onDownloadFolder : onDownloadFile,
          href: "#",
          role: "button"
        }, icons.Download, "\xA0Download")));
      }
      if (actions.length) {
        actions = /* @__PURE__ */ external_react_default.a.createElement("ul", {
          className: "item-actions"
        }, actions);
      } else {
        actions = /* @__PURE__ */ external_react_default.a.createElement("div", {
          className: "item-actions"
        }, "\xA0");
      }
    }
  } else {
    if (canCreateFolder && !nameFilter) {
      actions.push(/* @__PURE__ */ external_react_default.a.createElement("li", {
        key: "action-add-folder"
      }, /* @__PURE__ */ external_react_default.a.createElement("a", {
        onClick: onCreateFolder,
        href: "#",
        role: "button"
      }, icons.Folder, "\xA0Add Folder")));
    }
    if (actions.length) {
      actions = /* @__PURE__ */ external_react_default.a.createElement("ul", {
        className: "item-actions"
      }, actions);
    } else {
      actions = /* @__PURE__ */ external_react_default.a.createElement("div", {
        className: "item-actions"
      }, "\xA0");
    }
  }
  return actions;
};
Actions.propTypes = {
  selectedItems: external_prop_types_default.a.arrayOf(external_prop_types_default.a.object),
  isFolder: external_prop_types_default.a.bool,
  icons: external_prop_types_default.a.object,
  nameFilter: external_prop_types_default.a.string,
  canCreateFolder: external_prop_types_default.a.bool,
  onCreateFolder: external_prop_types_default.a.func,
  canRenameFile: external_prop_types_default.a.bool,
  onRenameFile: external_prop_types_default.a.func,
  canRenameFolder: external_prop_types_default.a.bool,
  onRenameFolder: external_prop_types_default.a.func,
  canDeleteFile: external_prop_types_default.a.bool,
  onDeleteFile: external_prop_types_default.a.func,
  canDeleteFolder: external_prop_types_default.a.bool,
  onDeleteFolder: external_prop_types_default.a.func,
  canDownloadFile: external_prop_types_default.a.bool,
  onDownloadFile: external_prop_types_default.a.func,
  canDownloadFolder: external_prop_types_default.a.bool,
  onDownloadFolder: external_prop_types_default.a.func
};
Actions.defaultProps = {
  selectedItems: [],
  isFolder: false,
  icons: {},
  nameFilter: "",
  canCreateFolder: false,
  onCreateFolder: null,
  canRenameFile: false,
  onRenameFile: null,
  canRenameFolder: false,
  onRenameFolder: null,
  canDeleteFile: false,
  onDeleteFile: null,
  canDeleteFolder: false,
  onDeleteFolder: null,
  canDownloadFile: false,
  onDownloadFile: null,
  canDownloadFolder: false,
  onDownloadFolder: null
};
/* harmony default export */ var actions_default = (Actions);

// CONCATENATED MODULE: ./src/actions/index.js



// CONCATENATED MODULE: ./src/browser.js
var browser_defProp = Object.defineProperty;
var browser_defProps = Object.defineProperties;
var browser_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var browser_getOwnPropSymbols = Object.getOwnPropertySymbols;
var browser_hasOwnProp = Object.prototype.hasOwnProperty;
var browser_propIsEnum = Object.prototype.propertyIsEnumerable;
var browser_defNormalProp = (obj, key, value) => key in obj ? browser_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var browser_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (browser_hasOwnProp.call(b, prop))
      browser_defNormalProp(a, prop, b[prop]);
  if (browser_getOwnPropSymbols)
    for (var prop of browser_getOwnPropSymbols(b)) {
      if (browser_propIsEnum.call(b, prop))
        browser_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var browser_spreadProps = (a, b) => browser_defProps(a, browser_getOwnPropDescs(b));
var browser_publicField = (obj, key, value) => {
  browser_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};














const SEARCH_RESULTS_PER_PAGE = 20;
const regexForNewFolderOrFileSelection = /.*\/__new__[/]?$/gm;
function getItemProps(file, browserProps) {
  return {
    key: `file-${file.key}`,
    fileKey: file.key,
    isSelected: browserProps.selection.includes(file.key),
    isOpen: file.key in browserProps.openFolders || browserProps.nameFilter,
    isRenaming: browserProps.activeAction === "rename" && browserProps.actionTargets.includes(file.key),
    isDeleting: browserProps.activeAction === "delete" && browserProps.actionTargets.includes(file.key),
    isDraft: !!file.draft
  };
}
class browser_RawFileBrowser extends external_react_default.a.Component {
  constructor() {
    super(...arguments);
    browser_publicField(this, "state", {
      openFolders: {},
      selection: [],
      activeAction: null,
      actionTargets: [],
      nameFilter: "",
      searchResultsShown: SEARCH_RESULTS_PER_PAGE,
      previewFile: null,
      addFolder: null
    });
    browser_publicField(this, "getFile", (key) => {
      let hasPrefix = false;
      const exactFolder = this.props.files.find((f) => {
        if (f.key.startsWith(key)) {
          hasPrefix = true;
        }
        return f.key === key;
      });
      if (exactFolder) {
        return exactFolder;
      }
      if (hasPrefix) {
        return {key, modified: 0, size: 0, relativeKey: key};
      }
    });
    browser_publicField(this, "selectFiles", (selectedFiles) => {
      console.log("select files", selectedFiles);
      const fileSelection = [];
      selectedFiles.map((file) => {
        const pathArr = file.split("/");
        const currentPath = [];
        pathArr.map((pathPart, index) => {
          if (pathPart) {
            currentPath.push(pathPart);
            if (index !== pathArr.length - 1) {
              console.log("openFolder", currentPath.join("/"));
              this.openFolder(currentPath.join("/") + "/");
            } else {
              console.log("newSelection", currentPath.join("/"));
              if (!fileSelection.includes(currentPath.join("/"))) {
                fileSelection.push(currentPath.join("/"));
              }
            }
          }
        });
        this.setState({
          selection: fileSelection
        }, () => {
          console.log("selection set");
        });
      });
    });
    browser_publicField(this, "createFiles", (files, prefix) => {
      this.setState((prevState) => {
        const stateChanges = {selection: []};
        if (prefix) {
          stateChanges.openFolders = browser_spreadProps(browser_spreadValues({}, prevState.openFolders), {
            [prefix]: true
          });
        }
        return stateChanges;
      }, () => {
        this.props.onCreateFiles(files, prefix);
      });
    });
    browser_publicField(this, "createFolder", (key) => {
      this.setState({
        activeAction: null,
        actionTargets: [],
        selection: [key]
      }, () => {
        this.props.onCreateFolder(key);
      });
    });
    browser_publicField(this, "moveFile", (oldKey, newKey) => {
      this.setState({
        activeAction: null,
        actionTargets: [],
        selection: [newKey]
      }, () => {
        this.props.onMoveFile(oldKey, newKey);
      });
    });
    browser_publicField(this, "moveFolder", (oldKey, newKey) => {
      this.setState((prevState) => {
        const stateChanges = {
          activeAction: null,
          actionTargets: [],
          selection: [newKey]
        };
        if (oldKey in prevState.openFolders) {
          stateChanges.openFolders = browser_spreadProps(browser_spreadValues({}, prevState.openFolders), {
            [newKey]: true
          });
        }
        return stateChanges;
      }, () => {
        this.props.onMoveFolder(oldKey, newKey);
      });
    });
    browser_publicField(this, "renameFile", (oldKey, newKey) => {
      this.setState({
        activeAction: null,
        actionTargets: [],
        selection: [newKey]
      }, () => {
        this.props.onRenameFile(oldKey, newKey);
      });
    });
    browser_publicField(this, "renameFolder", (oldKey, newKey) => {
      this.setState((prevState) => {
        const stateChanges = {
          activeAction: null,
          actionTargets: []
        };
        if (prevState.selection[0].substr(0, oldKey.length) === oldKey) {
          stateChanges.selection = [prevState.selection[0].replace(oldKey, newKey)];
        }
        if (oldKey in prevState.openFolders) {
          stateChanges.openFolders = browser_spreadProps(browser_spreadValues({}, prevState.openFolders), {
            [newKey]: true
          });
        }
        return stateChanges;
      }, () => {
        this.props.onRenameFolder(oldKey, newKey);
      });
    });
    browser_publicField(this, "deleteFile", (keys) => {
      this.setState({
        activeAction: null,
        actionTargets: [],
        selection: []
      }, () => {
        this.props.onDeleteFile(keys);
      });
    });
    browser_publicField(this, "deleteFolder", (key) => {
      this.setState((prevState) => {
        const stateChanges = {
          activeAction: null,
          actionTargets: [],
          selection: []
        };
        if (key in prevState.openFolders) {
          stateChanges.openFolders = browser_spreadValues({}, prevState.openFolders);
          delete stateChanges.openFolders[key];
        }
        return stateChanges;
      }, () => {
        this.props.onDeleteFolder(key);
      });
    });
    browser_publicField(this, "downloadFile", (keys) => {
      this.setState({
        activeAction: null,
        actionTargets: []
      }, () => {
        this.props.onDownloadFile(keys);
      });
    });
    browser_publicField(this, "downloadFolder", (keys) => {
      this.setState({
        activeAction: null,
        actionTargets: []
      }, () => {
        this.props.onDownloadFolder(keys);
      });
    });
    browser_publicField(this, "beginAction", (action, keys) => {
      this.setState({
        activeAction: action,
        actionTargets: keys || []
      });
    });
    browser_publicField(this, "endAction", () => {
      if (this.state.selection && this.state.selection.length > 0 && this.state.selection.filter((selection) => selection.match(regexForNewFolderOrFileSelection)).length > 0) {
        this.setState({selection: []});
      }
      this.beginAction(null, null);
    });
    browser_publicField(this, "select", (key, selectedType, ctrlKey, shiftKey) => {
      const {actionTargets} = this.state;
      const shouldClearState = actionTargets.length && !actionTargets.includes(key);
      const selected = this.getFile(key);
      let newSelection = [key];
      if (ctrlKey || shiftKey) {
        const indexOfKey = this.state.selection.indexOf(key);
        if (indexOfKey !== -1) {
          newSelection = [...this.state.selection.slice(0, indexOfKey), ...this.state.selection.slice(indexOfKey + 1)];
        } else {
          newSelection = [...this.state.selection, key];
        }
      }
      this.setState((prevState) => ({
        selection: newSelection,
        actionTargets: shouldClearState ? [] : actionTargets,
        activeAction: shouldClearState ? null : prevState.activeAction
      }), () => {
        this.props.onSelect(selected);
        if (selectedType === "file")
          this.props.onSelectFile(selected);
        if (selectedType === "folder")
          this.props.onSelectFolder(selected);
      });
    });
    browser_publicField(this, "preview", (file) => {
      if (this.state.previewFile && this.state.previewFile.key !== file.key)
        this.closeDetail();
      this.setState({
        previewFile: file
      }, () => {
        this.props.onPreviewOpen(file);
      });
    });
    browser_publicField(this, "closeDetail", () => {
      this.setState({
        previewFile: null
      }, () => {
        this.props.onPreviewClose(this.state.previewFile);
      });
    });
    browser_publicField(this, "handleShowMoreClick", (event) => {
      event.preventDefault();
      this.setState((prevState) => ({
        searchResultsShown: prevState.searchResultsShown + SEARCH_RESULTS_PER_PAGE
      }));
    });
    browser_publicField(this, "toggleFolder", (folderKey) => {
      const isOpen = folderKey in this.state.openFolders;
      this.setState((prevState) => {
        const stateChanges = {
          openFolders: browser_spreadValues({}, prevState.openFolders)
        };
        if (isOpen) {
          delete stateChanges.openFolders[folderKey];
        } else {
          stateChanges.openFolders[folderKey] = true;
        }
        return stateChanges;
      }, () => {
        const callback = isOpen ? "onFolderClose" : "onFolderOpen";
        this.props[callback](this.getFile(folderKey), this.getBrowserProps());
      });
    });
    browser_publicField(this, "openFolder", (folderKey) => {
      this.setState((prevState) => ({
        openFolders: browser_spreadProps(browser_spreadValues({}, prevState.openFolders), {
          [folderKey]: true
        })
      }), () => {
        this.props.onFolderOpen(this.getFile(folderKey), this.getBrowserProps());
      });
    });
    browser_publicField(this, "handleGlobalClick", (event) => {
      const inBrowser = !!(this.browserRef && this.browserRef.contains(event.target));
      if (!inBrowser) {
        this.setState({
          selection: [],
          actionTargets: [],
          activeAction: null
        });
      }
    });
    browser_publicField(this, "handleActionBarRenameClick", (event) => {
      event.preventDefault();
      this.beginAction("rename", this.state.selection);
    });
    browser_publicField(this, "handleActionBarDeleteClick", (event) => {
      event.preventDefault();
      this.beginAction("delete", this.state.selection);
    });
    browser_publicField(this, "handleActionBarAddFolderClick", (event) => {
      event.preventDefault();
      if (this.state.activeAction === "createFolder") {
        return;
      }
      this.setState((prevState) => {
        let addKey = "";
        if (prevState.selection && prevState.selection.length > 0) {
          addKey += prevState.selection;
          if (addKey.substr(addKey.length - 1, addKey.length) !== "/") {
            addKey += "/";
          }
        }
        if (addKey !== "__new__/" && !addKey.endsWith("/__new__/"))
          addKey += "__new__/";
        const stateChanges = {
          actionTargets: [addKey],
          activeAction: "createFolder",
          selection: [addKey]
        };
        if (prevState.selection && prevState.selection.length > 0) {
          stateChanges.openFolders = browser_spreadProps(browser_spreadValues({}, prevState.openFolders), {
            [this.state.selection]: true
          });
        }
        return stateChanges;
      });
    });
    browser_publicField(this, "handleActionBarDownloadClick", (event) => {
      event.preventDefault();
      const files = this.getFiles();
      const selectedItems = this.getSelectedItems(files);
      const selectionIsFolder = selectedItems.length === 1 && utils_isFolder(selectedItems[0]);
      if (selectionIsFolder) {
        this.downloadFolder(this.state.selection);
        return;
      }
      this.downloadFile(this.state.selection);
    });
    browser_publicField(this, "updateFilter", (newValue) => {
      this.setState({
        nameFilter: newValue,
        searchResultsShown: SEARCH_RESULTS_PER_PAGE
      });
    });
    browser_publicField(this, "handleMultipleDeleteSubmit", () => {
      console.log(this);
      this.deleteFolder(this.state.selection.filter((selection) => selection[selection.length - 1] === "/"));
      this.deleteFile(this.state.selection.filter((selection) => selection[selection.length - 1] !== "/"));
    });
  }
  componentDidMount() {
    console.log("browser did mount", this.props);
    if (this.props.renderStyle === "table" && this.props.nestChildren) {
      console.warn("Invalid settings: Cannot nest table children in file browser");
    }
    window.addEventListener("click", this.handleGlobalClick);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.handleGlobalClick);
  }
  getBrowserProps() {
    return {
      nestChildren: this.props.nestChildren,
      fileRenderer: this.props.fileRenderer,
      fileRendererProps: this.props.fileRendererProps,
      folderRenderer: this.props.folderRenderer,
      folderRendererProps: this.props.folderRendererProps,
      confirmDeletionRenderer: this.props.confirmDeletionRenderer,
      confirmMultipleDeletionRenderer: this.props.confirmMultipleDeletionRenderer,
      icons: this.props.icons,
      openFolders: this.state.openFolders,
      nameFilter: this.state.nameFilter,
      selection: this.state.selection,
      activeAction: this.state.activeAction,
      actionTargets: this.state.actionTargets,
      select: this.select,
      openFolder: this.openFolder,
      toggleFolder: this.toggleFolder,
      beginAction: this.beginAction,
      endAction: this.endAction,
      preview: this.preview,
      createFiles: this.props.onCreateFiles ? this.createFiles : void 0,
      createFolder: this.props.onCreateFolder ? this.createFolder : void 0,
      renameFile: this.props.onRenameFile ? this.renameFile : void 0,
      renameFolder: this.props.onRenameFolder ? this.renameFolder : void 0,
      moveFile: this.props.onMoveFile ? this.moveFile : void 0,
      moveFolder: this.props.onMoveFolder ? this.moveFolder : void 0,
      deleteFile: this.props.onDeleteFile ? this.deleteFile : void 0,
      deleteFolder: this.props.onDeleteFolder ? this.deleteFolder : void 0,
      getItemProps
    };
  }
  renderActionBar(selectedItems) {
    const {
      icons,
      canFilter,
      filterRendererProps,
      filterRenderer: FilterRenderer,
      actionRenderer: ActionRenderer,
      onCreateFolder,
      onRenameFile,
      onRenameFolder,
      onDeleteFile,
      onDeleteFolder,
      onDownloadFile,
      onDownloadFolder
    } = this.props;
    const browserProps = this.getBrowserProps();
    const selectionIsFolder = selectedItems.length === 1 && utils_isFolder(selectedItems[0]);
    let filter;
    if (canFilter) {
      filter = /* @__PURE__ */ external_react_default.a.createElement(FilterRenderer, browser_spreadValues({
        value: this.state.nameFilter,
        updateFilter: this.updateFilter
      }, filterRendererProps));
    }
    const actions = /* @__PURE__ */ external_react_default.a.createElement(ActionRenderer, {
      browserProps,
      selectedItems,
      isFolder: selectionIsFolder,
      icons,
      nameFilter: this.state.nameFilter,
      canCreateFolder: typeof onCreateFolder === "function",
      onCreateFolder: this.handleActionBarAddFolderClick,
      canRenameFile: typeof onRenameFile === "function",
      onRenameFile: this.handleActionBarRenameClick,
      canRenameFolder: typeof onRenameFolder === "function",
      onRenameFolder: this.handleActionBarRenameClick,
      canDeleteFile: typeof onDeleteFile === "function",
      onDeleteFile: this.handleActionBarDeleteClick,
      canDeleteFolder: typeof onDeleteFolder === "function",
      onDeleteFolder: this.handleActionBarDeleteClick,
      canDownloadFile: typeof onDownloadFile === "function",
      onDownloadFile: this.handleActionBarDownloadClick,
      canDownloadFolder: typeof onDownloadFolder === "function",
      onDownloadFolder: this.handleActionBarDownloadClick
    });
    return /* @__PURE__ */ external_react_default.a.createElement("div", {
      className: "action-bar"
    }, filter, actions);
  }
  renderFiles(files, depth) {
    const {
      fileRenderer: FileRenderer,
      fileRendererProps,
      folderRenderer: FolderRenderer,
      folderRendererProps
    } = this.props;
    const browserProps = this.getBrowserProps();
    let renderedFiles = [];
    files.map((file) => {
      const thisItemProps = browser_spreadProps(browser_spreadValues({}, browserProps.getItemProps(file, browserProps)), {
        depth: this.state.nameFilter ? 0 : depth
      });
      if (!utils_isFolder(file)) {
        renderedFiles.push(/* @__PURE__ */ external_react_default.a.createElement(FileRenderer, browser_spreadValues(browser_spreadProps(browser_spreadValues(browser_spreadValues({}, file), thisItemProps), {
          browserProps
        }), fileRendererProps)));
      } else {
        if (this.props.showFoldersOnFilter || !this.state.nameFilter) {
          renderedFiles.push(/* @__PURE__ */ external_react_default.a.createElement(FolderRenderer, browser_spreadValues(browser_spreadProps(browser_spreadValues(browser_spreadValues({}, file), thisItemProps), {
            browserProps
          }), folderRendererProps)));
        }
        if (this.state.nameFilter || thisItemProps.isOpen && !browserProps.nestChildren) {
          renderedFiles = renderedFiles.concat(this.renderFiles(file.children, depth + 1));
        }
      }
    });
    return renderedFiles;
  }
  getFiles() {
    let files = this.props.files.concat([]);
    if (this.state.activeAction === "createFolder") {
      files.push({
        key: this.state.actionTargets[0],
        size: 0,
        draft: true
      });
    }
    if (this.state.nameFilter) {
      const filteredFiles = [];
      const terms = this.state.nameFilter.toLowerCase().split(" ");
      files.map((file) => {
        let skip = false;
        terms.map((term) => {
          if (file.key.toLowerCase().trim().indexOf(term) === -1) {
            skip = true;
          }
        });
        if (skip) {
          return;
        }
        filteredFiles.push(file);
      });
      files = filteredFiles;
    }
    if (typeof this.props.group === "function") {
      files = this.props.group(files, "");
    } else {
      const newFiles = [];
      files.map((file) => {
        if (!utils_isFolder(file)) {
          newFiles.push(file);
        }
      });
      files = newFiles;
    }
    if (typeof this.props.sort === "function") {
      files = this.props.sort(files);
    }
    return files;
  }
  getSelectedItems(files) {
    const {selection} = this.state;
    const selectedItems = [];
    const findSelected = (item) => {
      if (selection.includes(item.key)) {
        selectedItems.push(item);
      }
      if (item.children) {
        item.children.map(findSelected);
      }
    };
    files.map(findSelected);
    return selectedItems;
  }
  render() {
    const browserProps = this.getBrowserProps();
    const headerProps = {
      browserProps,
      fileKey: "",
      fileCount: this.props.files.length
    };
    let renderedFiles;
    console.log("browser render");
    const files = this.getFiles();
    const selectedItems = this.getSelectedItems(files);
    let header;
    let contents = this.renderFiles(files, 0);
    switch (this.props.renderStyle) {
      case "table":
        if (!contents.length) {
          if (this.state.nameFilter) {
            contents = /* @__PURE__ */ external_react_default.a.createElement("tr", null, /* @__PURE__ */ external_react_default.a.createElement("td", {
              colSpan: 100
            }, this.props.noMatchingFilesMessage(this.state.nameFilter)));
          } else {
            contents = /* @__PURE__ */ external_react_default.a.createElement("tr", null, /* @__PURE__ */ external_react_default.a.createElement("td", {
              colSpan: 100
            }, this.props.noFilesMessage));
          }
        } else {
          if (this.state.nameFilter) {
            const numFiles = contents.length;
            contents = contents.slice(0, this.state.searchResultsShown);
            if (numFiles > contents.length) {
              contents.push(/* @__PURE__ */ external_react_default.a.createElement("tr", {
                key: "show-more"
              }, /* @__PURE__ */ external_react_default.a.createElement("td", {
                colSpan: 100
              }, /* @__PURE__ */ external_react_default.a.createElement("a", {
                onClick: this.handleShowMoreClick,
                href: "#"
              }, this.props.showMoreResults))));
            }
          }
        }
        if (this.props.headerRenderer) {
          header = /* @__PURE__ */ external_react_default.a.createElement("thead", null, /* @__PURE__ */ external_react_default.a.createElement(this.props.headerRenderer, browser_spreadValues(browser_spreadValues({}, headerProps), this.props.headerRendererProps)));
        }
        renderedFiles = /* @__PURE__ */ external_react_default.a.createElement("table", {
          cellSpacing: "0",
          cellPadding: "0"
        }, header, /* @__PURE__ */ external_react_default.a.createElement("tbody", null, contents));
        break;
      case "list":
        if (!contents.length) {
          if (this.state.nameFilter) {
            contents = /* @__PURE__ */ external_react_default.a.createElement("p", {
              className: "empty"
            }, this.props.noMatchingFilesMessage(this.state.nameFilter));
          } else {
            contents = /* @__PURE__ */ external_react_default.a.createElement("p", {
              className: "empty"
            }, this.props.noFilesMessage);
          }
        } else {
          let more;
          if (this.state.nameFilter) {
            const numFiles = contents.length;
            contents = contents.slice(0, this.state.searchResultsShown);
            if (numFiles > contents.length) {
              more = /* @__PURE__ */ external_react_default.a.createElement("a", {
                onClick: this.handleShowMoreClick,
                href: "#"
              }, this.props.showMoreResults);
            }
          }
          contents = /* @__PURE__ */ external_react_default.a.createElement("div", null, /* @__PURE__ */ external_react_default.a.createElement("ul", null, contents), more);
        }
        if (this.props.headerRenderer) {
          header = /* @__PURE__ */ external_react_default.a.createElement(this.props.headerRenderer, browser_spreadValues(browser_spreadValues({}, headerProps), this.props.headerRendererProps));
        }
        renderedFiles = /* @__PURE__ */ external_react_default.a.createElement("div", null, header, contents);
        break;
    }
    const ConfirmMultipleDeletionRenderer = this.props.confirmMultipleDeletionRenderer;
    return /* @__PURE__ */ external_react_default.a.createElement("div", {
      className: "rendered-react-keyed-file-browser"
    }, this.props.actions, /* @__PURE__ */ external_react_default.a.createElement("div", {
      className: "rendered-file-browser",
      ref: (el) => {
        this.browserRef = el;
      }
    }, this.props.showActionBar && this.renderActionBar(selectedItems), this.state.activeAction === "delete" && this.state.selection.length > 1 && /* @__PURE__ */ external_react_default.a.createElement(ConfirmMultipleDeletionRenderer, {
      handleDeleteSubmit: this.handleMultipleDeleteSubmit
    }), /* @__PURE__ */ external_react_default.a.createElement("div", {
      className: "files"
    }, renderedFiles)), this.state.previewFile !== null && /* @__PURE__ */ external_react_default.a.createElement(this.props.detailRenderer, browser_spreadValues({
      file: this.state.previewFile,
      close: this.closeDetail
    }, this.props.detailRendererProps)));
  }
}
browser_publicField(browser_RawFileBrowser, "propTypes", {
  files: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    key: external_prop_types_default.a.string.isRequired,
    modified: external_prop_types_default.a.number,
    size: external_prop_types_default.a.number
  })).isRequired,
  actions: external_prop_types_default.a.node,
  showActionBar: external_prop_types_default.a.bool.isRequired,
  canFilter: external_prop_types_default.a.bool.isRequired,
  showFoldersOnFilter: external_prop_types_default.a.bool,
  noFilesMessage: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.object]),
  noMatchingFilesMessage: external_prop_types_default.a.func,
  showMoreResults: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.object]),
  group: external_prop_types_default.a.func.isRequired,
  sort: external_prop_types_default.a.func.isRequired,
  icons: external_prop_types_default.a.shape({
    Folder: external_prop_types_default.a.element,
    FolderOpen: external_prop_types_default.a.element,
    File: external_prop_types_default.a.element,
    PDF: external_prop_types_default.a.element,
    Image: external_prop_types_default.a.element,
    Delete: external_prop_types_default.a.element,
    Rename: external_prop_types_default.a.element,
    Loading: external_prop_types_default.a.element,
    Download: external_prop_types_default.a.element
  }),
  nestChildren: external_prop_types_default.a.bool.isRequired,
  renderStyle: external_prop_types_default.a.oneOf([
    "list",
    "table"
  ]).isRequired,
  startOpen: external_prop_types_default.a.bool.isRequired,
  headerRenderer: external_prop_types_default.a.func,
  headerRendererProps: external_prop_types_default.a.object,
  filterRenderer: external_prop_types_default.a.func,
  filterRendererProps: external_prop_types_default.a.object,
  fileRenderer: external_prop_types_default.a.func,
  fileRendererProps: external_prop_types_default.a.object,
  folderRenderer: external_prop_types_default.a.func,
  folderRendererProps: external_prop_types_default.a.object,
  detailRenderer: external_prop_types_default.a.func,
  detailRendererProps: external_prop_types_default.a.object,
  actionRenderer: external_prop_types_default.a.func,
  confirmDeletionRenderer: external_prop_types_default.a.func,
  confirmMultipleDeletionRenderer: external_prop_types_default.a.func,
  selectedFiles: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    key: external_prop_types_default.a.string.isRequired
  })),
  onCreateFiles: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onCreateFolder: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onMoveFile: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onMoveFolder: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onRenameFile: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onRenameFolder: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onDeleteFile: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onDeleteFolder: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onDownloadFile: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onDownloadFolder: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.bool]),
  onSelect: external_prop_types_default.a.func,
  onSelectFile: external_prop_types_default.a.func,
  onSelectFolder: external_prop_types_default.a.func,
  onPreviewOpen: external_prop_types_default.a.func,
  onPreviewClose: external_prop_types_default.a.func,
  onFolderOpen: external_prop_types_default.a.func,
  onFolderClose: external_prop_types_default.a.func
});
browser_publicField(browser_RawFileBrowser, "defaultProps", {
  showActionBar: true,
  canFilter: true,
  showFoldersOnFilter: false,
  noFilesMessage: "Nincsenek f\xE1jlok",
  noMatchingFilesMessage: (filter) => `Nincs ilyen f\xE1jl "${filter}".`,
  showMoreResults: "T\xF6bb eredm\xE9ny mutat\xE1sa",
  group: by_folder,
  sort: by_name,
  nestChildren: false,
  renderStyle: "table",
  startOpen: false,
  headerRenderer: table,
  headerRendererProps: {},
  filterRenderer: filters_default,
  filterRendererProps: {},
  fileRenderer: files_table,
  fileRendererProps: {},
  folderRenderer: folders_table,
  folderRendererProps: {},
  detailRenderer: details_default,
  detailRendererProps: {},
  actionRenderer: actions_default,
  confirmDeletionRenderer: confirmations_default,
  confirmMultipleDeletionRenderer: multiple,
  selectedFiles: [],
  icons: {},
  onSelect: (fileOrFolder) => {
  },
  onSelectFile: (file) => {
  },
  onSelectFolder: (folder) => {
  },
  onPreviewOpen: (file) => {
  },
  onPreviewClose: (file) => {
  },
  onFolderOpen: (folder) => {
  },
  onFolderClose: (folder) => {
  }
});
class browser_FileBrowser extends external_react_["Component"] {
  render() {
    return /* @__PURE__ */ external_react_default.a.createElement(external_react_dnd_["DndProvider"], {
      backend: external_react_dnd_html5_backend_["HTML5Backend"]
    }, /* @__PURE__ */ external_react_default.a.createElement(browser_RawFileBrowser, browser_spreadValues({}, this.props)));
  }
}
/* harmony default export */ var browser = (browser_FileBrowser);


// CONCATENATED MODULE: ./src/icons/FontAwesome.js

const IsFontAwesomeLoaded = (version) => {
  const prefix = version === 4 ? "fa" : "fas";
  const fontNames = version === 4 ? ["FontAwesome", '"FontAwesome"'] : ['"Font Awesome 5 Free"', '"Font Awesome 5 Pro"'];
  let FontAwesomeLoaded = false;
  const span = document.createElement("span");
  span.className = prefix;
  span.style.display = "none";
  document.body.insertBefore(span, document.body.firstChild);
  const css = (element, property) => window.getComputedStyle(element, null).getPropertyValue(property);
  if (!fontNames.includes(css(span, "font-family"))) {
    console.warn(`Font Awesome ${version} was not detected but Font Awesome ${version} icons have been requested for \`react-object-list\``);
  } else {
    FontAwesomeLoaded = true;
  }
  document.body.removeChild(span);
  return FontAwesomeLoaded;
};
const FontAwesomeIcons = (majorVersion = 4) => {
  switch (majorVersion) {
    case 4:
      IsFontAwesomeLoaded(4);
      return {
        File: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-o",
          "aria-hidden": "true"
        }),
        Image: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-image-o",
          "aria-hidden": "true"
        }),
        Video: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-video-o",
          "aria-hidden": "true"
        }),
        Audio: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-audio-o",
          "aria-hidden": "true"
        }),
        Archive: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-archive-o",
          "aria-hidden": "true"
        }),
        Word: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-word-o",
          "aria-hidden": "true"
        }),
        Excel: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-excel-o",
          "aria-hidden": "true"
        }),
        PowerPoint: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-powerpoint-o",
          "aria-hidden": "true"
        }),
        Text: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-text-o",
          "aria-hidden": "true"
        }),
        PDF: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-file-pdf-o",
          "aria-hidden": "true"
        }),
        Rename: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-i-cursor",
          "aria-hidden": "true"
        }),
        Folder: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-folder-o",
          "aria-hidden": "true"
        }),
        FolderOpen: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-folder-open-o",
          "aria-hidden": "true"
        }),
        Delete: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-trash-o",
          "aria-hidden": "true"
        }),
        Loading: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-circle-o-notch fa-spin",
          "aria-hidden": "true"
        }),
        Download: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fa fa-download",
          "aria-hidden": "true"
        })
      };
    case 5:
      IsFontAwesomeLoaded(5);
      return {
        File: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file",
          "aria-hidden": "true"
        }),
        Image: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-image",
          "aria-hidden": "true"
        }),
        Video: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-video",
          "aria-hidden": "true"
        }),
        Audio: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-audio",
          "aria-hidden": "true"
        }),
        Archive: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-archive",
          "aria-hidden": "true"
        }),
        Word: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-word",
          "aria-hidden": "true"
        }),
        Excel: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-excel",
          "aria-hidden": "true"
        }),
        PowerPoint: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-powerpoint",
          "aria-hidden": "true"
        }),
        Text: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-alt",
          "aria-hidden": "true"
        }),
        PDF: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-file-pdf",
          "aria-hidden": "true"
        }),
        Rename: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fas fa-i-cursor",
          "aria-hidden": "true"
        }),
        Folder: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-folder",
          "aria-hidden": "true"
        }),
        FolderOpen: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-folder-open",
          "aria-hidden": "true"
        }),
        Delete: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "far fa-trash-alt",
          "aria-hidden": "true"
        }),
        Loading: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fas fa-circle-notch fa-spin",
          "aria-hidden": "true"
        }),
        Download: /* @__PURE__ */ external_react_default.a.createElement("i", {
          className: "fas fa-download",
          "aria-hidden": "true"
        })
      };
    default:
      console.warn(`Could not find config for version ${majorVersion}`, "Accepted versions are: 4, 5", "Please make an issue in `react-object-list` to fix this.");
  }
};
/* harmony default export */ var FontAwesome = (FontAwesomeIcons);

// CONCATENATED MODULE: ./src/icons/index.js


// CONCATENATED MODULE: ./src/index.js












/* harmony default export */ var src = __webpack_exports__["default"] = (browser);



/***/ })
/******/ ]);
});