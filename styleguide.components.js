// Custom components that override the React Styleguidist defaults.
// Read components/README.md for more information.

const path = require('path');

module.exports = {
    StyleGuideRenderer: path.join(__dirname, 'src/components/style-guide'),
    TableOfContentsRenderer: path.join(
        __dirname,
        'src/components/table-of-contents',
    ),
    Components: path.join(__dirname, 'src/components/components'),
    ComponentsList: path.join(__dirname, 'src/components/components-list'),
    Examples: path.join(__dirname, 'src/components/examples'),
    Heading: path.join(__dirname, 'src/components/heading'),
    Link: path.join(__dirname, 'src/components/link'),
    SectionRenderer: path.join(__dirname, 'src/components/section'),
    ToolbarButtonRenderer: path.join(__dirname, 'src/components/toolbarbutton'),
};
