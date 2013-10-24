/*
 * Type    : Utility
 * Name    : myToolsJS
 * Author  : DeliPenguen - Egemen MEDE
 * Date    : 16.09.2013
 * Time    : 16:56
 * Web     : http://www.delipenguen.com
 * Version : 2.0
 */

dp = function(){
    function isStorageSupport() {
        try { return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) { return false;}
    }
    function set(myKey, myValue, opt){ opt == "1" ? window.sessionStorage.setItem(myKey, myValue):window.localStorage.setItem(myKey, myValue);}
    function get(myKey, opt){ return opt == "1" ? window.sessionStorage.getItem(myKey):window.localStorage.getItem(myKey); }
    function clear(opt){ opt == "1" ? window.sessionStorage.clear():window.localStorage.clear(); }
    function key(myKey, opt){ return opt == "1" ? window.sessionStorage.key(myKey):window.localStorage.key(myKey); }
    function remove(myKey, opt){ opt == "1" ? window.sessionStorage.removeItem(myKey):window.localStorage.removeItem(myKey);}
    function length(opt){ return opt == "1" ? window.sessionStorage.length:window.localStorage.length; }
    function el(element){ return document.querySelector(element); }
    function trim(str){ return str.replace(/\s/g, ''); }
    function log(myLog){ console.log(myLog); }
    function msg(myMsg){ alert(myMsg); }

    return{
        sp: isStorageSupport,
        set: set,
        get: get,
        clr: clear,
        key: key,
        rm: remove,
        len: length,
        el: el,
        trim: trim,
        log: log,
        msg: msg
    }
}();