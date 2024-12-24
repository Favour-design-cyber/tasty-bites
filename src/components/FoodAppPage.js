import React from "react";
import styled from "styled-components";
import {
  Layout,
  Typography,
  Button,
  Card,
  Row,
  Col,
  Form,
  Input,
  message,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const CursorPointer = styled.div`
  cursor: pointer;
`;

const CursorHelp = styled.div`
  cursor: help;
`;

const CursorWait = styled.button`
  cursor: wait;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
  background: #fff;
  padding: 0 50px;
`;

const HeaderLogo = styled.div`
  float: left;
  color: #1890ff;
  font-size: 18px;
  font-weight: bold;
`;

const HeaderMenu = styled.div`
  float: right;
  & > * {
    cursor: pointer;
  }
`;

const StyledContent = styled(Content)`
  padding: 0 50px;
  margin-top: 64px;
`;

const ContentSection = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 380px;
`;

const AboutSection = styled(ContentSection)`
  background: #f0f2f5;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const FoodAppPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values:", values);
    message.success("Message sent successfully!");
    form.resetFields();
  };

  return (
    <Layout className="layout">
      <StyledHeader>
        <HeaderLogo>Tasty Bites App</HeaderLogo>
        <HeaderMenu>
          <Button type="link" href="#home">
            Home
          </Button>
          <Button type="link" href="#about">
            About
          </Button>
          <Button type="link" href="#contact">
            Contact
          </Button>
        </HeaderMenu>
      </StyledHeader>
      <StyledContent>
        <ContentSection id="home">
          <Title>Welcome to Tasty Bites</Title>
          <Paragraph>
            Discover mouth-watering meals made with love and the freshest
            <br />
            ingredients. At Tasty Bites, we believe that food is more than just
            <br />
            sustenance – it’s an experience. Whether you're craving comforting
            <br />
            classics, exotic flavors, or healthy bites, we’ve got something to
            <br />
            satisfy your taste buds.
          </Paragraph>
          <CursorPointer>
            <Button type="primary" size="large" className="ant-btn-animate">
              Order Now
            </Button>
          </CursorPointer>
        </ContentSection>

        <AboutSection id="about">
          <Title>About Tasty Bites</Title>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card title={<CursorHelp>Wide Selection</CursorHelp>} hoverable>
                <Paragraph>
                  From sizzling burgers and cheesy pizzas to healthy salads and
                  <br />
                  hearty pasta bowls, our menu is packed with options to satisfy
                 
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title={<CursorHelp>Fast Delivery</CursorHelp>} hoverable>
                <Paragraph>
                  Get your food hot and fresh in no time. <br />
                  We know you're hungry, and we don’t keep you waiting. 
               
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title={<CursorHelp>Easy Ordering</CursorHelp>} hoverable>
                <Paragraph>
                  Ordering your favorite dishes has never been easier. With just
                  <br />
                  a few clicks, you can place an order through our website or  app. 
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </AboutSection>

        <ContentSection id="contact">
          <Title>Contact Us</Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Paragraph>
                <EnvironmentOutlined /> 123 Food Street, Tasty City, 12345
              </Paragraph>
              <Paragraph>
                <PhoneOutlined /> (123) 456-7890
              </Paragraph>
              <Paragraph>
                <MailOutlined /> contact@tastybites.com
              </Paragraph>
            </Col>
            <Col span={12}>
              <Form
                form={form}
                name="contact"
                onFinish={onFinish}
                layout="vertical"
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input a valid email!",
                    },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea placeholder="Your Message" rows={4} />
                </Form.Item>
                <Form.Item>
                  <CursorWait as={Button} type="primary" htmlType="submit">
                    Send Message
                  </CursorWait>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </ContentSection>
      </StyledContent>
      <StyledFooter>
        ©2022 Tasty Bites App. All rights reserved. created by{" "}
        <a href="https://www.linkedin.com/in/favour-oluwadamilare-a66181258/">
          Favour Oluwadamilare
        </a>
      </StyledFooter>
    </Layout>
  );
};

export default FoodAppPage;
