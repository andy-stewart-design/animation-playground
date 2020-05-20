// Import Example

import {getFullName} from './_partials/test'
const firstName = getFullName('Andy Stewart');

console.log(firstName);

// Bouncing Ball

var tl = gsap.timeline({repeat: -1});

tl.set("div.ball", {yPercent: -100, transformOrigin:"50% bottom"})
  .set("div.shadow", {yPercent: 100, scaleX: .5, scaleY: .125, transformOrigin:"center"})
  .to("div.ball", {yPercent: 100, ease: Power2.easeIn, duration: 1})
  .to("div.ball", {scaleX: 1.5, scaleY: .75, ease: Power4.easeOut, duration: .25})
  .to("div.ball", {scaleX: 1, scaleY: 1, ease: Power4.easeOut, duration: .25})
  .to("div.ball", {yPercent: -100, ease: Power2.easeOut, duration: 1}, "-=.25")
  .to("div.shadow", {scaleX: 1.375, ease: Power2.easeIn ,duration: 1}, 0)
  .to("div.shadow", {scaleX: .5, ease: Power4.easeOut ,duration: 1}, "-=1")