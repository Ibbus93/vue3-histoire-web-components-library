import { aq as defineComponent, ar as openBlock, as as createElementBlock, at as renderSlot, au as defineCustomElement, av as resolveComponent, aw as createBlock, ax as withCtx, ay as createVNode, az as createTextVNode } from "./vendor-e3ef750f.js";
const _style_0 = ":root {\n  --color-primary: #1d54f7;\n  --color-secondary: #2c79ec;\n  --color-error: #e84a46;\n  --color-success: #5fc261;\n  --color-warning: #f5ae3b;\n  --color-text: #fafafa;\n  --color-white: #fff;\n  --border-primary: 1px solid var(--color-primary-100);\n  --border-radius: 8px;\n}\nhtml.dark:root {\n  --color-primary: #61a8c7;\n  --color-secondary: #1b1a1a;\n  --color-error: #e84a46;\n  --color-success: #339948;\n  --color-warning: #a95b00;\n  --color-text: #030848;\n  --color-white: #fff;\n  --border-primary: 1px solid var(--color-primary-100);\n  --border-radius: 8px;\n}\n.personal-button {\n  background-color: var(--color-primary);\n  color: var(--color-text);\n  padding: 0.75rem 1rem;\n  border-radius: var(--border-radius);\n  border: 0;\n  cursor: pointer;\n  width: fit-content;\n}";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  props: {
    text: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const onClick = () => alert("hi world");
    const __returned__ = { onClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: "personal-button",
    onClick: $setup.onClick
  }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main$1.__file = "src/components/BaseButton/BaseButton.vue";
const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/home/runner/work/vue3-histoire-web-components-library/vue3-histoire-web-components-library/src/components/BaseButton/BaseButton.vue"]]);
const registerButton = () => {
  customElements.define("base-button", defineCustomElement(BaseButton));
};
const block0 = (Comp) => {
  Comp.doc = '<h1 id="button" tabindex="-1">Button <a class="header-anchor" href="#button" aria-hidden="true">#</a></h1>\n<p>This is the button doc</p>\n';
};
registerButton();
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_base_button = resolveComponent("base-button");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createVNode(_component_base_button, null, {
        default: withCtx(() => [
          createTextVNode(" Submit ")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/components/BaseButton/BaseButton.story.vue";
const BaseButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue3-histoire-web-components-library/vue3-histoire-web-components-library/src/components/BaseButton/BaseButton.story.vue"]]);
export {
  BaseButton_story as default
};
