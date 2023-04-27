import { defineComponent as s, resolveComponent as a, openBlock as l, createBlock as r, mergeProps as p, withCtx as u, renderSlot as c } from "vue";
const m = {
  name: "YuButton"
}, n = /* @__PURE__ */ s({
  ...m,
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
  setup(e) {
    return (t, d) => {
      const o = a("el-button");
      return l(), r(o, p({ class: "muk-btn" }, t.$attrs), {
        default: u(() => [
          c(t.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
n.install = (e) => {
  e.component(n.name, n);
};
const _ = [n], i = {
  install(e) {
    _.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  n as YuButton,
  i as default
};
