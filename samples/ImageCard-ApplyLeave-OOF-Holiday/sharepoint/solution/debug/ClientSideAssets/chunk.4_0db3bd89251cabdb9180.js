/*! For license information please see chunk.4_0db3bd89251cabdb9180.js.LICENSE.txt */
(window.webpackJsonp_6ca91d4dc7c0c2fcfdaa259a6265a59b=window.webpackJsonp_6ca91d4dc7c0c2fcfdaa259a6265a59b||[]).push([[4],{BCYZ:function(e){e.exports=JSON.parse('{"type":"AdaptiveCard","$schema":"http://adaptivecards.io/schemas/adaptive-card.json","version":"1.2","body":[{"type":"Container","items":[{"type":"TextBlock","text":"Leave Type","wrap":true,"weight":"Bolder"},{"type":"Container","items":[{"type":"TextBlock","text":"${leaveType}","wrap":true}],"style":"emphasis"}],"separator":true},{"type":"Container","items":[{"type":"TextBlock","text":"From","wrap":true,"weight":"Bolder"},{"type":"ColumnSet","columns":[{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"${startDate}","wrap":true}]},{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"${endDate}","wrap":true}]}],"style":"emphasis"}],"separator":true},{"type":"Container","items":[{"type":"TextBlock","text":"Reporting Manager","wrap":true,"weight":"Bolder"},{"type":"Container","items":[{"type":"TextBlock","text":"Arjun Das","wrap":true}],"style":"emphasis"}],"separator":true},{"type":"Container","items":[{"type":"TextBlock","text":"Leave Description","wrap":true,"weight":"Bolder"},{"type":"Container","items":[{"type":"TextBlock","text":"${leaveDesc}","wrap":true}],"style":"emphasis"}],"separator":true},{"type":"Container","items":[{"type":"Input.Text","placeholder":"Add automatic replay available to all","isMultiline":true,"label":"Set OOF message","id":"oofMessage"},{"type":"TextBlock","text":"Out of office works for current/future date","wrap":true,"color":"Attention","isVisible":"${if(errOnSubmit == true, true, false)}"}],"separator":true,"$when":"${isOOFEnabled == true}","style":"emphasis"}],"actions":[{"type":"Action.Submit","title":"Confirm"}]}')},NiMY:function(e,t,n){e.exports=n.p+"uploadIcon_6dd79514f3238c0aee44fa5f5f688cfe.png"},"PD/O":function(e,t,n){"use strict";n.r(t),n.d(t,"LeaveView",function(){return p});var a,i=n("lz/E"),r=n("F/m7"),o=n("rHmI"),s=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},c=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},d=function(){function e(e){var t=this;this._context=void 0,this._msGraphClient=void 0,this.Init_GraphClient=function(){return s(t,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:return[4,this._context.msGraphClientFactory.getClient("3")];case 1:return[2,e.sent()]}})})},this.SetOutOfOffice=function(e,n,a){return s(t,void 0,void 0,function(){var t,i,r;return c(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),t=this,[4,this.Init_GraphClient()];case 1:return t._msGraphClient=o.sent(),i={automaticRepliesSetting:{status:"Scheduled",externalAudience:"all",scheduledStartDateTime:{dateTime:"".concat(e,"T00:01:00.0000000")},scheduledEndDateTime:{dateTime:"".concat(n,"T23:59:00.0000000")},internalReplyMessage:"<html>\n<body>\n<p>".concat(a," <br>\n</p></body>\n</html>\n"),externalReplyMessage:"<html>\n<body>\n<p>".concat(a," <br>\n</p></body>\n</html>\n")}},[4,this._msGraphClient.api("/me/mailboxSettings").version("beta").update(i)];case 2:return o.sent(),[2,!0];case 3:return r=o.sent(),console.log("Exception occurred "+r),[2,!1];case 4:return[2]}})})},this._context=e}return e.prototype.GetGraphData=function(e,t){return s(this,void 0,void 0,function(){var n;return c(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),n=this,[4,this.Init_GraphClient()];case 1:return n._msGraphClient=a.sent(),[4,this._msGraphClient.api(e).version(t).get()];case 2:return[2,a.sent()];case 3:return a.sent(),console.log("Exception err"),[3,4];case 4:return[2]}})})},e}(),l=n("Pk8u"),u=n("Nat7"),f=(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{endDate:this.state.leaveInfo.endDate,startDate:this.state.leaveInfo.startDate,isOOFEnabled:this.state.leaveInfo.isOOfEnabled,leaveType:this.state.leaveInfo.leaveType,leaveDesc:this.state.leaveInfo.leaveDescription,oofMessage:this.state.leaveInfo.oofMessage,uploadIcon:n("NiMY"),errOnSubmit:this.state.errOnSubmit}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"template",{get:function(){return n("BCYZ")},enumerable:!1,configurable:!0}),t.prototype.onAction=function(e){return t=this,void 0,a=function(){var t,n,a,i,s,c,f=this;return function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(p){switch(p.label){case 0:return p.trys.push([0,3,,4]),this._graphService=new d(this.context),"Submit"!=e.type?[3,2]:(t=this.state.leaveInfo,n=t.startDate,a=t.endDate,i=t.isOOfEnabled,[4,r.b.web.currentUser.get()]);case 1:s=p.sent(),i?o.a.addItemToList(this.state.leaveInfo,s).then(function(t){void 0===e.data.oofMessage||Object(l.isEmpty)(t)?f._graphService.SetOutOfOffice(n,a,"Out of office").then(function(e){if(e)return window.location.reload()}):f._graphService.SetOutOfOffice(n,a,e.data.oofMessage).then(function(e){if(console.log(e),f.quickViewNavigator.push(u.SUCCESS_VIEW_REGISTRY_ID,!1),e)return window.location.reload();f.setState({errOnSubmit:!0})})}):o.a.addItemToList(this.state.leaveInfo,s).then(function(e){f.quickViewNavigator.push(u.SUCCESS_VIEW_REGISTRY_ID,!1)}),p.label=2;case 2:return[3,4];case 3:return c=p.sent(),console.log("Exception :",c),[3,4];case 4:return[2]}})},new((n=void 0)||(n=Promise))(function(e,i){function r(e){try{s(a.next(e))}catch(e){i(e)}}function o(e){try{s(a.throw(e))}catch(e){i(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n(function(e){e(a)})).then(r,o)}s((a=a.apply(t,[])).next())});var t,n,a},t}(i.BaseAdaptiveCardView)}}]);