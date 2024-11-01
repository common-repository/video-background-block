!function(){"use strict";var e=wp.blocks,t=wp.blockEditor,n=JSON.parse('{"apiVersion":"1","name":"vbb/video-bg","title":"Video Background","description":"Use video as background in section.","category":"widgets","keywords":["video background","background","video"],"textdomain":"video-background","attributes":{"align":{"type":"string","default":"full"},"cId":{"type":"string","default":""},"video":{"type":"object","default":{"id":null,"url":"","alt":"","title":""}},"poster":{"type":"object","default":{"id":null,"url":"","alt":"","title":""}},"verticalAlign":{"type":"string","default":"center"},"textAlign":{"type":"string","default":"center"},"bgOverlay":{"type":"object","default":{}},"minHeight":{"type":"string","default":"700px"},"padding":{"type":"object","default":{"vertical":"20px","horizontal":"30px"}}},"supports":{"align":["wide","full"],"html":false},"example":{"attributes":{"preview":true,"sourceType":"link"}},"editorScript":"file:../dist/editor.js"}'),a=React,r=function(e,t){if(!e)return[];var n=[],a=e.media_details.sizes,r=function(e){var r=t.find((function(t){return t.slug===e}));r&&n.push({label:r.name,value:a[e].source_url})};for(var l in a)r(l);return n},l=wp.i18n,o=wp.components,c=function(e){var t=e.className,n=void 0===t?"mt20 mb5":t,a=e.htmlFor,r=e.children;return React.createElement("label",{className:"bPlLabel ".concat(n),htmlFor:a},r)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"px",label:"px",default:e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"%",label:"%",default:e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"em",label:"em",default:e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"rem",label:"rem",default:e}},m=[{name:"Daisy Bush to Fuchsia Blue",gradient:"linear-gradient(135deg, #4527a4, #8344c5)",slug:"daisy-bush-to-fuchsia-blue"},{name:"Reddish Orange to Yellowish Orange",gradient:"linear-gradient(135deg, #fe6601, #fbb040)",slug:"reddish-orange-to-yellowish-orange"},{name:"Tuft Bush to Carnation Pink",gradient:"linear-gradient(135deg, #fed1c7, #fe8dc6)",slug:"tuft-bush-to-carnation-pink"},{name:"Golden Fizz to Yellow Orange",gradient:"linear-gradient(135deg, #f9ed32, #fbb040)",slug:"golden-fizz-to-yellow-orange"},{name:"Light Electric Violet to Electric Violet",gradient:"linear-gradient(135deg, #e100ff, #7f00ff)",slug:"light-electric-violet-to-electric-violet"},{name:"Hot Pink to Violet Red",gradient:"linear-gradient(135deg, #ff7db8, #ee2a7b)",slug:"hot-pink-to-violet-red"},{name:"Spring Green to Azure Radiance",gradient:"linear-gradient(135deg, #00ff8f, #00a1ff)",slug:"spring-green-to-azure-radiance"}],p=[{label:"Solid",value:"solid"},{label:"Gradient",value:"gradient"},{label:"Image",value:"image"}],g=[{label:"Initial",value:"initial"},{label:"Scroll",value:"scroll"},{label:"Fixed",value:"fixed"},{label:"Local",value:"local"}],v=[{label:"No Repeat",value:"no-repeat"},{label:"Repeat",value:"repeat"},{label:"Repeat X",value:"repeat-x"},{label:"Repeat Y",value:"repeat-y"}],b=[{label:"Cover",value:"cover"},{label:"Auto",value:"auto"},{label:"Contain",value:"contain"}];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=o.__experimentalGradientPicker||o.GradientPicker,y=function(e){var t=e.className,n=void 0===t?"":t,a=e.label,r=void 0===a?(0,l.__)("Background","bplugins"):a,i=e.value,u=void 0===i?{}:i,s=e.onChange,d=e.defaults,f=void 0===d?{}:d,y=e.isSolid,w=void 0===y||y,C=e.isGradient,k=void 0===C||C,P=e.isImage,x=void 0===P||P,O={type:"solid",color:"#000000b3",gradient:"linear-gradient(135deg, #4527a4, #8344c5)",image:{},position:"center center",attachment:"initial",repeat:"no-repeat",size:"cover",overlayColor:"#000000b3"},N=function(e){return(null==f?void 0:f[e])||O[e]},S=function(e){return(null==u?void 0:u[e])||N(e)},j=function(e,t){return s(h(h({},u),{},R({},e,t)))},B=function(e){return React.createElement(o.Button,{icon:"image-rotate",className:"bPlResetVal",onClick:function(){return function(e){return s(h(h({},u),{},R({},e,N(e))))}(e)}})};return React.createElement(o.PanelRow,{className:"bPlDropdown ".concat(n)},React.createElement(c,{className:"mb5"},r),React.createElement(o.Dropdown,{className:"bPlDropdownContainer",contentClassName:"bPlDropdownPopover",position:"bottom right",renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return React.createElement(o.Button,{icon:"edit",onClick:n,"aria-expanded":t})},renderContent:function(){return React.createElement(React.Fragment,null,React.createElement(o.PanelRow,null,React.createElement(c,{className:""},(0,l.__)("Type:","bplugins")),React.createElement(z,{value:S("type"),onChange:function(e){return j("type",e)},options:!1===w?p.filter((function(e){return"solid"!==e.value})):!1===k?p.filter((function(e){return"gradient"!==e.value})):!1===x?p.filter((function(e){return"image"!==e.value})):p})),"solid"===S("type")&&w&&React.createElement(_,{className:"mt20",label:(0,l.__)("Color:","bplugins"),value:S("color"),onChange:function(e){return j("color",e)},defaultColor:N("color")}),"gradient"===S("type")&&k&&React.createElement(E,{className:"mt20",value:S("gradient"),onChange:function(e){return j("gradient",e)},gradients:m}),"image"===S("type")&&x&&React.createElement(React.Fragment,null,React.createElement(c,{className:"mb5"},(0,l.__)("Image","bplugins")),React.createElement(L,{types:["image"],value:S("image"),onChange:function(e){return j("image",e)}}),React.createElement(o.PanelRow,null,React.createElement(c,{className:""},(0,l.__)("Position","bplugins")),React.createElement(o.__experimentalAlignmentMatrixControl,{value:S("position"),onChange:function(e){return j("position",e)}}),(null==u?void 0:u.position)&&(null==u?void 0:u.position)!==N("position")&&B("position")),React.createElement(o.PanelRow,null,React.createElement(c,{className:""},(0,l.__)("Attachment:","bplugins")),React.createElement(o.SelectControl,{value:S("attachment"),onChange:function(e){return j("attachment",e)},options:g}),(null==u?void 0:u.attachments)&&(null==u?void 0:u.attachments)!==N("attachments")&&B("attachments")),React.createElement(o.PanelRow,null,React.createElement(c,{className:""},(0,l.__)("Repeat:","bplugins")),React.createElement(o.SelectControl,{value:S("repeat"),onChange:function(e){return j("repeat",e)},options:v}),(null==u?void 0:u.repeat)&&(null==u?void 0:u.repeat)!==N("repeat")&&B("repeat")),React.createElement(o.PanelRow,null,React.createElement(c,{className:""},(0,l.__)("Size:","bplugins")),React.createElement(o.SelectControl,{value:S("size"),onChange:function(e){return j("size",e)},options:b}),(null==u?void 0:u.size)&&(null==u?void 0:u.size)!==N("size")&&B("size")),React.createElement(_,{className:"mt20",label:(0,l.__)("Overlay Color:","bplugins"),value:S("overlayColor"),onChange:function(e){return j("overlayColor",e)},defaultColor:N("overlayColor")})))}}))};function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var _=function(e){var t=e.className,n=void 0===t?"":t,r=e.label,i=void 0===r?(0,l.__)("Color:","bplugins"):r,u=e.value,s=e.onChange,d=e.defaultColor,m=e.disableAlpha,p=void 0!==m&&m,g=w((0,a.useState)(u),2),v=g[0],b=g[1],f=wp.data.select("core/block-editor").getSettings().colors;return React.createElement(o.PanelRow,{className:n},React.createElement(c,{className:""},i),React.createElement(o.Dropdown,{className:"bPlDropdownContainer bColor",contentClassName:"bPlDropdownPopover bColorDropdownPopover",position:"top right",renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return React.createElement(React.Fragment,null,React.createElement("div",{className:"bColorButtonContainer"},React.createElement("button",{className:"bColorButton",isPrimary:!0,onClick:n,"aria-expanded":t,style:{backgroundColor:u||"transparent"}})),d&&d!=v&&React.createElement(o.Button,{className:"bPlResetVal",icon:"image-rotate",label:(0,l.__)("Reset","bplugins"),onClick:function(){s(d),b(d)}}))},renderContent:function(e){var t=e.isOpen;e.onClose;return React.createElement(React.Fragment,null,React.createElement(o.ColorPicker,{color:u||"",disableAlpha:p,onChangeComplete:function(e){s("rgba(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,", ").concat(e.rgb.a,")")),b(e.hex)}}),f.length&&React.createElement("div",{className:"themeColors"},f.map((function(e){var n=e.color;return React.createElement("div",{className:"bColorButtonContainer"},React.createElement("button",{className:"bColorButton",onClick:function(){s(n),b(n)},"aria-expanded":t,style:{backgroundColor:u?n:"transparent"}}))}))))}}))},k=React.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 330 330"},React.createElement("path",{d:"M100.606 229.393c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l75 75A14.954 14.954 0 00165 330a14.95 14.95 0 0010.606-4.394l75-75c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0L180 278.787V51.212l49.394 49.394A14.95 14.95 0 00240 105a14.95 14.95 0 0010.606-4.394c5.858-5.857 5.858-15.355 0-21.213l-75-75c-5.857-5.858-15.355-5.858-21.213 0l-75 75c-5.858 5.857-5.858 15.355 0 21.213 5.857 5.857 15.355 5.857 21.213 0L150 51.212v227.574l-49.394-49.393z"})),P=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 448 512"},React.createElement("path",{d:"M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})),x=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 512 512"},React.createElement("path",{d:"M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"})),O=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 576 512"},React.createElement("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})),N=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 448 512"},React.createElement("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"}));var z=function(e){var t=e.className,n=e.label,a=void 0===n?"":n,r=e.value,l=e.onChange,i=e.options,u=e.isIcon,s=void 0!==u&&u,d=e.isTextIcon,m=void 0!==d&&d,p=e.size,g=function(e){var t=e.className,n=void 0===t?"":t;return React.createElement(o.ButtonGroup,{className:"bPlBtnGroup ".concat(n||null)},Object.values(i).map((function(e){var t=e.value,n=e.icon,a=void 0===n?"":n,c=e.label,i=void 0===c?"":c,u=e.def,d=void 0===u?"":u,g=r===t,v="small"===p;return React.createElement(o.Button,{key:t,label:i,showTooltip:!0,tooltipPosition:"top",icon:s?a:null,variant:g?"primary":"","aria-pressed":g,isSmall:v,isMedium:!v,onClick:function(){return l(t,d&&d)}},m?a:s?"":i)})))};return a?React.createElement(o.PanelRow,{className:t},React.createElement(c,{className:""},a),React.createElement(g,null)):React.createElement(g,{className:t})};o.__experimentalGradientPicker||o.GradientPicker;var S=function(e){var t=e.slug,n=e.docsLink;return React.createElement(o.PanelBody,{className:"bPlPanelBody bPlHelpPanel",title:(0,l.__)("Help","bplugins"),initialOpen:!1},React.createElement("div",{className:"helpItems"},n&&React.createElement("a",{href:n,target:"_blank",rel:"noreferrer"},P,React.createElement("p",null,(0,l.__)("Read Documentation","bplugins"))),React.createElement("a",{href:"https://bplugins.com/support",target:"_blank",rel:"noreferrer"},x,React.createElement("p",null,(0,l.__)("Contact Support","bplugins"))),t&&React.createElement("a",{href:"https://wordpress.org/support/plugin/".concat(t,"/reviews/#new-post"),target:"_blank",rel:"noreferrer"},O,React.createElement("p",null,(0,l.__)("Rate Plugin","bplugins"))),React.createElement("a",{href:"https://bplugins.com/products",target:"_blank",rel:"noreferrer"},N,React.createElement("p",null,(0,l.__)("Other Plugins","bplugins")))))};o.__experimentalGradientPicker||o.GradientPicker;var j=wp.data,B=wp.blob;function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(0,j.withSelect)((function(e,t){var n=t.value;return{image:null!=n&&n.id?e("core").getMedia(null==n?void 0:n.id):null,imageSizes:e("core/block-editor").getSettings().imageSizes}}))((function(e){var t,n=e.className,a=e.value,i=void 0===a?{}:a,u=e.onChange,s=e.image,d=e.imageSizes,m=function(e,t){return u(M(M({},i),{},A({},e,t)))};return React.createElement("div",{className:n},(null==i?void 0:i.url)&&!(0,B.isBlobURL)(null==i?void 0:i.url)&&React.createElement(React.Fragment,null,React.createElement(c,{className:"mb5"},(0,l.__)("Alt Text (Alternative Text):","bplugins")),React.createElement(o.TextControl,{value:null==i?void 0:i.alt,onChange:function(e){return m("alt",e)}})),(null==i?void 0:i.id)&&0!==(null===(t=r(s,d))||void 0===t?void 0:t.length)&&React.createElement(o.PanelRow,null,React.createElement(c,{className:""},(0,l.__)("Select Size:","bplugins")),React.createElement(o.SelectControl,{value:null==i?void 0:i.url,onChange:function(e){return m("url",e)},options:r(s,d)})))})),(0,o.withNotices)((function(e){var n=e.label,a=void 0===n?(0,l.__)(" Image:","bplugins"):n,r=e.icon,o=void 0===r?"format-image":r,c=e.value,i=void 0===c?{}:c,u=e.onChange,s=e.noticeOperations,d=e.noticeUI;return React.createElement(t.MediaPlaceholder,{labels:{title:a},icon:o,allowedTypes:["image"],accept:"image/*",onSelect:function(e){var t=e.id,n=e.url,a=e.alt,r=e.title;return u(M(M({},i),{},{id:t,url:n,alt:a,title:r}))},onSelectURL:function(e){return u(M(M({},i),{},{id:null,url:e,alt:"",title:""}))},onError:function(e){return s.createErrorNotice(e)},notices:d})}));var I=function(e){var n=e.className,a=e.label,r=void 0===a?"":a,i=e.value,u=e.types,s=void 0===u?["image"]:u,d=e.onChange,m=e.placeholder,p=void 0===m?(0,l.__)("Enter URL","bplugins"):m;return React.createElement("div",{className:n},r&&React.createElement(c,{className:"mb5"},r),React.createElement(o.PanelRow,{className:"bplInlineMediaUpload"},React.createElement(o.TextControl,{value:i,onChange:function(e){return d(e)},placeholder:p}),React.createElement(t.MediaUploadCheck,null,React.createElement(t.MediaUpload,{allowedTypes:s,onSelect:function(e){return d(e.url)},render:function(e){var t=e.open;return React.createElement(o.Button,{className:"button button-primary",onClick:t,icon:"upload"})}}))))},L=function(e){var n=e.className,a=e.label,r=void 0===a?"":a,i=e.value,u=void 0===i?{}:i,s=e.types,d=void 0===s?["image"]:s,m=e.onChange,p=e.placeholder,g=void 0===p?(0,l.__)("Enter URL","bplugins"):p;return React.createElement("div",{className:n},r&&React.createElement(c,{className:"mb5"},r),React.createElement(o.PanelRow,{className:"bplInlineMediaUpload"},React.createElement(o.TextControl,{value:null==u?void 0:u.url,onChange:function(e){return m({id:null,url:e,alt:"",title:""})},placeholder:g}),React.createElement(t.MediaUploadCheck,null,React.createElement(t.MediaUpload,{allowedTypes:d,onSelect:function(e){var t=e.id,n=e.url,a=e.alt,r=e.title;return m({id:t,url:n,alt:a,title:r})},render:function(e){var t=e.open;return React.createElement(o.Button,{className:"button button-primary",onClick:t,icon:"upload"})}}))))};function T(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw l}}}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){var t=e.className,n=void 0===t?"":t,a=e.label,r=void 0===a?(0,l.__)("Space:","bplugins"):a,m=e.value,p=e.onChange,g=e.defaults,v=void 0===g?{}:g,b={side:2,vertical:"0px",horizontal:"0px",top:"0px",right:"0px",bottom:"0px",left:"0px"},f=function(e){return(null==v?void 0:v[e])||b[e]},h=function(e){return(null==m?void 0:m[e])||f(e)},R=function(e,t){return p(G(G({},m),{},F({},e,t)))},E=function(e){var t;return parseInt(null===(t=h(e))||void 0===t?void 0:t.replace(/([a-z])+/g,""))},y=function(e){return null!=e&&"object"===D(e)};return React.createElement("div",{className:"bPlSpaceControl ".concat(n)},React.createElement(o.PanelRow,null,React.createElement(c,{className:""},r),React.createElement(o.ButtonGroup,{className:"bPlBtnGroup"},React.createElement(o.Tooltip,{text:(0,l.__)("Vertical, Horizontal","bplugins"),position:"top"},React.createElement(o.Button,{className:"side2",isSmall:!0,isMedium:!1,isPrimary:2===h("side"),"aria-pressed":2===h("side"),onClick:function(){var e;return p(G(G({},m),{},(F(e={},"side",2),F(e,"vertical","".concat((E("top")+E("bottom"))/2,"px")),F(e,"horizontal","".concat((E("left")+E("right"))/2,"px")),e)))}},React.createElement("span",{className:"scrollIcon"},k),React.createElement("span",{className:"sideScrollIcon"},k))),React.createElement(o.Tooltip,{text:(0,l.__)("Top, Right, Bottom, Left","bplugins"),position:"top"},React.createElement(o.Button,{isSmall:!0,isMedium:!1,isPrimary:4===h("side"),"aria-pressed":4===h("side"),onClick:function(){var e;return p(G(G({},m),{},(F(e={},"side",4),F(e,"top",h("vertical")),F(e,"right",h("horizontal")),F(e,"bottom",h("vertical")),F(e,"left",h("horizontal")),e)))}},React.createElement(o.Dashicon,{icon:"arrow-up-alt"}),React.createElement(o.Dashicon,{icon:"arrow-right-alt"}),React.createElement(o.Dashicon,{icon:"arrow-down-alt"}),React.createElement(o.Dashicon,{icon:"arrow-left-alt"})))),!function(e,t,n){var a,r=function e(t,n){for(var a=0,r=Object.keys(t);a<r.length;a++){var l=r[a],o=t[l],c=n[l],i=y(o)&&y(c);if(i&&!e(o,c)||!i&&o!==c)return!1}return!0},l=T(Object.keys(e||{}).filter((function(e){return"styles"!==e})));try{for(l.s();!(a=l.n()).done;){var o=a.value,c=e[o],i=t[o],u=n[o],s=y(c)&&y(i),d=y(c)&&y(u);if(i){if(s&&!r(c,i)||!s&&c!==i)return!1}else if(d&&!r(c,u)||!d&&c!==u)return!1}}catch(e){l.e(e)}finally{l.f()}return!0}(m,v,b)&&React.createElement(o.Button,{icon:"image-rotate",className:"bPlResetVal",onClick:function(){var e={side:f("side"),vertical:f("vertical"),horizontal:f("horizontal"),top:f("top"),right:f("right"),bottom:f("bottom"),left:f("left")};p(G(G({},m),e))}})),2===h("side")&&React.createElement(o.PanelRow,{className:"twoColumn"},React.createElement(o.__experimentalUnitControl,{label:(0,l.__)("Top Bottom:","bplugins"),labelPosition:"top",value:h("vertical"),onChange:function(e){return R("vertical",e)},units:[i(),u(),s(),d()]}),React.createElement(o.__experimentalUnitControl,{label:(0,l.__)("Left Right:","bplugins"),labelPosition:"top",value:h("horizontal"),onChange:function(e){return R("horizontal",e)},units:[i(),u(),s(),d()]})),4===h("side")&&React.createElement(o.PanelRow,{className:"fourColumn"},React.createElement(o.__experimentalUnitControl,{label:(0,l.__)("Top:","bplugins"),labelPosition:"top",value:h("top"),onChange:function(e){return R("top",e)},units:[i(),u(),s(),d()]}),React.createElement(o.__experimentalUnitControl,{label:(0,l.__)("Right:","bplugins"),labelPosition:"top",value:h("right"),onChange:function(e){return R("right",e)},units:[i(),u(),s(),d()]}),React.createElement(o.__experimentalUnitControl,{label:(0,l.__)("Bottom:","bplugins"),labelPosition:"top",value:h("bottom"),onChange:function(e){return R("bottom",e)},units:[i(),u(),s(),d()]}),React.createElement(o.__experimentalUnitControl,{label:(0,l.__)("Left:","bplugins"),labelPosition:"top",value:h("left"),onChange:function(e){return R("left",e)},units:[i(),u(),s(),d()]})))};var Y="#4527a4",J=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 401.207 401.207"},React.createElement("path",{fill:Y,d:"M328.898,0.001H72.308C32.435,0.001,0,32.435,0,72.308v256.589c0,39.873,32.435,72.309,72.308,72.309h256.59 c39.873,0,72.309-32.436,72.309-72.309V72.308C401.207,32.435,368.771,0.001,328.898,0.001z M381.924,328.897 c0,29.238-23.787,53.027-53.025,53.027H72.308c-29.238,0-53.025-23.789-53.025-53.027V72.308 c0-29.238,23.787-53.025,53.025-53.025h256.59c29.238,0,53.025,23.787,53.025,53.025V328.897z"}),React.createElement("path",{fill:Y,d:"M111.022,55.48H63.989c-5.324,0-9.641,4.316-9.641,9.641v47.033c0,5.324,4.316,9.641,9.641,9.641h47.033 c5.324,0,9.642-4.316,9.642-9.641V65.121C120.664,59.796,116.347,55.48,111.022,55.48z M101.382,102.513H73.631V74.761h27.751 V102.513L101.382,102.513z"}),React.createElement("path",{fill:Y,d:"M139.386,121.794h47.033c5.324,0,9.641-4.316,9.641-9.641V65.12c0-5.324-4.316-9.641-9.641-9.641h-47.033 c-5.324,0-9.642,4.316-9.642,9.641v47.033C129.744,117.478,134.061,121.794,139.386,121.794z M149.026,74.761h27.751v27.752 h-27.751V74.761z"}),React.createElement("path",{fill:Y,d:"M261.816,55.48h-47.033c-5.324,0-9.643,4.316-9.643,9.641v47.033c0,5.324,4.318,9.641,9.643,9.641h47.033 c5.324,0,9.641-4.316,9.641-9.641V65.121C271.457,59.796,267.141,55.48,261.816,55.48z M252.174,102.513h-27.75V74.761h27.75 V102.513z"}),React.createElement("path",{fill:Y,d:"M337.211,55.48h-47.033c-5.324,0-9.643,4.316-9.643,9.641v47.033c0,5.324,4.316,9.641,9.643,9.641h47.033 c5.322,0,9.643-4.316,9.643-9.641V65.121C346.854,59.796,342.535,55.48,337.211,55.48z M327.57,102.513h-27.75V74.761h27.75 V102.513z"}),React.createElement("path",{fill:Y,d:"M111.022,279.417H63.989c-5.324,0-9.641,4.316-9.641,9.641v47.033c0,5.324,4.316,9.641,9.641,9.641h47.033 c5.324,0,9.642-4.316,9.642-9.641v-47.033C120.664,283.733,116.347,279.417,111.022,279.417z M101.382,326.45H73.631v-27.752 h27.751V326.45L101.382,326.45z"}),React.createElement("path",{fill:Y,d:"M186.419,279.417h-47.033c-5.324,0-9.642,4.316-9.642,9.641v47.033c0,5.324,4.317,9.641,9.642,9.641h47.033 c5.324,0,9.641-4.316,9.641-9.641v-47.033C196.06,283.733,191.743,279.417,186.419,279.417z M176.777,326.45h-27.751v-27.752 h27.751V326.45z"}),React.createElement("path",{fill:Y,d:"M261.816,279.417h-47.033c-5.324,0-9.643,4.316-9.643,9.641v47.033c0,5.324,4.318,9.641,9.643,9.641h47.033 c5.324,0,9.641-4.316,9.641-9.641v-47.033C271.457,283.733,267.141,279.417,261.816,279.417z M252.174,326.45h-27.75v-27.752 h27.75V326.45z"}),React.createElement("path",{fill:Y,d:"M337.211,279.417h-47.033c-5.324,0-9.643,4.316-9.643,9.641v47.033c0,5.324,4.316,9.641,9.643,9.641h47.033 c5.322,0,9.643-4.316,9.643-9.641v-47.033C346.854,283.733,342.535,279.417,337.211,279.417z M327.57,326.45h-27.75v-27.752h27.75 V326.45z"}),React.createElement("path",{fill:Y,d:"M163.634,160.505c-2.838,1.756-4.57,4.857-4.57,8.199v63.797c0,3.344,1.732,6.445,4.57,8.201 c1.549,0.955,3.31,1.439,5.07,1.439c1.474,0,2.952-0.338,4.312-1.017l63.796-31.897c3.266-1.633,5.328-4.972,5.328-8.625 c0-3.652-2.062-6.991-5.328-8.624l-63.796-31.898C170.027,158.593,166.482,158.75,163.634,160.505z M178.346,184.306 l32.599,16.296l-32.599,16.299V184.306z"})),$=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 512"},React.createElement("rect",{width:"480",height:"32",x:"16",y:"16"}),React.createElement("polygon",{points:"155.883 195.883 178.51 218.51 240 157.02 240 456 272 456 272 157.02 333.49 218.51 356.117 195.883 256 95.764 155.883 195.883"})),X=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 512"},React.createElement("polygon",{points:"240 16 240 162.177 186.509 108.687 163.882 131.313 256 223.431 348.118 131.313 325.491 108.687 272 162.177 272 16 240 16"}),React.createElement("rect",{width:"480",height:"32",x:"16",y:"240"}),React.createElement("polygon",{points:"163.882 380.687 186.509 403.313 240 349.823 240 496 272 496 272 349.823 325.491 403.313 348.118 380.687 256 288.569 163.882 380.687"})),K=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 512"},React.createElement("polygon",{points:"356.117 316.117 333.49 293.49 272 354.98 272 56 240 56 240 354.98 178.51 293.49 155.883 316.117 256 416.236 356.117 316.117"}),React.createElement("rect",{width:"480",height:"32",x:"16",y:"464"})),Q=function(e){var n=e.attributes,a=e.setAttributes,r=n.video,d=n.poster,m=n.verticalAlign,p=n.textAlign,g=n.bgOverlay,v=n.minHeight,b=n.padding;return React.createElement(React.Fragment,null,React.createElement(t.InspectorControls,null,React.createElement("div",{className:"vbbInspectorInfo"},"Need more block like this? Checkout the bundle ➡ ",React.createElement("a",{href:"https://wordpress.org/plugins/b-blocks",target:"_blank",rel:"noopener noreferrer"},"B Blocks")),React.createElement(S,{slug:"video-background-block",docsLink:"https://bblockswp.com/docs/video-background-block"}),React.createElement(o.PanelBody,{className:"bPlPanelBody",title:(0,l.__)("Video Background","video-background")},React.createElement(c,{className:"mb5"},(0,l.__)("Background Video","video-background")),React.createElement(I,{value:null==r?void 0:r.url,types:["video"],onChange:function(e){return a({video:{id:null,url:e,alt:"",title:""}})},placeholder:(0,l.__)("Enter Video URL","video-background")}),React.createElement(c,null,(0,l.__)("Poster (Fallback Image)","video-background")),React.createElement(I,{value:null==d?void 0:d.url,types:["image"],onChange:function(e){return a({poster:{id:null,url:e,alt:"",title:""}})},placeholder:(0,l.__)("Enter image URL","video-background")}),React.createElement(y,{className:"mt20",label:(0,l.__)("Background Overlay","video-background"),value:g,onChange:function(e){return a({bgOverlay:e})},isImage:!1}),React.createElement(o.__experimentalUnitControl,{className:"mt20",label:(0,l.__)("Min Height:","video-background"),labelPosition:"left",value:v,onChange:function(e){return a({minHeight:e})},units:[i(),u(),s()]}),React.createElement(q,{className:"mt20",label:(0,l.__)("Padding:","video-background"),value:b,onChange:function(e){return a({padding:e})},defaults:{vertical:"20px",horizontal:"30px"}}))),React.createElement(t.BlockControls,null,React.createElement(t.AlignmentToolbar,{value:m,onChange:function(e){return a({verticalAlign:e})},describedBy:(0,l.__)("Vertical Alignment"),alignmentControls:[{title:(0,l.__)("Content in top","video-background"),align:"flex-start",icon:$},{title:(0,l.__)("Content in center","video-background"),align:"center",icon:X},{title:(0,l.__)("Content in bottom","video-background"),align:"flex-end",icon:K}]}),React.createElement(t.AlignmentToolbar,{value:p,onChange:function(e){return a({textAlign:e})}})))},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=e||{},l=r.type,o=void 0===l?"solid":l,c=r.color,i=void 0===c?"#000000b3":c,u=r.gradient,s=void 0===u?"linear-gradient(135deg, #4527a4, #8344c5)":u,d=r.image,m=void 0===d?{}:d,p=r.position,g=void 0===p?"center center":p,v=r.attachment,b=void 0===v?"initial":v,f=r.repeat,h=void 0===f?"no-repeat":f,R=r.size,E=void 0===R?"cover":R,y=r.overlayColor,w=void 0===y?"#000000b3":y,C="gradient"===o&&n?"background: ".concat(s,";"):"image"===o&&a?"background: url(".concat(null==m?void 0:m.url,");\n\t\t\t\tbackground-color: ").concat(w,";\n\t\t\t\tbackground-position: ").concat(g,";\n\t\t\t\tbackground-size: ").concat(E,";\n\t\t\t\tbackground-repeat: ").concat(h,";\n\t\t\t\tbackground-attachment: ").concat(b,";\n\t\t\t\tbackground-blend-mode: overlay;"):t&&"background: ".concat(i,";");return C},Z=function(e){var t,n,a,r,l,o,c,i,u,s,d,m,p,g,v,b,f=e.attributes,h=e.clientId,R=f.verticalAlign,E=f.textAlign,y=f.bgOverlay,w=f.minHeight,C=f.padding,_="#vbbVideoBG-".concat(h);return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(_,"{\n\t\t\tmin-height: ").concat(w,";\n\t\t}\n\t\t").concat(_," .vbbVideoContent{\n\t\t\tjustify-content: ").concat(R,";\n\t\t\ttext-align: ").concat(E,";\n\t\t\tmin-height: ").concat(w,";\n\t\t\tpadding: ").concat((t=C,n=t||{},a=n.side,r=void 0===a?2:a,l=n.vertical,o=void 0===l?"0px":l,c=n.horizontal,i=void 0===c?"0px":c,u=n.top,s=void 0===u?"0px":u,d=n.right,m=void 0===d?"0px":d,p=n.bottom,g=void 0===p?"0px":p,v=n.left,b=void 0===v?"0px":v,2===r?"".concat(o," ").concat(i):"".concat(s," ").concat(m," ").concat(g," ").concat(b)),";\n\t\t}\n\t\t").concat(_," .vbbVideoOverlay{\n\t\t\t").concat(W(y),"\n\t\t}\n\t\t").replace(/\s+/g," ")}})},ee=function(e){var n=e.className,r=e.attributes,l=e.setAttributes,o=e.clientId,c=e.isSelected,i=r.video,u=r.poster;(0,a.useEffect)((function(){o&&l({cId:o.substring(0,10)})}),[o]),(0,a.useEffect)((function(){setTimeout((function(){var e=document.querySelectorAll(".components-panel__body-title button");function t(){var n=this;this.removeEventListener("click",t),e.forEach((function(e){"true"!==e.getAttribute("aria-expanded")||e.isEqualNode(n)||e.click()})),setTimeout((function(){n.addEventListener("click",t)}),500)}e.forEach((function(e){e.addEventListener("click",t)}))}),500)}),[c]);var s=(0,a.useRef)(null);return(0,a.useEffect)((function(){s.current.load()}),[null==i?void 0:i.url]),React.createElement(React.Fragment,null,React.createElement(Q,{attributes:r,setAttributes:l,clientId:o}),React.createElement("div",{className:n,id:"vbbVideoBG-".concat(o)},React.createElement(Z,{attributes:r,clientId:o}),React.createElement("video",{autoPlay:!0,muted:!0,loop:!0,playsinline:!0,className:"vbbVideoPlayer",ref:s,poster:null==u?void 0:u.url},React.createElement("source",{src:null==i?void 0:i.url,type:"video/mp4"}),"Your browser does not support HTML5 video."),React.createElement("div",{className:"vbbVideoOverlay"}),React.createElement("div",{className:"vbbVideoContent"},React.createElement(t.InnerBlocks,{template:[["core/heading",{content:"Video Background by bPlugins",style:{typography:{fontSize:"40px"},color:{text:"#fff"}}}],["core/paragraph",{content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim. Magni quis et voluptas voluptatum facere saepe cum reiciendis assumenda eveniet rem. Animi illo, doloribus suscipit, minus quos architecto eius repudiandae dignissimos voluptatibus facilis a quia odit voluptatem perspiciatis sit.",style:{typography:{fontSize:"20px"},color:{text:"#fff"}}}],["core/buttons",{contentJustification:"center",layout:{justifyContent:"center"}},[["core/button",{text:"Click Me",style:{typography:{fontSize:"30px"},color:{text:"#fff",gradient:"linear-gradient(135deg, #4527a4, #8344c5)"}}}]]]]}))))};(0,e.registerBlockType)(n,{icon:J,edit:ee,save:function(){return React.createElement(t.InnerBlocks.Content,null)}})}();
//# sourceMappingURL=editor.js.map