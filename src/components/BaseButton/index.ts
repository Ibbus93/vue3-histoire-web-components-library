import { defineCustomElement } from 'vue'
import BaseButton from './BaseButton.vue'

const registerButton = () => {
  customElements.define('base-button', defineCustomElement(BaseButton))
}

export { registerButton, BaseButton }
