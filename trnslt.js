/* ===================================================
 * trnslt.js v0.2
 * http://trnslt.com
 * ===================================================
 * Copyright 2012 Jesse Middleton
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ================================================ */



/* CHECK FOR THE RIGHT VERSION OF JQUERY
* =================================== */

if (typeof jQuery == 'undefined') {
    trnsltLoadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function(){
        trnsltjQueryLoaded();
    });
} else if (jQuery.fn.jquery != '1.6.4') {
    trnsltLoadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function(){
            trnsltjQueryLoaded();
    });
}
else {
    trnsltjQueryLoaded();
}

var trnsltjQuery;

/* LETS LOAD TRNSLT IN ONLY A COUPLE OF STEPS
* ======================================== */

function trnsltjQueryLoaded() {
    trnsltjQuery = jQuery.noConflict(1);

    // Cycle through to grab all accepted languages from the page
    var trnsltAcceptedLanguages = [];
    trnsltjQuery('.trnslt').each(function(){ 
        var trnsltTL = trnsltjQuery(this).attr('class').split(' ');
        for(i = 0; i < trnsltTL.length; i++){
            if (trnsltAcceptedLanguages.indexOf(trnsltTL[i]) == -1) trnsltAcceptedLanguages.push(trnsltTL[i]);
        }
    });

    // If we have accepted languages on the page, proceed...
    if (trnsltAcceptedLanguages.length > 0) {

        // If the language in the subdomain matches an accepted language, choose that one.
        if (trnsltjQuery.inArray(window.location.host.split('.')[0], trnsltAcceptedLanguages) > -1) { 
            var trnsltRequest = window.location.host.split('.')[0];
            trnsltCreateCookie('trnslt',trnsltRequest,365);
        }
        // If a language in the query string "trnslt" matches an accepted language, choose that one.
        else if (trnsltGetQueryString('trnslt') && (trnsltjQuery.inArray(trnsltGetQueryString('trnslt'), trnsltAcceptedLanguages) > -1)) { 
            var trnsltRequest = trnsltGetQueryString('trnslt');
            trnsltCreateCookie('trnslt',trnsltRequest,365);
        }
        // If a cookie has been set previously named "trnslt" and it matches an accepted language, choose that one.
        else if (trnsltReadCookie('trnslt') && (trnsltjQuery.inArray(trnsltReadCookie('trnslt'), trnsltAcceptedLanguages) > -1)) {
            var trnsltRequest = trnsltReadCookie('trnslt');
            trnsltCreateCookie('trnslt',trnsltRequest,365);
        }
        // If there is a default language set by "trnsltDefaultLanguage" then choose this one.
        else if (typeof trnsltDefaultLanguage != 'undefined' && (trnsltjQuery.inArray(trnsltDefaultLanguage, trnsltAcceptedLanguages) > -1)) {
            var trnsltRequest = trnsltDefaultLanguage; 
            trnsltCreateCookie('trnslt',trnsltRequest,365);
        }
        // Otherwise default to English.
        else {
            var trnsltRequest = 'en';
        }

        // Hide all languages except for the accepted language
        trnsltjQuery('.trnslt:not(.' + trnsltRequest + ')').hide();
        trnsltjQuery('.trnslt:.' + trnsltRequest).show();

    }
    // We found no accepted languages on the page, let them know they need help.
    else { console.log("No languages found on this page. Please visit http://trnslt.com for more information."); }
}

//==================================== REUSABLE FUNCTIONS =======================================

function trnsltLoadScript(a,b){var c=document.createElement("script");c.type="text/javascript";if(c.readyState){c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete"){c.onreadystatechange=null;b()}}}else{c.onload=function(){b()}}c.src=a;document.getElementsByTagName("head")[0].appendChild(c)}
function trnsltGetQueryString(a,b){if(b==null)b="";a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c=new RegExp("[\\?&]"+a+"=([^&#]*)");var d=c.exec(window.location.href);if(d==null)return b;else return d[1]}
function trnsltCreateCookie(a,b,c,d){if(d==null)d="";else d="; domain=."+d;if(c){var e=new Date;e.setTime(e.getTime()+c*24*60*60*1e3);var f="; expires="+e.toGMTString()}else var f="";document.cookie=a+"="+b+f+"; path=/"+d}
function trnsltReadCookie(a){var b=a+"=";var c=document.cookie.split(";");for(var d=0;d<c.length;d++){var e=c[d];while(e.charAt(0)==" ")e=e.substring(1,e.length);if(e.indexOf(b)==0)return e.substring(b.length,e.length)}return null}
