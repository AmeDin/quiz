import React, { Component } from "react";
import { TimelineLite } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import { Button, Container, Row, Col, Form, FormGroup, Input,
    ModalHeader, ModalBody, Modal, Label} from 'reactstrap'
import Loading from "./Loading";
import hijab13 from '../assets/hijab13.gif'
import hijab11 from '../assets/hijab11.gif'
import hijab12 from '../assets/hijab12.gif'
import muzan from '../assets/muzan.gif'
import crane from '../assets/crane.gif'

const C = CSSPlugin;


class HiddenPageMairahFinalTwo extends Component {
	
	constructor(props){
		super(props);
		this.state = { ansA: '', answer: true, modalContinue: false, isPlaying: null};

		
		this.bgTl = new TimelineLite({ paused:true });
		this.containerParent = null

		this.logoTl = new TimelineLite({ paused:true });
		this.logoTlB = new TimelineLite({ paused:true });
		this.content = null;
		this.head = null;
		this.linenegate = null;
		this.maiZero = null;
		this.maigiffirst = null;
		this.maiOne = null;
		this.maiThree = null;
		this.maiFive = null;
		this.maiSeven = null;
		this.maigifLast = null;
		this.letterImg = null;
		this.writeImg = null;
		this.line0 = null;
		this.line1 = null;
		this.line2 = null;
		this.line3 = null;
		this.line4 = null;
		this.line5 = null;
		this.line6 = null;
		this.line7 = null;
		this.line8 = null;
		this.line9 = null;
		this.line10 = null;
		this.line11 = null;
		this.btnContinue = null;

		this.logoTl2 = new TimelineLite({ paused:true });
		this.vid = null;
		this.btnContinueTwo = null;

		
		this.logoTl2fun = new TimelineLite({ paused:true });

		this.logoTl3 = new TimelineLite({ paused:true }); 
		this.q1Content = null;
        this.endline = null;
		this.endline1 = null;
		this.endline2 = null;
		this.endline3 = null;
		this.endline4 = null;
		this.endline5 = null;
		this.endline6 = null;
		this.endline7 = null;
		this.endline8 = null;
		this.endline9 = null;
		this.endline10 = null;
		this.endline11 = null;
		this.endline12 = null;
		this.endline13 = null;
		this.endline14 = null;
		this.endline15 = null;
		this.endline16 = null;
		this.endline17 = null;
		this.yesImg = null;

		this.logoTl4 = new TimelineLite({ paused:true }); 
		this.logoTl5 = new TimelineLite({ paused:true }); 
		this.logoTl6 = new TimelineLite({ paused:true }); 
		this.logoTl7 = new TimelineLite({ paused:true }); 
		this.logoTl8 = new TimelineLite({ paused:true }); 
		
    }
    
    toggleContinue = () => {
        this.setState({
            modalContinue: !this.state.modalContinue
        });
    }

    
	scroller = () => {
		setTimeout(() => {
			window.scrollBy({
				top: -600,
				behavior: 'smooth'
			  });
		  }, 1000);
	}

