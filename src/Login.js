import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Body = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center content */
  align-items: center; /* Vertically center content */
  height: 100vh;
`;

const Container = styled.div`
  background: #c9ccd1;
  width: 90%;
`;

const Row = styled.div`
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

`;

const ImageColumn = styled.div`
  flex: 1;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 100%;
`;

const FormColumn = styled.div`
  flex: 1;
  background: #fff;
  padding: 35px 25px;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  border: 0;
  height: 50px;
  border-radius: 0;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: bold;
   margin: 10px 0px;
`;


const CheckboxInput = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  height: 50px;
  width: 100%;
  font-weight: bold;
  background: #343a40;
  color: #fff;
  border: none;
`;

const Forgetpassword = styled.div`
display: flex;
justify-content: space-between;
text-align: right;
margin-left: auto; /* Push to the right */
`;
export { Container, Form, FormGroup, Input, CheckboxLabel,CheckboxInput ,Button,Forgetpassword}

const Login = () => {
  return (
    <Body>
    <Container>
      <Row>
        <ImageColumn>
          <Image src="https://r4.wallpaperflare.com/wallpaper/12/1008/45/earth-4k-best-desktop-download-wallpaper-b876cd2860b07c48b03ca18e6852943a.jpg" alt="Background" />
        </ImageColumn>
        <FormColumn>
          <h3>Login</h3>
          <Form>
            <FormGroup>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <div>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" />
                <span>Remember Me</span>
                <Forgetpassword>
                   <a href="#">Change Password?</a>
              </Forgetpassword>
              </CheckboxLabel>
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        <div>
          </div>
          <div className="pt-4 text-center">
            Get Members Benefit. <a href="#">Sign Up</a>
          </div>
        </FormColumn>
      </Row>
    </Container>
    </Body>
  );
};

export default Login;
