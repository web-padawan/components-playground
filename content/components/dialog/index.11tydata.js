/**
 * @typedef {import('../../../src/types').ComponentData} ComponentData
 */

/** @type {ComponentData} */
export default {
  sample: `
    <vaadin-dialog>
      <div>Customizable dialog built with native popover API</div>
    </vaadin-dialog>
    <button>Open dialog</button>
  `,
  data: {
    members: [
      {
        kind: 'field',
        name: 'draggable',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'When true, the dialog is draggable',
        attribute: 'draggable',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'headerTitle',
        type: {
          text: 'string',
        },
        default: '',
        description: 'Title of the dialog',
        attribute: 'header-title',
      },
      {
        kind: 'field',
        name: 'height',
        type: {
          text: 'number',
        },
        default: '',
        description: 'Height of the dialog',
        attribute: 'height',
      },
      {
        kind: 'field',
        name: 'left',
        type: {
          text: 'number',
        },
        default: '',
        description: 'Left offset of the dialog',
        attribute: 'left',
      },
      {
        kind: 'field',
        name: 'modeless',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether the dialog is modeless',
        attribute: 'modeless',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'noCloseOnEsc',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether the dialog should close on Esc',
        attribute: 'no-close-on-esc',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'noCloseOnOutsideClick',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'Whether the dialog should close on outside click',
        attribute: 'no-close-on-outside-click',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'resizable',
        type: {
          text: 'boolean',
        },
        default: 'false',
        description: 'When true, the dialog is resizable',
        attribute: 'resizable',
        reflects: true,
      },
      {
        kind: 'field',
        name: 'top',
        type: {
          text: 'number',
        },
        default: '',
        description: 'Top offset of the dialog',
        attribute: 'top',
      },
      {
        kind: 'field',
        name: 'width',
        type: {
          text: 'number',
        },
        default: '',
        description: 'Width of the dialog',
        attribute: 'width',
      },
    ],
    cssProperties: [
      {
        description: 'Background',
        name: '--vaadin-dialog-background',
        default: 'var(--vaadin-background-color)',
      },
      {
        description: 'Border color',
        name: '--vaadin-dialog-border-color',
        default: 'var(--vaadin-border-color-secondary)',
      },
        {
        description: 'Border radius',
        name: '--vaadin-dialog-border-radius',
        default: 'var(--vaadin-radius-l)',
      },
      {
        description: 'Border width',
        name: '--vaadin-dialog-border-width',
        default: '1px',
      },
      {
        description: 'Box shadow',
        name: '--vaadin-dialog-box-shadow',
        default: '0 8px 24px -4px rgba(0, 0, 0, 0.3)',
      },
      {
        description: 'Max width',
        name: '--vaadin-dialog-max-width',
        default: '100%',
      },
      {
        description: 'Min width',
        name: '--vaadin-dialog-min-width',
        default: '4em',
      },
      {
        description: 'Padding',
        name: '--vaadin-dialog-padding',
        default: 'var(--vaadin-padding-l)',
      },
      {
        description: 'Title color',
        name: '--vaadin-dialog-title-color',
        default: 'var(--vaadin-text-color)',
      },
      {
        description: 'Title font size',
        name: '--vaadin-dialog-title-font-size',
        default: '1em',
      },
      {
        description: 'Title font weight',
        name: '--vaadin-dialog-title-font-weight',
        default: '600',
      },
      {
        description: 'Title line height',
        name: '--vaadin-dialog-title-line-height',
        default: 'inherit',
      },
    ],
    variants: [
      {
        description: 'Set to remove padding',
        name: 'no-padding',
      },
    ],
  },
};
