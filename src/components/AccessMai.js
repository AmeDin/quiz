import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router';
import { useAuth } from "../context/auth";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios';
import { TimelineLite, Linear } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import lock from '../assets/lock.png'
import unlock from '../assets/unlock.png'

const C = CSSPlugin;

const iconsArray = [
	{ src: lock, width: "65", height: "59" },
	{ src: unlock, width: "65", height: "59" },
];


var tl = new TimelineLite({ paused:true });
var form = null;
var icons = [];

function Access(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [code, setPasscode] = useState("");
  const { setAuthTokens } = useAuth();
  console.log(props)

  useEffect(() => {
    tl
    .set(form, { autoAlpha: 1 })// show content div
    .from(form, 16, { top: 100, autoAlpha: 0 })
    .staggerFrom(icons, 0.9, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
    tl.play()
  }, []);
 
  function animateUnlock() {
    tl
    .to(icons[0], 1, { top: 5, autoAlpha: 1 })
    .to(icons[0], 1, { left: 60, autoAlpha: 1 })
  }


  function validatePasscode(e)  {
    e.preventDefault();
    setAuthTokens("Access granted");
    setLoggedIn(true);
    animateUnlock()
    setTimeout(() => {
    props.history.push("/hidden")
    }, 2500);

    } 


  return (
    <div ref={ div => form = div}>
      <Form onSubmit={validatePasscode}>
          <FormGroup>
              <Button 
                  color="dark"
                  style={{marginTop: '2rem', backgroundColor: "#73b102"}}
                  block>
                  Start
              </Button>
          </FormGroup>
      </Form>
      <div className="nav" style={{float: 'right'}}>
          { iconsArray.map( (icon, index) => {
            const { src, width, height } = icon;
            return <img
              key={`icon-${index}`}
              src={src} width={width} height={height}
              ref={ img => icons[index] = img }
            />;
          })}
        </div>
    </div>
  );
}

export default withRouter(Access);