	// add instances to the timeline
	componentDidMount(){
		
		this.bgTl
			.set(this.containerParent, { autoAlpha: 1 })// show content div
			.to(this.containerParent, 1, {backgroundColor : 'rgba(0, 0, 0)'});

		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.from(this.hijab13, 0.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line1, 1.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.line2, 1.5, { left: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinue, 1, { scale: .5, autoAlpha: 0 }, "feature") ; 

		this.logoTl2
			.set(this.vidContent, { autoAlpha: 1 })
			.fromTo(this.vidContent, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'})  
			.from(this.vidline1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline3, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline4, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.vidline5, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline6, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline7, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinueTwo, 2, { scale: .5, autoAlpha: 0 }, "feature");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");
		
			this.logoTl3.set(this.q1Content, { autoAlpha: 1 })
			.fromTo(this.q1Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'})  
			.from(this.q1line0, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q1line1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q1line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinueQ1, 2.5, { scale: .5, autoAlpha: 0 }, "feature");

		
		this.logoTl4
			.set(this.q2Content, { autoAlpha: 1 })
			.fromTo(this.q2Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'}) 
			.from(this.hijab11, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.crane, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinueQ2, 1, { scale: .5, autoAlpha: 0 }, "feature");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");

		this.logoTl5
			.set(this.q3Content, { autoAlpha: 1 })
			.fromTo(this.q3Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'}) 
			.from(this.q3line1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q3line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q3line3, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q3line4, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.q3line5, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.muzan, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.hijab12, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");
		
		
			this.bgTl.play()
			this.scroller()
			
			setTimeout(() => {
				this.logoTl.play()
				}, 500);
	}


	tiringClick = (e) => {
		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.to(this.btnContinue, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.line2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line1, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.hijab13, 0.2, { opacity: 0, autoAlpha: 0 });
		this.logoTl.play()
		this.scroller()
        
		setTimeout(() => {
			document.querySelector(".content").style.display = "none"
			document.querySelector(".videoContent").style.display = "inline"
			this.logoTl2.play()
		  }, 2000);
		
    }

	continueTwoClick = (e) => {
		this.logoTl2
			.set(this.vidContent, { autoAlpha: 1 })
			.to(this.btnContinueTwo, 0.5, { opacity: 0, autoAlpha: 0 })
			// .to(this.btnBack, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline1, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline3, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline4, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline5, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline6, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline7, 0.2, { opacity: 0, autoAlpha: 0 })
		this.logoTl2.play()
		this.scroller()
		setTimeout(() => {
			document.querySelector(".videoContent").style.display = "none";
            document.querySelector(".q1Content").style.display = "inline";
			this.logoTl3.play()
		  }, 2500);
	}

	continueTwoClick2 = (e) => {
		this.logoTl2fun
			.set(this.vidContent, { autoAlpha: 1 })
			.to(this.btnContinueTwo2, 0.2, { opacity: 0, autoAlpha: 0 })
			// .to(this.btnBack, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line1, 0.1, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line2, 0.1, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line3, 0.1, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line4, 0.1, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line5, 0.1, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line6, 0.1, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line7, 0.1, { opacity: 0, autoAlpha: 0 })
		this.logoTl2fun.play()
		this.scroller()
		// setTimeout(() => {
		// 	window.scrollBy({
		// 		top: 300,
		// 		behavior: 'smooth'
		// 	  });
		//   }, 30000);
		setTimeout(() => {
			document.querySelector(".videoContent2").style.display = "none";
            document.querySelector(".q1Content").style.display = "inline";
			this.logoTl3.play()
		  }, 1000);
	}

	btnContinueQ1Submit = (e) => {
		e.preventDefault();
		console.log(document.getElementById("ansA").value)

		if(
			document.getElementById("ansA").value.toLowerCase() == "yew tee" 
		){
			
			this.logoTl3
				.set(this.content, { autoAlpha: 1 })
				.to(this.btnContinueQ1, 0.1, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line0, 0.1, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line1, 0.1, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line2, 0.1, { opacity: 0, autoAlpha: 0 })
			this.logoTl3.play()
			this.scroller()
			setTimeout(() => {
				document.querySelector(".q1Content").style.display = "none"
				document.querySelector(".q2Content").style.display = "inline"
				this.logoTl4.play()
			}, 500);
		}
	}

	btnContinueQ2Submit = (e) => {
		e.preventDefault();

		if(
			document.getElementById("q2Ans").value.toLowerCase() == "crane game"
		){
			
			this.logoTl4
				.set(this.content, { autoAlpha: 1 })
				.to(this.crane, 0.1, { opacity: 0, autoAlpha: 0 })
				.to(this.hijab11, 0.1, { opacity: 0, autoAlpha: 0 })
				.to(this.btnContinueQ2, 0.1, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line2, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line1, 0.2, { opacity: 0, autoAlpha: 0 });
			this.logoTl4.play()
			this.scroller()

			
			setTimeout(() => {
				document.querySelector(".q2Content").style.display = "none"
				document.querySelector(".q3Content").style.display = "inline"
				this.logoTl5.play()
			}, 2000);
		}
	}

	btnContinueQ3Submit = (e) => {
		e.preventDefault();

		if(
			document.getElementById("q3Ans").value.toLowerCase() == "200"
		){
			
			setTimeout(() => {
				document.querySelector(".q3Content").style.display = "none"
				document.querySelector(".q4Content").style.display = "inline"
				this.logoTl6.play()
				this.scroller()
			}, 2000);
		}
	}

	

	onAChange = (e) => {
        this.setState({ 
            ansA : e.target.value
        });
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
						<div className="content" ref={ div => this.content = div }>
							<img ref={ img => this.hijab13 = img } src={hijab13} alt="success" className="hijab" />
							<h2 ref={ h2 => this.line1 = h2 }>Am i sensing an encore?</h2>
                            <h2 ref={ h2 => this.line2 = h2 }>Seem's like we may still have time</h2>
							<Container>
								<Row>
									<Col xs="12">
										<div ref={ div => this.btnContinue = div}>
											<Button 
												color="secondary"
												style={{marginTop: '2rem', backgroundColor: "#C2C5CC", color: "black" }}
												block
												onClick={this.tiringClick}>
												Yes please Amir!
											</Button>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
						<div className="videoContent" ref={ div => this.vidContent = div }>
							<h2 ref={ h2 => this.vidline1 = h2 }>Alrighty, for mairah</h2>
							<h2 ref={ h2 => this.vidline2 = h2 }>Anything okay nyer</h2>
							<h2 ref={ h2 => this.vidline3 = h2 }>Tapi next place depends, kalau ade time</h2>
							<h2 ref={ h2 => this.vidline4 = h2 }>We go over there</h2>
                            <h2 ref={ h2 => this.vidline5 = h2 }>Otherwise, the alternative would be</h2>
                            <h2 ref={ h2 => this.vidline6 = h2 }>somewhere nearby</h2>
                            <h2 ref={ h2 => this.vidline7 = h2 }>Okay u?</h2>
							<Container>
								<Row>
									<Col xs="12">
										<div ref={ div => this.btnContinueTwo = div}>
											<Button 
												color="dark"
												style={{marginTop: '2rem', backgroundColor: "#73b102"}}
												block
												onClick={this.continueTwoClick}>
												Okay!
											</Button>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
						
						<div className="q1Content" ref={ div => this.q1Content = div }>
						
							<h2 ref={ h2 => this.q1line0 = h2 }>Okay, soalan nyer</h2>
							<h2 ref={ h2 => this.q1line1 = h2 }>That time i share ngan u an Republic Poly joke</h2>
							<h2 ref={ h2 => this.q1line2 = h2 }>Which MRT Station instill fear and stress</h2>
							<div ref={ div => this.btnContinueQ1 = div}>
								<Form onSubmit={this.btnContinueQ1Submit}>
									<FormGroup>
										<Container>
											<Row className="myform">
												<Col xs="12">
													<Input 
														type="text"
														name="ansA"
														id="ansA"
														onChange= {this.onAChange}
														/>
												</Col>
											</Row>
										</Container>
									</FormGroup>
									<FormGroup>
										<Button 
											color="dark"
											style={{marginTop: '2rem', backgroundColor: "#73b102"}}
											block>
											Check answer
										</Button>
									</FormGroup>
								</Form>
							</div>
						</div>
						<div className="q2Content" ref={ div => this.q2Content = div }>
							<img ref={ img => this.hijab11 = img } src={hijab11} alt="success" className="hijab" />
                            <h2 ref={ h2 => this.q2line1 = h2 }>Yew tee. UT - Understanding Test</h2>
                            <h2 ref={ h2 => this.q2line2 = h2 }>And what can we do over there?</h2>
							<img ref={ img => this.crane = img } src={crane} alt="success" className="hijab" />
							<div ref={ div => this.btnContinueQ2 = div}>
								<Form onSubmit={this.btnContinueQ2Submit}>
									<FormGroup>
										<Container>
											<Row className="myform">
												<Col xs="12">
													<Input 
														type="text"
														name="q2Ans"
														id="q2Ans"
														placeholder=""
														onChange= {this.onAChange}
														/>
												</Col>
											</Row>
										</Container>
									</FormGroup>
									<FormGroup>
										<Button 
											color="dark"
											style={{marginTop: '2rem', backgroundColor: "#73b102"}}
											block>
											Check answer
										</Button>
									</FormGroup>
								</Form>
							</div>
						</div>
						
						<div className="q3Content" ref={ div => this.q3Content = div }>
                            <h2 ref={ h2 => this.q3line1 = h2 }>Time to get nezuko!</h2>
                            <h2 ref={ h2 => this.q3line2 = h2 }>Zenitsu! Muke babi and tanjiro!</h2>
                            <h2 ref={ h2 => this.q3line3 = h2 }>Kalau ade muzan pon baik</h2>
                            <h2 ref={ h2 => this.q3line4 = h2 }>Everytime u see him</h2>
                            <h2 ref={ h2 => this.q3line5 = h2 }>Will be reminded of me</h2>
							<img ref={ img => this.muzan = img } src={muzan} alt="success" className="hijab" />
							<img ref={ img => this.hijab12 = img } src={hijab12} alt="success" className="hijab"  />
						</div>


                    </div>

				</div>
			</div>
		</div>
		</div>)
	}

}

export default HiddenPageMairahFinalTwo;
