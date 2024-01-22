import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  DropdownDivider,
  Form,
  ModalBody,
  Overlay,
  OverlayTrigger,
  Pagination,
  Popover,
  ProgressBar,
  Table,
  Tooltip,
} from "react-bootstrap";
import "../CSS/Contacts.css";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Select from "react-select";
import Offcanvas from "react-bootstrap/Offcanvas";

import Modal from "react-bootstrap/Modal";
const PTORequest = () => {
  const [show, setShow] = useState(false);
  const [addContactBtn, setAddContactBtn] = useState(false);
  const [showpop, setShowpop] = useState(false);
  const target = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    { value: "business", label: "Business" },
    { value: "employee", label: "Employee" },
    { value: "patient", label: "Patient" },
    { value: "psychiatric", label: "Psychiatric Provider" },
    { value: "claims", label: "Claims Submission" },
  ];
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(
      "/public/Dashboard/contacts/user.png"
    );

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
        {!addContactBtn ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                For Administrator
              </p>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <Form.Group
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="mb-3"
                >
                  <Form.Label
                    column
                    sm={3}
                    style={{ fontWeight: "bold", minWidth: "200px" }}
                  >
                    Time Off Request approved
                  </Form.Label>
                  <Col sm={9}>
                    <div className="d-flex align-items-center">
                      <Form.Check inline type="radio" label="Yes" />
                      <Form.Check inline type="radio" label="No" />
                    </div>
                  </Col>
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
                  SAVE
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
                Admin Tracking
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <Form
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Completion
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Completion" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Date
                    </Form.Label>
                    <Form.Control type="date" placeholder="Enter Completion" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Due Date
                    </Form.Label>
                    <Form.Control type="date" placeholder="Enter Completion" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Last Updated
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter last Update" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Number
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Number" />
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
              src="/public/Dashboard/user.png"
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
                  src="/public/Dashboard/admin.png"
                  alt=""
                />
                <span>ADMIN</span>
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
                  src="/public/Dashboard/message.png"
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
                  src="/public/Dashboard/call.png"
                  alt=""
                />
                <span>PHONE </span>
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
                  src="/public/Dashboard/call.png"
                  alt=""
                />
                <span>ADDRESS -</span>
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
                  src="/public/Dashboard/user1.png"
                  alt=""
                />
              </p>
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
            <p>
              <p>Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vestibulum erat erat, eu dapibus quam lobortis vitae. Aenean ut
                tellus ex. Donec vel risus ut urna scelerisque maximus. Duis
                vestibulum, enim sit amet fermentum vulputate, justo neque
                rhoncus mi, sed tempor justo velit nec dui. Maecenas condimentum
                condimentum tincidunt. Aliquam gravida eleifend sollicitudin.
                Fusce a nulla non dolor finibus vestibulum eu eu quam. Etiam
                volutpat viverra pretium. Fusce pulvinar velit tortor, sed
                luctus quam dignissim vitae. Etiam consequat porttitor velit id
                luctus. Sed vulputate tortor eu bibendum luctus. Integer a
                lectus non magna vestibulum pharetra. Vivamus ultrices metus vel
                purus iaculis mollis. Morbi sem diam, lacinia vitae ex
                facilisis, eleifend viverra metus. Donec pretium est tortor, non
                posuere quam vulputate id.{" "}
              </p>
              <p
                style={{
                  color: "#1A9FB2",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                LAST ADMITTED AT -
                <span
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    style={{ maxWidth: "25px", maxHeight: "25px" }}
                    src="/public/Dashboard/home.png"
                    alt=""
                  />
                  <p style={{ color: "black", margin: "0" }}>Center 1</p>
                </span>
              </p>
              <p>
                {" "}
                <Button
                  variant="primary"
                  style={{
                    padding: "0.5rem 5.5rem",
                    backgroundColor: "#1A9FB2",
                    border: "none",
                  }}
                >
                  ASSIGN PATIENT
                </Button>
              </p>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div>
        <p
          style={{ fontSize: "1.3rem", fontWeight: "600", marginTop: "1.5rem" }}
        >
          PTO Request
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
            <OverlayTrigger
              trigger="click"
              key={"bottom"}
              placement={"bottom"}
              overlay={
                <Popover id={`popover-positioned-${"bottom"}`}>
                  <Popover.Body>
                    <div>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="PTO REQUEST" />
                        <Form.Check type="checkbox" label="SICK TIME REQUEST" />
                      </Form.Group>
                    </div>
                  </Popover.Body>
                </Popover>
              }
            >
              <img
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
              {/* <Button
                onClick={() => {
                  setAddContactBtn(true);
                  // setModalShow(true);
                }}
                variant="primary"
                style={{ padding: "0.5rem 3.5rem", backgroundColor: "#0C5C75" }}
              >
                + ADD New
              </Button> */}
            </OverlayTrigger>
          </div>
        </div>
        <div>
          <div
            style={{ height: "45vh", overflow: "auto", marginBottom: "5rem" }}
          >
            <Table style={{ marginTop: "2rem", textAlign: "left" }} responsive>
              <thead>
                <tr>
                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                      borderRadius: "5px 0 0 0px",
                    }}
                  >
                    <Form.Check />
                  </th>
                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                    }}
                  >
                    Name
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Resident Name
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Date of Birth
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    AHCCCS ID
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Admit Date
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Discharge Date
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Time off request approved
                  </th>

                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                      borderRadius: "0 5px 0 0px",
                    }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    <Form.Check
                      style={{ borderColor: "black", color: "black" }}
                    />
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    <p>Jacob Smith</p>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    <p>01/06/1999</p>
                  </td>
                  <td colSpan={2}>
                    <div className="d-flex align-items-center">
                      <p>01234567</p>
                    </div>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    <p>12/11/2023</p>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    <p>10/12/2023</p>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    <p>Yes</p>
                  </td>

                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        gap: "1rem",
                        cursor: "pointer",
                        fontSize: "1.5rem",
                      }}
                    >
                      {/* <span>
                        <FaEye />
                      </span> */}
                      <span>
                        <FaRegEdit onClick={() => setModalShow(true)} />
                      </span>
                      <span>
                        <RiDeleteBin5Fill style={{ color: "#FC0005" }} />
                      </span>
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

export default PTORequest;
