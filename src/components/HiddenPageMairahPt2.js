import React, { Component } from "react";
import { TimelineLite } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import { Button, Container, Row, Col, Form, FormGroup, Input,
    ModalHeader, ModalBody, Modal, Label} from 'reactstrap'
import Loading from "./Loading";
import hijab6 from '../assets/hijab6.gif'
import hijab3 from '../assets/hijab3.gif'
import hijab9 from '../assets/hijab9.gif'
import wordpuzzle from '../assets/wordPuzzle.png'
import matrixQ from '../assets/matrixQ.PNG'
import det from '../assets/det.png'
import hijab8 from '../assets/hijab8.gif'

const C = CSSPlugin;


class HiddenPagePt2 extends Component {
	
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

    

	// add instances to the timeline
	componentDidMount(){
		
		this.bgTl
			.set(this.containerParent, { autoAlpha: 1 })// show content div
			.to(this.containerParent, 5, {backgroundColor : 'rgba(0, 0, 0)'});

		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.from(this.head, 4, { top: 100, autoAlpha: 0 })
			.to(this.head, 2, { opacity: 0, autoAlpha: 0 })
			.from(this.hijab6, 1.5, { left: -100, autoAlpha: 0 }, "-=0.25")
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
			.from(this.btnContinueTwo, 2, { scale: .5, autoAlpha: 0 }, "feature");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");

		this.logoTl2fun
			.set(this.vidContent2, { autoAlpha: 1 })
			.fromTo(this.vidContent2, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'})  
			.from(this.vid2line0, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
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
			.from(this.wordpuzzle, 2,  { scale: .5, autoAlpha: 0 }, "feature") 
			.from(this.btnContinueQ1, 2.5, { scale: .5, autoAlpha: 0 }, "feature");

		
		this.logoTl4
			.set(this.q2Content, { autoAlpha: 1 })
			.fromTo(this.q2Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'}) 
			.from(this.hijab9, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q2line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.matrixQ, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
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
			.from(this.det, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.btnContinueQ3, 1, { scale: .5, autoAlpha: 0 }, "feature");
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");
		
		this.logoTl6
			.set(this.q4Content, { autoAlpha: 1 })
			.fromTo(this.q4Content, 0.5, {display:"none", opacity:0}, {opacity:1,display:'inline'}) 
			.from(this.hijab99, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line1, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line2, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line3, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line4, 2, { right: -100, autoAlpha: 0 }, "-=0.25") 
			.from(this.q4line5, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line6, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.q4line7, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			.from(this.hijab8, 2, { right: -100, autoAlpha: 0 }, "-=0.25")
			// .from(this.btnBack, 3, { scale: .5, autoAlpha: 0 }, "feature");
		
			this.bgTl.play()
			
			setTimeout(() => {
				this.logoTl.play()
				}, 5000);
	}


	tiringClick = (e) => {
		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.to(this.btnContinue, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.line2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line1, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.hijab6, 0.2, { opacity: 0, autoAlpha: 0 });
		this.logoTl.play()
        
		setTimeout(() => {
			document.querySelector(".content").style.display = "none"
			document.querySelector(".videoContent2").style.display = "none"
			document.querySelector(".videoContent").style.display = "inline"
			this.logoTl2.play()
		  }, 2000);
		
    }

	funClick = (e) => {
		this.logoTl
			.set(this.content, { autoAlpha: 1 })
			.to(this.btnContinue, 0.5, { opacity: 0, autoAlpha: 0 })
			.to(this.line2, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.line1, 0.2, { opacity: 0, autoAlpha: 0 })
			.to(this.hijab6, 0.2, { opacity: 0, autoAlpha: 0 });
		this.logoTl.play()
		
		setTimeout(() => {
			document.querySelector(".videoContent").style.display = "none"
			document.querySelector(".content").style.display = "none"
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
		this.logoTl2.play()
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
		  }, 2500);
	}

	btnContinueQ1Submit = (e) => {
		e.preventDefault();
		console.log(document.getElementById("ansA").value)

		if(
			document.getElementById("ansA").value.toLowerCase() == "next" &&
			document.getElementById("ansB").value.toLowerCase() == "stop" &&
			document.getElementById("ansC").value.toLowerCase() == "eunos" &&
			document.getElementById("ansD").value.toLowerCase() == "mrt" &&
			document.getElementById("ansE").value.toLowerCase() == "station" 
		){
			
			this.logoTl3
				.set(this.content, { autoAlpha: 1 })
				.to(this.btnContinueQ1, 0.5, { opacity: 0, autoAlpha: 0 })
				.to(this.wordpuzzle, 0.2, { opacity: 0, autoAlpha: 0 });
			this.logoTl3.play()
			
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
			document.getElementById("q2Ans").value.toLowerCase() == "[1,6,4]"
		){
			
			this.logoTl4
				.set(this.content, { autoAlpha: 1 })
				.to(this.hijab9, 0.5, { opacity: 0, autoAlpha: 0 })
				.to(this.btnContinueQ2, 0.5, { opacity: 0, autoAlpha: 0 })
				.to(this.matrixQ, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line2, 0.2, { opacity: 0, autoAlpha: 0 })
				.to(this.q2line1, 0.2, { opacity: 0, autoAlpha: 0 });
			this.logoTl4.play()

			
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
							<img ref={ img => this.hijab6 = img } src={hijab6} alt="success" className="catty" />
							<h2 ref={ h2 => this.line1 = h2 }>Hehehehe..</h2>
                            <h2 ref={ h2 => this.line2 = h2 }>Da tak zomairah lagi kan?</h2>
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
													Masih
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
													Da tak!
												</Button>
											</div>
										</Col>
									</Row>
								</Container>
							</div>
						</div>
						<div className="videoContent" ref={ div => this.vidContent = div }>
							<h2 ref={ h2 => this.vidline1 = h2 }>Hahaha bedek seh u maijester</h2>
							<h2 ref={ h2 => this.vidline2 = h2 }>Naugthy notty ehk u punye humour</h2>
							<h2 ref={ h2 => this.vidline3 = h2 }>Sebab tu i enjoy it so much when we spend time together</h2>
							<h2 ref={ h2 => this.vidline4 = h2 }>Funny, understanding, bersopan, alluring, adorable,'gangster'</h2>
                            <h2 ref={ h2 => this.vidline5 = h2 }>The list will be extensive so i better...</h2>
                            <h2 ref={ h2 => this.vidline6 = h2 }>Stop, otherwise.. i will start to fluster...</h2>
                            <h2 ref={ h2 => this.vidline7 = h2 }>An eye contact would instantly fill my mind butterfly shower</h2>
                            <h2 ref={ h2 => this.vidline8 = h2 }>That would be a disaster</h2>
                            <h2 ref={ h2 => this.vidline9 = h2 }>Let's not waste any more time and commence part 2 chapter.</h2>
                            <h2 ref={ h2 => this.vidline10 = h2 }>Before mairah tummy growls because she's quite an eater</h2>
                            <h2 ref={ h2 => this.vidline11 = h2 }>Let's begin the tour</h2>
							<Container>
								<Row>
									<Col xs="12">
										<div ref={ div => this.btnContinueTwo = div}>
											<Button 
												color="dark"
												style={{marginTop: '2rem', backgroundColor: "#73b102"}}
												block
												onClick={this.continueTwoClick}>
												Aigooooooo
											</Button>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
						
						<div className="videoContent2" ref={ div => this.vidContent2 = div }>
							<h2 ref={ h2 => this.vid2line0 = h2 }></h2>
							<h2 ref={ h2 => this.vid2line1 = h2 }>Best kan! jealous i. ishhh~</h2>
							<h2 ref={ h2 => this.vid2line2 = h2 }>I tak pernah spa, massage aje for added relish</h2>
                            <h2 ref={ h2 => this.vid2line3 = h2 }>And malaysia best to go for these</h2>
                            <h2 ref={ h2 => this.vid2line4 = h2 }>Tapi border tutup entah bila jer that order will be relinquish</h2>
                            <h2 ref={ h2 => this.vid2line5 = h2 }>If i continue, akan ade spoilers later why im doing this</h2>
                            <h2 ref={ h2 => this.vid2line6 = h2 }>So lets move on onto the next stage</h2>
                            <h2 ref={ h2 => this.vid2line7 = h2 }>Before mairah age</h2>
                            <h2 ref={ h2 => this.vid2line8 = h2 }>or rage...</h2>
                            <h2 ref={ h2 => this.vid2line9 = h2 }>Time is always a shortage</h2>
                            <h2 ref={ h2 => this.vid2line10 = h2 }>For us. hence kene salvage</h2>
                            <h2 ref={ h2 => this.vid2line11 = h2 }>Whatever time we have together and not be discourage</h2>
                            <h2 ref={ h2 => this.vid2line12 = h2 }>Mane tau.. ditakdirkan.. one day may lead to marriage.</h2>
							<Container>
								<Row>
									<Col xs="12">
										<div ref={ div => this.btnContinueTwo2 = div}>
											<Button 
												color="dark"
												style={{marginTop: '2rem', backgroundColor: "#73b102"}}
												block
												onClick={this.continueTwoClick2}>
												Ade ade aje Amir nie
											</Button>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
						<div className="q1Content" ref={ div => this.q1Content = div }>
						
							<img ref={ img => this.wordpuzzle = img } src={wordpuzzle} alt="success" className="catty" />
							<div ref={ div => this.btnContinueQ1 = div}>
								<Form onSubmit={this.btnContinueQ1Submit}>
									<FormGroup>
										<Container>
											<Row className="myform">
												<Col xs="1">
													<Label for="A">1</Label>
												</Col>
												<Col xs="3">
													<Input 
														type="text"
														name="ansA"
														id="ansA"
														onChange= {this.onAChange}
														/>
												</Col>
												<Col xs="1">
													<Label for="B">2</Label>
												</Col>
												<Col xs="3">
													<Input 
														type="text"
														name="ansB"
														id="ansB"
														/>
												</Col>
												<Col xs="1">
													<Label for="C">3</Label>
												</Col>
												<Col xs="3">
													<Input 
														type="text"
														name="ansC"
														id="ansC"
														/>
												</Col>
											</Row>
											<Row className="myform">
												<Col xs="1">
													<Label for="D">4</Label>
												</Col>
												<Col xs="3">
													<Input 
														type="text"
														name="ansD"
														id="ansD"
														/>
												</Col>
												<Col xs="1">
													<Label for="E">5</Label>
												</Col>
												<Col xs="7">
													<Input 
														type="text"
														name="ansE"
														id="ansE"
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
                            <h2 ref={ h2 => this.q2line2 = h2 }>Now try solving this as we make our way over</h2>
							<div className="center"><img ref={ img => this.matrixQ = img } src={matrixQ} alt="success" className="catty" /></div>
							
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
														placeholder="e.g if asn is 2x2 matrix [1,2][3,1], if 1x2 [1,1]"
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
                            <h2 ref={ h2 => this.q3line1 = h2 }>Yep, [1,6,4] is the answer</h2>
                            <h2 ref={ h2 => this.q3line2 = h2 }>When those matrix get multiplied</h2>
                            <h2 ref={ h2 => this.q3line3 = h2 }>How can u link those matrix with where we are now?</h2>
                            <h2 ref={ h2 => this.q3line4 = h2 }>Once u figure that out, this is the next question</h2>
                            <h2 ref={ h2 => this.q3line5 = h2 }>Find the determinant of the matrix A</h2>
							<img ref={ img => this.det = img } src={det} alt="success" className="catty" />
							<div ref={ div => this.btnContinueQ3 = div}>
								<Form onSubmit={this.btnContinueQ3Submit} className="myform">
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
                            <h2 ref={ h2 => this.q4line1 = h2 }>Yay. 200 is the determinant of matrix A</h2>
                            <h2 ref={ h2 => this.q4line2 = h2 }>if you plug in the answer into this the following text</h2>
                            <h2 ref={ h2 => this.q4line3 = h2 }>#B1-"Matrix A determinant"</h2>
                            <h2 ref={ h2 => this.q4line4 = h2 }>What can this text imply in context to where we are?</h2>
                            <h2 ref={ h2 => this.q4line5 = h2 }>With that, chapter 2 concludes</h2>
                            <h2 ref={ h2 => this.q4line6 = h2 }>Let's enjoy this place</h2>
                            <h2 ref={ h2 => this.q4line7 = h2 }>And the last chapter commence afterward</h2>
							<img ref={ img => this.hijab8 = img } src={hijab8} alt="success" className="catty" />
						</div>

                    </div>

				</div>
			</div>
		</div>
		</div>)
	}

}

export default HiddenPagePt2;
