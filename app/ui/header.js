const html = require('choo/html');
const Component = require('choo/component');
const Account = require('./account');
const assets = require('../../common/assets');
const { platform } = require('../utils');

class Header extends Component {
  constructor(name, state, emit) {
    super(name);
    this.state = state;
    this.emit = emit;
    this.account = state.cache(Account, 'account');
  }

  update() {
    this.account.render();
    return false;
  }

  createElement() {
    platform() === 'android'
      ? html`
          <a class="flex flex-row items-center">
            <img src="${assets.get('icon.svg')}" />
            <svg class="w-48">
              <use xlink:href="${assets.get('wordmark.svg')}#logo" />
            </svg>
          </a>
        `
      : html``;
    return html`
      <header>
        <br /><br /><br />
        <table border="0" width="95%" height="auto">
          <tr>
            <td>
              <center>
                <img
                  src="https://www.salta.gob.ar/public/images/logo-gobierno-salta-2020.png"
                  border="0"
                />
              </center>
            </td>
            <td>
              <center><p></p></center>
            </td>
            <td>
              <center>
                <img
                  src="http://www.911salta.gob.ar/wp-content/uploads/2021/05/logo-911-salta-argentina-1.png"
                  border="0"
                />
              </center>
            </td>
          </tr>
        </table>
      </header>
    `;
  }
}

module.exports = Header;
