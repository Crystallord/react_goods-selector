(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var c=o(4),n=o.n(c),s=o(7),a=o(5),d=o(6),l=o(9),r=o(8),i=o(1),u=o.n(i),m=o(3),p=o.n(m),b=(o(14),o(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(o,e);var t=Object(r.a)(o);function o(){var e;Object(a.a)(this,o);for(var c=arguments.length,n=new Array(c),d=0;d<c;d++)n[d]=arguments[d];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.cleanOutGoods=function(){e.setState({selectedGoods:[]})},e}return Object(d.a)(o,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title",children:t.length?"".concat(t.map((function(e){return" ".concat(e)}))," selected"):"No goods selected"}),Object(b.jsx)("button",{type:"button",className:p()("App__btn",{"App__btn--active":t.length}),onClick:this.cleanOutGoods,children:"Clean out"}),Object(b.jsx)("ul",{className:"App__goods goods",children:j.map((function(o){return Object(b.jsxs)("li",{className:p()("goods__item","item",{"item--selected":t.includes(o)}),children:[Object(b.jsx)("div",{className:"item__good-name",children:o}),Object(b.jsx)("button",{type:"button",className:"item__btn",onClick:function(){t.includes(o)?e.removeGood(o):e.addGood(o)},children:t.includes(o)?"Remove":"Select"})]},o)}))})]})}}]),o}(u.a.Component);n.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.15a214cb.chunk.js.map