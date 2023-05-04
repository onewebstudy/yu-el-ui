import { defineComponent as c, resolveComponent as a, openBlock as l, createBlock as u, mergeProps as p, withCtx as m, renderSlot as d } from "vue";
const i = {
  name: "YuButton"
}, s = /* @__PURE__ */ c({
  ...i,
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    return (e, o) => {
      const n = a("el-button");
      return l(), u(n, p({ class: "muk-btn" }, e.$attrs), {
        default: m(() => [
          d(e.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
s.install = (t) => {
  t.component(s.name, s);
};
const f = {
  name: "YuInput"
}, y = /* @__PURE__ */ c({
  ...f,
  props: {
    ysize: {
      type: String,
      default: "1"
    }
  },
  setup(t) {
    return (e, o) => {
      const n = a("el-input");
      return l(), u(n, p(e.$attrs, {
        class: { yu_color: t.ysize === "1" }
      }), null, 16, ["class"]);
    };
  }
});
const g = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, r] of e)
    o[n] = r;
  return o;
}, _ = /* @__PURE__ */ g(y, [["__scopeId", "data-v-1374857e"]]);
_.install = (t) => {
  t.component(_.name, _);
};
const v = [s, _], $ = {
  install(t) {
    v.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  s as YuButton,
  $ as default
};
