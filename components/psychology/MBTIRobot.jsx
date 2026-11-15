
"use client";

export default function MBTIRobot() {
  return (
    <div className="mbti-robot-scene">
      <style>{`
        .mbti-robot-scene {
          width: 100%;
          min-height: 510px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
          padding: 55px 20px 20px;
        }

        .mbti-robot {
          position: relative;
          width: 290px;
          height: 430px;
          flex-shrink: 0;
          animation: robotFloat 3s ease-in-out infinite;
        }

        /* SPEECH BUBBLE */

        .robot-speech {
          position: absolute;
          z-index: 20;
          top: -57px;
          left: 50%;
          transform: translateX(-50%);
          width: 270px;
          padding: 12px 16px;
          background: white;
          color: #25243a;
          border: 2px solid #e5d5ff;
          border-radius: 18px;
          text-align: center;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.5;
          box-shadow: 0 5px 18px rgba(80, 50, 130, 0.12);
        }

        .robot-speech a {
          display: block;
          color: #a12bd1;
          font-size: 17px;
          font-weight: 800;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .robot-speech a:hover {
          color: #7e22ce;
          text-decoration: underline;
        }

        .robot-speech a:focus-visible {
          outline: 2px solid #a12bd1;
          outline-offset: 3px;
          border-radius: 4px;
        }

        .robot-speech::after {
          content: "";
          position: absolute;
          bottom: -9px;
          left: 50%;
          width: 15px;
          height: 15px;
          background: white;
          border-right: 2px solid #e5d5ff;
          border-bottom: 2px solid #e5d5ff;
          transform: translateX(-50%) rotate(45deg);
        }

        /* HAIR */

        .robot-hair-back {
          position: absolute;
          z-index: 4;
          left: 66px;
          top: 22px;
          width: 158px;
          height: 185px;
          background: linear-gradient(90deg, #17151e, #39313d, #15131b);
          border-radius: 75px 75px 35px 35px;
        }

        .robot-hair-top {
          position: absolute;
          z-index: 7;
          top: 12px;
          left: 70px;
          width: 150px;
          height: 85px;
          background: linear-gradient(145deg, #39313c, #111019);
          border-radius: 80px 80px 30px 25px;
        }

        .robot-hair-side {
          position: absolute;
          z-index: 7;
          top: 65px;
          width: 27px;
          height: 115px;
          background: linear-gradient(90deg, #111019, #39313c);
          border-radius: 20px;
        }

        .robot-hair-left {
          left: 68px;
        }

        .robot-hair-right {
          right: 68px;
        }

        /* FACE */

        .robot-face {
          position: absolute;
          z-index: 6;
          top: 39px;
          left: 82px;
          width: 126px;
          height: 139px;
          background: linear-gradient(135deg, #ffe3d7, #f5c4b1);
          border-radius: 48% 48% 45% 45%;
          box-shadow: inset -5px -5px 12px #dca18f;
        }

        .robot-brows {
          position: absolute;
          top: 39px;
          left: 24px;
          width: 78px;
          display: flex;
          justify-content: space-between;
        }

        .robot-brows span {
          width: 24px;
          height: 4px;
          background: #61423d;
          border-radius: 50%;
        }

        /* EYES */

        .robot-eyes {
          position: absolute;
          top: 51px;
          left: 22px;
          width: 82px;
          display: flex;
          justify-content: space-between;
        }

        .robot-eyes span {
          width: 29px;
          height: 17px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          animation: robotEyeBlink 4s infinite;
          transform-origin: center;
        }

        .robot-eyes span:nth-child(2) {
          animation-delay: 0.05s;
        }

        .robot-eyes i {
          width: 11px;
          height: 13px;
          display: block;
          background: #282333;
          border-radius: 50%;
        }

        @keyframes robotEyeBlink {
          0%, 43%, 47%, 100% {
            height: 17px;
          }
          45% {
            height: 1px;
          }
        }

        .robot-nose {
          position: absolute;
          top: 70px;
          left: 61px;
          width: 9px;
          height: 17px;
          border-right: 2px solid #d89c8b;
          border-radius: 50%;
        }

        .robot-smile {
          position: absolute;
          top: 105px;
          left: 49px;
          width: 29px;
          height: 12px;
          border-bottom: 3px solid #a84d55;
          border-radius: 50%;
        }

        .robot-cheek {
          position: absolute;
          top: 88px;
          width: 17px;
          height: 9px;
          background: #ed9997;
          filter: blur(6px);
        }

        .robot-cheek.left {
          left: 9px;
        }

        .robot-cheek.right {
          right: 9px;
        }

        /* ROBOT EARS */

        .robot-ear {
          position: absolute;
          z-index: 8;
          top: 92px;
          width: 17px;
          height: 28px;
          background: linear-gradient(90deg, #65788d, #dce5ed);
          border: 2px solid #526174;
          border-radius: 8px;
        }

        .robot-ear.left {
          left: 67px;
        }

        .robot-ear.right {
          right: 67px;
        }

        /* NECK */

        .robot-neck {
          position: absolute;
          z-index: 3;
          top: 165px;
          left: 122px;
          width: 46px;
          height: 48px;
          background: linear-gradient(90deg, #64758a, #e3eaf0, #64758a);
          border-radius: 8px;
        }

        .neck-line {
          height: 4px;
          margin: 9px 7px;
          background: #728297;
          border-radius: 5px;
        }

        /* MECHANICAL ARMS */

        .robot-arm {
          position: absolute;
          z-index: 2;
          top: 210px;
          width: 37px;
          height: 113px;
          background: linear-gradient(90deg, #64758a, #e1e9f0, #687a90);
          border: 1px solid #8291a2;
          border-radius: 22px;
        }

        .robot-arm.left {
          left: 43px;
          transform: rotate(9deg);
        }

        .robot-arm.right {
          right: 43px;
          transform: rotate(-9deg);
          transform-origin: top center;
        }

        .robot-joint {
          position: absolute;
          top: 42px;
          left: 3px;
          width: 29px;
          height: 29px;
          border: 4px solid #63758b;
          background: radial-gradient(circle, #e9f4fa 25%, #9eafc1 65%);
          border-radius: 50%;
        }

        .robot-hand {
          position: absolute;
          bottom: -17px;
          left: 3px;
          width: 30px;
          height: 27px;
          background: linear-gradient(90deg, #687b90, #e0e8ef, #687b90);
          border-radius: 12px;
        }

        .robot-fingers {
          position: absolute;
          bottom: -29px;
          left: 5px;
          display: flex;
          gap: 3px;
        }

        .robot-fingers i {
          width: 5px;
          height: 13px;
          background: #aebdcb;
          border-radius: 5px;
        }

        /* RED SHIRT */

        .robot-shirt {
          position: absolute;
          z-index: 4;
          top: 193px;
          left: 65px;
          width: 160px;
          height: 165px;
          background: linear-gradient(105deg, #a90019, #ef243e 48%, #b00020);
          clip-path: polygon(25% 0, 75% 0, 100% 17%, 89% 100%, 11% 100%, 0 17%);
        }

        .robot-collar {
          position: absolute;
          top: 0;
          left: 55px;
          width: 50px;
          height: 29px;
          background: #790019;
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        .robot-shirt-panel {
          position: absolute;
          top: 38px;
          left: 74px;
          width: 12px;
          height: 85px;
          background: #9d1028;
          border-radius: 8px;
        }

        .robot-shirt-light {
          position: absolute;
          top: 33px;
          left: 2px;
          width: 9px;
          height: 9px;
          background: #75f7ff;
          border-radius: 50%;
          box-shadow: 0 0 12px #75f7ff;
        }

        .robot-shirt-seam {
          position: absolute;
          top: 10px;
          left: 5px;
          width: 2px;
          height: 65px;
          background: #ff899b;
        }

        /* WAIST */

        .robot-waist {
          position: absolute;
          z-index: 3;
          top: 352px;
          left: 91px;
          width: 108px;
          height: 28px;
          background: linear-gradient(90deg, #64758a, #e0e8ef, #64758a);
          border-radius: 7px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        .robot-waist span {
          width: 7px;
          height: 13px;
          background: #64758a;
          border-radius: 4px;
        }

        /* FLOATING */

        @keyframes robotFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        /* MOBILE */

        @media (max-width: 400px) {
          .robot-speech {
            width: 245px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="mbti-robot">

        {/* Clickable speech bubble */}
        <div className="robot-speech">
          Have You Tested Your Personality?
          <a href="#interactive-test">
            Try Here!
          </a>
        </div>

        {/* Hair */}
        <div className="robot-hair-back" />
        <div className="robot-hair-top" />
        <div className="robot-hair-side robot-hair-left" />
        <div className="robot-hair-side robot-hair-right" />

        {/* Face */}
        <div className="robot-face">
          <div className="robot-brows">
            <span />
            <span />
          </div>

          <div className="robot-eyes">
            <span><i /></span>
            <span><i /></span>
          </div>

          <div className="robot-nose" />
          <div className="robot-smile" />
          <div className="robot-cheek left" />
          <div className="robot-cheek right" />
        </div>

        {/* Ears */}
        <div className="robot-ear left" />
        <div className="robot-ear right" />

        {/* Neck */}
        <div className="robot-neck">
          <div className="neck-line" />
          <div className="neck-line" />
        </div>

        {/* Arms */}
        <div className="robot-arm left">
          <div className="robot-joint" />
          <div className="robot-hand" />
        </div>

        <div className="robot-arm right">
          <div className="robot-joint" />
          <div className="robot-hand" />
          <div className="robot-fingers">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        {/* Red shirt */}
        <div className="robot-shirt">
          <div className="robot-collar" />
          <div className="robot-shirt-panel">
            <span className="robot-shirt-light" />
            <span className="robot-shirt-seam" />
          </div>
        </div>

        {/* Waist */}
        <div className="robot-waist">
          <span />
          <span />
          <span />
        </div>

      </div>
    </div>
  );
}
