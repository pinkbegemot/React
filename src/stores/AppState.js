import { observable, action } from "mobx";
// import axios from "axios";
import auth from "./../services/auth/auth";
import {
  Storage,
  TokenKey,
  UserInfoKey,
  STORES_TYPES
} from './../services/auth/type';
import decode from 'jwt-decode';
import mobxstore from 'mobx-store'
import localstorage from 'mobx-store/localstorage'

const USER_INFO = 'userInfo';
const EMAIL = 'email';

const APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];

// Create store initialized with value of localstorage at "info"
const store = mobxstore(localstorage.read('info'))
// schedule a reaction to changes to the state of the store


export default class AppState {
  @observable authenticated;
  @observable authenticating;
  @observable topup;
  @observable userName;
  @observable scheme;
  @observable email;
  @observable chargepoint;
  @observable cpName;
  @observable error;
  @observable connector;
  @observable session;
  @observable cardId;
  @observable issuers;


  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.topup = false;
    // this.item = {};
    this.userName = null;
    this.scheme = "";
    this.chargepoint = "";
    this.error = "",
    this.connector = "",
    this.cardId = "",
    this.cpName="",
    this.schemes=null,
    this.issuers=null,
    this.emai=auth.getUserEmail();

  }


  @action setData(data) {
    this.items = data;
  }

  @action setSingle(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }

  @action authenticate() {
    // alert("Authenticate()");
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = auth.isAuthenticated();
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }

  @action disconnect() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        auth.clearAllAppStorage();
        this.userName = null;
        this.scheme = null;
        this.authenticated = false;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }

  @action topUp(enabled) {
    // alert("Topup :" + enabled);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.topup = enabled;
        resolve(this.topup);
      }, 0);
    });
  }
  @action getURL() {
    return appConfig.BaseURL;

  }

  /**
 * set the userInfo value into localstorage
 *
 * @param {object} [value=''] token value
 * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
 * @param {any} [userInfoKey='userInfo'] token key
 * @returns {boolean} success/failure flag
 */
  @action setUserInfo(value = '', toStorage = APP_PERSIST_STORES_TYPES[0],): any {
    if (!value || value.length <= 0) {
      alert("LocalStorage, userInfo missing " + value);
      this.setState({ user: value })
      return;
    }
    // localStorage:
    auth.setToken(value);
    auth.setUserInfo(value);
    this.authenticated = true;
    this.scheme = auth.getScheme();
  }

 userEmail = () => {
    alert("userEmail " + auth.getUserEmail());
    this.email=auth.getUserEmail();
      return email;
  }


  @action persistEmal = (value) => {
    store.schedule([localstorage.write, 'info', store])
    // store('info').push(value);
    // store('info').push({ email: value })
  }
    @action persistCashWarning = (value) => {
      store.schedule([localstorage.write, 'info', store])
      // store('info').push(value);
      store('info').push({ notShow: value })
  }

}

