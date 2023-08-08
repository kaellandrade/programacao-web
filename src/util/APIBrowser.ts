import CookieData from "../@types/keysCookie";

/**
 * Classe responsável por manipular APIS do browser.
 */
class APIBrowser {

    /**
     * Seta o cookie de sessão.
     * @param chaveCookie 
     * @param valorCookie 
     * @param dataExpiracao 
     * @param pathCookie 
     */
    static setCookie(cookie: CookieData): void {
        document.cookie = `${cookie.chaveCookie}=${cookie.valorCookie};expires=${cookie.dataExpiracao.toUTCString()};path=${cookie.pathCookie}`
    }

    /**
     * Retorna o valor de um determinado cookie.
     */
    static getCookie(chaveCookie: string): string {
        const cookie = document.cookie.split(';').find(cookie => cookie.includes(chaveCookie));
        if (cookie) {
            return cookie.split('=')[1];
        }
        return '';
    }

    /**
     * Remove um determinado cookie.
     * @see https://www.w3schools.com/js/js_cookies.asp
     * @param cookie 
     */
    static removerCookie(cookie: CookieData): void {
        document.cookie = `${cookie.chaveCookie}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=${cookie.pathCookie}`;
    }

}

export default APIBrowser;