/* jshint esversion: 6 */
let pageTransitionisAnimated = false;
let pageTransitionSelected = 0;
let modalIsOpen = false;

(function() {
  'use strict';
  console.log('custom scripts loaded');
}());

function reload(id) {
  'use strict';
  const stamp = new Date();
  const fragment = document.getElementById(id);
  fragment.setAttribute('src', './img/experimental-empty.svg');
  setTimeout(function() {
    fragment.setAttribute('src', `./img/experimental-filling.svg?${stamp}`);
  }, 250);
}

function handlePageTransitionPageChange(value) {
  console.log(pageTransitionSelected, value);
  if (pageTransitionSelected === value ) { return; }
  const oldPanel = document.getElementById(`pageTransitionStatic-${pageTransitionSelected}`);
  const newPanel = document.getElementById(`pageTransitionStatic-${value}`);
  oldPanel.classList.remove('shift-in-left');
  oldPanel.classList.remove('shift-in-right');
  newPanel.classList.remove('shift-out-left');
  newPanel.classList.remove('shift-out-right');
  newPanel.classList.remove('hidden');
  if (value > pageTransitionSelected) {
    oldPanel.classList.add('shift-out-right');
    newPanel.classList.add('shift-in-left');
  } else {
    oldPanel.classList.add('shift-out-left');
    newPanel.classList.add('shift-in-right');
  }
  pageTransitionSelected = value;
}

function animatePageTransitions(value) {
  console.log(value);
  const panels = Array.from(document.getElementsByClassName('page-transition-panel'));
  console.log(panels);
  if (value) {
    panels.forEach(panel => {
      panel.classList.add('animated');
    });
  } else {
    panels.forEach(function(panel) {
      panel.classList.remove('animated');
    });
  }
}

function expandMenu(id) {
  document.getElementById(id).classList.toggle('expanded');
}

function toggleMicroAnimation(menu, animated) {
  document.getElementById(menu).classList.toggle('expanded');
  if (animated === true) {
    document.getElementById('carret').classList.toggle('rotated');
  }
}

function openModal(id, animated) {
  'use strict';
  const modal = document.getElementById(id);
  modal.classList.toggle('open');
}