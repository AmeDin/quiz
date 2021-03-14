import React, { Component, useState } from "react";
import { TimelineLite, Linear } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import Loading from "./Loading";
import { useAuth } from "../context/auth";
import AccessMai from './AccessMai';

const C = CSSPlugin;


class MaiTimeSequence extends Component {

	
	constructor(props){
		super(props);

		this.bgTl = new TimelineLite({ paused:true });
		this.containerParent = null

		this.logoTl = new TimelineLite({ paused:true });

		this.content = null;
		this.head = null;
		this.subhead = null;
		// this.ms2 = null;
		this.msg = null;
		this.warn = null;
		this.form = null;
	}

	

	// add instances to the timeline
	componentDidMount(){
		this.logoTl
			.set(this.content, { autoAlpha: 1 })// show content div
			.from(this.head, 5, { top: 100, autoAlpha: 0 })
			.to(this.head, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.subhead, 3, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			// .from(this.msg2, 2, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.warn, 3, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.msg, 2, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.form, 2, { scale: .3, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
		this.logoTl.play()

		this.bgTl
			.set(this.containerParent, { autoAlpha: 1 })// show content div
			.to(this.containerParent, 5, {backgroundColor : 'rgba(255, 255, 255, 255)'});
		

			setTimeout(() => {
				this.bgTl.play()
				  }, 6000);
	}

	render(){
		return (
            <div ref={ div => this.containerParent = div } style={{backgroundColor: "#000", height: "100vh"}}>
            <div className="container">
			<div className="row">
				<div className="col-12 mt-3">

					<div className="demoWrapper">

						<div className="bg"></div>

						<div className="content" ref={ div => this.content = div } className="txtdg">
                            <div ref={ div => this.head = div}><Loading /></div>
							<h2 ref={ h2 => this.subhead = h2 }>After the usual Saturday religious class.</h2>
                            <h2 ref={ h2 => this.warn = h2 }>Umairah was given a url link.</h2>
							<h2 ref={ h2 => this.msg = h2 }>Excitement builds up. It's time to begin</h2>
                            <div ref={ div => this.form = div}>
                                <AccessMai props={this.props}/>
                            </div>

						</div>

					</div>

					{/* BUTTONS */}
					{/* <div className="my-3 btn-group">
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.play()}
						>Play</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.pause()}
						>Pause</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.reverse()}
						>Reverse</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.restart()}
						>Restart</button>
					</div> */}

				</div>
			</div>
		</div>
		</div>)
	}

}

export default MaiTimeSequence;
