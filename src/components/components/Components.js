import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from 'rsg-components/ReactComponent';
import ComponentsRenderer from 'rsg-components/Components/ComponentsRenderer';

export default function Components({ components, depth }) {
    // Her kan vi i TEORIEN bruke `depth` til å skjule f.eks. nivå 3 bak fane X, nivå 4 bak fane Y, og nivå 5 bak fane Z,
    // og skjule disse nivåpene fra components-list. Det blir USANNSYNLIG hacky.
    // Tror heller vi må belage oss på en migrering til f.eks. Gatsby...
    return (
        <ComponentsRenderer>
            {components.map(component => (
                <ReactComponent
                    key={component.filepath}
                    component={component}
                    depth={depth}
                />
            ))}
        </ComponentsRenderer>
    );
}

Components.propTypes = {
    components: PropTypes.array.isRequired,
    depth: PropTypes.number.isRequired,
};
