// #box 有自己的私有属性，
/**
 * box的原型链
 * HTMLDivElement
 * HTMLElement
 * Element
 * Node
 * EventTarget
 * Object
 */
var box=document.getElementById('box');

// 某些样式 在标准浏览器 和 IE678 还是有写不一样，这个时候可以根据不同的
/**
 * 在编写CSS样式的时候一定要修改每个浏览器的默认样式值
 * 
 */
console.log(getCSS(box,'fontFamily'));
console.log(getCSS(box,'border'));

console.log(box.currentStyle[''])


