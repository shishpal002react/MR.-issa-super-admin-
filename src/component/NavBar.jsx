import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { IoIosNotifications } from "react-icons/io";
import { Button, Col, Form, Offcanvas, Row, Toast } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useHistory } from "react-router-use-history";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [editProfile, setEditProfile] = useState('profile');
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
      const selectedImage = event.target.files[0];

      if (selectedImage) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };

        reader.readAsDataURL(selectedImage);
      }
    };
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const params = useParams();
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState(params.page || "contacts");
  const handleItemClick = (itemName, link) => {
    setSelectedItem(itemName);
    history.push(`/dashboard/${link}`);
  };
  useEffect(() => {
    setSelectedItem(params.page || "contacts");
  }, [params.page]);
  return (
    <>
      <Offcanvas
        className="offcanvas-navbar"
        show={show}
        placement="end"
        style={{ height: "100vh" }}
        onHide={handleClose}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img
              onClick={handleClose}
              src="/close.png"
              alt="closeBtn"
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            /> {editProfile === 'edit' ? <span style={{ marginLeft: "1rem", fontWeight: "bold" }}>Edit Profile</span> : editProfile==="preference"?<span style={{ marginLeft: "1rem", fontWeight: "bold" }}>Preferences</span>:null} 
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
           
            {editProfile==='profile' ?
            <div> <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                lineHeight: "1rem",
              }}
            >
              <img
                src="/user.png"
                alt="user"
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  width: "auto",
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
              <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
                Lorem Ipsum
              </p>

              <p>
                <span>
                  <img
                    style={{
                      maxWidth: "20px",
                      maxHeight: "20px",
                      width: "auto",
                      height: "auto",
                    }}
                    src="/sandbox.png"
                    alt="sandbox"
                  />
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#4D4D4D",
                    marginLeft: "5px",
                  }}
                >
                  1 HOUR ELAPSED
                </span>
              </p>
              <span>
                <img
                  onClick={() => navigate("/")}
                  style={{
                    maxWidth: "130px",
                    maxHeight: "25px",
                    width: "auto",
                    height: "auto",
                    marginTop: ".5rem",
                    cursor: "pointer",
                  }}
                  src="/signout.png"
                  alt="Signout"
                />
              </span>
            </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  padding: "0 20%",
                  fontSize: "1.2rem",
                  marginTop: "1.5rem",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <img
                      style={{ maxWidth: "30px", maxHeight: "30px" }}
                      src="/NavBar/editProfile.png"
                      alt="edit1"
                    />
                  </span>
                  <span onClick={() => setEditProfile('edit')} style={{ fontWeight: "bold", opacity: "70%", cursor: "pointer" }}>
                    Edit Profile Details
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <img
                      style={{ maxWidth: "30px", maxHeight: "30px" }}
                      src="/NavBar/terms.png"
                      alt="edit1"
                    />
                  </span>
                  
                  <span  style={{ fontWeight: "bold", opacity: "70%", cursor: "pointer" }}>
                    Terms & Conditions
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <img
                      style={{ maxWidth: "30px", maxHeight: "30px" }}
                      src="/NavBar/preference.png"
                      alt="edit1"
                    />
                  </span>
                  <span onClick={() => setEditProfile('preference')} style={{ fontWeight: "bold", opacity: "70%", cursor: "pointer" }}>
                    Preferences
                  </span>
                </p>
              </div>
            </div>:editProfile==='edit'? <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                lineHeight: "1rem",
              }}
            >
             <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="imageInput"
      />
      <label htmlFor="imageInput">
        <img
          src={imagePreview || '/user.png'} 
          alt="user"
          style={{
            maxWidth: '100px',
            maxHeight: '100px',
            width: 'auto',
            height: 'auto',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        />
      </label>
    </div>

              <p style={{ fontWeight: "bold", marginTop: "1rem",color:"#0C5C75" }}>
               CHANGE PROFILE IMAGE
              </p>
              </div>
              <div>
                <Form style={{textAlign:"left",width:"80%",padding:"0 2%",margin:"auto",marginTop:"2rem"}} controlId="formFile" className="mb-3">
                  <Form.Group className="mb-3" controlId="formFile">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{backgroundColor:"#EEEEEE"}} type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formFile">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control style={{backgroundColor:"#EEEEEE"}} type="text" placeholder="+91 1234567890" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formFile">
                    <Form.Label>Address</Form.Label>
                    <Form.Control style={{backgroundColor:"#EEEEEE"}} as={"textarea"} rows={3} placeholder="Enter Address" />
                  </Form.Group>
                  <span style={{display:"flex",justifyContent:"center"}}>

                  <Button onClick={() => setEditProfile('profile')} style={{padding:"0.5rem 5.5rem",backgroundColor:"#0C5C75",border:"none",marginTop:"2rem"}}>SAVE CHANGES</Button>
                  </span>
                </Form>
              </div>
            </div>:editProfile==="preference"?<div> 
            
            <div>
              <Form className="mb-3" >
                <Form. Check type="checkbox" className="mb-3" label="lorem ipsum" />
                <Form. Check type="checkbox" className="mb-3" label="lorem ipsum" />
                <Form. Check type="checkbox" className="mb-3" label="lorem ipsum" />
                <Form. Check type="checkbox" className="mb-3" label="lorem ipsum" />
                <Form. Check type="checkbox" className="mb-3" label="lorem ipsum" />

                <span style={{display:"flex",justifyContent:"center"}}>

<Button onClick={() => setEditProfile('profile')} style={{padding:"0.5rem 5.5rem",backgroundColor:"#0C5C75",border:"none",marginTop:"2rem"}}>SAVE CHANGES</Button>
</span>
              </Form>
            </div>
            </div>:null}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div>
        <Navbar
          style={{
            backgroundColor: "#D9D9D9",
            fontSize: "1.3rem",
          }}
          collapseOnSelect
          variant="light"
          expand="lg"
        >
          <Container className="navbar-container" expand="lg">
            <Navbar.Brand href="/dashboard/contacts">
              <img
                src="/logo.png"
                alt="logo"
                style={{
                  maxWidth: "175px",
                  maxHeight: "65px",
                  width: "auto",
                  height: "auto",
                }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              // id="responsive-navbar-nav"
              // className="navbar-container-collapse"
            >
              <Nav style={{ width: "70%", margin: "auto" }} className="me-auto">
                <Form.Control
                  className="searchBar-input-navbar"
                  type="search"
                  style={{ width: "100%" }}
                  placeholder="Search"
                />
              </Nav>
              <Nav
                style={{
                  width: "25%",
                  margin: "auto",
                  fontSize: ".8rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* <Nav.Link href="#deets"> */}
                  <Row>
                    <Col md={6} className="mb-2">
                      <IoIosNotifications onClick={() => {
                      toggleShowA()}}
                      
                        style={{
                          color: "yellow",
                          maxWidth: "55px",
                          maxHeight: "55px",
                          width: "auto",
                          height: "auto",
                          fontSize: "3rem",
                        }}
                      />
                      <Toast style={{backgroundColor:"white"}} className="notification-toast-navbar"
                       
                        show={showA}
                        onClose={toggleShowA}
                      >
                        <Toast.Header>
                          <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                          />
                          <strong
                            style={{ fontWeight: "bold", color: "black" }}
                            className="me-auto"
                          >
                            Notifications
                          </strong>
                          {/* <small>11 mins ago</small> */}
                        </Toast.Header>
                        <Toast.Body>
                        <div >
           
            <div style={{ display: "flex", gap: "15px" ,alignContent:"center",marginBottom:"1rem"}}>
            <p>

                <img style={{ maxWidth: "25px", maxHeight: "25px",width:"auto",height:"auto" }} src="/notifiation.png" alt="notification" />
            </p>
            <p style={{ display: "flex", flexDirection: "row" ,flexWrap:"nowrap",gap:"15px"}}>
                <span><img src="/user.png" alt="user" style={{ maxWidth: "45px", maxHeight: "35px",width:"auto",height:"auto" }} /></span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                    <span><span style={{fontWeight:"bold"}}>Nina John</span>  has added a new Note in Group <span style={{fontWeight:"bold",color:"#0C5C75"}}>‘ Department 1’</span></span>
                    <span style={{ color: "#0C5C75",fontWeight:"bold" }}>VIEW MORE {'>'}</span>
                </span>
            </p>
            </div>
            <div style={{ display: "flex", gap: "15px" ,alignContent:"center",marginBottom:"1rem"}}>
            <p>

                <img style={{ maxWidth: "25px", maxHeight: "25px",width:"auto",height:"auto" }} src="/notifiation.png" alt="notification" />
            </p>
            <p style={{ display: "flex", flexDirection: "row" ,flexWrap:"nowrap",gap:"15px"}}>
                <span><img src="/user.png" alt="user" style={{ maxWidth: "45px", maxHeight: "35px",width:"auto",height:"auto" }} /></span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                    <span><span style={{fontWeight:"bold"}}>Nina John</span>  has added a new Note in Group <span style={{fontWeight:"bold",color:"#0C5C75"}}>‘ Department 1’</span></span>
                    <span style={{ color: "#0C5C75",fontWeight:"bold" }}>VIEW MORE {'>'}</span>
                </span>
            </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" ,marginBottom:"1rem"}}>
              <Button onClick={()=>{handleItemClick("notifications", "notifications");
              toggleShowA()}} style={{ backgroundColor: "white", color: "#0C5C75", fontWeight: "bold", border: "1px solid #0C5C75", borderRadius: "5px",padding:"0.5rem 1.1rem" }}>VIEW ALL</Button>
            </div>
          </div>{" "}
                        </Toast.Body>
                      </Toast>
                    </Col>
                  </Row>
                {/* </Nav.Link> */}
                <Nav.Link eventKey={2} href="#memes">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <img
                      onClick={handleShow}
                      style={{
                        maxWidth: "45px",
                        maxHeight: "45px",
                        borderRadius: "50%",
                      }}
                      src="/Dashboard/user.png"
                      alt="user"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingTop: ".1rem",
                        lineHeight: ".8rem",
                        fontWeight: "bold",
                      }}
                    >
                      <p style={{ paddingTop: ".8rem", color: "#0C5C75" }}>
                        LOREM IPSUM
                      </p>
                      <p style={{ color: "black", opacity: "70%" }}>
                        ⌛ 1 HOUR ELAPSED
                      </p>
                    </div>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
