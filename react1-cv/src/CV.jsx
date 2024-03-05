import Education from "./Education/Education.jsx";
import Header from "./Header/Header.jsx";
import Skills from "./Skills/Skills.jsx";

function CV(props) {
  const { data } = props;
  return (
    <>
      <Header
        name={data.name}
        imgSrc={data.imgSrc}
        description={data.description}
        birth={data.birth}
        place={data.place}
        email={data.email}
        linkedIn={data.linkedIn}
      />
      <Education
        heading="Education"
        education={data.educationItems}
        child="EducationItem"
      />
      <Skills heading="Digital skills" skills={data.skills} />
      <Education heading="Courses" education={data.courses} child="CouseItem" />
    </>
  );
}

export default CV;
