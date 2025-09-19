export function initComponents(element) {
  // Init dialog open and close buttons
  if (element.localName === 'vaadin-dialog') {
    const openBtn = element.nextElementSibling;
    openBtn.addEventListener('click', () => {
      element.opened = !element.opened;
    });

    // TODO use regular footer slot instead
    element.footerRenderer = (root) => {
      if (!root.firstChild) {
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', () => {
          element.opened = false;
        });

        root.appendChild(closeBtn)
      }
    }
  }
}
