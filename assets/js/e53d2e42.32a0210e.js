"use strict";(self.webpackChunkuniversalreference_io=self.webpackChunkuniversalreference_io||[]).push([[8098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={},i=void 0,a={unversionedId:"Client/usage/uor-client-go",id:"Client/usage/uor-client-go",title:"uor-client-go",description:"uor-client-go",source:"@site/docs/Client/usage/uor-client-go.md",sourceDirName:"Client/usage",slug:"/Client/usage/uor-client-go",permalink:"/docs/Client/usage/uor-client-go",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/usage/uor-client-go.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema",permalink:"/docs/Client/design/schema"},next:{title:"uor-client-go_build",permalink:"/docs/Client/usage/uor-client-go_build"}},c={},u=[{value:"uor-client-go",id:"uor-client-go",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"uor-client-go"},"uor-client-go"),(0,o.kt)("p",null,"UOR Client"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"The UOR client helps you build, publish, and retrieve UOR collections as an OCI artifact."),(0,o.kt)("p",null," The workflow to publish a collection is to gather files for a collection in a directory workspace and use the build sub-command. During the build process, the tag for the remote destination is specified."),(0,o.kt)("p",null," This build action will store the collection in a build cache. This location can be specified with the UOR_CACHE environment variable. The default location is ~/.uor/cache."),(0,o.kt)("p",null," After the collection has been stored, it can be retrieved and pushed to the registry with the push sub-command."),(0,o.kt)("p",null," Collections can be retrieved from the cache or the remote location (if not stored) with the pull sub-command. The pull sub-command also allows for filtering of the collection with an attribute query configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"uor-client-go [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -h, --help              help for uor-client-go\n  -l, --loglevel string   Log level (debug, info, warn, error, fatal) (default "info")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Client/usage/uor-client-go_build"},"uor-client-go build"),"\t - Build and save an OCI artifact from files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Client/usage/uor-client-go_inspect"},"uor-client-go inspect"),"\t - Print UOR collection information"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Client/usage/uor-client-go_pull"},"uor-client-go pull"),"\t - Pull a UOR collection based on content or attribute address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Client/usage/uor-client-go_push"},"uor-client-go push"),"\t - Push a UOR collection into a registry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Client/usage/uor-client-go_serve"},"uor-client-go serve"),"\t - Serve gRPC API to allow UOR collection management"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Client/usage/uor-client-go_version"},"uor-client-go version"),"\t - Print the version")))}p.isMDXComponent=!0}}]);