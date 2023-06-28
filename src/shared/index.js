"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openUrlMenuItem = exports.openSystemPreferences = exports.runJS = exports.platform = exports.is = exports.openNewGitHubIssue = exports.disableZoom = exports.chromeVersion = exports.appLaunchTimestamp = void 0;
var app_launch_timestamp_1 = require("./app-launch-timestamp");
Object.defineProperty(exports, "appLaunchTimestamp", { enumerable: true, get: function () { return app_launch_timestamp_1.appLaunchTimestamp; } });
var chrome_1 = require("./chrome");
Object.defineProperty(exports, "chromeVersion", { enumerable: true, get: function () { return chrome_1.chromeVersion; } });
var disable_zoom_1 = require("./disable-zoom");
Object.defineProperty(exports, "disableZoom", { enumerable: true, get: function () { return disable_zoom_1.disableZoom; } });
var github_issue_1 = require("./github-issue");
Object.defineProperty(exports, "openNewGitHubIssue", { enumerable: true, get: function () { return github_issue_1.openNewGitHubIssue; } });
var is_1 = require("./is");
Object.defineProperty(exports, "is", { enumerable: true, get: function () { return is_1.is; } });
var platform_1 = require("./platform");
Object.defineProperty(exports, "platform", { enumerable: true, get: function () { return platform_1.platform; } });
var run_js_1 = require("./run-js");
Object.defineProperty(exports, "runJS", { enumerable: true, get: function () { return run_js_1.runJS; } });
var system_preferences_1 = require("./system-preferences");
Object.defineProperty(exports, "openSystemPreferences", { enumerable: true, get: function () { return system_preferences_1.openSystemPreferences; } });
var url_menu_item_1 = require("./url-menu-item");
Object.defineProperty(exports, "openUrlMenuItem", { enumerable: true, get: function () { return url_menu_item_1.openUrlMenuItem; } });
