const request = require('request');

function makeCookieValue(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_~-';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports.cookieJar = request.jar();
module.exports.requestHeaders = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encoding':  'gzip, deflate, br',
    'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    'Content-Type': 'application/json',
    'Referer': "https://www.leboncoin.fr/recherche/",
    'Origin': 'https://www.leboncoin.fr',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Cookie': `oas_ab=b; datadome=${makeCookieValue(106)}; xtvrn=$562498$; xtan562498=-undefined; xtant562498=1; utag_main=v_id:016d90e77b5e0022fb61fdb1c8e80207800190700093c$_sn:1$_ss:1$_pn:1%3Bexp-session$_st:1570095955837$ses_id:1570094152542%3Bexp-session; _pulse2data=63c2728c-ccd9-49e8-bf5e-960a42db9013%2Cv%2C%2C1570095055895%2CeyJpc3N1ZWRBdCI6IjIwMTktMTAtMDNUMDk6MTY6MDRaIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImFsZyI6ImRpciIsImtpZCI6IjIifQ..odfDNscbZftYylxp3TtVrg.9OuTkl_CPcFulzme7e902Mdo-Eh0cIQkRMRNcFWdkTKI36fRwqGhtFqlrfTxSuoyF1rU3uoCpADmlYSR0plCIzVoHs5ZJQHqtFWFKHKbw9jlrRJLmkbL6kYhFM9XjiL7EVP0SADduRm5VZW1IFb8KGvKXAAmXrsJgcFGyq2Mo5EvEyUjUCQNzevRWL81JGxlRxzO4sTT55VsZkjtdVszKA.WA9mXH_Z9qYoXl6Mi6Tm8g%2C%2C0%2Ctrue%2C%2CeyJraWQiOiIyIiwiYWxnIjoiSFMyNTYifQ.._lL-4prkZwpLpWtHAFlMCwHCHll3lpAhsiceEfCzy4c; euconsent=BOn2VsHOn2VsHDWAACFRCl-AAAAqVr_7__7-_9_-_f__9uj_Ov_v_f__30ecr59v_B_jv-_7fq_22jV4u_1vft9yfm1-7ctD3tp505iakivXmr__b9__3z3_9phP78k89r7337Ew-v-3o8A; consent_allpurpose=cDE9MTtwMj0xO3AzPTE7cDQ9MTtwNT0x; cookieBanner=1`,
    'Host': 'www.leboncoin.fr',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
}
