define([
    'base/js/namespace',
    'base/js/events'
], function(Jupyter, events) {
    // add a toggle button for normal to dark theme and vice versa
    let toggleDark = function() {
        // for testing
        Jupyter.notebook.insert_cell_below();
    };

    let toggleDarkButton = function() {
        Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help': 'toggle to dark mode',
                'icon' : 'fa-play-circle',
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