import { default as filterMesh1 } from "../assets/filtermesh1.png";
import { default as filterMesh2 } from "../assets/filtermesh2.png";
import { default as filterMesh3 } from "../assets/filtermesh3.png";
import { default as filterBase } from "../assets/base.png";
import { default as filter2Base } from "../assets/filter2base.png";
import { default as filter3Base } from "../assets/filter3base.png";
import { default as filter1 } from "../assets/filter1.png";
import { default as filter2 } from "../assets/filter2.png";
import { default as filter3 } from "../assets/filter3.png";
import { default as filterMeshBase } from "../assets/baseMesh.png";
import { default as QRFilter1 } from "../assets/QR_Filter1.png";
import { default as QRFilter2 } from "../assets/QR_Filter2.png";
import { default as QRFilter3 } from "../assets/QR_Filter3.png";

export default function Filters() {
  return (
    <>
      <section className="FilterSection">
        <h2>filters.</h2>
        <h3 className="FirstFilterHeader">filter#1</h3>

        <div className="FilterWrapper">
          <div className="FilterItem">
            <img src={filterMeshBase} className="FilterImg" />
            <div className="FilterOverlay">
              <img src={filterMesh1} className="FilterImg" />
            </div>
          </div>

          <div className="FilterItem">
            <img src={filterBase} className="FilterImg" />
            <div className="FilterOverlay">
              <img src={filter1} className="FilterImg" />
            </div>
          </div>
        </div>
        <p className="FilterDescription">
          For this filter, I incorporated all the edits commonly seen in many
          beauty filters on social media. I think that many people use beauty
          filters and don't actively think about what parts of their face the
          filter is changing. The purpose of creating this filter was to see
          what changes are being made to what parts of your face.
        </p>
        <div className="FilterDetailsRow">
          <div>
            <h4 className="FilterListHeader">Edits made:</h4>
            <ul className="FilterList">
              <li>Slimmer jaw</li>
              <li>Smaller nose</li>
              <li>Lifting the eyes</li>
              <li>Larger lips</li>
              <li>Sharper chin</li>
              <li>Retouched skin</li>
            </ul>
          </div>
          <img src={QRFilter1} className="QRCode" />
        </div>

        <h3 className="FirstFilterHeader">filter#2</h3>

        <div className="FilterWrapper">
          <div className="FilterItem">
            <img src={filterMeshBase} className="FilterImg" />
            <div className="FilterOverlay">
              <img src={filterMesh2} className="FilterImg" />
            </div>
          </div>

          <div className="FilterItem">
            <img src={filter2Base} className="FilterImg" />
            <div className="FilterOverlay">
              <img src={filter2} className="FilterImg" />
            </div>
          </div>
        </div>
        <p className="FilterDescription">
          For this filter, I incorporated edits that are the exact opposite of
          edits made by many beauty filters. I wanted to see what an
          "anti-beauty" beauty filter would look like. Most of my editing was
          focused on dragging the face down.
        </p>
        <div className="FilterDetailsRow">
          <div>
            <h4 className="FilterListHeader">Edits made:</h4>
            <ul className="FilterList">
              <li>Wider jaw</li>
              <li>Drooping eyes</li>
              <li>Smaller lips</li>
              <li>Wider chin</li>
            </ul>
          </div>
          <img src={QRFilter2} className="QRCode" />
        </div>

        <h3 className="FirstFilterHeader">filter#3</h3>
        <div className="FilterWrapper">
          <div className="FilterItem">
            <img src={filterMeshBase} className="FilterImg" />
            <div className="FilterOverlay">
              <img src={filterMesh3} className="FilterImg" />
            </div>
          </div>

          <div className="FilterItem">
            <img src={filter3Base} className="FilterImg" />
            <div className="FilterOverlay">
              <img src={filter3} className="FilterImg" />
            </div>
          </div>
        </div>
        <p className="FilterDescription">
          For this filter, I exaggerated common beauty filter edits. I was
          curious what an extreme version of existing beauty filters look like
          and I created a sort of botched surgery filter.
        </p>

        <div className="FilterDetailsRow">
          <div>
            <h4 className="FilterListHeader">Edits made:</h4>
            <ul className="FilterList">
              <li>Wider jaw</li>
              <li>Smaller nose</li>
              <li>Lifting the eyes</li>
              <li>Larger lips</li>
              <li>Sharper chin</li>
              <li>Prominent cheekbones</li>
            </ul>
          </div>
          <img src={QRFilter3} className="QRCode" />
        </div>
      </section>
    </>
  );
}
