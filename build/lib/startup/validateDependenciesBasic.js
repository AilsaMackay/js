"use strict";
/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// note: this file can't have any other imports than the dynamic one below as it needs to be able to at least start up without the npm dependencies installed
// otherwise this check would be useless as the app would fail on a random import before even reaching this point
const validateIfDependencyCheckerIsInstalled = async () => {
    try {
        // @ts-expect-error FIXME due to non-existing type definitions for check-dependencies
        await Promise.resolve().then(() => __importStar(require('check-dependencies')));
    }
    catch (err) {
        console.error('Please run "npm install" before starting the application!');
        process.exit(1);
    }
};
exports.default = validateIfDependencyCheckerIsInstalled;
//# sourceMappingURL=validateDependenciesBasic.js.map