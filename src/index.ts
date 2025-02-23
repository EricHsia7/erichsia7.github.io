import { updateHomeField } from './interface/home/index';

import './interface/theme.css';
import './interface/index.css';

import './interface/home/field.css';
import './interface/home/head.css';
import './interface/home/body.css';
import './interface/home/groups.css';
import './interface/home/repositories.css';

window.erichsia7 = {
  initialize: function () {
    updateHomeField();
  }
};

export default window.erichsia7;
