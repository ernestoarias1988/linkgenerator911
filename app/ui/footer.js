const html = require('choo/html');
const Component = require('choo/component');

class Footer extends Component {
  constructor(name, state) {
    super(name);
    this.state = state;
  }

  update() {
    return false;
  }

  createElement() {
    const translate = this.state.translate;

    // Add additional links from configuration if available

    return html`
      <footer
        class="flex flex-col md:flex-row items-start w-full flex-none self-start p-6 md:p-8 font-medium text-xs text-grey-60 dark:text-grey-40 md:items-center justify-between"
      >
        <ul
          class="flex flex-col md:flex-row items-start md:items-center md:justify-start"
        >
          <li class="m-2">${translate('footerText')}</li>
        </ul>
        <ul
          class="flex flex-col md:flex-row items-start md:items-center md:justify-end"
        ></ul>
      </footer>
    `;
  }
}

module.exports = Footer;
