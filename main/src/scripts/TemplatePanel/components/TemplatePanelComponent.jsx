import React from 'react';

const TemplatePanelComponent = () => (
	<div className="mdc-card bg-faded" style={{marginBottom: "5%"}}>
	  <section className="mdc-card__primary">
	    <h1 className="mdc-card__title mdc-card__title--large text-muted">Title goes here</h1>
	    <h2 className="mdc-card__subtitle text-muted">Subtitle here</h2>
	  </section>
	  <section className="mdc-card__supporting-text text-muted">
	    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
	    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
	    commodo consequat.
	  </section>
	</div>
)

export default TemplatePanelComponent;