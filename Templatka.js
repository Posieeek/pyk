import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import { Button } from "reactstrap";
import { Form, Field } from "react-final-form";
import AuthTemplate from "./AuthTemplate";
import renderInput from "../components/form/Input";
import renderCheckbox from "../components/form/Checkbox";
import { sleep } from "../lib/utils";
import { required, email, composeValidators } from "../lib/validation";
import { Link } from "react-router-dom";
import colors from "../colors";
import routes from "../routes";
import Navbarek from "./Navbarek.js";

class SignIn extends Component {
  onSubmit = async data => {
    await sleep(2000);

    console.log(data);
  };

  render() {
    return (
        <div>

          <Navbarek>
            </Navbarek>

        <Form
                  onSubmit={this.onSubmit}
                  render={({ handleSubmit, pristine, invalid }) => (
                    <form onSubmit={handleSubmit}>
        <AuthTemplate>
                   
        
            <Field
                        name="email"
                        component={renderInput}
                        type="text"
                        label="Adress email:"
                        validate={composeValidators(required, email)}
                      />              
<Flex>
<Button color="primary">
 Templatka  
  </Button>

   <StyledLink to={"/signin"}>Sign in</StyledLink>
  </Flex>
 </AuthTemplate>
        </form>
                  )}
                  />
                  </div>
    );
  }
}
const StyledLink = styled(Link).attrs({  })`
margin-left: 20px;
color: #4ec2e2;
`;

const Flex = styled.div`
display: flex;
align-items: center;
`;




export default SignIn;

