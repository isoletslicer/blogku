(self.webpackChunkblogku=self.webpackChunkblogku||[]).push([[989],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var o=r(9489),n=r(7067);function a(t,r,i){return n()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var o=r(3646),n=r(6860),a=r(379),i=r(8206);e.exports=function(e){return o(e)||n(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},3395:function(e,t,r){var o=r(9100),n=r(319),a=r(9713),i=r(7316),l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),d=r(4983).mdx,u=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,l),c=u(t),m=p.useMemo((function(){if(!r)return null;var e=s({React:p,mdx:d},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return p.createElement(m,s({},a))}},5793:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var o=r(3552),n=r(7294),a=r(9),i=r(9555),l=r(5903),c=a.ZP.div.withConfig({displayName:"Translations__TranslationContainer",componentId:"sc-h6zxeq-0"})(["border-radius:5px;padding:10px;margin-top:10px;background-color:var(--color-lightYellow);border:1px solid var(--color-grey700);"]),s=a.ZP.span.withConfig({displayName:"Translations__InfoText",componentId:"sc-h6zxeq-1"})(["color:var(--color-grey900);"]),p=a.ZP.a.withConfig({displayName:"Translations__TranslationLink",componentId:"sc-h6zxeq-2"})(["color:var(--color-grey900);text-decoration:underline;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props.translations;return n.createElement(c,null,n.createElement(s,null,"This article also exists in: "),e.map((function(t,r){return n.createElement(n.Fragment,{key:"translation-"+r},n.createElement(p,{href:(0,l.withPrefix)(t.link)},t.language),r<e.length-1?", ":"")})))},t}(n.Component),u=a.ZP.time.withConfig({displayName:"Time__TimeContainer",componentId:"sc-1qt5ljm-0"})(["color:var(--color-textSecondary);"]),m=function(e){var t=e.date,r=new Date(t),o=r.toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"numeric"}).split("/").reverse().join("-"),a=r.toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"});return n.createElement(u,{datetime:o},a)},g=r(8015),h=a.ZP.header.withConfig({displayName:"ContentHeader__Header",componentId:"sc-171htiw-0"})(["margin-bottom:2rem;color:var(--color-textSecondary);font-size:0.9em;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.date,r=e.tags,o=e.translations;return n.createElement(h,null,t&&n.createElement(m,{date:t}),t&&Array.isArray(r)&&r.length>0&&n.createElement(g.fU,null),Array.isArray(r)&&r.length>0&&n.createElement(n.Fragment,null,n.createElement(i.Z,{tags:r})),o&&n.createElement(d,{translations:o}))},t}(n.Component),x=r(3395),b=r.n(x),v=a.ZP.div.withConfig({displayName:"Content__ContentBody",componentId:"sc-1cfgu0s-0"})(["line-height:1.6;& > h2{color:var(--color-h2);padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{fill:var(--color-text);box-shadow:0 2px 0 0 var(--color-secondary);&:hover{filter:brightness(150%);box-shadow:none;}&.anchor,&.gatsby-resp-image-link{box-shadow:none;}}h1 .anchor svg,h2 .anchor svg,h3 .anchor svg,h4 .anchor svg,h5 .anchor svg,h6 .anchor svg{visibility:hidden;margin-left:-16px;}h1:hover .anchor svg,h2:hover .anchor svg,h3:hover .anchor svg,h4:hover .anchor svg,h5:hover .anchor svg,h6:hover .anchor svg,h1 .anchor:focus svg,h2 .anchor:focus svg,h3 .anchor:focus svg,h4 .anchor:focus svg,h5 .anchor:focus svg,h6 .anchor:focus svg{visibility:visible;}& > blockquote{box-sizing:border-box;background-color:var(--color-secondaryContentBackground);border-left:5px solid var(--color-secondary);margin:30px 0px;padding:5px 20px;border-radius:0 8px 8px 0;}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em -1.5em;@media (max-width:500px){border-radius:0;margin-left:-25px;margin-right:-25px;}}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight pre[class*='language-']{float:left;min-width:100%;}& .gatsby-highlight-code-line{background-color:var(--color-darkBlue);display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid var(--color-yellow);}& h1 > code.language-text,& h2 > code.language-text,& h3 > code.language-text,& h4 > code.language-text,& h5 > code.language-text,& h6 > code.language-text,& a > code.language-text,& p > code.language-text,& li > code.language-text,& em > code.language-text,& strong > code.language-text{background:var(--color-beige);color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;word-wrap:break-word;}& code{word-wrap:break-word;}& table{margin-top:1em;margin-bottom:1em;border-collapse:collapse;overflow:hidden;& th,& td{padding:0.5em;background-color:var(--color-secondaryContentBackground);}& tr{border-bottom:2px solid var(--color-white);}& tbody tr:last-child{border-bottom:none;}}"]),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.content,r=e.date,o=e.tags,a=e.translations;return n.createElement("section",null,(o||r||a)&&n.createElement(f,{date:r,tags:o,translations:a}),n.createElement(v,null,n.createElement(b(),null,t)))},t}(n.Component)},5508:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var o=r(3552),n=r(7294),a=r(9),i=a.ZP.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1g64v5c-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII=",r="en"===e?"english post":"post en francais";return n.createElement(i,{src:t,alt:r,className:"flag"})},t}(n.Component)},9564:function(e,t,r){"use strict";var o=r(7294),n=r(9),a=r(9456),i=r(7520),l=n.ZP.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-18upu8l-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),c=n.ZP.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-18upu8l-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),s=n.ZP.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-18upu8l-2"})(["font-weight:700;font-size:3rem;margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]),p=n.ZP.h2.withConfig({displayName:"Hero__HeroSubTitle",componentId:"sc-18upu8l-3"})(["margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]);t.Z=function(e){var t=(0,a.Z)().siteCover,r=(0,i.Z)(t).fluid,n=e.heroImg||r.src;return o.createElement(l,{style:{backgroundImage:'url("'+n+'")'}},o.createElement(c,null,o.createElement(s,null,e.title),e.subTitle&&o.createElement(p,null,e.subTitle)))}},9555:function(e,t,r){"use strict";var o=r(3552),n=r(7294),a=r(5903),i=r(9),l=i.ZP.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-i58vrb-0"})(["display:inline;color:var(--color-textSecondary);"]),c=(0,i.ZP)(a.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"sc-i58vrb-1"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted var(--color-textSecondary);}&:before{content:'#';}"]),s=i.ZP.span.withConfig({displayName:"TagList__TagListItem",componentId:"sc-i58vrb-2"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,r=e.noLink;return n.createElement(l,null,t.map((function(e,o){return n.createElement(n.Fragment,{key:"tag-list-"+o},!r&&n.createElement(c,{to:"/tags/"+e},e),r&&n.createElement(s,{to:"/tags/"+e},e),o<t.length-1?", ":"")})))},t}(n.Component);t.Z=p},2644:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var o=r(3552),n=r(7294),a=r(7408),i=r(306),l=r(9564),c=r(9),s=r(8015),p=r(9456),d=r(7520),u=c.ZP.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-1ljgyo6-0"})(["& .author-image{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;top:-40px;left:50%;margin-left:-40px;width:80px;height:80px;border-radius:100%;overflow:hidden;padding:6px;z-index:2;box-shadow:#ececec 0 0 0 1px;background-color:var(--color-wrapperBackground);}& .author-image .img{position:relative;display:block;width:100%;height:100%;background-size:cover;background-position:center center;border-radius:100%;}& .author-profile .author-image{position:relative;left:auto;top:auto;width:120px;height:120px;padding:3px;margin:-100px auto 0 auto;box-shadow:none;}"]),m=(0,c.ZP)(s.xv).withConfig({displayName:"Bio__BioText",componentId:"sc-1ljgyo6-1"})(["& a{box-shadow:0 2px 0 0 var(--color-secondary);}& a:hover{filter:brightness(150%);box-shadow:none;}"]),g=function(){var e=(0,p.Z)(),t=e.authorAvatar,r=e.authorName,o=e.authorDescription,a=(0,d.Z)(t).fixed;return n.createElement(u,null,n.createElement("figure",{className:"author-image"},n.createElement("div",{alt:r,style:{backgroundImage:'url("'+a.src+'")'},className:"img"})),n.createElement("section",null,n.createElement("h4",null,"About the author"),n.createElement(m,{dangerouslySetInnerHTML:{__html:o}})))},h=r(5793),f=c.ZP.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"sc-10hm3ra-0"})(["padding:0 30px 30px;@media only screen and (max-width:500px){padding:0;}"]),x=c.ZP.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"sc-10hm3ra-1"})(["position:relative;margin:6rem 0 0;padding:3rem 0 0;border-top:1px solid #ececec;"]),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props.post;return n.createElement(f,null,n.createElement(h.Z,{content:e.body,date:e.frontmatter.date,tags:e.frontmatter.tags,translations:e.frontmatter.translations}),n.createElement(x,null,n.createElement(g,null)))},t}(n.Component),v=r(5903),y=r(9555),A=r(5508),w=c.ZP.aside.withConfig({displayName:"PrevNextPost__PreviewContainer",componentId:"sc-7b1tbv-0"})(["display:flex;flex-wrap:wrap;max-width:770px;width:80%;margin:0px auto 30px auto;top:20px;position:relative;@media (max-width:780px){width:100%;padding:25px;}"]),E=c.ZP.article.withConfig({displayName:"PrevNextPost__Preview",componentId:"sc-7b1tbv-1"})(["cursor:pointer;flex:1 1 300px;background-color:var(--color-secondaryContentBackground);box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);margin:20px 20px;border-radius:5px;&:hover{box-shadow:0 0 0 0,0 6px 12px var(--color-grey300);transition:all 0.3s ease;transform:translate3D(0,-1px,0);}@media (min-width:780px){&:first-child{margin-left:0;}&:last-child{margin-right:0;}}"]),k=c.ZP.div.withConfig({displayName:"PrevNextPost__PreviewCover",componentId:"sc-7b1tbv-2"})(["width:auto;height:200px;background:#c5d2d9 no-repeat 50%;background-size:cover;border-radius:5px 5px 0 0;"]),C=c.ZP.div.withConfig({displayName:"PrevNextPost__PreviewContent",componentId:"sc-7b1tbv-3"})(["padding:20px;header{padding:0 0 10px 0;}section{padding-bottom:10px;}footer{font-size:0.8em;}"]),Z=function(e){var t=[e.previous,e.next].filter((function(e){return e})).map((function(e){return{node:e}})),r=(0,p.Z)(),o=r.siteCover,a=r.defaultLang,i=(0,d.Z)(o).fluid;return n.createElement(n.Fragment,null,n.createElement(w,null,t.map((function(e,t){var r=e.node,o=r.excerpt,l=r.timeToRead,c=e.node.frontmatter,p=c.tags,d=c.cover,u=c.title,m=c.slug,g=c.language,h=d&&d.publicURL||i.src;return n.createElement(E,{key:"prev-next-"+t},n.createElement(v.Link,{to:"/"+m,"aria-label":"View "+u+" article"},n.createElement(k,{style:{backgroundImage:'url("'+h+'")'}}),n.createElement(C,null,n.createElement("header",null,n.createElement("h2",null,a!==g&&n.createElement(A.Z,{language:g}),u)),n.createElement("section",null,n.createElement("p",null,o)),n.createElement("footer",null,n.createElement(s.OV,{min:l}),Array.isArray(p)&&n.createElement(n.Fragment,null,n.createElement(s.fU,null),n.createElement(y.Z,{tags:p,noLink:!0}))))))}))))},I=r(389),P=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props.data.post,t=this.props.pageContext,r=t.previous,o=t.next;return n.createElement(a.Z,{location:this.props.location},n.createElement(I.Z,{title:e.frontmatter.title,description:e.excerpt,cover:e.frontmatter.cover&&e.frontmatter.cover.publicURL,imageShare:e.frontmatter.imageShare&&e.frontmatter.imageShare.publicURL,lang:e.frontmatter.language,translations:e.frontmatter.translations,path:e.frontmatter.slug,isBlogPost:!0}),n.createElement(l.Z,{heroImg:e.frontmatter.cover&&e.frontmatter.cover.publicURL,title:e.frontmatter.title}),n.createElement(i.Z,null,n.createElement(b,{post:e})),n.createElement(Z,{previous:r,next:o}))},t}(n.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ff45a77ece5de75300be.js.map