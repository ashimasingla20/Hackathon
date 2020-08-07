import { GetLocalStorageKey, ClearLocalStorage } from './localStorageService.js';
class AuthService {
    constructor() {
        this.authenticated = true;
    }

    login (cb) {
        this.authenticated = true;
        cb();
    }

    getUserName () {
        return JSON.parse(GetLocalStorageKey('username'));
    }
    getEmail () {
        return JSON.parse(GetLocalStorageKey('email'));
    }

    getUserAccessToken () {
        return JSON.parse(GetLocalStorageKey('accessToken'));
    }

    getUserRefreshToken () {
        return JSON.parse(GetLocalStorageKey('refreshToken'));
    }

    getLoggedInUserRole () {
        return JSON.parse(GetLocalStorageKey('role'));
    }

    logout (cb) {
        ClearLocalStorage();

    }

    isAuthenticated () {
        const isLoggedIn = this.getUserAccessToken();
        this.authenticated = isLoggedIn ? true : false;
        return this.authenticated;
    }
}
export default new AuthService();
