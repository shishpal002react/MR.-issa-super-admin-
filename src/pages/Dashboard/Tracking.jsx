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
import "../CSS/Tracking.css";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Select from "react-select";
import Offcanvas from "react-bootstrap/Offcanvas";

import Modal from "react-bootstrap/Modal";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
const Tracking = () => {
  const [show, setShow] = useState(false);
  const [addContactBtn, setAddContactBtn] = useState(false);

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
      "/Dashboard/contacts/user.png"
    );
    const [range, setRange] = useState([2, 6]);

    const handleRangeChange = (newRange) => {
      setRange(newRange);
    };

    const handleTooltip = (value) => {
      const sizeLabels = ["0%", "25%", "50%", "75%", "100%"];
      return sizeLabels[value - 1];
    };
    const customHandleStyle = {
      borderColor: "#0C5C75",
      backgroundColor: "#0C5C75",
      fontWeight: "600",
    };

    const newCustomTrack = {
      backgroundColor: "#0C5C75",
      height: "6px",
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
        {!addContactBtn ? (
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
                <Form.Group className="mb-5">
                  <Form.Label
                    style={{ color: "black", fontWeight: "600" }}
                    className="mb-3"
                  >
                    Admin
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div>
                    <label
                      className="mb-3"
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Progress of Completion (Range)
                    </label>
                    <Slider
                      style={{ color: "red" }}
                      min={1}
                      max={7}
                      step={1}
                      range
                      defaultValue={[2, 3]}
                      value={range}
                      onChange={handleRangeChange}
                      handle={(props) => (
                        <Tooltip
                          prefixCls="rc-slider-tooltip"
                          overlay={handleTooltip(props.value)}
                          visible
                          placement="top"
                          key={props.index}
                          overlayStyle={{
                            backgroundColor: "#0C5C75",
                            color: "red",
                          }}
                        >
                          <Slider.Handle value={props.value} />
                        </Tooltip>
                      )}
                      marks={{
                        1: "0%",
                        2: "25%",
                        3: "50%",
                        4: "75%",
                        5: "100%",
                      }}
                      handleStyle={[customHandleStyle, customHandleStyle]}
                      trackStyle={newCustomTrack}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3 mt-5">
                  <Form.Label style={{ color: "black", fontWeight: "600" }}>
                    Last Updated (Date Range )
                  </Form.Label>
                  <span
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <Form.Group>
                      <Form.Label style={{ color: "black" }}>From</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label style={{ color: "black" }}>To</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </span>
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
                  src="/Dashboard/admin.png"
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
                  src="/Dashboard/call.png"
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
                  src="/Dashboard/user1.png"
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
                    src="/Dashboard/home.png"
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
          Admin Tracking
        </p>
        <div className="tracking-page-container-new1">
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
                setAddContactBtn(false);
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
          {/* <div>
            <Button
              onClick={() => {
                setAddContactBtn(true);
                setModalShow(true);
              }}
              variant="primary"
              style={{ padding: "0.5rem 3.5rem", backgroundColor: "#0C5C75" }}
            >
              + ADD New
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
                    Name
                  </th>

                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Completion
                  </th>
                  <th
                    style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}
                  ></th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Last Updated
                  </th>

                  <th
                    style={{
                      color: "#0C5C75",
                      backgroundColor: "#D1ECF0",
                      borderRadius: "0 5px 0 0px",
                    }}
                  >
                    Due Date
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
                    <p>Annual Disaster Drill Plan</p>
                  </td>

                  <td colSpan={2}>
                    <div className="d-flex align-items-center">
                      <ProgressBar
                        style={{ width: "60%", marginRight: "5px" }}
                        variant="success"
                        now={40}
                      />
                      <span>40%</span>
                    </div>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    <p>DD/MM/YYYY(06:30 PM)</p>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    <p>
                      <span>
                        <img
                          style={{
                            maxWidth: "20px",
                            maxHeight: "20px",
                            width: "auto",
                            height: "auto",
                            marginRight: "5px",
                          }}
                          src="/Dashboard/Tracking/warning.png"
                          alt=""
                        />
                      </span>
                      <span>DD/MM/YYYY</span>
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

export default Tracking;
