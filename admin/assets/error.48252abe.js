import{w as l}from"./element-plus.5b1237d2.js";import{a as u}from"./vue-router.8e70c72f.js";import{d,r as _,Y as v,o as m,c as f,a as r,H as B,S as i,K as x,L as y,R as g,u as E,Q as h}from"./@vue.50ba5cf8.js";import{b as k}from"./index.da3d0c3f.js";import"./@vueuse.e5441eed.js";import"./lodash-es.827b01c8.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.c3fd6bb1.js";import"./dayjs.a0a5e739.js";import"./axios.888ca58c.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.93079aaa.js";import"./pinia.5dae7c2f.js";import"./css-color-function.1e6e782a.js";import"./color.ae9d9c2e.js";import"./clone.3eea05b6.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.a5409a05.js";import"./vue-clipboard3.18e02417.js";import"./clipboard.1b17267c.js";import"./echarts.098cf7d6.js";import"./zrender.0646a922.js";import"./tslib.60310f1a.js";import"./highlight.js.16be5b07.js";import"./@highlightjs.e34a6675.js";import"./default-passive-events.74004992.js";const w={class:"error"},S={class:"error-code"},C={class:"text-lg text-tx-secondary mt-7 mb-7"},D=d({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const n=t;let o=null;const e=_(5),s=u();return n.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),s.go(-1)):e.value--},1e3)),v(()=>{o&&clearInterval(o)}),(p,a)=>{const c=l;return m(),f("div",w,[r("div",null,[B(p.$slots,"content",{},()=>[r("div",S,i(t.code),1)],!0),r("div",C,i(t.title),1),t.showBtn?(m(),x(c,{key:0,type:"primary",onClick:a[0]||(a[0]=I=>E(s).go(-1))},{default:y(()=>[g(i(e.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):h("",!0)])])}}});const nt=k(D,[["__scopeId","data-v-a47523cc"]]);export{nt as default};