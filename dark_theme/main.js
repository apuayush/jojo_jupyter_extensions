import css from './static/dark.css'

define([
    'base/js/namespace',
    'base/js/events'
], function(Jupyter, events) {
    // add a toggle button for normal to dark theme and vice versa
    let toggleDark = function() {
        // for testing
        console.log("starting process for dark theme");
        console.log("------------------D-A-R-K------------------");
        let filename = "./static/dark.css";
        let fileRef = document.createElement("style");
        fileRef.setAttribute("type", "text/css");
        fileRef.innerHTML = css;
        console.log("------------------D-A-R-K------------------");
        if(typeof fileRef != "undefined"){
            document.getElementsByTagName("head")[0].appendChild(fileRef);
        }
        console.log("------------------F-I-N-I-S-H------------------");
        alert("lets see");
    };

    let toggleDarkButton = function() {
        Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help': 'toggle to dark mode',
                'icon' : 'fa-adjust',
                'handler': toggleDark
            }, 'toggle-dark-mode', 'Dark Mode')
        ])
    }

    // Run on start
    function load_ipython_extension() {
        // ADD DARK MODE BUTTON AT START
        toggleDarkButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
    
});