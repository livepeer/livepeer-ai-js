/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Generate } from "./generate.js";

export class Livepeer extends ClientSDK {
  private _generate?: Generate;
  get generate(): Generate {
    return (this._generate ??= new Generate(this._options));
  }
}
