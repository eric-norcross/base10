/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("scaytcheck",function(e){function t(){return"undefined"!=typeof document.forms["optionsbar_"+p]?document.forms["optionsbar_"+p].options:[]}function i(e,t){if(e){var i=e.length;if(void 0==i)e.checked=e.value==t.toString();else for(var a=0;i>a;a++)e[a].checked=!1,e[a].value==t.toString()&&(e[a].checked=!0)}}function a(e){_.getById("dic_message_"+p).setHtml('<span style="color:red;">'+e+"</span>")}function n(e){_.getById("dic_message_"+p).setHtml('<span style="color:blue;">'+e+"</span>")}function o(e){for(var e=(""+e).split(","),t=0,i=e.length;i>t;t+=1)_.getById(e[t]).$.style.display="inline"}function d(e){for(var e=(""+e).split(","),t=0,i=e.length;i>t;t+=1)_.getById(e[t]).$.style.display="none"}function s(e){_.getById("dic_name_"+p).$.value=e}var l,c,r=!0,_=CKEDITOR.document,p=e.name,g=CKEDITOR.plugins.scayt.getUiTabs(e),m=[],y=0,u=["dic_create_"+p+",dic_restore_"+p,"dic_rename_"+p+",dic_delete_"+p],f=["mixedCase","mixedWithDigits","allCaps","ignoreDomainNames"];c=e.lang.scayt;var h=[{id:"options",label:c.optionsTab,elements:[{type:"html",id:"options",html:'<form name="optionsbar_'+p+'"><div class="inner_options">	<div class="messagebox"></div>	<div style="display:none;">		<input type="checkbox" name="options"  id="allCaps_'+p+'" />		<label for="allCaps" id="label_allCaps_'+p+'"></label>	</div>	<div style="display:none;">		<input name="options" type="checkbox"  id="ignoreDomainNames_'+p+'" />		<label for="ignoreDomainNames" id="label_ignoreDomainNames_'+p+'"></label>	</div>	<div style="display:none;">	<input name="options" type="checkbox"  id="mixedCase_'+p+'" />		<label for="mixedCase" id="label_mixedCase_'+p+'"></label>	</div>	<div style="display:none;">		<input name="options" type="checkbox"  id="mixedWithDigits_'+p+'" />		<label for="mixedWithDigits" id="label_mixedWithDigits_'+p+'"></label>	</div></div></form>'}]},{id:"langs",label:c.languagesTab,elements:[{type:"html",id:"langs",html:'<form name="languagesbar_'+p+'"><div class="inner_langs">	<div class="messagebox"></div>	   <div style="float:left;width:45%;margin-left:5px;" id="scayt_lcol_'+p+'" ></div>   <div style="float:left;width:45%;margin-left:15px;" id="scayt_rcol_'+p+'"></div></div></form>'}]},{id:"dictionaries",label:c.dictionariesTab,elements:[{type:"html",style:"",id:"dictionaries",html:'<form name="dictionarybar_'+p+'"><div class="inner_dictionary" style="text-align:left; white-space:normal; width:320px; overflow: hidden;">	<div style="margin:5px auto; width:80%;white-space:normal; overflow:hidden;" id="dic_message_'+p+'"> </div>	<div style="margin:5px auto; width:80%;white-space:normal;">        <span class="cke_dialog_ui_labeled_label" >Dictionary name</span><br>		<span class="cke_dialog_ui_labeled_content" >			<div class="cke_dialog_ui_input_text">				<input id="dic_name_'+p+'" type="text" class="cke_dialog_ui_input_text"/>		</div></span></div>		<div style="margin:5px auto; width:80%;white-space:normal;">			<a style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_create_'+p+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_delete_'+p+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_rename_'+p+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_restore_'+p+'">				</a>		</div>	<div style="margin:5px auto; width:95%;white-space:normal;" id="dic_info_'+p+'"></div></div></form>'}]},{id:"about",label:c.aboutTab,elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div id="scayt_about_'+p+'"></div>'}]}],v={title:c.title,minWidth:360,minHeight:220,onShow:function(){var t=this;if(t.data=e.fire("scaytDialog",{}),t.options=t.data.scayt_control.option(),t.chosed_lang=t.sLang=t.data.scayt_control.sLang,t.data&&t.data.scayt&&t.data.scayt_control){var i=0;r?t.data.scayt.getCaption(e.langCode||"en",function(e){0<i++||(l=e,b.apply(t),k.apply(t),r=!1)}):k.apply(t),t.selectPage(t.data.tab)}else alert("Error loading application service"),t.hide()},onOk:function(){var e=this.data.scayt_control;e.option(this.options),e.setLang(this.chosed_lang),e.refresh()},onCancel:function(){var e,a=t();for(e in a)a[e].checked=!1;a="undefined"!=typeof document.forms["languagesbar_"+p]?document.forms["languagesbar_"+p].scayt_lang:[],i(a,"")},contents:m};for(CKEDITOR.plugins.scayt.getScayt(e),c=0;c<g.length;c++)1==g[c]&&(m[m.length]=h[c]);1==g[2]&&(y=1);var b=function(){function e(e){var t=_.getById("dic_name_"+p).getValue();if(!t)return a(" Dictionary name should not be empty. "),!1;try{var i=e.data.getTarget().getParent(),n=/(dic_\w+)_[\w\d]+/.exec(i.getId())[1];v[n].apply(null,[i,t,u])}catch(o){a(" Dictionary error. ")}return!0}var t,i=this,c=i.data.scayt.getLangList(),r=["dic_create","dic_delete","dic_rename","dic_restore"],m=[],h=[];if(y){for(t=0;t<r.length;t++)m[t]=r[t]+"_"+p,_.getById(m[t]).setHtml('<span class="cke_dialog_ui_button">'+l["button_"+r[t]]+"</span>");_.getById("dic_info_"+p).setHtml(l.dic_info)}if(1==g[0])for(t in f)r="label_"+f[t],m=_.getById(r+"_"+p),"undefined"!=typeof m&&"undefined"!=typeof l[r]&&"undefined"!=typeof i.options[f[t]]&&(m.setHtml(l[r]),m.getParent().$.style.display="block");if(r='<p><img src="'+window.scayt.getAboutInfo().logoURL+'" /></p><p>'+l.version+window.scayt.getAboutInfo().version.toString()+"</p><p>"+l.about_throwt_copy+"</p>",_.getById("scayt_about_"+p).setHtml(r),r=function(e,t){var a=_.createElement("label");a.setAttribute("for","cke_option"+e),a.setHtml(t[e]),i.sLang==e&&(i.chosed_lang=e);var n=_.createElement("div"),o=CKEDITOR.dom.element.createFromHtml('<input id="cke_option'+e+'" type="radio" '+(i.sLang==e?'checked="checked"':"")+' value="'+e+'" name="scayt_lang" />');return o.on("click",function(){this.$.checked=!0,i.chosed_lang=e}),n.append(o),n.append(a),{lang:t[e],code:e,radio:n}},1==g[1]){for(t in c.rtl)h[h.length]=r(t,c.ltr);for(t in c.ltr)h[h.length]=r(t,c.ltr);for(h.sort(function(e,t){return t.lang>e.lang?-1:1}),c=_.getById("scayt_lcol_"+p),r=_.getById("scayt_rcol_"+p),t=0;t<h.length;t++)(t<h.length/2?c:r).append(h[t].radio)}var v={dic_create:function(e,t,i){var s=i[0]+","+i[1],c=l.err_dic_create,r=l.succ_dic_create;window.scayt.createUserDictionary(t,function(e){d(s),o(i[1]),r=r.replace("%s",e.dname),n(r)},function(e){c=c.replace("%s",e.dname),a(c+"( "+(e.message||"")+")")})},dic_rename:function(e,t){var i=l.err_dic_rename||"",o=l.succ_dic_rename||"";window.scayt.renameUserDictionary(t,function(e){o=o.replace("%s",e.dname),s(t),n(o)},function(e){i=i.replace("%s",e.dname),s(t),a(i+"( "+(e.message||"")+" )")})},dic_delete:function(e,t,i){var c=i[0]+","+i[1],r=l.err_dic_delete,_=l.succ_dic_delete;window.scayt.deleteUserDictionary(function(e){_=_.replace("%s",e.dname),d(c),o(i[0]),s(""),n(_)},function(e){r=r.replace("%s",e.dname),a(r)})}};for(v.dic_restore=i.dic_restore||function(e,t,i){var s=i[0]+","+i[1],c=l.err_dic_restore,r=l.succ_dic_restore;window.scayt.restoreUserDictionary(t,function(e){r=r.replace("%s",e.dname),d(s),o(i[1]),n(r)},function(e){c=c.replace("%s",e.dname),a(c)})},h=(u[0]+","+u[1]).split(","),t=0,c=h.length;c>t;t+=1)(r=_.getById(h[t]))&&r.on("click",e,this)},k=function(){var e=this;if(1==g[0])for(var a=t(),s=0,l=a.length;l>s;s++){var c=a[s].id,m=_.getById(c);m&&(a[s].checked=!1,1==e.options[c.split("_")[0]]&&(a[s].checked=!0),r)&&m.on("click",function(){e.options[this.getId().split("_")[0]]=this.$.checked?1:0})}1==g[1]&&(a=_.getById("cke_option"+e.sLang),i(a.$,e.sLang)),y&&(window.scayt.getNameUserDictionary(function(e){e=e.dname,d(u[0]+","+u[1]),e?(_.getById("dic_name_"+p).setValue(e),o(u[1])):o(u[0])},function(){_.getById("dic_name_"+p).setValue("")}),n(""))};return v});