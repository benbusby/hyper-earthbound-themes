exports.decorateConfig = config => {
    // Set default theme to fire spring if not present.
    var themeName = config.earthbound_themes || 'fire-spring';

    // Load rainglow color from subdirectory.
    var colors = require(__dirname + '/colors/' + themeName);

    // Override config object with new colors.
    return Object.assign({}, config, colors);
};
