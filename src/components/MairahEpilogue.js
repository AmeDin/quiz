import React, { Component } from "react";
import { TimelineLite } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import { Button, Container, Row, Col} from 'reactstrap'
import Loading from "./Loading";
import mp3 from '../assets/03Romance.mp3'
import hijab10 from '../assets/hijab11.gif'

const C = CSSPlugin;


class MairahEpilogue extends Component {
	
	constructor(props){
		super(props);
		this.state = { ansA: '', answer: true, modalContinue: false, isPlaying: null};

		
		this.bgTl = new TimelineLite({ paused:true });
		this.containerParent = null

		this.logoT0 = new TimelineLite({ paused:true });
		this.logoTl = new TimelineLite({ paused:true });
		
    }

    

	// add instances to the timeline
	componentDidMount(){
		
		this.bgTl
			.set(this.containerParent, { autoAlpha: 1 })// show content div
			.to(this.containerParent, 5, {backgroundColor : 'rgba(0, 0, 0)'});

			
		this.logoT0
			.set(this.begin, { autoAlpha: 1 })
			.from(this.bhead, 4, { top: 100, autoAlpha: 0 })
			.to(this.bhead, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.bline1, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.bline2, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.bline3, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinue, 3, { scale: .5, autoAlpha: 0 }, "feature") ; 

		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.from(this.head, 4, { top: 100, autoAlpha: 0 })
			.to(this.head, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.line1, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line2, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line3, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line4, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line5, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line6, 3, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line7, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line77, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line8, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line9, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line10, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line11, 3, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line12, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line13, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line14, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line15, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.line16, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.line17, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.hijab10, 2.5, { right: -100, autoAlpha: 0 }, "-=0.25") ; 

			this.bgTl.play()
			
			setTimeout(() => {
				this.logoT0.play()
				}, 5000);
	}

	alrightClick = (e) => {
		this.logoT0
			.set(this.begin, { autoAlpha: 1 })
			.to(this.btnContinue, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.bline3, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.bline2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.bline1, 0.2, { opacity: 0, autoAlpha: 0 })
		this.logoT0.play()
        
        this.onTrackChange(mp3)
		setTimeout(() => {
			document.querySelector(".begin").style.display = "none"
			document.querySelector(".content").style.display = "inline"
			this.logoTl.play()
		  }, 5000);
		
    }

	onTrackChange = (source) => {
        this.setState({ isPlaying: source },function(){
             this.refs.audio.pause();
             this.refs.audio.load();
             this.refs.audio.play();
        })
    }



	render(){
		return (
            <div ref={ div => this.containerParent = div } style={{backgroundColor: "#fff", height: "100vh"}}>
            <div className="container">
			<div className="row">
				<div className="col-12 mt-3">

					<div className="demoWrapper">
                        
						<audio controls loop ref="audio" className="invisible mt-n5">
							<source id="audioSource" src={this.state.isPlaying}type="audio/mp3"/>
							Your browser does not support the audio element.
						</audio>

						<div className="begin" ref={ div => this.begin = div }>
                            <div ref={ div => this.bhead = div}><Loading /></div>
							<h2 ref={ h2 => this.bline1 = h2 }>It's goodbye for tonight</h2>
                            <h2 ref={ h2 => this.bline2 = h2 }>Already gonna miss u as soon as u're no longer in sight</h2>
                            <h2 ref={ h2 => this.bline3 = h2 }>Time for today story closure last ride</h2>
							<div ref={ div => this.btnContinue = div}>
								<Container>
									<Row>
										<Col xs="12">
											<div ref={ div => this.btnBack = div}>
												<Button 
													color="secondary"
													style={{marginTop: '2rem', backgroundColor: "#C2C5CC", color: "black" }}
													block
													onClick={this.alrightClick}>
													Alright!
												</Button>
											</div>
										</Col>
									</Row>
								</Container>
							</div>
						</div>

						<div className="content" ref={ div => this.content = div }>
                            <div ref={ div => this.head = div}><Loading /></div>
							<h2 ref={ h2 => this.line1 = h2 }>Time draws nigh</h2>
                            <h2 ref={ h2 => this.line2 = h2 }>No doubt tis' is Ai 爱</h2>
                            <h2 ref={ h2 => this.line3 = h2 }>Quite certain that u know why</h2>
                            <h2 ref={ h2 => this.line4 = h2 }>Regardless, i shall tell you why</h2>
                            <h2 ref={ h2 => this.line5 = h2 }>Because everytime I think about mai</h2>
                            <h2 ref={ h2 => this.line6 = h2 }>Because it's hard to look at u in the eye</h2>
                            <h2 ref={ h2 => this.line7 = h2 }>Because u makes my heart fly</h2>
                            <h2 ref={ h2 => this.line77 = h2 }>And no doubt it delights me to be with mai</h2>
                            <h2 ref={ h2 => this.line8 = h2 }>Expressing openly has never been my,</h2>
                            <h2 ref={ h2 => this.line9 = h2 }>forte because I'm very shy</h2>
                            <h2 ref={ h2 => this.line10 = h2 }>Tis' not a lie</h2>
                            <h2 ref={ h2 => this.line11 = h2 }>Every day mendoakan this relationship will never die</h2>
                            <h2 ref={ h2 => this.line12 = h2 }>and for the day I will finally be thy</h2>
                            <h2 ref={ h2 => this.line13 = h2 }>guy..</h2>
                            <h2 ref={ h2 => this.line14 = h2 }>The man that u rely</h2>
                            <h2 ref={ h2 => this.line15 = h2 }>Shoulder the hardships that makes u sigh</h2>
                            <h2 ref={ h2 => this.line16 = h2 }>as well as the the place for u to cry</h2>
                            <h2 ref={ h2 => this.line17 = h2 }>I love u Mai</h2>
							<img ref={ img => this.hijab10 = img } src={hijab10} alt="success" className="hijab" />
						</div>
						

                    </div>

				</div>
			</div>
		</div>
		</div>)
	}

}

export default MairahEpilogue;
