import React from 'react';
// import { Link } from "react-router-dom";
import Email from '../../assets/img/email.png'
class CopyExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    return (
     
      <div>
         <br></br> <br></br> <br></br> <br></br> <br></br>
         <img className="" alt="email" src={Email} /> 
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
          <div>
            <img className="email" alt="email" src={Email} onClick={this.copyToClipboard}/> 
            {/* {this.state.copySuccess} */}
          </div>
        }
        <form className="d-none">
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value='contact@orionabrams.com'
          />
        </form>
      </div>
    );
  }

}

export default CopyExample