

export function removeClass(dom,className){
    dom.indexOf(className) != -1 && dom.className.replace(className,'');
}

export function addClass(dom,className){
    dom.indexOf(className) == -1 && (dom.className+=' ' + className);
}


String.prototype.trim=function()
{   
     return this.replace(/(^\s*)(\s*$)/g, '');
}



