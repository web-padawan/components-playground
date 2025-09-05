/**
 * @typedef {import('custom-elements-manifest').CustomElement} CustomElement
 */

/**
 * @typedef ComponentData
 * @type {object}
 * @property {string} sample - Sample HTML to be rendered
 * @property {CustomElement} data - Custom Element Manifest data
 */

/** @type {ComponentData} */
export default {
  sample: `
    <vaadin-popover for="target">
      <div>Popover content</div>
    </vaadin-popover>
    <button id="target">Target</button>
  `,
  data: {
    cssProperties: [
      {
        description: 'Border width',
        name: '--vaadin-popover-border-width',
        default: 'var(--vaadin-overlay-border-width, 1px)',
      },
      {
        description: 'Border color',
        name: '--vaadin-popover-border-color',
        default: 'var(--vaadin-overlay-border-color)',
      },
    ],
    attributes: [
      {
        type: {
          text: 'boolean',
        },
        description: 'When true, the popover is modal',
        name: 'modal',
      },
      {
        type: {
          text: 'boolean',
        },
        description: 'When true, the popover has backdrop',
        name: 'with-backdrop',
      },
      {
        type: {
          text: `'bottom' | 'bottom-end' | 'bottom-start' | 'end' | 'end-bottom' | 'end-top' | 'start' | 'start-bottom' | 'start-top' | 'top' | 'top-end' | 'top-start'`,
        },
        description: 'Position of the popover with respect to its target',
        name: 'position',
      },
    ],
  },
};
