import React, { Component } from "react";
import { TimelineLite } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import { Button, Container, Row, Col, Form, FormGroup, Input,
    ModalHeader, ModalBody, Modal, Label} from 'reactstrap'
import Loading from "./Loading";
import hijab3 from '../assets/hijab3.gif'
import hijab9 from '../assets/hijab9.gif'
import cat from '../assets/catmassage.gif'

const C = CSSPlugin;


class HiddenPageV3 extends Component {
	
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
			.to(this.containerParent, 5, {backgroundColor : 'rgba(0, 0, 0)'});

		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.from(this.head, 4, { top: 100, autoAlpha: 0 })
			.to(this.head, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.linenegate, 1.5, { left: -100, autoAlpha: 0 }, "-=0.25")
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
			.from(this.vidline8, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline9, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline10, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline11, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline12, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vidline13, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinueTwo, 2, { scale: .5, autoAlpha: 0 }, "feature");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");

		this.logoTl2fun
			.set(this.vidContent2, { autoAlpha: 1 })
			.fromTo(this.vidContent2, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'})  
			.from(this.vid2line1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line3, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line4, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.vid2line5, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line6, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line7, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line8, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line9, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line10, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line11, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.vid2line12, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinueTwo2, 2, { scale: .5, autoAlpha: 0 }, "feature");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");
			

		this.logoTl3.set(this.q1Content, { autoAlpha: 1 })
			.fromTo(this.q1Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'})  
			.from(this.q1line1, 2,  { scale: .5, autoAlpha: 0 }, "feature") 
			.from(this.q1line2, 2,  { scale: .5, autoAlpha: 0 }, "feature")
			.from(this.q1line3, 2,  { scale: .5, autoAlpha: 0 }, "feature")
			.from(this.q1line4, 2,  { scale: .5, autoAlpha: 0 }, "feature")
			.from(this.q1line5, 2,  { scale: .5, autoAlpha: 0 }, "feature")
			.from(this.q1line6, 2,  { scale: .5, autoAlpha: 0 }, "feature")
			.from(this.q1line7, 2,  { scale: .5, autoAlpha: 0 }, "feature")
			.from(this.btnContinueQ1, 2.5, { scale: .5, autoAlpha: 0 }, "feature");

		
		this.logoTl4
			.set(this.q2Content, { autoAlpha: 1 })
			.fromTo(this.q2Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'})  
			.from(this.hijab9, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line3, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line4, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.q2line5, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line6, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line7, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line8, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinueQ2, 1, { scale: .5, autoAlpha: 0 }, "feature");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");

		this.logoTl5
			.set(this.q3Content, { autoAlpha: 1 })
			.fromTo(this.q3Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'})  
			.from(this.hijab3, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q3line1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q3line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q3line3, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q3line4, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.q3line5, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.btnContinueQ3, 1, { scale: .5, autoAlpha: 0 }, "feature");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");
		
		this.logoTl6
			.set(this.q4Content, { autoAlpha: 1 })
			.fromTo(this.q4Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'})  
			.from(this.hijab99, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line1, 13, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line3, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line4, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.q4line5, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line6, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.cat, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line7, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line8, 2, { right: -100, autoAlpha: 0 }, "-=0.25");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");
		
			this.bgTl.play()
			this.scroller()
			setTimeout(() => {
				this.logoTl.play()
				}, 5000);
	}


	tiringClick = (e) => {
		this.logoTlB
			.set(this.content, { autoAlpha: 1 })
			.to(this.btnContinue, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.line2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line1, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.linenegate, 0.2, { opacity: 0, autoAlpha: 0 });
		this.logoTlB.play()
		this.scroller()
        
		setTimeout(() => {
			document.querySelector(".content").style.display = "none"
			document.querySelector(".videoContent2").style.display = "none"
			document.querySelector(".videoContent").style.display = "inline"
			this.logoTl2.play()
		  }, 2000);
		
    }

	funClick = (e) => {
		this.logoTlB
			.set(this.content, { autoAlpha: 1 })
			.to(this.btnContinue, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.line2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line1, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.linenegate, 0.2, { opacity: 0, autoAlpha: 0 });
		this.logoTlB.play()
		this.scroller()
		
		setTimeout(() => {
			document.querySelector(".content").style.display = "none"
			document.querySelector(".videoContent").style.display = "none"
			document.querySelector(".videoContent2").style.display = "inline"
			this.logoTl2fun.play()
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
			.to(this.vidline8, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline9, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline10, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline11, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vidline12, 0.2, { opacity: 0, autoAlpha: 0 })
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
			.to(this.btnContinueTwo2, 0.5, { opacity: 0, autoAlpha: 0 })
			// .to(this.btnBack, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line1, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line3, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line4, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line5, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line6, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line7, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line8, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line9, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line10, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line11, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.vid2line12, 0.2, { opacity: 0, autoAlpha: 0 })
		this.logoTl2fun.play()
			this.scroller()
		setTimeout(() => {
			window.scrollBy({
				top: 300,
				behavior: 'smooth'
			  });
		  }, 30000);
		setTimeout(() => {
			document.querySelector(".videoContent2").style.display = "none";
            document.querySelector(".q1Content").style.display = "inline";
			this.logoTl3.play()
		  }, 2500);
	}

	btnContinueQ1Submit = (e) => {
		e.preventDefault();
		console.log(document.getElementById("ansA").value)

		if(
			document.getElementById("ansA").value == 4 &&
			document.getElementById("ansB").value == 1 &&
			document.getElementById("ansC").value == 9 &&
			document.getElementById("ansD").value == 9 &&
			document.getElementById("ansE").value == 7 &&
			document.getElementById("ansF").value == 3 
		){
			
			this.logoTl3
				.set(this.content, { autoAlpha: 1 })
				.to(this.btnContinueQ1, 0.5, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line7, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line6, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line5, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line4, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line3, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line2, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q1line1, 0.2, { opacity: 0, autoAlpha: 0 });
			this.logoTl3.play()
			this.scroller()
			
			setTimeout(() => {
				document.querySelector(".q1Content").style.display = "none"
				document.querySelector(".q2Content").style.display = "inline"
				this.logoTl4.play()
			}, 2000);
		}
	}

	btnContinueQ2Submit = (e) => {
		e.preventDefault();

		if(
			document.getElementById("q2Ans").value.toLowerCase() == "spa"
		){
			
			this.logoTl4
				.set(this.content, { autoAlpha: 1 })
				.to(this.hijab9, 0.5, { opacity: 0, autoAlpha: 0 })
				.to(this.btnContinueQ2, 0.5, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line9, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line8, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line7, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line6, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line5, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line4, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line3, 0.2, { opacity: 0, autoAlpha: 0 })
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
			document.getElementById("q3Ans").value.toLowerCase() == "jelita"
		){
			
			this.scroller()
			setTimeout(() => {
				document.querySelector(".q3Content").style.display = "none"
				document.querySelector(".q4Content").style.display = "inline"
				this.logoTl6.play()
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
                            <div ref={ div => this.head = div}><Loading /></div>
							<h2 ref={ h2 => this.linenegate = h2 }>Hi mairah.</h2>
							<h2 ref={ h2 => this.line1 = h2 }>It's pak celop lah.</h2>
                            <h2 ref={ h2 => this.line2 = h2 }>How's ur madrassah?</h2>
							<div ref={ div => this.btnContinue = div}>
								<Container>
									<Row>
										<Col xs="6">
											<div ref={ div => this.btnBack = div}>
												<Button 
													color="secondary"
													style={{marginTop: '2rem', backgroundColor: "#C2C5CC", color: "black" }}
													block
													onClick={this.tiringClick}>
													Tiring
												</Button>
											</div>
										</Col>
										<Col xs="6">
											<div ref={ div => this.btnContinueTwo = div}>
												<Button 
													color="dark"
													style={{marginTop: '2rem', backgroundColor: "#73b102"}}
													block
													onClick={this.funClick}>
													Fun
												</Button>
											</div>
										</Col>
									</Row>
								</Container>
							</div>
						</div>
						<div className="videoContent" ref={ div => this.vidContent = div }>
							<h2 ref={ h2 => this.vidline1 = h2 }>Oh no... our date just started</h2>
							<h2 ref={ h2 => this.vidline2 = h2 }>And game requires brain juice</h2>
							<h2 ref={ h2 => this.vidline3 = h2 }>And also.. it will be a full day today. Habis..</h2>
							<h2 ref={ h2 => this.vidline4 = h2 }>Tapi no worries, i shall revitalize u back</h2>
                            <h2 ref={ h2 => this.vidline5 = h2 }>So. App ini akan prompt quizzes and challenges</h2>
                            <h2 ref={ h2 => this.vidline6 = h2 }>U kene answer to get hint on what to do next</h2>
                            <h2 ref={ h2 => this.vidline7 = h2 }>Three test that u need to pass to reach 1st checkpoint</h2>
                            <h2 ref={ h2 => this.vidline8 = h2 }>Tapikan.. First checkpoint end time to clear is by 3.15pm </h2>
                            <h2 ref={ h2 => this.vidline9 = h2 }>Nevertherless, I'm pretty sure my cute princess makoke</h2>
                            <h2 ref={ h2 => this.vidline10 = h2 }>Can easily breeze through it</h2>
                            <h2 ref={ h2 => this.vidline11 = h2 }>But if u need help, just let me know</h2>
                            <h2 ref={ h2 => this.vidline12 = h2 }>I will always be here for u</h2>
                            <h2 ref={ h2 => this.vidline13 = h2 }>Let's not waste any more time and commence the game.</h2>
							<Container>
								<Row>
									<Col xs="12">
										<div ref={ div => this.btnContinueTwo = div}>
											<Button 
												color="dark"
												style={{marginTop: '2rem', backgroundColor: "#73b102"}}
												block
												onClick={this.continueTwoClick}>
												I'm ready
											</Button>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
						
						<div className="videoContent2" ref={ div => this.vidContent2 = div }>
							<h2 ref={ h2 => this.vid2line0 = h2 }></h2>
							<h2 ref={ h2 => this.vid2line1 = h2 }>That's great!</h2>
							<h2 ref={ h2 => this.vid2line2 = h2 }>More fun is coming up in this game.</h2>
                            <h2 ref={ h2 => this.vid2line3 = h2 }>App will prompt quizzes and challenges</h2>
                            <h2 ref={ h2 => this.vid2line4 = h2 }>U kene answer to get hint on what to do next</h2>
                            <h2 ref={ h2 => this.vid2line5 = h2 }>Three test that u need to pass to reach 1st checkpoint</h2>
                            <h2 ref={ h2 => this.vid2line6 = h2 }>However.. First checkpoint end time to clear is by 3.15pm </h2>
                            <h2 ref={ h2 => this.vid2line7 = h2 }>Nevertherless, I'm pretty sure my cute princess makoke</h2>
                            <h2 ref={ h2 => this.vid2line8 = h2 }>Can easily breeze through it</h2>
                            <h2 ref={ h2 => this.vid2line9 = h2 }>Im confident of it</h2>
                            <h2 ref={ h2 => this.vid2line10 = h2 }>But if u need help, just let me know</h2>
                            <h2 ref={ h2 => this.vid2line11 = h2 }>I will always be here for u</h2>
                            <h2 ref={ h2 => this.vid2line12 = h2 }>Let's not waste any more time and commence the game.</h2>
							<Container>
								<Row>
									<Col xs="12">
										<div ref={ div => this.btnContinueTwo2 = div}>
											<Button 
												color="dark"
												style={{marginTop: '2rem', backgroundColor: "#73b102"}}
												block
												onClick={this.continueTwoClick2}>
												I'm ready
											</Button>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
						<div className="q1Content" ref={ div => this.q1Content = div }>
						
                            <h2 ref={ h2 => this.q1line1 = h2 }>Find a,b,c,d,e,f.</h2>
                            <h2 ref={ h2 => this.q1line2 = h2 }>1a + 1b - 2c + 2d - 1e + 2f = 4</h2>
                            <h2 ref={ h2 => this.q1line3 = h2 }>1a + 2b - 1c + 1d - 2e + 3f = 1</h2>
                            <h2 ref={ h2 => this.q1line4 = h2 }>&nbsp; &nbsp;&nbsp;&thinsp; - 3b - 2c&thinsp; - 1d + 1e - 1f = -26</h2>
                            <h2 ref={ h2 => this.q1line5 = h2 }>1a + 1b - 2c + 3d &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; + 3f = 23</h2>
                            <h2 ref={ h2 => this.q1line6 = h2 }>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; + 2d + 3e + 3f = 48</h2>
                            <h2 ref={ h2 => this.q1line7 = h2 }>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; + 3e + 4f = 33</h2>
							<div ref={ div => this.btnContinueQ1 = div}>
								<Form onSubmit={this.btnContinueQ1Submit}>
									<FormGroup>
										<Container>
											<Row>
												<Col xs="2">
													<Label for="A">A</Label>
												</Col>
												<Col xs="2">
													<Label for="B">B</Label>
												</Col>
												<Col xs="2">
													<Label for="C">C</Label>
												</Col>
												<Col xs="2">
													<Label for="D">D</Label>
												</Col>
												<Col xs="2">
													<Label for="E">E</Label>
												</Col>
												<Col xs="2">
													<Label for="F">F</Label>
												</Col>
											</Row>
											<Row>
												<Col xs="2">
													<Input 
														type="text"
														name="ansA"
														id="ansA"
														onChange= {this.onAChange}
														/>
												</Col>
												<Col xs="2">
													<Input 
														type="text"
														name="ansB"
														id="ansB"
														/>
												</Col>
												<Col xs="2">
													<Input 
														type="text"
														name="ansC"
														id="ansC"
														/>
												</Col>
												<Col xs="2">
													<Input 
														type="text"
														name="ansD"
														id="ansD"
														/>
												</Col>
												<Col xs="2">
													<Input 
														type="text"
														name="ansE"
														id="ansE"
														/>
												</Col>
												<Col xs="2">
													<Input 
														type="text"
														name="ansF"
														id="ansF"
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
							<img ref={ img => this.hijab9 = img } src={hijab9} alt="success"  />
                            <h2 ref={ h2 => this.q2line1 = h2 }>You've got it right!</h2>
                            <h2 ref={ h2 => this.q2line2 = h2 }>What can 6 digit signify in singapore?</h2>
                            <h2 ref={ h2 => this.q2line3 = h2 }>If u have that answer, u should know what to do now</h2>
                            <h2 ref={ h2 => this.q2line4 = h2 }>And for the next question</h2>
                            <h2 ref={ h2 => this.q2line5 = h2 }>What does a strike with the palm of the hand called?</h2>
                            <h2 ref={ h2 => this.q2line6 = h2 }>(hint: when angry)</h2>
                            <h2 ref={ h2 => this.q2line7 = h2 }>Then answer the word in malay pronunciation.</h2>
                            <h2 ref={ h2 => this.q2line8 = h2 }>But without the last character and spell it in english.</h2>
                            <h2 ref={ h2 => this.q2line9 = h2 }></h2>
							<div ref={ div => this.btnContinueQ2 = div}>
								<Form onSubmit={this.btnContinueQ2Submit}>
									<FormGroup>
										<Container>
											<Row>
												<Col xs="12">
													<Input 
														type="text"
														name="q2Ans"
														id="q2Ans"
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
							<img ref={ img => this.hijab3 = img } src={hijab3} alt="success"  />
                            <h2 ref={ h2 => this.q3line1 = h2 }>Betol, spa is the word!</h2>
                            <h2 ref={ h2 => this.q3line2 = h2 }>Next question</h2>
                            <h2 ref={ h2 => this.q3line3 = h2 }>What's the title of an indo drama</h2>
                            <h2 ref={ h2 => this.q3line4 = h2 }>In which Agnes Monica lakon</h2>
                            <h2 ref={ h2 => this.q3line5 = h2 }>And the main theme song is matahariku</h2>
							<div ref={ div => this.btnContinueQ3 = div}>
								<Form onSubmit={this.btnContinueQ3Submit}>
									<FormGroup>
										<Container>
											<Row>
												<Col xs="12">
													<Input 
														type="text"
														name="q3Ans"
														id="q3Ans"
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

						<div className="q4Content" ref={ div => this.q4Content = div }>
							<img ref={ img => this.hijab99 = img } src={hijab9} alt="success"  />
                            <h2 ref={ h2 => this.q4line1 = h2 }>Yay. Append those 2 answers, what do you get?</h2>
                            <h2 ref={ h2 => this.q4line2 = h2 }>I'm sure u are having questions right now</h2>
                            <h2 ref={ h2 => this.q4line3 = h2 }>Please don't say anything yet</h2>
                            <h2 ref={ h2 => this.q4line4 = h2 }>Just accept this gift of mine</h2>
                            <h2 ref={ h2 => this.q4line5 = h2 }>All will be answered at the end of the day</h2>
                            <h2 ref={ h2 => this.q4line6 = h2 }>Enjoy urself</h2>
							<img ref={ img => this.cat = img } src={cat} alt="success" className="catty" />
                            <h2 ref={ h2 => this.q4line7 = h2 }>Part 2 will continue after ur session is over</h2>
                            <h2 ref={ h2 => this.q4line8 = h2 }>Another link will be given for part 2 later</h2>
						</div>

                    </div>

				</div>
			</div>
		</div>
		</div>)
	}

}

export default HiddenPageV3;
