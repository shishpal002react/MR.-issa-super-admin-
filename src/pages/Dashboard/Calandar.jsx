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
import { FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Select from "react-select";
import Offcanvas from "react-bootstrap/Offcanvas";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import Modal from "react-bootstrap/Modal";
import Tooltip from "rc-tooltip";
const CalenderSchedule = () => {
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
  const tooltipStyle = {
    position: "absolute",
    top: "-25px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#333",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "12px",
  };
  function MyVerticallyCenteredModal(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(
      "/public/Dashboard/contacts/user.png"
    );
    const [range, setRange] = useState([2, 6]);

    const handleRangeChange = (newRange) => {
      setRange(newRange);
    };

    const handleTooltip = (value) => {
      const sizeLabels = [
        "<1MB",
        "5MB",
        "10MB",
        "15MB",
        "20MB",
        "25MB",
        "30MB>",
      ];
      return sizeLabels[value - 1];
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
    const customHandleStyle = {
      borderColor: "#0C5C75",
      backgroundColor: "#0C5C75",
      fontWeight: "600",
    };

    const newCustomTrack = {
      backgroundColor: "#0C5C75",
      height: "6px",
    };
    // const fileChangedHandler = (e) => {
    //   if (e.target.files && e.target.files.length > 0) {
    //     setSelectedFile(e.target.files[0]);
    //   }
    // };
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
                <p style={{ color: "black", fontWeight: "600" }}>Date Range</p>
                <Form
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                    marginBottom: "1rem",
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
                <Form.Group className="mb-3">
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Document Type
                  </Form.Label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      rowGap: "1rem",
                    }}
                  >
                    <Form.Check type="checkbox" label="PDF" />
                    <Form.Check type="checkbox" label="DOCX" />
                    <Form.Check type="checkbox" label="RTF" />
                    <Form.Check type="checkbox" label="JPG" />
                    <Form.Check type="checkbox" label="PNG" />
                  </div>
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
                      Size Range (In MB)
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
                        1: "<1MB",
                        2: "5MB",
                        3: "10MB",
                        4: "15MB",
                        5: "20MB",
                        6: "25MB",
                        7: "30MB>",
                      }}
                      handleStyle={[customHandleStyle, customHandleStyle]}
                      trackStyle={newCustomTrack}
                    />
                  </div>
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
                Add New Task
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
                    <Form.Control type="text" placeholder="Enter Full Name" />
                  </Form.Group>
                  <span
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <Form.Group className="mb-3">
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Completion"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Time
                      </Form.Label>
                      <Form.Control
                        type="time"
                        placeholder="Enter Completion"
                      />
                    </Form.Group>
                  </span>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Lorem ipsum
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Lorem ipsum" />
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
          Calender{" "}
          <span style={{ opacity: "70%", fontSize: "1rem" }}>
            ( Optional Feature )
          </span>
        </p>

        <div
          style={{ borderBottom: "1px solid #0C5C75", paddingBottom: "5px" }}
          className="contacts-page-container1"
        >
          <div
            style={{ fontWeight: "bold", color: "#0C5C75", fontSize: "1.1rem" }}
          >
            Today ( 20 Oct, Thu )
          </div>
          <div></div>

          <div>
            <Button
              onClick={() => {
                setAddContactBtn(true);
                setModalShow(true);
              }}
              variant="primary"
              style={{ padding: "0.5rem 3.5rem", backgroundColor: "#0C5C75" }}
            >
              + NEW TASK
            </Button>
          </div>
        </div>

        <div>
          <div style={{ marginBottom: "5rem" }}>
            <Table style={{ textAlign: "left" }} responsive>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        gap: ".5rem",
                      }}
                    >
                      <img
                        style={{
                          maxWidth: "20px",
                          maxHeight: "20px",
                          width: "auto",
                          height: "auto",
                        }}
                        src="/Dashboard/clock.png"
                        alt="pdf_image"
                      />
                      <p
                        style={{
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        HH : MM
                      </p>
                    </div>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    <p>Evacuation Drill Reminder</p>
                  </td>
                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
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
                      {/* <FaEye />{" "} */}
                      <span
                        style={{
                          color: "#0C5C75",
                          fontSize: "1rem",
                          fontWeight: "600",
                        }}
                      >
                        MARK AS DONE
                      </span>
                    </span>
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
                        gap: "2rem",
                        cursor: "pointer",
                        fontSize: "1.5rem",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          gap: ".5rem",
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
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
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
          </div> */}
        </div>
        <div
          style={{ borderBottom: "1px solid #0C5C75", paddingBottom: "5px" }}
          className="contacts-page-container1"
        >
          <div
            style={{ fontWeight: "bold", color: "#0C5C75", fontSize: "1.1rem" }}
          >
            Tomorrow ( 21 Oct, Fri )
          </div>
          <div></div>

          <div>
            {/* <Button
              onClick={() => {
                setAddContactBtn(true);
                setModalShow(true);
              }}
              variant="primary"
              style={{ padding: "0.5rem 3.5rem", backgroundColor: "#0C5C75" }}
            >
              + NEW TASK
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderSchedule;
