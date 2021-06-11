import { createVNode, render } from 'vue';
import Dialog from './Mydialog.vue';
const dialogId = 'id-RCDialog';
export default {
  show: (options: any) => {
    const container = document.createElement('div');
    container.id = dialogId;
    const vm = createVNode(
      Dialog,
      options as any,
    )
    render(vm, document.body);
    document.body.appendChild(container);
  },
  close: () => {
    const ele = document.getElementById(dialogId);
    ele?.parentNode?.removeChild(ele);
  }
}