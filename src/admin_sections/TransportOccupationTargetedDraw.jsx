import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const TransportOccupationTarContent = () => {
  const notifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("Request Rejected, Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const notifySize = () => {
    toast.error("Large Image Size Received.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const [sectionDataSingle, setSectionDataSingle] = useState({
    transportOccuptionTargDrawHeading: "",
    transportOccuptionTargDrawPara: "",

    EligibilityFirstHeading: "",
    EligFirstSubHead: "",
    EligPara1: "",
    EligPara2: "",
    EligPara2Li1: "",
    EligPara2Li2: "",
    EligPara2Li3: "",
    EligPara3: "",

    EligCritHeading: "",
    EligCritSubHead: "",
    ec1: "",
    ec2: "",

    EligTransportOccuTableHeading: "",
    etroT1h1: "",
    etroT1Li1: "",
    etroT1Li2: "",
    etroT1Li3: "",
    etroT1Li4: "",
    etroT1Li5: "",
    etroT1Li6: "",
    etroT1Li7: "",
    etroT1Li8: "",
    etroT1Li9: "",
    etroT1Li10: "",

    etroT2h2: "",
    etroT2Li1: "",
    etroT2Li2: "",
    etroT2Li3: "",
    etroT2Li4: "",

    etroT2Li5: "",
    etroT2Li6: "",
    etroT2Li7: "",
    etroT2Li8: "",
    etroT2Li9: "",
    etroT2Li10: "",

    etroT3h3: "",
    etroT3Li1: "",
    etroT3Li2: "",
    etroT3Li3: "",
    etroT3Li4: "",
    etroT3Li5: "",
    etroT3Li6: "",
    etroT3Li7: "",
    etroT3Li8: "",
    etroT3Li9: "",
    etroT3Li10: "",

    ExpressEntryHeading: "",
    ExpressEntryPara: "",

    StillNotHeading: "",
    s1: "",
    s2: "",

    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",

    faq_heading: "",
    q1: "",
    qa1: "",
    q2: "",
    qa2: "",
    q3: "",
    qa3: "",
    q4: "",
    qa4: "",
    q5: "",
    qa5: "",
    q6: "",
    qa6: "",
    q7: "",
    qa7: "",
    q8: "",
    qa8: "",
    q9: "",
    qa9: "",
    q10: "",
    qa10: "",

    show_testimonials: "",
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/transportOccupaationTargetedDraw/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionDataSingle),
      }
    )
      .then((response) => {
        if (response.status === 413) {
          notifySize();
          throw new Error("Payload too large");
        } else if (!response.ok) {
          notifyError();
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then(() => {
        notifySuccess();
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch(
      "https://brightlight-node.onrender.com/transportOccupaationTargetedDraw"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSectionDataSingle(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />

      <textarea
        placeholder="Transport Occupation Target Draw Heading"
        name="transportOccuptionTargDrawHeading"
        value={sectionDataSingle.transportOccuptionTargDrawHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Transport Occupation Target Draw Paragraph"
        name="transportOccuptionTargDrawPara"
        value={sectionDataSingle.transportOccuptionTargDrawPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Section */}
      <textarea
        placeholder="Eligibility First Heading"
        name="EligibilityFirstHeading"
        value={sectionDataSingle.EligibilityFirstHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility First Sub Heading"
        name="EligFirstSubHead"
        value={sectionDataSingle.EligFirstSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 1"
        name="EligPara1"
        value={sectionDataSingle.EligPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 2"
        name="EligPara2"
        value={sectionDataSingle.EligPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility List Items */}
      <textarea
        placeholder="Eligibility List Item 1"
        name="EligPara2Li1"
        value={sectionDataSingle.EligPara2Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List Item 2"
        name="EligPara2Li2"
        value={sectionDataSingle.EligPara2Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List Item 3"
        name="EligPara2Li3"
        value={sectionDataSingle.EligPara2Li3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 3"
        name="EligPara3"
        value={sectionDataSingle.EligPara3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Criteria Section */}
      <textarea
        placeholder="Eligibility Criteria Heading"
        name="EligCritHeading"
        value={sectionDataSingle.EligCritHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria Sub Head"
        name="EligCritSubHead"
        value={sectionDataSingle.EligCritSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria 1"
        name="ec1"
        value={sectionDataSingle.ec1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria 2"
        name="ec2"
        value={sectionDataSingle.ec2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Transport Occupation Table */}
      <textarea
        placeholder="Eligibility Transport Occupation Table Heading"
        name="EligTransportOccuTableHeading"
        value={sectionDataSingle.EligTransportOccuTableHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* First Table Section */}
      <div className={styles.threeColumnsTable}>
        <div>
          <textarea
            placeholder="Table Header 1"
            name="etroT1h1"
            value={sectionDataSingle.etroT1h1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          {/* Table List Items */}
          <textarea
            placeholder="Table List Item 1"
            name="etroT1Li1"
            value={sectionDataSingle.etroT1Li1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 2"
            name="etroT1Li2"
            value={sectionDataSingle.etroT1Li2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 3"
            name="etroT1Li3"
            value={sectionDataSingle.etroT1Li3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 4"
            name="etroT1Li4"
            value={sectionDataSingle.etroT1Li4 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 5"
            name="etroT1Li5"
            value={sectionDataSingle.etroT1Li5 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 6"
            name="etroT1Li6"
            value={sectionDataSingle.etroT1Li6 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 7"
            name="etroT1Li7"
            value={sectionDataSingle.etroT1Li7 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 8"
            name="etroT1Li8"
            value={sectionDataSingle.etroT1Li8 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 9"
            name="etroT1Li9"
            value={sectionDataSingle.etroT1Li9 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 10"
            name="etroT1Li10"
            value={sectionDataSingle.etroT1Li10 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div>
          {/* Second Table Section */}
          <textarea
            placeholder="Second Transport Occupation Table Header"
            name="etroT2h2"
            value={sectionDataSingle.etroT2h2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Second Table List Item 1"
            name="etroT2Li1"
            value={sectionDataSingle.etroT2Li1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 2"
            name="etroT2Li2"
            value={sectionDataSingle.etroT2Li2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 3"
            name="etroT2Li3"
            value={sectionDataSingle.etroT2Li3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 4"
            name="etroT2Li4"
            value={sectionDataSingle.etroT2Li4 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 5"
            name="etroT2Li5"
            value={sectionDataSingle.etroT2Li5 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 6"
            name="etroT2Li6"
            value={sectionDataSingle.etroT2Li6 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 7"
            name="etroT2Li7"
            value={sectionDataSingle.etroT2Li7 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 8"
            name="etroT2Li8"
            value={sectionDataSingle.etroT2Li8 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 9"
            name="etroT2Li9"
            value={sectionDataSingle.etroT2Li9 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Second Table List Item 10"
            name="etroT2Li10"
            value={sectionDataSingle.etroT2Li10 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        <div>
          <textarea
            placeholder="Third Transport Occupation Table Header"
            name="etroT3h3"
            value={sectionDataSingle.etroT3h3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          {/* Table List Items for the Third Table */}
          <textarea
            placeholder="Table List Item 1"
            name="etroT3Li1"
            value={sectionDataSingle.etroT3Li1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 2"
            name="etroT3Li2"
            value={sectionDataSingle.etroT3Li2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 3"
            name="etroT3Li3"
            value={sectionDataSingle.etroT3Li3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 4"
            name="etroT3Li4"
            value={sectionDataSingle.etroT3Li4 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 5"
            name="etroT3Li5"
            value={sectionDataSingle.etroT3Li5 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 6"
            name="etroT3Li6"
            value={sectionDataSingle.etroT3Li6 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 7"
            name="etroT3Li7"
            value={sectionDataSingle.etroT3Li7 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 8"
            name="etroT3Li8"
            value={sectionDataSingle.etroT3Li8 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 9"
            name="etroT3Li9"
            value={sectionDataSingle.etroT3Li9 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Table List Item 10"
            name="etroT3Li10"
            value={sectionDataSingle.etroT3Li10 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      </div>

      {/* Express Entry Section */}
      <textarea
        placeholder="Express Entry Heading"
        name="ExpressEntryHeading"
        value={sectionDataSingle.ExpressEntryHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Express Entry Paragraph"
        name="ExpressEntryPara"
        value={sectionDataSingle.ExpressEntryPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Still Not Section */}
      <textarea
        placeholder="Still Not Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Item 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Item 2"
        name="s2"
        value={sectionDataSingle.s2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading01"
        value={sectionDataSingle.WhyChooseUsHeading01 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 1"
        name="wcu1"
        value={sectionDataSingle.wcu1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 2"
        name="wcu2"
        value={sectionDataSingle.wcu2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us Point 3"
        name="wcu3"
        value={sectionDataSingle.wcu3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 4"
        name="wcu4"
        value={sectionDataSingle.wcu4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>

      <input
        placeholder="FAQ's Made Simple"
        name="faq_heading"
        value={sectionDataSingle.faq_heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 1"
        name="q1"
        value={sectionDataSingle.q1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 1"
        name="qa1"
        value={sectionDataSingle.qa1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 2"
        name="q2"
        value={sectionDataSingle.q2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 2"
        name="qa2"
        value={sectionDataSingle.qa2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 3"
        name="q3"
        value={sectionDataSingle.q3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 3"
        name="qa3"
        value={sectionDataSingle.qa3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 4"
        name="q4"
        value={sectionDataSingle.q4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 4"
        name="qa4"
        value={sectionDataSingle.qa4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 5"
        name="q5"
        value={sectionDataSingle.q5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 5"
        name="qa5"
        value={sectionDataSingle.qa5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 6"
        name="q6"
        value={sectionDataSingle.q6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 6"
        name="qa6"
        value={sectionDataSingle.qa6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 7"
        name="q7"
        value={sectionDataSingle.q7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 7"
        name="qa7"
        value={sectionDataSingle.qa7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 8"
        name="q8"
        value={sectionDataSingle.q8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 8"
        name="qa8"
        value={sectionDataSingle.qa8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 9"
        name="q9"
        value={sectionDataSingle.q9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 9"
        name="qa9"
        value={sectionDataSingle.qa9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 10"
        name="q10"
        value={sectionDataSingle.q10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 10"
        name="qa10"
        value={sectionDataSingle.qa10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqEndHeading}>FAQ's Ends here</h1>

      <h1 className={styles.faqStartsHeading}>
        Testimonials Visibility Control
      </h1>

      <div className={styles.testimonialsVisibility}>
        <p>Want to display Testimonials Section</p>
        <input
          placeholder="Show Testimonials"
          name="show_testimonials"
          value={sectionDataSingle.show_testimonials || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <p className={styles.testimonialsDisclamier}>
        Note: Testimonials Visibility On the Selected Page is totally dependent
        on the input value above. If you want to display the section , just
        write "Y" without quotes , anything else will be considered as "N" even
        "y". If not want to display then just write "N" without qoutes.
      </p>

      <div className={styles.editIcons}>
        {editMode ? (
          <img
            src={update}
            className={styles.updateIcon}
            onClick={handleUpdateClick}
            alt="Update"
          />
        ) : (
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
          />
        )}
      </div>
    </div>
  );
};

export default TransportOccupationTarContent;
