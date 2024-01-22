import React, { useEffect, useState } from "react";
import {
  Button,
  DropdownDivider,
  Form,
  ModalBody,
  OverlayTrigger,
  Pagination,
  Popover,
  ProgressBar,
  Table,
} from "react-bootstrap";
import "../CSS/Contacts.css";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Select from "react-select";
import Offcanvas from "react-bootstrap/Offcanvas";

import Modal from "react-bootstrap/Modal";
import { MultiSelect } from "react-multi-select-component/dist";
const SpecialNotes = () => {
  const [show, setShow] = useState(false);
  const [addContactBtn, setAddContactBtn] = useState("add");

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
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const options = [
      { label: "Admin Name", value: "admin" },
      { label: "One", value: "1" },
      { label: "Two", value: "2" },
      { label: "Three", value: "3" },
    ];

    const [selected, setSelected] = useState([]);

    const handleChange = (selectedOptions) => {
      setSelected(selectedOptions);
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
              <Form.Group className="mb-3">
                <Form.Label>Admin</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Admin Name</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <div>
                <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                  Created By
                </Form.Label>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={handleChange}
                  labelledBy="Select"
                  hasSelectAll={false}
                />
              </div>
              <div className="mb-3">
                <p style={{ color: "black", fontWeight: "600" }}>
                  Created On ( Date Range )
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
                First Aid Checklist{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#0C5C75",
                    fontSize: ".9rem",
                    marginLeft: "8px",
                  }}
                >
                  Created By - Lorem Ipsum
                </span>
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
                      Date :-
                    </Form.Label>
                    <Form.Label
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        color: "#0C5C75",
                      }}
                    >
                      12 December 2023
                    </Form.Label>
                    {/* <Form.Control type="date" placeholder="Enter Full Name" /> */}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Location
                    </Form.Label>
                    <Form.Label
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        color: "#0C5C75",
                      }}
                    >
                      Centre 1, XYZ Street, 14th Avenue, USA
                    </Form.Label>
                  </Form.Group>
                </Form>
                <p
                  style={{
                    marginTop: "2rem",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Each First Aid Kit Should be Checked Monthly
                </p>
                <div style={{ height: "200px", overflow: "auto" }}>
                  <Table style={{ textAlign: "center" }} responsive>
                    <thead>
                      <tr>
                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                            borderRadius: "5px 0 0 0px",
                            minWidth: "200px",
                          }}
                        >
                          Items Name
                        </th>

                        {months.map((month, index) => (
                          <th
                            key={index}
                            style={{
                              color: "#0C5C75",
                              backgroundColor: "#D1ECF0",
                            }}
                          >
                            <Form.Label>{month}</Form.Label>
                          </th>
                        ))}
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
                    <tbody style={{ textAlign: "center" }}>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Adhesive Strip Bandages </p>
                        </td>

                        
                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Adhesive Tap </p>
                        </td>

                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>CPR Mouth Guard/Shield </p>
                        </td>

                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Disposable Latex Gloves</p>
                        </td>

                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Non-Stick Sterile Pads </p>
                        </td>

                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Roller Gauze </p>
                        </td>

                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Scissors </p>
                        </td>

                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Sterile Guaze Squares </p>
                        </td>

                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Triangular Bandages </p>
                        </td>

                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Tweezers </p>
                        </td>
                        {months.map((month, index) => (
                          <td key={index}>
                            <p>
                              <td>
                                <p>Present</p>
                              </td>
                            </p>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <p
                  style={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "1.2rem",
                    marginTop: "5rem",
                  }}
                >
                  Staff Details
                </p>
                <Table style={{ textAlign: "center" }} responsive>
                    <thead>
                      <tr>
                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                            borderRadius: "5px 0 0 0px",
                            minWidth: "200px",
                          }}
                        >
                          Staff Name
                        </th>

                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                          }}
                        >Initials</th>

                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                            borderRadius: "0 5px 0 0px",
                          }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Adhesive Strip Bandages </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          <p>Lorem Ipsum </p>
                        </td>

                        
                      </tr>
                    
                     
                    </tbody>
                  </Table>
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
        ) : addContactBtn === "fire" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Fire Equipment Monitoring
              </p>
            </Modal.Header>
            <ModalBody>
              <div style={{ padding: "1rem", overflow: "auto" }}>
                <Form
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
                    <Form.Control type="date" placeholder="Enter Full Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Location
                    </Form.Label>
                    <Form.Select>
                      <option>Select </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Form>

                <div>
                  <Table responsive style={{ textAlign: "center" }}>
                    <thead>
                      <tr>
                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                            borderRadius: "5px 0 0 0px",
                            minWidth: "200px",
                          }}
                        >
                          Equipment
                        </th>
                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                          }}
                        >
                          <Form.Group>
                            {/* <Form.Label style={{ width: "100%" }}>
                              Checked On 
                            </Form.Label> */}
                            <Form.Control
                              type="date"
                              placeholder="Enter Full Name"
                            />
                          </Form.Group>
                        </th>
                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                          }}
                        >
                          <Form.Group>
                            {/* <Form.Label style={{ width: "100%" }}>
                              Checked On 
                            </Form.Label> */}
                            <Form.Control
                              type="date"
                              placeholder="Enter Full Name"
                            />
                          </Form.Group>
                        </th>
                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                          }}
                        >
                          <Form.Group>
                            {/* <Form.Label style={{ width: "100%" }}>
                              Checked On 
                            </Form.Label> */}
                            <Form.Control
                              type="date"
                              placeholder="Enter Full Name"
                            />
                          </Form.Group>
                        </th>
                        <th
                          style={{
                            color: "#0C5C75",
                            backgroundColor: "#D1ECF0",
                          }}
                        >
                          <Form.Group>
                            {/* <Form.Label style={{ width: "100%" }}>
                              Checked On 
                            </Form.Label> */}
                            <Form.Control
                              type="date"
                              placeholder="Enter Full Name"
                            />
                          </Form.Group>
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                      <tr>
                        <td
                          colSpan={5}
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            backgroundColor: "gray",
                            textAlign: "left",
                          }}
                        >
                          <p>SMOKE ALARMS </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 1 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 2 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 3 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 4 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 5 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 6 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 7 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 8 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 9 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 10 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 11 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 12 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 13 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 14 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Alarm 15 </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        {" "}
                        <td
                          colSpan={5}
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            backgroundColor: "gray",
                            textAlign: "left",
                          }}
                        >
                          <p>FIRE EXTINGUISHER </p>
                        </td>
                      </tr>

                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Fire Extinguisher 1</p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Fire Extinguisher 2</p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Fire Extinguisher 3</p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Select>
                            <option>Select </option>
                            <option value="1">Working Properly</option>
                            <option value="2">Needs to Repaired</option>
                            <option value="3">Repaired & Working</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan={5}
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                            backgroundColor: "grey",
                          }}
                        >
                          <p>Staff Signatures</p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <p>Staff </p>
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Control type="file" placeholder="Enter Name" />
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Control type="file" placeholder="Enter Name" />
                        </td>
                        <td
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            textAlign: "left",
                          }}
                        >
                          <Form.Control type="file" placeholder="Enter Name" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <p
                  style={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "1.2rem",
                    marginTop: "5rem",
                  }}
                >
                  Date Fire Extinguisher Expires
                </p>
                <p>
                  <Form
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <Form.Group className="mb-3">
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Extinguisher 1
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Staff Name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Extinguisher 2
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Staff Name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Extinguisher 3
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Staff Name"
                      />
                    </Form.Group>
                  </Form>
                </p>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "600",
                  }}
                >
                  <Button
                    style={{
                      padding: "0.5rem 2.5rem",
                      backgroundColor: "white",
                      color: "#0C5C75",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    <span>
                      {" "}
                      <img
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "auto",
                          marginRight: "0.5rem",
                          fontWeight: "600",
                        }}
                        src="/specail/add.png"
                        alt="images-p"
                      />{" "}
                    </span>{" "}
                    ADD MORE STAFF
                  </Button>
                </p>
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
        ) : addContactBtn === "eva" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Evacuation & Fire Dril Report Form
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <p
                  style={{ color: "black", opacity: "70%", fontSize: "0.9rem" }}
                >
                  Evacuation Drill will be conducted once every six (6) months
                  on each shift by staff & resident
                </p>
                <Form>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2rem",
                    }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Facility Address
                      </Form.Label>
                      <Form.Select>
                        <option>Select</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Date
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        autoFocus
                      />
                    </Form.Group>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "2rem",
                      }}
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label
                          style={{ width: "100%", fontWeight: "bold" }}
                        >
                          Start Time
                        </Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label
                          style={{ width: "100%", fontWeight: "bold" }}
                        >
                          End Time
                        </Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    </div>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Shift
                      </Form.Label>
                      <Form.Select>
                        <option>Select</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </Form>

                <p>Evacuation Drill Details</p>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Name of Person Conducting the Evacuation Drill
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Details" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Employees Partiacipating in Evacuation Drill
                    </Form.Label>

                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Residents requiring Assistance for Evacuation
                    </Form.Label>

                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div>Number of Occupants Evacuated :</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".2rem",
                      backgroundColor: "#EEEEEE",
                      padding: ".5rem 1.5rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <span>
                      <img
                        style={{
                          maxWidth: "25px",
                          maxHeight: "25px",
                          width: "auto",
                          height: "auto",
                        }}
                        src="/sub.png"
                        alt="sub"
                      />
                    </span>
                    <span></span>4 Persons
                    <span>
                      <img
                        style={{
                          maxWidth: "25px",
                          maxHeight: "25px",
                          width: "auto",
                          height: "auto",
                        }}
                        src="/add.png"
                        alt="sub"
                      />
                    </span>
                  </div>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Other Details
                  </Form.Label>
                  {/* <Form.Control
                     type="text"
                      placeholder="Enter Details"
                    /> */}
                </Form.Group>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Fire Alarm Activation Method</Form.Label>
                    <Form.Select>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Total Time of Evacuation Drill</Form.Label>
                    <Form.Control type="time" placeholder="Enter Details" />
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Unusual Conditions
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type Here"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Problems Encountered During Evacuation Drill
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type Here"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Recommendations
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type Here"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Plan Actions
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type Here"
                  />
                </Form.Group>
                <div
                  style={{ display: "flex", gap: "2rem", alignItems: "center" }}
                >
                  <div>Signature of Person Completing Drill :</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".9rem",
                      backgroundColor: "#EEEEEE",
                      padding: ".5rem 1.5rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{
                        maxWidth: "40px",
                        maxHeight: "40px",
                        width: "auto",
                        height: "auto",
                      }}
                      src="/Dashboard/Employeeperformance/home.png"
                      alt="upload"
                    />
                    <p
                      style={{
                        color: "#0C5C75",
                        fontWeight: "bold",
                        cdisplay: "flex",
                        fontSize: "1rem",
                      }}
                    >
                      Upload {">"}{" "}
                    </p>
                  </div>
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
        ) : addContactBtn === "dis" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Disaster Drill
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <p
                  style={{ color: "black", opacity: "70%", fontSize: "0.9rem" }}
                >
                  Completed every 3 Months Staff only on each shift
                </p>
                <Form>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2rem",
                    }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Facility Address
                      </Form.Label>
                      <Form.Select>
                        <option>Select</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label> Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Name"
                        autoFocus
                      />
                    </Form.Group>
                  </div>
                  <p
                    style={{
                      color: "black",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Disasters covered in the drill{" "}
                  </p>
                  <p
                    style={{
                      color: "black",
                      opacity: "70%",
                      fontSize: "0.9rem",
                    }}
                  >
                    Mark & Tick all the disasters that apply below :
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "1rem",
                      marginBottom: "3rem",
                    }}
                  >
                    <span
                      style={{
                        padding: ".2rem .5rem",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                      }}
                    >
                      <Form.Check type="checkbox" label="Tornado" />
                    </span>
                    <span
                      style={{
                        padding: ".2rem .5rem",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                      }}
                    >
                      <Form.Check type="checkbox" label="Structure Damage" />
                    </span>
                    <span
                      style={{
                        padding: ".2rem .5rem",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                      }}
                    >
                      <Form.Check type="checkbox" label="Fire" />
                    </span>
                    <span
                      style={{
                        padding: ".2rem .5rem",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                      }}
                    >
                      <Form.Check type="checkbox" label="Storm" />
                    </span>
                    <span
                      style={{
                        padding: ".2rem .5rem",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                      }}
                    >
                      <Form.Check type="checkbox" label="Earthquake" />
                    </span>
                    <span
                      style={{
                        padding: ".2rem .5rem",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                      }}
                    >
                      <Form.Check type="checkbox" label="Bomb Threat" />
                    </span>
                  </div>
                  <div style={{}}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "2rem",
                      }}
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label
                          style={{ width: "100%", fontWeight: "bold" }}
                        >
                          Begin Time
                        </Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label
                          style={{ width: "100%", fontWeight: "bold" }}
                        >
                          End Time
                        </Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label
                          style={{ width: "100%", fontWeight: "bold" }}
                        >
                          Total Time
                        </Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    </div>
                  </div>
                </Form>

                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Staff Present
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Employees Partiacipating in Evacuation Drill
                    </Form.Label>

                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Residents requiring Assistance for Evacuation
                    </Form.Label>

                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Did you contact Manager or Coordinator?
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Was 911 Called?
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Was fire extinguisher taken to scene?
                  </Form.Label>
                  <Form.Select>
                    <option>Select</option>
                    <option>Select</option>
                    <option>Select</option>
                    <option>Select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Did you have to relocated the residents? If so where & how
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type Here..."
                  />
                </Form.Group>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Did you take resident’s Medication?</Form.Label>
                    <Form.Select>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Was Water / Food Accessible?</Form.Label>
                    <Form.Select>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Are all resident’s accounted for?
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type Here"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Overall, what steps did you take to handle the disaster?
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type Here"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Comments / Concerns
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type Here"
                  />
                </Form.Group>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <Form.Group>
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Title
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Person Conducting the Disaster Drill
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Date
                    </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </div>

                {/* <div
                  style={{ display: "flex", gap: "2rem", alignItems: "center" }}
                >
                  <div>Signature of Person Completing Drill :</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".9rem",
                      backgroundColor: "#EEEEEE",
                      padding: ".5rem 1.5rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{
                        maxWidth: "40px",
                        maxHeight: "40px",
                        width: "auto",
                        height: "auto",
                      }}
                      src="/Dashboard/Employeeperformance/home.png"
                      alt="upload"
                    />
                    <p
                      style={{
                        color: "#0C5C75",
                        fontWeight: "bold",
                        cdisplay: "flex",
                        fontSize: "1rem",
                      }}
                    >
                      Upload {">"}{" "}
                    </p>
                  </div>
                </div> */}
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
        ) : addContactBtn === "wee" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Weekly Vehicle Inspection Checklist
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Site
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Date
                    </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </div>{" "}
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Vehicle Details
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2rem",
                    }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Year
                      </Form.Label>
                      <Form.Control type="text" placeholder="YYYY" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Make
                      </Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2rem",
                    }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Model
                      </Form.Label>
                      <Form.Control type="text" placeholder="YYYY" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Vehicle License Plate
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Light Satisfactory Comments
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      High Beam
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Low Beam
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Brake Lights
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Emergency Lights
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Front Turn Signal
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Back Turn Signal
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Taillight
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Emergency Light
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Front Day Running
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Back Day Running
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Glass Satisfactory Comments
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Windshield
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Rear
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>{" "}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Front
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Middle
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Back
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Fluids & Lubricants Satisfactory Comments
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Fuel
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Engine Oil
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>{" "}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Coolant Fluid
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Power Steering Fluid
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Brake Fluid
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Clutch Oil
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Battery Fluid
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Windshield Washer Fluid
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Water
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Tires Satisfactory Comments
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Spare
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Front
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>{" "}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Back
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Jack & Wrench
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Mirrors Satisfactory Comments
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      R / L Mirror
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Middle Interior
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Emergency Equipment Satisfactory Comments
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      First Aid Kit
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Gloves
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>{" "}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Red Triangles
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Flashlights
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Water
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  General Satisfactory Comments
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Wiper Blades / Motor
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Horn
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>{" "}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Heater
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Air Conditioner
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Seat Belts
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Hose
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Drive Belt
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Battery
                    </Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Staff Detail
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Staff Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Staff Name" />
                  </Form.Group>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                      backgroundColor: "#FFFFFF",
                      padding: " 0.5rem 1rem",
                    }}
                  >
                    <span>Signature :-</span>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <span>
                        <img
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            width: "auto",
                            height: "auto",
                          }}
                          src="/Dashboard/Employeeperformance/home.png"
                          alt="home"
                        />
                      </span>

                      <span>Uplad {">"}</span>
                    </span>
                  </span>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Date
                    </Form.Label>
                    <Form.Control type="date" placeholder="Date" />
                  </Form.Group>
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
        ) : addContactBtn === "cli" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Clinical Oversight
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <Form>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2rem",
                    }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Date
                      </Form.Label>
                      <Form.Control type="date" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label> Begin Time</Form.Label>
                      <Form.Control
                        type="time"
                        placeholder="Enter Name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label> End Time</Form.Label>
                      <Form.Control
                        type="time"
                        placeholder="Enter Name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label> Length of Time</Form.Label>
                      <Form.Control
                        type="time"
                        placeholder="Enter Name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label> Conducted Via</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label> OverSight</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <p
                    style={{
                      color: "black",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Participants
                  </p>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    {/* <Form.Label
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                      }}
                    > Participants </Form.Label> */}
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                    </Form.Select>
                  </Form.Group>

                  <p
                    style={{
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Topic Addressed
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Mark</span> &{" "}
                    <span style={{ fontWeight: "bold" }}>Tick</span> all the
                    Topics which are Addressed in the Oversight
                  </p>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      label="Recognizing & Meeting the unique treatment needs of the residents served by the agency."
                    />
                    <Form.Check
                      type="checkbox"
                      label="Reviewing & discussing other topics that enhance the skills & knowledge of Staff Members"
                    />
                    <Form.Check
                      type="checkbox"
                      label="For a behavioral health technician providing a resident with an assessment or treatment plan, determining whether an assessment or treatment plan is complete and accurate and meets the resident’s treatments needs."
                    />
                    <Form.Check
                      type="checkbox"
                      label="Review of an individual staff training plan."
                    />
                    <Form.Check
                      type="checkbox"
                      label="Assessing that staff has sufficient direction to perform job duties"
                    />
                  </Form.Group>
                  <Form.Group className="mt-3 mb-3">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Additional Comments
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter Comments"
                    />
                  </Form.Group>
                  <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    Staff Detail
                  </p>
                  <div
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: ".3rem",
                    }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Staff Name
                      </Form.Label>
                      <Form.Control type="text" placeholder="Staff Name" />
                    </Form.Group>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        backgroundColor: "#FFFFFF",
                        padding: " 0.5rem 1rem",
                      }}
                    >
                      <span>Signature :-</span>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <span>
                          <img
                            style={{
                              maxWidth: "30px",
                              maxHeight: "30px",
                              width: "auto",
                              height: "auto",
                            }}
                            src="/Dashboard/Employeeperformance/home.png"
                            alt="home"
                          />
                        </span>

                        <span>Uplad {">"}</span>
                      </span>
                    </span>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Date
                      </Form.Label>
                      <Form.Control type="date" placeholder="Date" />
                    </Form.Group>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2rem",
                    }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Administrator Name
                      </Form.Label>
                      <Form.Control type="text" placeholder="Staff Name" />
                    </Form.Group>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        backgroundColor: "#FFFFFF",
                        padding: " 0.5rem 1rem",
                      }}
                    >
                      <span>Signature :-</span>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <span>
                          <img
                            style={{
                              maxWidth: "30px",
                              maxHeight: "30px",
                              width: "auto",
                              height: "auto",
                            }}
                            src="/Dashboard/Employeeperformance/home.png"
                            alt="home"
                          />
                        </span>

                        <span>Uplad {">"}</span>
                      </span>
                    </span>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                        Date
                      </Form.Label>
                      <Form.Control type="date" placeholder="Date" />
                    </Form.Group>
                  </div>
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
        ) : addContactBtn === "veh" ? (
          <>
            <Modal.Header closeButton>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Monthly Vehicle Inspection
              </p>
            </Modal.Header>
            <ModalBody>
              <div>
                <p style={{ color: "black", opacity: "70%" }}>
                  Vehicle are inspected weekly for issues. Please report any
                  issues with the van to the Administrator
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Date
                    </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Vehicle
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Date of Last Service
                    </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Date of Next Service
                    </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </div>
                <Table
                  style={{ marginTop: "2rem", textAlign: "left" }}
                  responsive
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          color: "#0C5C75",
                          backgroundColor: "#D1ECF0",
                        }}
                      >
                        Item
                      </th>
                      <th
                        style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}
                      >
                        Status
                      </th>
                      <th
                        style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}
                      >
                        Comment
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
                        <p>Lights</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Turn Signals</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Horn</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Wipers</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>AC</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Tires</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Steering</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Fluid Leaks / Gas Odour</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Body Dents</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Mirrors</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>External Cleanliness</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Interior Cleanliness</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>First Aid Kit</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Water</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Fire Extingusher</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>Brakes</p>
                      </td>
                      <td
                        // onClick={handleShow}
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        <p>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select
                              style={{ border: "none", color: "black" }}
                            >
                              <option style={{ color: "black" }}>SELECT</option>
                              <option
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                PASS
                              </option>
                              <option
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                FAIL
                              </option>
                            </Form.Select>
                          </Form.Group>{" "}
                        </p>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control as={"textarea"} rows={3} />
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Comments
                </p>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                    Comments
                  </Form.Label>
                  <Form.Control
                    as={"textarea"}
                    rows={3}
                    placeholder="Type Here..."
                  />
                </Form.Group>

                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Inspector's Signature & Date
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                      backgroundColor: "#FFFFFF",
                      padding: " 0.5rem 1rem",
                    }}
                  >
                    <span>Signature :-</span>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <span>
                        <img
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            width: "auto",
                            height: "auto",
                          }}
                          src="/Dashboard/Employeeperformance/home.png"
                          alt="home"
                        />
                      </span>

                      <span>Uplad {">"}</span>
                    </span>
                  </span>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ width: "100%", fontWeight: "bold" }}>
                      Date
                    </Form.Label>
                    <Form.Control type="date" placeholder="Date" />
                  </Form.Group>
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
          Special Notes
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          className=" container11-special"
        >
          <div style={{ columnGap: "1rem" }}>
            <div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Select Group
                </Form.Label>
                <Form.Select
                  style={{ minWidth: "300px" }}
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label
                  style={{ fontWeight: "bold", paddingTop: "1rem" }}
                ></Form.Label>{" "}
                <Form.Control
                  style={{ minWidth: "300px" }}
                  type="search"
                  placeholder="Search"
                />
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
                marginTop: "1.8rem",
              }}
              src="/Dashboard/contacts/filter.png"
              alt="filter"
            />
          </div>
          <div></div>
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
                    Created By
                  </th>
                  <th style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}>
                    Created On
                  </th>
                  <th
                    style={{ color: "#0C5C75", backgroundColor: "#D1ECF0" }}
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
                    <p style={{ display: "flex", gap: "0.5rem" }}>
                      <img
                        src="/Dashboard/user.png"
                        style={{ maxWidth: "25px", maxHeight: "25px" }}
                        alt="user-image"
                      />
                      <span>Lorem Ipsum </span>
                    </p>
                  </td>
                  <td colSpan={2}>
                    <div className="d-flex align-items-center">
                      <p>DD/MM/YYYY ( 6:30 AM )</p>
                    </div>
                  </td>

                  <td
                    // onClick={handleShow}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    <p
                      onClick={() => {
                        setAddContactBtn("add");
                        setModalShow(true);
                      }}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        cursor: "pointer",
                        fontSize: "1.3rem",
                        color: "#0C5C75",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        <FaEye />
                      </span>
                      <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                        VIEW NOTE
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
                <tr>
                  <td
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
                    <p style={{ display: "flex", gap: "0.5rem" }}>
                      <img
                        src="/Dashboard/user.png"
                        style={{ maxWidth: "25px", maxHeight: "25px" }}
                        alt="user-image"
                      />
                      <span>Lorem Ipsum </span>
                    </p>
                  </td>
                  <td colSpan={2}>
                    <div className="d-flex align-items-center">
                      <p>DD/MM/YYYY ( 6:30 AM )</p>
                    </div>
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
                        fontSize: "1.3rem",
                        color: "#0C5C75",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        <FaEye />
                      </span>
                      <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                        VIEW NOTE
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
                <tr>
                  <td
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
                    <p style={{ display: "flex", gap: "0.5rem" }}>
                      <img
                        src="/Dashboard/user.png"
                        style={{ maxWidth: "25px", maxHeight: "25px" }}
                        alt="user-image"
                      />
                      <span>Lorem Ipsum </span>
                    </p>
                  </td>
                  <td colSpan={2}>
                    <div className="d-flex align-items-center">
                      <p>DD/MM/YYYY ( 6:30 AM )</p>
                    </div>
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
                        fontSize: "1.3rem",
                        color: "#0C5C75",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        <FaEye />
                      </span>
                      <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                        VIEW NOTE
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
                <tr>
                  <td
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
                    <p style={{ display: "flex", gap: "0.5rem" }}>
                      <img
                        src="/Dashboard/user.png"
                        style={{ maxWidth: "25px", maxHeight: "25px" }}
                        alt="user-image"
                      />
                      <span>Lorem Ipsum </span>
                    </p>
                  </td>
                  <td colSpan={2}>
                    <div className="d-flex align-items-center">
                      <p>DD/MM/YYYY ( 6:30 AM )</p>
                    </div>
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
                        fontSize: "1.3rem",
                        color: "#0C5C75",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        <FaEye />
                      </span>
                      <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                        VIEW NOTE
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
                <tr>
                  <td
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
                    <p style={{ display: "flex", gap: "0.5rem" }}>
                      <img
                        src="/Dashboard/user.png"
                        style={{ maxWidth: "25px", maxHeight: "25px" }}
                        alt="user-image"
                      />
                      <span>Lorem Ipsum </span>
                    </p>
                  </td>
                  <td colSpan={2}>
                    <div className="d-flex align-items-center">
                      <p>DD/MM/YYYY ( 6:30 AM )</p>
                    </div>
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
                        fontSize: "1.3rem",
                        color: "#0C5C75",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        <FaEye />
                      </span>
                      <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                        VIEW NOTE
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

export default SpecialNotes;
