!function(t,o){"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o():t.tingle=o()}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=r({},o,t),this.init()}function o(){return'<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>'}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function s(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML=o(),this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function i(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function n(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:d.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:l.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function l(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}function d(t){-1!==this.opts.closeMethods.indexOf("overlay")&&!a(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function a(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function h(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function r(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}var c=!1;return t.prototype.init=function(){if(!this.modal)return s.call(this),n.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},t.prototype._busy=function(t){c=t},t.prototype._isBusy=function(){return c},t.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),h.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var t=this;return"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t._busy(!1),this.checkOverflow(),this}},t.prototype.close=function(t){if(!this._isBusy()){if(this._busy(!0),t=t||!1,"function"==typeof this.opts.beforeClose){if(!this.opts.beforeClose.call(this))return void this._busy(!1)}document.body.classList.remove("tingle-enabled"),window.scrollTo(0,this._scrollPosition),document.body.style.top=null,this.modal.classList.remove("tingle-modal--visible");var o=this;o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)}},t.prototype.setContent=function(t){return"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow(),this},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){return i.call(this),this},t.prototype.setFooterContent=function(t){return this.modalBoxFooter.innerHTML=t,this},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){return this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight;return this.modalBox.clientHeight>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))},{modal:t}});