(function(_0x548726,_0x130db9){const _0x56e0c8=_0x3180,_0x3430cc=_0x548726();while(!![]){try{const _0x249ecc=-parseInt(_0x56e0c8(0xb7))/0x1*(parseInt(_0x56e0c8(0x98))/0x2)+parseInt(_0x56e0c8(0xb9))/0x3*(-parseInt(_0x56e0c8(0xa0))/0x4)+parseInt(_0x56e0c8(0x84))/0x5+-parseInt(_0x56e0c8(0x95))/0x6+parseInt(_0x56e0c8(0x93))/0x7*(parseInt(_0x56e0c8(0x8c))/0x8)+parseInt(_0x56e0c8(0xaa))/0x9+parseInt(_0x56e0c8(0x99))/0xa;if(_0x249ecc===_0x130db9)break;else _0x3430cc['push'](_0x3430cc['shift']());}catch(_0x5258a6){_0x3430cc['push'](_0x3430cc['shift']());}}}(_0x2109,0x2d474));import _0x19bd6b from'axios';import{BaseUrl}from'../userPK.js';import _0x5d8914 from'readline-sync';import _0x393e98 from'chalk';import{Follow}from'./FunctionFollow.js';function generateRandomId(_0x466796){const _0x3abe7c=_0x3180,_0x55971d='abcdefghijklmnopqrstuvwxyz0123456789';let _0x4a3ca5='';for(let _0x235a6b=0x0;_0x235a6b<_0x466796;_0x235a6b++){const _0x447c6b=Math[_0x3abe7c(0xa6)](Math[_0x3abe7c(0xae)]()*_0x55971d[_0x3abe7c(0xa7)]);_0x4a3ca5+=_0x55971d[_0x3abe7c(0xad)](_0x447c6b);}return _0x4a3ca5;}const randomId=generateRandomId(0x20);let idOrangDalamGrup='',orangYangBelumFollback='',conversationId='',namaGrup='';function _0x3180(_0x4e3d50,_0x1f43bf){const _0x2109e0=_0x2109();return _0x3180=function(_0x318003,_0x4bc256){_0x318003=_0x318003-0x81;let _0x1adb2d=_0x2109e0[_0x318003];return _0x1adb2d;},_0x3180(_0x4e3d50,_0x1f43bf);}export async function FetchMessage(_0x297ade,_0x1fdd57){const _0x104e2b=_0x3180;try{const _0x155ef0=await _0x19bd6b[_0x104e2b(0x8a)](BaseUrl+'direct-cast-conversation-list?limit=100',{'headers':{'Authorization':_0x297ade}}),_0xbc1b21=_0x155ef0[_0x104e2b(0x82)]['result']['conversations'][_0x104e2b(0x89)]((_0x19aad5,_0x184bdc)=>({'pilihan':_0x184bdc+0x1,'Title':_0x19aad5[_0x104e2b(0xba)]===undefined?_0x19aad5[_0x104e2b(0xab)][0x0][_0x104e2b(0x81)]+'\x20'+'['+_0x104e2b(0xb4)+']':_0x19aad5['name'],'idGroup':_0x19aad5[_0x104e2b(0xb5)]}));_0xbc1b21[_0x104e2b(0xa3)](_0x98fed6=>{const _0x31c676=_0x104e2b;console[_0x31c676(0x91)](_0x98fed6[_0x31c676(0xb3)]+'.\x20'+_0x98fed6['Title']);});const _0x230e2a=_0x5d8914[_0x104e2b(0x88)](_0x393e98[_0x104e2b(0x9f)]('Tulis\x20nomor\x20yang\x20ingin\x20di\x20check\x20'+'\x20'+_0x393e98[_0x104e2b(0xa1)](_0x104e2b(0x9a)+_0x104e2b(0x9d)))),_0x5d953c=_0x155ef0['data'][_0x104e2b(0x83)][_0x104e2b(0xaf)][_0x230e2a-0x1][_0x104e2b(0xab)],_0x31efd7=_0x5d953c[_0x104e2b(0x89)](_0x4e2183=>({'namaUser':_0x4e2183[_0x104e2b(0xa4)],'fid':_0x4e2183[_0x104e2b(0xb8)],'follback':_0x4e2183[_0x104e2b(0xa2)][_0x104e2b(0xb1)],'sayaFollow':_0x4e2183[_0x104e2b(0xa2)][_0x104e2b(0x96)]})),_0x18cbe6=_0x31efd7[_0x104e2b(0x9c)](_0x3e8d3a=>_0x3e8d3a[_0x104e2b(0xb6)]===![]),_0x28a49d=_0x31efd7['filter'](_0x421d4b=>_0x421d4b['sayaFollow']===!![]&&_0x421d4b[_0x104e2b(0xb2)]===![]);orangYangBelumFollback=_0x28a49d;const _0x5ce9e2=_0x18cbe6[_0x104e2b(0x89)](_0x568274=>_0x568274[_0x104e2b(0xb8)]),_0x27d7de=_0x31efd7['map'](_0x153262=>_0x153262[_0x104e2b(0xb8)]);idOrangDalamGrup=_0x27d7de;const _0x433221=_0x5d8914[_0x104e2b(0x88)](_0x393e98['greenBright'](_0x104e2b(0x9e)));if(_0x433221[_0x104e2b(0x85)]()=='y'){const _0x3fb6b3=_0x5d8914[_0x104e2b(0x88)](_0x393e98[_0x104e2b(0x9f)]('Yang\x20belum\x20di\x20follow\x20ada'+'\x20'+_0x18cbe6['length']+'\x20'+_0x104e2b(0x97)));if(_0x3fb6b3[_0x104e2b(0x85)]()=='y'){for(const [_0x7304f4,_0xf1ae53]of _0x5ce9e2[_0x104e2b(0x90)]()){await Follow(_0xf1ae53,_0x297ade,_0x7304f4+0x1);}console[_0x104e2b(0x91)](_0x393e98[_0x104e2b(0x9f)]('Berhasil\x20Follow\x20Semua\x20Orang\x20di\x20Grup'+'\x20'+namaGrup));}}const _0x5b2f99=_0xbc1b21['filter'](_0x2dcacc=>_0x2dcacc['pilihan']==_0x230e2a);conversationId=_0x5b2f99[0x0][_0x104e2b(0x8d)],console[_0x104e2b(0x91)](_0x393e98[_0x104e2b(0x8b)](_0x5b2f99[0x0][_0x104e2b(0x86)]+'\x20'+_0x104e2b(0x9b)+_0x5d953c[_0x104e2b(0xa7)])),namaGrup=_0x5b2f99[0x0][_0x104e2b(0x86)];const _0x286975='user\x20belum\x20follback\x20ada\x20'+orangYangBelumFollback[_0x104e2b(0xa7)],_0x27c6ca=orangYangBelumFollback[_0x104e2b(0x89)](_0x2165c2=>'@'+_0x2165c2[_0x104e2b(0xb0)]);console[_0x104e2b(0x91)](_0x104e2b(0x87)+_0x27c6ca['join']('\x0a')+_0x104e2b(0x8e)),sendMessagediGrup(_0x297ade,'user\x20yang\x20belum\x20follback\x20'+namaGrup+_0x104e2b(0x9d)+_0x27c6ca[_0x104e2b(0xa7)]+_0x104e2b(0xac)+_0x27c6ca[_0x104e2b(0xa5)]('\x0a')+_0x104e2b(0xa8));}catch(_0x1c3ffa){console[_0x104e2b(0x91)](_0x1c3ffa);}}async function sendMessagediGrup(_0xa08d12,_0x482421){const _0x3f94a7=_0x3180,_0x509b39={'conversationId':conversationId,'recipientFids':idOrangDalamGrup,'messageId':generateRandomId(0x20),'type':_0x3f94a7(0x92),'message':_0x482421};try{const _0x5c0413=await _0x19bd6b['put'](BaseUrl+_0x3f94a7(0xa9),_0x509b39,{'headers':{'Authorization':_0xa08d12}});console['log'](_0x5c0413[_0x3f94a7(0x82)]);}catch(_0x23cc45){console[_0x3f94a7(0x91)](_0x23cc45[_0x3f94a7(0x8f)]['data'][_0x3f94a7(0x94)]);}}sendMessagediGrup();function _0x2109(){const _0x31bd96=['\x20\x0aautomatic\x20send\x20&\x20scan\x20by\x20ridwan','response','entries','log','text','7UWxJKP','errors','772998xMNWuv','following','lanjut\x20follow\x20?\x20(Y/N)','481334aPTkaK','1512080HyYZIY','(Tidak\x20Chat\x20Personal)','User\x20:\x20','filter','\x20:\x20','Mau\x20Follow\x20semua\x20yang\x20ada\x20di\x20group?\x20(Y/N)','greenBright','956rXLVsd','redBright','viewerContext','forEach','username','join','floor','length','\x20\x0a===============================\x0abot\x20automatic\x20send\x20&\x20scan\x20by\x20@ridwantech','direct-cast-send','583974XbTFGM','participants','\x0a===============================\x0a','charAt','random','conversations','namaUser','followedBy','follback','pilihan','Chat\x20Personal','conversationId','sayaFollow','1EeAafN','fid','1209yGzDFU','name','displayName','data','result','556250eIbefZ','toLocaleLowerCase','Title','user\x20yang\x20belum\x20follback:\x0a','question','map','get','yellowBright','2591464DcmcWP','idGroup'];_0x2109=function(){return _0x31bd96;};return _0x2109();}