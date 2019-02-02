import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const Contact = () => {
  return (
    <div>

      <h1>Contact Page</h1>
      <MDBContainer>
        <MDBRow>


          <MDBCol md="11">
            <form className="contact-form space-from-footer" action="https://formspree.io/contact@orionabrams.com" target="_blank" method="POST">
              <p className="h5 text-center mb-4">Contact Me</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  name="username"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  name="email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Subject"
                  name="subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  name="body"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                <MDBBtn type="submit" value="Send" outline color="secondary">
                  Send <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Contact;