/*
NAVBAR - /SRC/AUTH/NAVBAREK.JS
class Navbarek extends Component {
  onSubmit = async data => {  
await sleep(2000);
    console.log(data);
  };
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar1 color="white" light expand="md">      
      <NavbarBrand href="/">
      <img src={logo}  alt="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="mr-auto" navbar>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <Button1 color="whitty">  
               <StyledLinkNav to={routes.dashboard}> PAGE TEST
                </StyledLinkNav>
                 </Button1> 
  <Button2 color="whitty">  
               <StyledLinkNav to={"/profile"}> SETTINGS
                </StyledLinkNav>
                 </Button2>       
        </Nav>
        <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav inNavbar>
   </DropdownToggle>
            <DropdownItem>
            edyta@pqstudio.pl
             </DropdownItem>
            <DropdownMenu right>
              <NavItem>
              <NavLink href="/profile">Settings</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/">Log Out</NavLink>
              </NavItem>
            </DropdownMenu>
          </UncontrolledDropdown>
  </Nav>
  </Collapse>
  </Navbar1>
  );
};
  }
const StyledLinkNav = styled(Link).attrs({  })`
font-weight: 100;
color: #000000;
`;
const Button1 = styled(Button)`
height: 60px;
border-left: 1px solid silver;
&:hover{
  border-bottom: 5px solid #4ec2e2;
  background-color: #ffffff;
}
border-radius: 0;
`
const Button2 = styled(Button)`
height: 60px;
border-left: 1px solid silver;
border-right: 1px solid silver;
&:hover{
  border-bottom: 5px solid #4ec2e2;
  background-color: #ffffff;
}
border-radius: 0;
`
const Navbar1 = styled(Navbar)`
padding: 0px;
`


TO JEST AUTHTEMPLATE, ZNAJDUJE SIĘ W /SRC/AUTH/AUTHTEMPLATE.JS
import React from "react";
import styled from "styled-components";
import logo from "../logo.png";

const AuthTemplate = ({ children }) => {
  return (
    <Wrapper>
      <View>
        <Header>
        <img src={logo} className="App-logo" alt="logo" />
          <AppName>AJP Sentiment Analysis</AppName>
        </Header>
        {children}
      </View>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
`;
const View = styled.div`
  width: 405px;
  margin: 85px auto 0px;
  padding: 25px 30px;
  background-color: #feffff;
  border: 1px solid #ebf2fa;
  border-radius: 3px;
  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
`;
const AppName = styled.div`
  margin-left: 15px;
  font-size: 15px;
`;
export default AuthTemplate;


TO JEST PLIK CHECKBOX.JS: /SRC/COMPONENTS/FORM/CHECKBOX.JS
import React from "react";
import styled from "styled-components";

import { FormGroup, Input, FormFeedback, Label } from "reactstrap";

const renderCheckbox = ({ input, meta, label, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <FormGroup className="custom-control custom-checkbox">
      <Input
        type="checkbox"
        {...input}
        {...props}
        className="custom-control-input"
        id={input.name}
        invalid={showError ? true : false}
      />
      <Label className="custom-control-label" for={input.name}>
        {label}
      </Label>
      {showError && (
        <Error invalid={showError ? "true" : "false"}>{meta.error}</Error>
      )}
    </FormGroup>
  );
};

const Error = styled(FormFeedback)`
  font-size: 12px;
`;

export default renderCheckbox;

TO JEST INPUT.JS /SRC/COMPONENTS/FORM/INPUT.JS
import React from "react";
import styled from "styled-components";

import { FormGroup, Input, FormFeedback, Label } from "reactstrap";

const renderInput = ({ input, meta, label, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <FormGroup>
      <Label for={input.field}>{label}</Label>
      <Input {...input} {...props} invalid={showError ? true : false} />

      {showError && (
        <Error invalid={showError ? "true" : "false"}>{meta.error}</Error>
      )}
    </FormGroup>
  );
};

const Error = styled(FormFeedback)`
  font-size: 12px;
`;

export default renderInput;


TO JEST UTILS.JS /SRC/LIB/UTILS.JS
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export { sleep };

TO JEST VALIDATION.JS /SRC/LIB/VALIDATION.JS
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const required = value => (value ? undefined : "Field is required");

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export { composeValidators, required, email};


/APP.JS ORAZ JAK UTWORZYĆ ROUTY
import Templatka from "./Auth/Templatka";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => <Redirect to={routes.signIn} />}
          />
          <Route path={routes.template} component={Templatka} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>

    );
  }
}
export default App;

TWORZENIE SCIEZEK, PLIK /ROUTES.JS
export default {
    signIn: "/signin",
    signUp: "/signup",
    resetPassword: "/reset-password",
    setPassword: "/set-password/:token",
    profile: "/profile",
    dashboard: "/dashboard",
    template: "/template",
  };
  

  PROFIL /SRC/AUTH/PROFILE.JS
class SignIn extends Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };
  
  render() {
    return (   
        <div>
          <Navbarek>
            </Navbarek>
        <Form
                  onSubmit={this.onSubmit}
                  render={({ handleSubmit, pristine, invalid }) => (
                    <form onSubmit={handleSubmit}>
      <Prof>
     Profile
     </Prof>
                  <App4>
             <Row>
               <Col sm="2">
              <UserAvatar size="98" name="Son Goku" src="https://orig00.deviantart.net/2207/f/2011/188/e/a/goku_facebook_by_haroongul-d3lc2sw.png" />         
              </Col>
            <Col sm="5">     
        <Field
                        name="name"
                        component={renderInput}
                        type="text"
                        label="Name:"
                        validate={required}
                      />
        
                      <Field 
                       name="last_name"
                       component={renderInput}
                       type="text"
                       label="Last name"
                       validate={required}
                       />       
        <Field 
                       name="email"
                       component={renderInput}
                       type="text" align ="right"
                       label="Adress email:"
                       validate={composeValidators(required, email)}
                      />
        </Col>
       <Col sm="5"> 
        <Field
                        name="password"
                        component={renderInput}
                        type="password"
                        label="Password:"
                        validate={required}
                      />
                       <Button color="primary">  
                      <Napislogo2> 
                     <StyledLink3 to={"/set-password/:token"}>Change password
                      </StyledLink3>
                     </Napislogo2>
                       </Button>
        </Col>
      </Row>
   </App4>
  <App7> 
   <Button color="secondary"> <Napislogo>Save  </Napislogo></Button>  
  </App7>
        </form>
    
                  )}
                  /> 
                  </div>
    );
  }
}
const StyledLink3 = styled(Link).attrs({  })`
font-weight: 600;
color: #ffffff;
`;
const Color = styled.div`
color: white;
`
const Prof = styled.div`
width: 900px;
margin: 100px auto -80px auto;
color:#7387a9;
font-size: 14;
font-weight: 800;
`;
const App4 = styled.div`
padding: 20px;
border: 1px solid #e5e9f4;
margin-top: 100px;
margin-left: auto;
margin-right: auto;
max-width: 900px;
background-color: #fff;
height: auto;
`;
const App7 = styled.div`
margin-top: 5px;
margin-left: auto;
margin-right: auto;
align-items: center;
text-align: right;
max-width: 900px;
height: auto;
`;
const Napislogo = styled.div`
font-size: 16px;
color: #ffffff;
align: center;
`;
const Napislogo2 = styled.div`
font-size: 20px;
text-align: center;
item-align: center;
  color: #f8f8f8;
`;


DASHBOARD
class SignIn extends Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };
  render() {
    return (
        <div>
          <Navbarek>
            </Navbarek>
        <Form
                  onSubmit={this.onSubmit}
                  render={({ handleSubmit, pristine, invalid }) => (
                    <form onSubmit={handleSubmit}>
          <div>    
      </div>
                  <App4>
              <RowScore>
              <Colscore sm="3">
    Try the URL:
             </Colscore>
             <Col sm="6">
        <Field
                        name="password"
                        component={renderInput}
                        type="password"
                        label=""
                        validate={required}
                      />          
        </Col>
                    <Colscore sm="3">
         <Button color="primary">
  <Napislogo2>
  <b>Analyze</b>
  </Napislogo2>
 </Button> 
</Colscore>
       </RowScore>   
   </App4>
   <App5>
     <RowScore>
       <Colscoreran sm="2">
       Score range:
       </Colscoreran>
     <Colscore sm="3">
      <Czerwone>   </Czerwone>
   Negative: (-1 &mdash; -0,75) 
   </Colscore>
   <Colscore sm="3">
    <Zolte> </Zolte>
   Neutral: (-0,75 &mdash; 0,25)  </Colscore>
   <Colscore sm="3"> 
   <Zielone> </Zielone>
   Positive:  (0,25 &mdash; 1,0)
   </Colscore>
   </RowScore>
           </App5>         
       <App7>    
<App6>
  <RowScore>
<Napisscore>
<img src={logo}  alt="logo" />
&emsp; Your score:  &emsp;
    </Napisscore>
   <Napiswynik> 0,75 </Napiswynik> 
</RowScore>
    </App6>
    </App7>
        </form>  
                  )}
                  /> 
                  </div>
    );
  }
}
const StyledLink = styled(Link).attrs({  })`
margin-left: 20px;
font-weight: 600;
color: #ffffff;
`;
const Napisscore = styled.div`
font-size: 20px;
color: #111111;
align: center;
font-weight: 600;
`;
const Napiswynik = styled.div`
font-size: 26px;
color: #00ff00;
align: center;
font-weight: 600;
`;
const RowScore = styled(Row)`
  width: 100%;
`;
const Colscore = styled(Col)`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;
const Colscoreran = styled(Col)`
  padding: 0;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;
const Zielone = styled.div`
border-radius: 50%;
width: 14px;
height: 14px;
margin-right: 5px;
  background-color: #00ff00;
`;
const Zolte = styled.div`
border-radius: 50%;
width: 14px;
height: 14px;
margin-right: 5px;
  background-color: #ffff00;
`;
const Czerwone = styled.div`
border-radius: 50%;
width: 14px;
height: 14px;
margin-right: 5px;
  background-color: #ff0000;
`;
const StyledLinkNav = styled(Link).attrs({  })`
font-weight: 100;
color: #000000;
`;
const Button1 = styled(Button)`
height: 60px;
border-left: 1px solid silver;
&:hover{
  border-bottom: 5px solid #4ec2e2;
  background-color: #ffffff;
}
border-radius: 0;
`
const Navbar1 = styled(Navbar)`
padding: 0px;
`
const Color = styled.div`
color: white;
`
const Button2 = styled(Button)`
height: 60px;
border-left: 1px solid silver;
&:hover{
  border-bottom: 5px solid #4ec2e2;
  background-color: #ffffff;
}
border-radius: 0;
border-right: 1px solid silver;
`
const Prof = styled.div`
width: 680px;
margin: 100px auto -80px auto;
color:#7387a9;
font-size: 14;
font-weight: 800;
`;
const Flex = styled.div`
display: flex;
align-items: center;
`;
const App6 = styled.div`
padding: 20px;
border: 1px solid #e5e9f4;
width: 300px;
background-color: #fff;
height: auto;
`;
const App7 = styled.div`
display: flex;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
max-width: 900px;
height: auto;
justify-content: flex-end;
`;
const App5 = styled.div`
padding: 20px;
border: 1px solid #e5e9f4;
margin-top: 1px;
margin-left: auto;
margin-right: auto;
max-width: 900px;
background-color: #fff;
height: auto;
`;
const App4 = styled.div`
padding: 20px;
border: 1px solid #e5e9f4;
margin-top: 100px;
margin-left: auto;
margin-right: auto;
align: center;
max-width: 900px;
background-color: #fff;
height: auto;
    align-items: center;
`;
const Logo = styled.div`
margin-right: 20px;
  margin-top: 20px;
  margin-left: 50px;
`;
const Napis3 = styled.div`
margin-left: 20px;
font-size: 16px;
color: #acb7bb;
`;
const Napislogo = styled.div`
font-size: 16px;
color: #acb7bb;
align: center;
`;
const Napislogo2 = styled.div`
font-size: 20px;
  color: #f8f8f8;
`;
const Napis2 = styled.div`
margin-left: 15px;
font-size: 16px;
color: #4ec2e2;
`;
const Napis = styled.div`
font-size: 30px;
color: #bb99ff;
`;
*/

