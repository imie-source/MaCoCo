Ext.require('Ext.dom.Element', function() {
    Ext.isGarbage = function(dom) {
        // determines if the dom element is in the document or in the detached body element
        // use by collectGarbage and Ext.get()
        return dom &&
            // Must be an element. window, document and documentElement can never be garbage.
            dom.nodeType === 1 &&
            // if the element does not have a parent node, it is definitely not in the
            // DOM - we can exit immediately
            (!dom.parentNode ||
            // If the element has an offset parent we can bail right away, it is
            // definitely in the DOM.
            (!dom.offsetParent &&
                // if the element does not have an offsetParent it can mean the element is
                // either not in the dom or it is hidden.  The next step is to check to see
                // if it can be found by id using either document.all or getElementById(),
                // whichever is faster for the current browser.  Normally we would not
                // include IE-specific checks in the sencha-core package, however,  in this
                // case the function will be inlined and therefore cannot be overridden in
                // the ext package.
                ((Ext.isIE8 ? document.all[dom.id] : document.getElementById(dom.id)) !== dom) &&
                // finally if the element was not found in the dom by id, we need to check
                // the detachedBody element
                !(Ext.detachedBodyEl && Ext.detachedBodyEl.isAncestor(dom))));
    };
});