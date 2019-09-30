const request = require('request');

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
    'Cookie': '_scid=8cce3fe1-8c40-41f7-85ef-a62f95292d1c; trc_cookie_storage=taboola%2520global%253Auser-id%3D2b708d4d-f5eb-4efa-80e6-dafb59e2aaab-tuct373f7f8; cikneeto_uuid=id:7bc04951-da79-44b0-803e-13bfbf3c7892; _gcl_au=1.1.800165258.1551723828; cto_lwid=98e9ddb5-4338-482f-8d4a-46f794237840; cookieFrame=2; xtvrn=$562498$578009$; xtan578009=-undefined; xtant578009=1; _sctr=1|1560225600000; oas_ab=b; uuid=9e72ac4b-d030-44fd-869a-d6b3dad4457e; atidvisitor=%7B%22name%22%3A%22atidvisitor%22%2C%22val%22%3A%7B%22vrn%22%3A%22-598455--562498-%22%2C%22an%22%3A%221321434%22%2C%22ac%22%3A%221%22%7D%2C%22options%22%3A%7B%22path%22%3A%22%2F%22%2C%22session%22%3A15724800%2C%22end%22%3A15724800%7D%7D; _sctr=1|1563336000000; euconsent=BOj2w3TOj2w3TDWAACFRCb-AAAAo1rv___7__9_-____9uz7Ov_v_f__33e8779v_h_7_-___u_-3zd4u_1vf99yfm1-7ctr3tp_87uesm_Xur__59__3z3_9phP78k89r7337Ew4MA; AMCV_C8D912835936C98A0A495D98%40AdobeOrg=MCMID%7C85723193119164334070208264991407603711; nlid=2ea89c29|5a8b3ab2; ABTasty=uid%3D19030213091588553%26fst%3D1551528555150%26pst%3D1563393884249%26cst%3D1564062906865%26ns%3D101%26pvt%3D643%26pvis%3D1%26th%3D324840.427089.2.0.34.0.1559139463925.1559650955824.1_446487.566405.57.0.24.0.1561567685320.1563396443715.1; cikneeto=date:1564062907291; xtan562498=-undefined; xtant562498=1; saveOnboarding=1; sq=ca=12_s; _pulse2data=d1f5c093-6e3a-48be-b83c-8325b144646b%2Cv%2C%2C1569844140795%2CeyJpc3N1ZWRBdCI6IjIwMTktMDktMjZUMTg6MDQ6MDlaIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImFsZyI6ImRpciIsImtpZCI6IjIifQ..APF1qyy9mS_olFmL0AehlA.2xFDzU2JBU8ljcNy71ocVGrsw_H08uQdEPO7jY5bLh8P_gUYpnGk7d6uLVrEkIwwShWiDJep8JOVyK4SuaA8Kf7dKu87SCo_wmmERFfXJ-KpzVT3Fsjb01HuHnT2Iif9pbv9qQ3PaCbc79vmBI0p38wNQSIqAQMS_g9UUETX1DNOvi8pw5Y1DOCWcmXol6cALkYxapoYtzVxU4PYyL441Q.2cUOwsF17pex2pv4e5RGcg%2C%2C0%2Ctrue%2C%2CeyJraWQiOiIyIiwiYWxnIjoiSFMyNTYifQ..yXJy3ngAtYmAE8nRAT-AdljzT0X-AJrufZayBSIftuw; euconsent=BOnsx8IOnsx8IDWAACFRCl-AAAAqVr_7__7-_9_-_f__9uj_Ov_v_f__30ecr59v_B_jv-_7fq_22jV4u_1vft9yfm1-7ctD3tp505iakivXmr__b9__3z3_9phP78k89r7337Ew-v-3o8A; consent_allpurpose=cDE9MjtwMj0yO3AzPTI7cDQ9MjtwNT0y; cookieBanner=0; datadome=YdX5Wa30rXPx2upO4U~4pIDdpYPz_bRHXnBrHijuWTd03Mnd6-C55V4tSFwvipCISpPMIGL2Rgj48BDLtwvbmjKnS4ICKGYJ~45NmaK5xy; utag_main=v_id:016d6ebe96f4000c6b3b1ba877f90207800370700093c$_sn:5$_ss:0$_st:1569845623832$_pn:4%3Bexp-session$ses_id:1569843237160%3Bexp-session',
    'Host': 'www.leboncoin.fr',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
}
