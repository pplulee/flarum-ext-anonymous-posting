(()=>{var e={n:n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return e.d(o,{a:o}),o},d:(n,o)=>{for(var r in o)e.o(o,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:o[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};(()=>{"use strict";e.r(n);const o=flarum.core.compat["admin/app"];var r=e.n(o);r().initializers.add("anonymous-posting",(function(){r().extensionData.for("clarkwinkelmann-anonymous-posting").registerPermission({permission:"anonymous-posting.use",icon:"fas fa-user-secret",label:r().translator.trans("clarkwinkelmann-anonymous-posting.admin.permissions.use")},"start").registerPermission({permission:"anonymous-posting.reveal",icon:"fas fa-user-secret",label:r().translator.trans("clarkwinkelmann-anonymous-posting.admin.permissions.reveal")},"moderate").registerPermission({permission:"anonymous-posting.moderate",icon:"fas fa-user-secret",label:r().translator.trans("clarkwinkelmann-anonymous-posting.admin.permissions.moderate")},"moderate")}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map