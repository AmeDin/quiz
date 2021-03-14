import React from "react";
import { useAuth } from "../context/auth";
import HiddenPageMairah from './HiddenPageMairah';

import ReactDOM from 'react-dom';
function HiddenPageHookMairah(props) {
  const { setAuthTokens } = useAuth();
  let container = document.createElement('div');
  document.body.appendChild(container);

  return (
    // ReactDOM.render(<HiddenPage />, container)
    ReactDOM.render(<HiddenPageMairah />, container)
  );
}

export default HiddenPageHookMairah;