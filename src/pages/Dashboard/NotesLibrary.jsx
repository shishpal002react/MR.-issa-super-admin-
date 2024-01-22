import React, { useEffect, useState } from "react";
import {
  Button,
  DropdownDivider,
  Form,
  ModalBody,
  Pagination,
  ProgressBar,
  Table,
} from "react-bootstrap";
import "../CSS/Contacts.css";
import { FaEdit, FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Select from "react-select";
import Offcanvas from "react-bootstrap/Offcanvas";

import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-use-history";
const NotesLibrary = () => {
  const [show, setShow] = useState(false);
  const [addContactBtn, setAddContactBtn] = useState(null);
  const params = useParams();
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState(params.page || "contacts");
  const handleItemClick = (itemName, link) => {
    setSelectedItem(itemName);
    history.push(`/dashboard/${link}`);
  };
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
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
      if (props.onHide) {
        props.onHide();
      }
    };

    const handleButtonClick = () => {
      document.getElementById("fileUpload").click();
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {addContactBtn == "f" ? (
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
                <p style={{ color: "black", fontWeight: "600" }}>
                  Progress of Completion ( Range )
                </p>
                <Form.Group
                  style={{
                    display: "flex",
                    gap: "2rem",
                  }}
                  className="mb-3"
                >
                  <Form.Range style={{ width: "100%" }} />
                </Form.Group>
              </div>
              <div className="mb-3">
                <p style={{ color: "black", fontWeight: "600" }}>
                  Last Updated ( Date Range )
                </p>
                <Form
                  style={{
                    display: "flex",
                    gap: "2rem",
                    flexWrap: "flexWrap",
                  }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      From{" "}
                    </Form.Label>
                    <Form.Control type="date" placeholder="Enter Start Date" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      To{" "}
                    </Form.Label>
                    <Form.Control type="date" placeholder="Enter Start Date" />
                  </Form.Group>
                </Form>
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
        ) : addContactBtn == "t" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Notes Library
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <Form
                  style={{
                    display: "grid",
                    // gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Title
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Sub-Title
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Sub-Title" />
                  </Form.Group>
                </Form>
              </div>
            </ModalBody>
            <Modal.Footer>
              <div
                style={{
                  width: "100%",
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
                    cursor: "pointer",
                  }}
                  //   onClick={handleButtonClick}
                >
                  SAVE
                </Button>
                <input
                  id="fileUpload"
                  type="file"
                  style={{ display: "none" }}
                  //   onChange={handleFileChange}
                />
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "#0C5C75",
                    fontWeight: "600",
                    padding: "0.5rem 3.5rem",
                    cursor: "pointer",
                    border: "1px solid #0C5C75",
                  }}
                  //   onClick={handleButtonClick}
                >
                  Cancel
                </Button>
                <input
                  id="fileUpload"
                  type="file"
                  style={{ display: "none" }}
                  //   onChange={handleFileChange}
                />
              </div>
            </Modal.Footer>
          </>
        ) : addContactBtn == "v" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Notes Library
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <Form
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr ",
                    gap: "1rem",
                  }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Topic
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Topic" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Note Summary
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Summary" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Plan Recommendation
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Text" />
                  </Form.Group>
                </Form>
              </div>
            </ModalBody>
            <Modal.Footer>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 2%",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#0C5C75",
                    color: "white",
                    fontWeight: "500",
                    padding: "0.5rem 3.5rem",
                    cursor: "pointer",
                  }}
                  //   onClick={handleButtonClick}
                >
                  EDIT
                </Button>

                <Button
                  style={{
                    backgroundColor: "white",
                    color: "#0C5C75",
                    fontWeight: "600",
                    padding: "0.5rem 3.5rem",
                    cursor: "pointer",
                  }}
                  //   onClick={handleButtonClick}
                >
                  Cancel
                </Button>
              </div>
            </Modal.Footer>
          </>
        ) : null}
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
          Notes Library
        </p>
        <div className="contacts-page-container1">
          <div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Control type="search" placeholder="Search" />
              </Form.Group>
            </div>
          </div>
          {/* <div>
            <img
              onClick={() => {
                setAddContactBtn("f");
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
          </div> */}
          <div>
            <Button
              onClick={() => {
                setAddContactBtn("t");
                setModalShow(true);
              }}
              variant="primary"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#0C5C75",
                minWidth: "125px",
              }}
            >
              + ADD NEW
            </Button>
          </div>
          {/* <div>
            <Button
              onClick={() => {
                setAddContactBtn("t");
                setModalShow(true);
              }}
              variant="primary"
              style={{ padding: "0.5rem 1.2rem", backgroundColor: "#0C5C75" }}
            >
              + UPLOAD MEDICATION
            </Button>
          </div> */}
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
                    Title
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Sub Title
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Plan Recommendation
                  </th>

                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                    }}
                  ></th>
                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                    }}
                  ></th>
                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                    }}
                  ></th>
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
                    <p>lorem </p>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    <p>lorem </p>
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
                      {" "}
                      <span
                        onClick={() => {
                          setAddContactBtn("v");
                          setModalShow(true);
                        }}
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          color: "#0C5C75",
                        }}
                      >
                        <FaEdit style={{ color: "#0C5C75" }} />{" "}
                      </span>
                      <span
                        onClick={() => {
                          setAddContactBtn("v");
                          setModalShow(true);
                        }}
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          color: "#0C5C75",
                        }}
                      >
                        <FaEye />{" "}
                        <span
                          style={{
                            color: "#0C5C75",
                            fontSize: "0.9rem",
                            fontWeight: "600",
                          }}
                        >
                          VIEW NOTE
                        </span>
                      </span>
                      <span
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          color: "#0C5C75",
                        }}
                      >
                        <RiDeleteBin5Fill style={{ color: "#FC0005" }} />{" "}
                        <span
                          style={{
                            color: "#FC0005",
                            fontSize: "0.9rem",
                            fontWeight: "bold",
                          }}
                        >
                          DELETE
                        </span>
                      </span>
                      {/* <span>
                        <FaRegEdit />
                      </span>
                      <span>
                        <RiDeleteBin5Fill style={{ color: "#FC0005" }} />
                      </span> */}
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

export default NotesLibrary;
