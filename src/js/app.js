"use strict";

import "bootstrap";

// More info for using bootstrap via npm:
// https://getbootstrap.com/docs/5.0/getting-started/download/#npm
function rem2px(rem) {
    var el = document.createElement('div');
    document.body.appendChild(el);
    el.style.width = '1000rem';
    var factor = el.clientWidth / 1000;
    document.body.removeChild(el);
    return rem * factor;
}
