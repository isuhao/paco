function kib(a){var b,c;b=$T(a.b.ie(DHc),149);if(b==null){c=QT(fdb,rzc,1,[EHc,FHc,GHc,HHc,IHc,JHc]);a.b.ke(DHc,c);return c}else{return b}}
function jib(a){var b,c;b=$T(a.b.ie(CHc),149);if(b==null){c=QT(fdb,rzc,1,['bleu','rouge','jaune','vert']);a.b.ke(CHc,c);return c}else{return b}}
function RFb(a){var b,c,d,e,f,g,i;i=new rhc;ohc(i,new U1b('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));c=jib(a.b);for(d=0;d<c.length;++d){b=c[d];e=new nbc(AEc,b);JZb(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,Ri(e,Zi(e.db)+NEc,true));ohc(i,e)}ohc(i,new U1b('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));g=kib(a.b);for(d=0;d<g.length;++d){f=g[d];e=new nbc('sport',f);JZb(e,'cwRadioButton-sport-'+Epc(f,YAc,MBc));d==2&&KZb(e,(_nc(),_nc(),$nc));ohc(i,e)}return i}
var CHc='cwRadioButtonColors',DHc='cwRadioButtonSports';heb(811,1,eAc);_.mc=function XFb(){Mgb(this.c,RFb(this.b))};TAc(wn)(1);