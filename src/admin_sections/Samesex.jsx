import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const SamesexContent = () => {
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
    heading: "",
    description: "",
    eligibleCriteriaHeading: "",
    eligibileSubHead: "",
    e1: "",
    e2: "",
    e3: "",
    SameSexPartSponHeading: "",
    SameSexPartSponPara: "",
    WhatCommonLawPartHeading: "",
    WhatCommonLawPartPara: "",
    ProvYourCommonLawPartHeading: "",
    ProvYourCommonLawPartDesc: "",
    py1: "",
    py2: "",
    py3: "",
    py4: "",
    py5: "",
    CommonLawRequDocuSponHeading: "",
    CommonLawRequDocuSponPara: "",
    crd1: "",
    crd2: "",
    crd3: "",
    crd4: "",
    crd5: "",
    crd6: "",
    crd7: "",
    crd8: "",
    crd9: "",
    crd10: "",
    CommonLawRequDocuSponPara2: "",
    WhoQualConjHeading: "",
    WhoQualConjDisc: "",
    QualConjPartHeading: "",
    Q1: "",
    Q2: "",
    Q3: "",
    ConjRelConsidHeading: "",
    c1: "",
    c2: "",
    ConjPartReqDocSponHeading: "",
    ConjPartReqDocSponPara: "",
    cprd1: "",
    cprd2: "",
    cprd3: "",
    cprd4: "",
    cprd5: "",
    cprd6: "",
    cprd7: "",
    cprd8: "",
    cprd9: "",
    cprd10: "",
    cprd11: "",
    cprd12: "",
    StillNotHeading: "",
    StillNotPara: "",

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
      `https://brightlight-node.onrender.com/sameSex/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/sameSex")
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

      <input
        placeholder="Heading"
        name="heading"
        value={sectionDataSingle.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description"
        name="description"
        value={sectionDataSingle.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Criteria Heading"
        name="eligibleCriteriaHeading"
        value={sectionDataSingle.eligibleCriteriaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligible Sub Head"
        name="eligibileSubHead"
        value={sectionDataSingle.eligibileSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligible Criteria 1"
        name="e1"
        value={sectionDataSingle.e1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 2"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 3"
        name="e3"
        value={sectionDataSingle.e3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Same Sex Partnership Sponsorship Heading"
        name="SameSexPartSponHeading"
        value={sectionDataSingle.SameSexPartSponHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Same Sex Partnership Sponsorship Paragraph"
        name="SameSexPartSponPara"
        value={sectionDataSingle.SameSexPartSponPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="What is Common Law Partnership Heading"
        name="WhatCommonLawPartHeading"
        value={sectionDataSingle.WhatCommonLawPartHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="What is Common Law Partnership Paragraph"
        name="WhatCommonLawPartPara"
        value={sectionDataSingle.WhatCommonLawPartPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Provide Your Common Law Partnership Heading"
        name="ProvYourCommonLawPartHeading"
        value={sectionDataSingle.ProvYourCommonLawPartHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Provide Your Common Law Partnership Description"
        name="ProvYourCommonLawPartDesc"
        value={sectionDataSingle.ProvYourCommonLawPartDesc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Provide Your Common Law Partnership Point 1"
        name="py1"
        value={sectionDataSingle.py1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Provide Your Common Law Partnership Point 2"
        name="py2"
        value={sectionDataSingle.py2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Provide Your Common Law Partnership Point 3"
        name="py3"
        value={sectionDataSingle.py3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Provide Your Common Law Partnership Point 4"
        name="py4"
        value={sectionDataSingle.py4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Provide Your Common Law Partnership Point 5"
        name="py5"
        value={sectionDataSingle.py5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Common Law Required Documents Sponsorship Heading"
        name="CommonLawRequDocuSponHeading"
        value={sectionDataSingle.CommonLawRequDocuSponHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Paragraph"
        name="CommonLawRequDocuSponPara"
        value={sectionDataSingle.CommonLawRequDocuSponPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 1"
        name="crd1"
        value={sectionDataSingle.crd1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 2"
        name="crd2"
        value={sectionDataSingle.crd2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 3"
        name="crd3"
        value={sectionDataSingle.crd3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 4"
        name="crd4"
        value={sectionDataSingle.crd4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 5"
        name="crd5"
        value={sectionDataSingle.crd5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 6"
        name="crd6"
        value={sectionDataSingle.crd6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 7"
        name="crd7"
        value={sectionDataSingle.crd7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 8"
        name="crd8"
        value={sectionDataSingle.crd8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 9"
        name="crd9"
        value={sectionDataSingle.crd9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Required Documents Sponsorship Point 10"
        name="crd10"
        value={sectionDataSingle.crd10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Common Law Required Documents Sponsorship Paragraph 2"
        name="CommonLawRequDocuSponPara2"
        value={sectionDataSingle.CommonLawRequDocuSponPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Who Qualifies for Conjugal Heading"
        name="WhoQualConjHeading"
        value={sectionDataSingle.WhoQualConjHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Who Qualifies for Conjugal Discussion"
        name="WhoQualConjDisc"
        value={sectionDataSingle.WhoQualConjDisc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Qualifies for Conjugal Partnership Heading"
        name="QualConjPartHeading"
        value={sectionDataSingle.QualConjPartHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Question 1"
        name="Q1"
        value={sectionDataSingle.Q1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Question 2"
        name="Q2"
        value={sectionDataSingle.Q2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Question 3"
        name="Q3"
        value={sectionDataSingle.Q3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Conjugal Relationship Considerations Heading"
        name="ConjRelConsidHeading"
        value={sectionDataSingle.ConjRelConsidHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Consideration Point 1"
        name="c1"
        value={sectionDataSingle.c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Consideration Point 2"
        name="c2"
        value={sectionDataSingle.c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Conjugal Partnership Required Documents Sponsorship Heading"
        name="ConjPartReqDocSponHeading"
        value={sectionDataSingle.ConjPartReqDocSponHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Documents Sponsorship Paragraph"
        name="ConjPartReqDocSponPara"
        value={sectionDataSingle.ConjPartReqDocSponPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 1"
        name="cprd1"
        value={sectionDataSingle.cprd1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 2"
        name="cprd2"
        value={sectionDataSingle.cprd2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 3"
        name="cprd3"
        value={sectionDataSingle.cprd3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 4"
        name="cprd4"
        value={sectionDataSingle.cprd4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 5"
        name="cprd5"
        value={sectionDataSingle.cprd5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 6"
        name="cprd6"
        value={sectionDataSingle.cprd6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 7"
        name="cprd7"
        value={sectionDataSingle.cprd7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 8"
        name="cprd8"
        value={sectionDataSingle.cprd8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 9"
        name="cprd9"
        value={sectionDataSingle.cprd9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 10"
        name="cprd10"
        value={sectionDataSingle.cprd10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 11"
        name="cprd11"
        value={sectionDataSingle.cprd11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Conjugal Partnership Required Document Sponsorship Point 12"
        name="cprd12"
        value={sectionDataSingle.cprd12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Paragraph"
        name="StillNotPara"
        value={sectionDataSingle.StillNotPara || ""}
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

export default SamesexContent;
