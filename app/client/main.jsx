import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import App from '/client/imports/components/App.jsx';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});
