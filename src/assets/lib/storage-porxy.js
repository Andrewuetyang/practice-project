/**
 * 缓存代理，支持sessionStorage|localStorage|sessionCookie
 */
import {parseJSON, jsonStringify} from './utils.js';

class SessionCookieProxy {
  /**
   * 中文需要decodeURI
   * @param key
   * @param stringValue
   */
  getItem(key) {
    let name = key + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) !== -1) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  /**
   * 中文需要encodeURI
   * @param key
   * @param stringValue
   */
  setItem(key, stringValue) {
    document.cookie = key + "=" + stringValue + ";path=/";
  }
  removeItem(key) {
    document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
  clear() {
  }
}

export class StorageProxy {
  constructor() {
    this.storageType = 'localStorage';
  }
  getStorage() {
    let storage = null;
    if (this.storageType === 'localStorage') {
      storage = window.localStorage;
    } else if (this.storageType === 'sessionStorage') {
      storage = window.sessionStorage;
    } else if (this.storageType === 'sessionCookie') {
      storage = new SessionCookieProxy();
    }
    return storage;
  }
  get(key, storageType = 'localStorage') {
    this.storageType = storageType;
    if (this.getStorage().getItem(key)){
      return parseJSON(this.getStorage().getItem(key));
    }else{
      return null;
    }
  }
  set(key, jsonValue, storageType = 'localStorage') {
    this.storageType = storageType;
    this.getStorage().setItem(key, jsonStringify(jsonValue));
  }
  getItem(key) {
    return this.getStorage().getItem(key);
  }
  setItem(key, stringValue) {
    this.getStorage().setItem(key, stringValue);
  }
  buildKey(system, modelOrTable, bizKey) {
    return system + ":" + modelOrTable + ":" + bizKey;
  }
  remove(key, storageType = 'localStorage') {
    this.storageType = storageType;
    this.getStorage().removeItem(key);
  }
  clear(storageType = 'localStorage') {
    this.storageType = storageType;
    this.getStorage().clear();
  }
}
let storage = new StorageProxy();
export default storage;