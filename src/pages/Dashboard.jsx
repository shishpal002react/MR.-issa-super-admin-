import React, { useEffect } from "react";
import NavBar from "../component/NavBar";
import "./CSS/Dashboard.css";
import { FaGreaterThan } from "react-icons/fa";
import Contacts from "./Dashboard/Contacts";
import { useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-use-history";
import Logs from "./Dashboard/Logs";
import Tracking from "./Dashboard/Tracking";
import SpecialNotes from "./Dashboard/SpecialNotes";
import ReceptNotes from "./Dashboard/ReciptNotes";
import Medication from "./Dashboard/Mediaction";
import EmployeeMediaction from "./Dashboard/Employee_Medication";
import PTORequest from "./Dashboard/PTORequest";
import StaffSchedule from "./Dashboard/StaffSchedule";
import EmployeePerformance from "./Dashboard/EmployeePerformance";
import NotesLibrary from "./Dashboard/NotesLibrary";
import CalenderSchedule from "./Dashboard/Calandar";
import SupportFAQ from "./Dashboard/SupportFAQ";
import ResourcesPage from "./Dashboard/Resources";
import ContactUs from "./Dashboard/ContactUs";
import News from "./Dashboard/News";
import Notifications from "./Dashboard/Notifications";
import { Divide as Hamburger } from "hamburger-react";
import { Offcanvas } from "react-bootstrap";
export const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, onChange] = useState(new Date());
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
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
  useEffect(() => {
    const handleResize = () => {
      const isLessThan600px = window.innerWidth <= 600;
      setOpen1(isLessThan600px);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {" "}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div style={{width:"100%"}} onClick={handleClose} className="Sidebar-Section-Dashboard">
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <p style={{ cursor: "pointer" }}>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/pto.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() =>
                      handleItemClick("support-faq", "support-faq")
                    }
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",

                      textDecoration:
                        location.pathname === "/dashboard/support-faq"
                          ? "underline"
                          : "none",
                    }}
                  >
                    Support FAQ
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/em.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() => handleItemClick("resources", "resources")}
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textDecoration:
                        location.pathname === "/dashboard/resources"
                          ? "underline"
                          : "none",
                    }}
                  >
                    Resources
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: ".5rem",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/staff.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() => handleItemClick("contact-us", "contact-us")}
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textDecoration:
                        location.pathname === "/dashboard/contact-us"
                          ? "underline"
                          : "none",
                    }}
                  >
                    Contact Us
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: ".5rem",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/note.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() => handleItemClick("news", "news")}
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textDecoration:
                        location.pathname === "/dashboard/news"
                          ? "underline"
                          : "none",
                    }}
                  >
                    News
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: ".5rem",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/note.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() => handleItemClick("notes", "notes")}
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textDecoration:
                        location.pathname === "/dashboard/notes"
                          ? "underline"
                          : "none",
                    }}
                  >
                    Notes Library
                  </p>
                </div>
              </div>
            </div> </Offcanvas.Body>
      </Offcanvas>
      <div>
        <NavBar />
        {/* Menu Bar */}
        <div className="menu-bar-container-dashboard">
          {isOpen1 && (
            <div onClick={handleShow} className="menu-bar-dropdown-container">
              <Hamburger color="white" size={20} toggle={setOpen}  />
            </div>
          )}
          <div
            onClick={() => handleItemClick("contacts", "contacts")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              textAlign: "center",
              fontSize: "1.3rem",
              paddingTop: "1rem",
              fontWeight: "500",
              color: "white",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p>
              <img
                style={{
                  maxWidth: "30px",
                  maxHeight: "30px",
                  width: "auto",
                  height: "auto",
                }}
                src="/Dashboard/contect.png"
                alt="contect"
              />
            </p>
            <p>Contacts</p>
          </div>
          <div
            onClick={() => handleItemClick("tracking", "tracking")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              textAlign: "center",
              fontSize: "1.3rem",
              paddingTop: "1rem",
              fontWeight: "500",
              color: "white",
              justifyContent: "center",
            }}
          >
            <p>
              <img
                style={{
                  maxWidth: "30px",
                  maxHeight: "30px",
                  width: "auto",
                  height: "auto",
                }}
                src="/Dashboard/tracking.png"
                alt="contect"
              />
            </p>
            <p>Tracking</p>
          </div>
          <div
            onClick={() => handleItemClick("logs", "logs")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              textAlign: "center",
              fontSize: "1.3rem",
              paddingTop: "1rem",
              fontWeight: "500",
              color: "white",
              justifyContent: "center",
            }}
          >
            <p>
              <img
                style={{
                  maxWidth: "30px",
                  maxHeight: "30px",
                  width: "auto",
                  height: "auto",
                }}
                src="/Dashboard/logs.png"
                alt="contect"
              />
            </p>
            <p>Logs</p>
          </div>
          <div
            onClick={() => handleItemClick("special", "special")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              textAlign: "center",
              fontSize: "1.3rem",
              paddingTop: "1rem",
              fontWeight: "500",
              color: "white",
              justifyContent: "center",
            }}
          >
            <p>
              <img
                style={{
                  maxWidth: "30px",
                  maxHeight: "30px",
                  width: "auto",
                  height: "auto",
                }}
                src="/Dashboard/special.png"
                alt="contect"
              />
            </p>
            <p>Special Notes</p>
          </div>
          <div
            onClick={() => handleItemClick("recept", "recept")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              textAlign: "center",
              fontSize: "1.3rem",
              paddingTop: "1rem",
              fontWeight: "500",
              color: "white",
              justifyContent: "center",
            }}
          >
            <p>
              <img
                style={{
                  maxWidth: "30px",
                  maxHeight: "30px",
                  width: "auto",
                  height: "auto",
                }}
                src="/Dashboard/recipet.png"
                alt="contect"
              />
            </p>
            <p>Receipts</p>
          </div>
          {/* <div
          onClick={() => handleItemClick("medication", "medication")}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            textAlign: "center",
            fontSize: "1.3rem",
            paddingTop: "1rem",
            fontWeight: "500",
            color: "white",
            justifyContent: "center",
          }}
        >
          <p>
            <img
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                width: "auto",
                height: "auto",
              }}
              src="/Dashboard/medication.png"
              alt="contect"
            />
          </p>
          <p>Medication</p>
        </div> */}
        </div>
        {/* SideBar Section */}

        <div
          style={{ display: "flex" }}
          className="Sidebar-Section-Dashboard-Wrapper"
        >
          {!isOpen1 && (
            <div className="Sidebar-Section-Dashboard">
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <p style={{ cursor: "pointer" }}>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/pto.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() =>
                      handleItemClick("support-faq", "support-faq")
                    }
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",

                      textDecoration:
                        location.pathname === "/dashboard/support-faq"
                          ? "underline"
                          : "none",
                    }}
                  >
                    Support FAQ
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/em.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() => handleItemClick("resources", "resources")}
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textDecoration:
                        location.pathname === "/dashboard/resources"
                          ? "underline"
                          : "none",
                    }}
                  >
                    Resources
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: ".5rem",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/staff.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() => handleItemClick("contact-us", "contact-us")}
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textDecoration:
                        location.pathname === "/dashboard/contact-us"
                          ? "underline"
                          : "none",
                    }}
                  >
                    Contact Us
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: ".5rem",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/note.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() => handleItemClick("news", "news")}
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textDecoration:
                        location.pathname === "/dashboard/news"
                          ? "underline"
                          : "none",
                    }}
                  >
                    News
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: ".5rem",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    {/* <img
                  style={{ maxWidth: "30px", maxHeight: "30px" }}
                  src="/Dashboard/contacts/note.png"
                  alt="pto"
                /> */}
                  </p>
                  <p
                    onClick={() => handleItemClick("notes", "notes")}
                    style={{
                      color: "#0C5C75",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textDecoration:
                        location.pathname === "/dashboard/notes"
                          ? "underline"
                          : "none",
                    }}
                  >
                    Notes Library
                  </p>
                </div>
              </div>
            </div>
          )}
          <div
            style={{
              width: "100%",
              height: "120vh",
              overflow: "auto",
              padding: "1rem",
            }}
          >
            {selectedItem === "contacts" && <Contacts />}
            {selectedItem === "tracking" && <Tracking />}
            {selectedItem === "logs" && <Logs />}
            {selectedItem === "special" && <SpecialNotes />}
            {selectedItem === "recept" && <ReceptNotes />}
            {selectedItem === "medication" && <Medication />}
            {selectedItem === "employee-medication" && <EmployeeMediaction />}
            {selectedItem === "pto" && <PTORequest />}
            {selectedItem === "staff-schedule" && <StaffSchedule />}
            {selectedItem === "employee-performance" && <EmployeePerformance />}
            {selectedItem === "notes" && <NotesLibrary />}
            {selectedItem === "support-faq" && <SupportFAQ />}
            {selectedItem === "contact-us" && <ContactUs />}
            {selectedItem === "notifications" && <Notifications />}
            {selectedItem === "news" && <News />}
            {selectedItem === "resources" && <ResourcesPage />}
            {selectedItem === "calender-schedule" && <CalenderSchedule />}
          </div>
        </div>
      </div>
    </>
  );
};
