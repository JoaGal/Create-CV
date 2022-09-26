import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Template1.css";

export const Template1 = ({ styleScale = "1" }) => {
  const allInformation = JSON.parse(localStorage.getItem("allInformation"));
  useEffect(() => {
    if (window.location.href.includes("template1")) {
      document.title = "Resume";
      setTimeout(() => {
        window.print();
        window.close();
      }, 1000);
    }
  }, []);

  return (
    <div
      id="template1"
      style={{ transform: `scale(${styleScale})`, transformOrigin: `${styleScale === "0.24" ? "0 0" : "center"}` }}
    >
      {allInformation?.personal?.image && (
        <img className="template-1-img" src={allInformation?.personal?.image} alt="Profile picture" id="pic" />
      )}

      <div>
        <h1 className="template-1-h1">
          {allInformation?.personal?.name} {allInformation?.personal?.lastName}
        </h1>

        <p className="template-1-p">
          {allInformation?.personal?.phone && "Phone: "} {allInformation?.personal?.phone}
          <br />
          {(allInformation?.personal?.address ||
            allInformation?.personal?.city ||
            allInformation?.personal?.country) && (
            <>
              Address: {allInformation?.personal?.address}, {allInformation?.personal?.country},{" "}
              {allInformation?.personal?.postalCode}, {allInformation?.personal?.city}
            </>
          )}
          <br />
          {allInformation?.personal?.email && (
            <>
              Email:
              <a className="template-1-a" href={`mailto:${allInformation?.personal?.email}`}>
                {allInformation?.personal?.email}
              </a>
              <br />
            </>
          )}
          {allInformation?.personal?.briefcase && (
            <>
              Briefcase:
              <a className="template-1-a" href={allInformation?.personal?.briefcase}>
                {allInformation?.personal?.briefcase}
              </a>
              <br />
            </>
          )}
          {allInformation?.personal?.linkedin && (
            <>
              Linkedin:
              <a className="template-1-a" href={allInformation?.personal?.linkedin}>
                {allInformation?.personal?.linkedin}
              </a>
            </>
          )}
        </p>
      </div>

      <div id="template-1-objective">
        <p className="template-1-objective-p">{allInformation?.experiences?.profile?.descriptionProfile}</p>
      </div>

      <div className="template-1-clear"></div>

      <dl>
        <dd className="template-1-clear template-1-dd"></dd>

        {allInformation?.experiences?.workExperience1?.workstation && (
          <>
            <dt className="template-1-dt">Works</dt>
            <dd className="template-1-dd">
              <h2 className="template-1-h2">{allInformation?.experiences?.workExperience1?.workstation}</h2>
              <p className="template-1-p">
                {allInformation?.experiences?.workExperience1?.employer} -{" "}
                {allInformation?.experiences?.workExperience1?.city} - |{" "}
                {allInformation?.experiences?.workExperience1?.startWork} -{" "}
                {allInformation?.experiences?.workExperience1?.finishWork}
                <br />
                {allInformation?.experiences?.workExperience1?.descriptionWork}
              </p>
              {allInformation?.experiences?.workExperience2?.workstation && (
                <>
                  <h2 className="template-1-h2">{allInformation?.experiences?.workExperience2?.workstation}</h2>
                  <p className="template-1-p">
                    {allInformation?.experiences?.workExperience2?.employer} -{" "}
                    {allInformation?.experiences?.workExperience2?.city} - |{" "}
                    {allInformation?.experiences?.workExperience2?.startWork} -{" "}
                    {allInformation?.experiences?.workExperience2?.finishWork}
                    <br />
                    {allInformation?.experiences?.workExperience2?.descriptionWork}
                  </p>
                </>
              )}
              {allInformation?.experiences?.workExperience3?.workstation && (
                <>
                  <h2 className="template-1-h2">{allInformation?.experiences?.workExperience3?.workstation}</h2>
                  <p className="template-1-p">
                    {allInformation?.experiences?.workExperience3?.employer} -{" "}
                    {allInformation?.experiences?.workExperience3?.city} - |{" "}
                    {allInformation?.experiences?.workExperience3?.startWork} -{" "}
                    {allInformation?.experiences?.workExperience3?.finishWork}
                    <br />
                    {allInformation?.experiences?.workExperience3?.descriptionWork}
                  </p>
                </>
              )}
            </dd>
          </>
        )}

        <dd className="template-1-clear template-1-dd"></dd>
        {allInformation?.experiences?.skill?.skill && (
          <>
            <dt className="template-1-dt">Skills</dt>
            <dd className="template-1-dd">
              <h2 className="template-1-h2">{allInformation?.experiences?.skill?.skill}</h2>
              <p className="template-1-p">{allInformation?.experiences?.skill?.descriptionSkill}</p>

              {allInformation?.experiences?.languages1?.language && (
                <>
                  <h2 className="template-1-h2">Languages</h2>
                  <p className="template-1-p">
                    ● {allInformation?.experiences?.languages1?.language}{" "}
                    ({allInformation?.experiences?.languages1?.languageLevel}) ●{" "}
                    {allInformation?.experiences?.languages2?.language}{" "}
                    ({allInformation?.experiences?.languages2?.languageLevel}) ●{" "}
                    {allInformation?.experiences?.languages3?.language} (
                    {allInformation?.experiences?.languages3?.languageLevel})
                  </p>
                  <br />
                </>
              )}
            </dd>
          </>
        )}

        <dd className="template-1-clear template-1-dd"></dd>

        {allInformation?.experiences?.studies1?.study && (
          <>
            <dt className="template-1-dt">Studies</dt>
            <dd className="template-1-dd">
              <h2 className="template-1-h2">
                {allInformation?.experiences?.studies1?.study} - {allInformation?.experiences?.studies1?.startPeriod} -{" "}
                {allInformation?.experiences?.studies1?.processPeriod}
              </h2>
              <p className="template-1-p">{allInformation?.experiences?.studies1?.descriptionStudy}</p>
              <br />
              <h2 className="template-1-h2">
                {allInformation?.experiences?.studies2?.study} - {allInformation?.experiences?.studies2?.startPeriod} -{" "}
                {allInformation?.experiences?.studies2?.processPeriod}
              </h2>
              <p className="template-1-p">{allInformation?.experiences?.studies2?.descriptionStudy}</p>
              <br />
              <h2 className="template-1-h2">
                {allInformation?.experiences?.studies3?.study} - {allInformation?.experiences?.studies3?.startPeriod} -{" "}
                {allInformation?.experiences?.studies3?.processPeriod}
              </h2>
              <p className="template-1-p">{allInformation?.experiences?.studies3?.descriptionStudy}</p>
              <br />
            </dd>
          </>
        )}
        {/* 
        <dd className="template-1-clear template-1-dd"></dd>

        <dt className="template-1-dt">Pasatiempos</dt>
        <dd className="template-1-dd">
          <p className="template-1-p">
            Diseñar planos 3D en SketchUp
            <br />
            Juntarme con amigos
            <br />
            Jugar videojuegos
            <br />
            Andar en bicicleta
            <br />
          </p>
        </dd> */}

        <dd className="template-1-clear template-1-dd"></dd>
      </dl>

      <div className="template-1-clear"></div>
    </div>
  );
};

Template1.propTypes = {
  styleScale: PropTypes.string,
  allInformation: PropTypes.object,
};
