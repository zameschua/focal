import React from 'react';

const TemplatePanelComponent = () => (
	<div className="mdc-card" style={{paddingBottom: "5%"}}>
	  <section className="mdc-card__primary" style={{backgroundColor: "white"}}>
	    <h1 className="mdc-card__title mdc-card__title--large">Title goes here</h1>
	    <h2 className="mdc-card__subtitle">Subtitle here</h2>
	  </section>
	  <section className="mdc-card__supporting-text" style={{backgroundColor: "white"}}>
	    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
	    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
	    commodo consequat.
	  </section>
	</div>
)

export default TemplatePanelComponent;