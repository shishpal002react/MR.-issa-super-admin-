import React, { useEffect, useState } from "react";
import {
  Button,
  DropdownDivider,
  Form,
  ModalBody,
  Pagination,
  Table,
} from "react-bootstrap";
import "../CSS/Contacts.css";
import Select from "react-select";
import Offcanvas from "react-bootstrap/Offcanvas";

import Modal from "react-bootstrap/Modal";
const Contacts = () => {
  const [show, setShow] = useState(false);
  const [addContactBtn, setAddContactBtn] = useState("");
  const initialText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum erat erat, eu dapibus quam lobortis vitae. Aenean ut tellus ex. Donec vel risus ut urna scelerisque maximus. Duis vestibulum, enim sit amet fermentum vulputate, justo neque rhoncus mi, sed tempor justo velit nec dui. Maecenas condimentum condimentum tincidunt. Aliquam gravida eleifend sollicitudin. Fusce a nulla non dolor finibus vestibulum eu eu quam. Etiam volutpat viverra pretium. Fusce pulvinar velit tortor, sed luctus quam dignissim vitae. Etiam consequat porttitor velit id luctus. Sed vulputate tortor eu bibendum luctus. Integer a lectus non magna vestibulum pharetra. Vivamus ultrices metus vel purus iaculis mollis. Morbi sem diam, lacinia vitae ex facilisis, eleifend viverra metus. Donec pretium est tortor, non posuere quam vulputate id.`;

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    { value: "psychiatric", label: "Psychiatric Provider" },
    { value: "claims", label: "Claims Submission" },
  ];
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(
      "/Dashboard/contacts/user.png"
    );
    const initialText1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum erat erat, eu dapibus quam lobortis vitae. Aenean ut tellus ex. Donec vel risus ut urna scelerisque maximus. Duis vestibulum, enim sit amet fermentum vulputate, justo neque rhoncus mi, sed tempor justo velit nec dui. Maecenas condimentum condimentum tincidunt. Aliquam gravida eleifend sollicitudin. Fusce a nulla non dolor finibus vestibulum eu eu quam. Etiam volutpat viverra pretium. Fusce pulvinar velit tortor, sed luctus quam dignissim vitae. Etiam consequat porttitor velit id luctus. Sed vulputate tortor eu bibendum luctus. Integer a lectus non magna vestibulum pharetra. Vivamus ultrices metus vel purus iaculis mollis. Morbi sem diam, lacinia vitae ex facilisis, eleifend viverra metus. Donec pretium est tortor, non posuere quam vulputate id.";
    const [showMore1, setShowMore1] = useState(false);

    const toggleShowMore1 = () => {
      setShowMore1(!showMore1);
    };
    useEffect(() => {
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    }, [selectedFile]);

    const fileChangedHandler = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedFile(e.target.files[0]);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {addContactBtn === "filter" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
              >
                Filter
              </p>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <p style={{ color: "black", fontWeight: "600" }}>Permission</p>
                <Form.Group
                  style={{
                    display: "flex",
                    gap: "2rem",
                  }}
                  className="mb-3"
                >
                  <Form.Check type="checkbox" label="Psychiatric Provider" />
                  <Form.Check type="checkbox" label="Claims Submission" />
                </Form.Group>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#0C5C75",
                    color: "white",
                    fontWeight: "500",
                    padding: "0.5rem 3.5rem",
                  }}
                  onClick={props.onHide}
                >
                  APPLY
                </Button>
                <Button
                  style={{
                    padding: "0.5rem 3.5rem",
                    marginLeft: "1rem",
                    color: "#0C5C75",
                    backgroundColor: "transparent",
                  }}
                  onClick={props.onHide}
                >
                  CANCEL
                </Button>
              </div>
            </Modal.Footer>
          </>
        ) : addContactBtn === "add" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Add New Task
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <div className="contact-form1-contacts-page">
                  <div>
                    <label htmlFor="fileInput">
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            border: "1px solid #0C5C75",
                            margin: "auto",
                          }}
                          src={previewUrl}
                          alt="images"
                        />
                      </p>
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={fileChangedHandler}
                    />
                  </div>

                  <p>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label
                          style={{
                            color: "black",
                            fontWeight: "600",
                            fontSize: ".9rem",
                          }}
                        >
                          Full Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label
                          style={{
                            color: "black",
                            fontWeight: "600",
                            fontSize: ".9rem",
                          }}
                        >
                          Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                    </Form>
                  </p>
                </div>
                <div>
                  <Form className="contact-form2-contacts-page">
                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{
                          color: "black",
                          fontWeight: "600",
                          fontSize: ".9rem",
                        }}
                      >
                        Phone Number
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter Message" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{
                          fontWeight: "600",
                          fontSize: ".9rem",
                        }}
                      >
                        Type
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select </option>
                        <option style={{ color: "#0C5C75" }} value="1">
                          EMPLOYEE
                        </option>
                        <option style={{ color: "#1A9FB2" }} value="2">
                          PATIENT
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Form>
                </div>
                <div>
                  <Form className="contact-form3-contacts-page">
                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{
                          color: "black",
                          fontWeight: "600",
                          fontSize: ".9rem",
                        }}
                      >
                        Permissions -
                      </Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check label="Psychiatric Provider" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check label="Claims Submission" />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </ModalBody>
            <Modal.Footer>
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#0C5C75",
                    color: "white",
                    fontWeight: "500",
                    padding: "0.5rem 3.5rem",
                  }}
                  onClick={props.onHide}
                >
                  APPLY
                </Button>
                <Button
                  style={{
                    padding: "0.5rem 3.5rem",
                    marginLeft: "1rem",
                    color: "#0C5C75",
                    backgroundColor: "transparent",
                  }}
                  onClick={props.onHide}
                >
                  CANCEL
                </Button>
              </div>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Assign Package
              </p>
            </Modal.Header>
            <ModalBody>
              <div style={{ border: "1px solid red", padding: "1rem" }}>
                <Form>
                  <Form.Group
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                    className="mb-3"
                  >
                    <span>
                      <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                        <Form.Check.Input type={"radio"} isValid />
                        <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                      </Form.Check>
                    </span>
                    <span style={{ display: "flex", gap: "1rem" }}>
                      <span>
                        <img
                          style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            width: "auto",
                            height: "auto",
                          }}
                          src="/Dashboard/contacts/dummy.png"
                          alt="dummyImage"
                        />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: '#78B347', fontWeight: 'bold' }}>Employee</span>
      <span>
        {showMore1 || initialText1.split(' ').length <= 20 ? (
          initialText1 // Display full text if showMore1 is true or word count <= 20
        ) : (
          <>
            {initialText1.split(' ').slice(0, 20).join(' ')}...{' '}
            <button
              onClick={() => setShowMore1(!showMore1)}
              style={{
                border: 'none',
                color: '#1A9FB2',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              {showMore1 ? 'Show less' : 'READ MORE...'}
            </button>
          </>
        )}
      </span>
    </span>
                    </span>
                  </Form.Group>
                </Form>
              </div>
            </ModalBody>
            <Modal.Footer>
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#0C5C75",
                    color: "white",
                    fontWeight: "500",
                    padding: "0.5rem 3.5rem",
                  }}
                  onClick={props.onHide}
                >
                  APPLY
                </Button>
                <Button
                  style={{
                    padding: "0.5rem 3.5rem",
                    marginLeft: "1rem",
                    color: "#0C5C75",
                    backgroundColor: "transparent",
                  }}
                  onClick={props.onHide}
                >
                  CANCEL
                </Button>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
      <Offcanvas
        show={show}
        style={{
          height: "80vh",
          borderRadius: "10px 10px 0 0",
          padding: "1.5rem",
        }}
        placement="bottom"
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "black", fontWeight: "600" }}>
            Contact Details
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr style={{ color: "gray", width: "60%" }} />
        <Offcanvas.Body>
          <div className="profile-dropdown-container">
            <img
              src="/Dashboard/user.png"
              style={{
                maxWidth: "125px",
                maxHeight: "125px",
                width: "auto",
                height: "auto",
              }}
              alt="user"
            />
            <p>
              <p style={{ fontWeight: "bold", color: "black" }}>Jhon Smith</p>
              <p
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <img
                  style={{ maxWidth: "20px", maxHeight: "20px" }}
                  src="/Dashboard/contacts/bag.png"
                  alt=""
                />
                <span style={{ color: "red" }}>BUSINESS</span>
              </p>
              <p
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "#1A9FB2",
                }}
              >
                <img
                  style={{ maxWidth: "20px", maxHeight: "20px" }}
                  src="/Dashboard/message.png"
                  alt=""
                />
                <span>
                  EMAIL -{" "}
                  <span style={{ color: "black", fontWeight: "normal" }}>
                    loremipsum@gmail.com
                  </span>{" "}
                </span>
              </p>
              <p
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "#1A9FB2",
                }}
              >
                <img
                  style={{ maxWidth: "20px", maxHeight: "20px" }}
                  src="/Dashboard/call.png"
                  alt=""
                />
                <span>PHONE -</span>
              </p>
              <p
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "#1A9FB2",
                }}
              >
                <img
                  style={{ maxWidth: "20px", maxHeight: "20px" }}
                  src="/Dashboard/call.png"
                  alt=""
                />
                <span>ADDRESS -</span>
              </p>
              <p
                style={{
                  display: "flex",
                  gap: "15px",
                  // alignItems: "center",
                  fontWeight: "bold",
                  color: "#1A9FB2",
                }}
              >
                <img
                  style={{ maxWidth: "20px", maxHeight: "20px" }}
                  src="/Dashboard/user1.png"
                  alt=""
                />
                <p>
                  <span>PERMISSIONS -</span>

                  <p>
                    <Select
                      options={options}
                      isMulti
                      closeMenuOnSelect={false}
                      placeholder="All Accessible"
                    />
                  </p>
                </p>
              </p>
            </p>
            <p>
              <p style={{ fontWeight: "bold", color: "#0C5C75" }}>
                Description
              </p>
              <p>
                <span>
                  {showMore
                    ? initialText
                    : initialText.split(" ").slice(0, 38).join(" ") + "..."}
                </span>
                {initialText.split(" ").length > 50 && (
                  <button
                    onClick={toggleShowMore}
                    style={{
                      border: "none",
                      color: "#1A9FB2",
                    }}
                  >
                    {showMore ? "Show less" : "READ MORE..."}
                  </button>
                )}
              </p>
              <p style={{ fontWeight: "bold", color: "#0C5C75" }}>Package</p>
              <p
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem 2rem",
                  backgroundColor: "#D1ECF0",
                  borderRadius: "10px",
                }}
              >
                <p
                  onClick={() => {
                    setAddContactBtn("assign");
                    setModalShow(true);
                  }}
                >
                  <img
                    style={{ maxWidth: "35px", maxHeight: "35px" }}
                    src="/Dashboard/contacts/add.png"
                    alt="package"
                  />
                  <span
                    style={{
                      color: "#1A9FB2",
                      fontWeight: "bold",
                      marginLeft: "15px",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  >
                    CLICK TO ASSIGN PACKAGE {">"}
                  </span>
                </p>
              </p>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div>
        <p
          style={{ fontSize: "1.3rem", fontWeight: "600", marginTop: "1.5rem" }}
        >
          Contacts
        </p>
        <div className="contacts-page-container1">
          <div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Control type="search" placeholder="Search" />
              </Form.Group>
            </div>
          </div>
          <div>
            <img
              onClick={() => {
                setAddContactBtn("filter");
                setModalShow(true);
              }}
              style={{
                maxWidth: "35px",
                maxHeight: "35px",
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
              src="/Dashboard/contacts/filter.png"
              alt="filter"
            />
          </div>
          <div>
            <Button
              onClick={() => {
                setAddContactBtn("add");
                setModalShow(true);
              }}
              variant="primary"
              style={{ padding: "0.5rem 3.5rem", backgroundColor: "#0C5C75" }}
            >
              + ADD CONTACT
            </Button>
          </div>
        </div>
        <div>
          <div
            style={{ height: "45vh", overflow: "auto", marginBottom: "5rem" }}
          >
            <Table style={{ marginTop: "2rem" }} responsive>
              <thead>
                <tr>
                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                      borderRadius: "5px 0 0 0px",
                    }}
                  >
                    Business Name
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Type
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Email
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Phone
                  </th>

                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                      borderRadius: "0 5px 0 0px",
                    }}
                  >
                    Permissions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    onClick={handleShow}
                    style={{ display: "flex", gap: "1rem" }}
                  >
                    <p>
                      <img
                        style={{
                          maxWidth: "55px",
                          maxHeight: "55px",
                          borderRadius: "50%",
                          // border: "1px solid #0C5C75",
                        }}
                        src="/Dashboard/contacts/pto.png"
                        alt="profile_image"
                      />
                    </p>
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                      }}
                    >
                      <span>John Smith</span>
                      <span style={{ opacity: "70%" }}>
                        ADDED ON DD/MM/YYYY
                      </span>
                    </p>
                  </td>
                  <td>
                    <p
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p>
                        <img
                          style={{
                            maxWidth: "25px",
                            maxHeight: "25px",
                          }}
                          src="/Dashboard/contacts/bag.png"
                          alt="profile_image"
                        />
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          color: "#0C5C75",
                        }}
                      >
                        <span>BUSINESS</span>
                      </p>
                    </p>
                  </td>
                  <td>
                    <p>loremipsum@gmail.com</p>
                  </td>
                  <td>
                    <p>1234567890</p>
                  </td>

                  <td>
                    <p>
                      <Select
                        options={options}
                        isMulti
                        closeMenuOnSelect={false}
                        placeholder="All Accessible"
                      />
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
