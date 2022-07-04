import styled from "styled-components";
// import UploadImage from "./upload";
import "./styles.css";
import { useState } from "react";
const Content = styled.div`
  max-width: 878px;
`;
const SectionDiv = styled.div`
  width: 818px;

  background: #f5f5f5;
  border-radius: 2px;
  padding: 30px;
  margin-bottom: 20px;
`;
const ContentDiv = styled.div`
  width: 816px;
  padding: 10px 10px 10px 10px;
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AddContent = styled.button`
  width: 134px;
  height: 30px;
  background: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 15px;
`;
const AddSection = styled.div`
  width: 187px;
  height: 40px;
  background: #000000;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SaveBtn = styled.button`
  background: #ffffff;
  border: 2px solid #ff7a59;
  border-radius: 5px;
  width: 268px;
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  color: #ff7a59;
`;
const UploadBtn = styled.button`
  background: #ff7a59;
  border-radius: 5px;
  border: none;
  width: 268px;
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin-left: 10px;
`;
const Hr = styled.hr`
  color: #696969;
  opacity: 0.3;
`;
const SectionSpan = styled.span`
  font-weight: 600;
  font-size: 18px;
`;
const TextSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.6);
`;
const LightSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: end;
  color: rgba(0, 0, 0, 0.6);
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const UploaderDiv = styled.div`
  width: 772px;
  height: 80px;
  background: #f5f5f5;
  border: 1px dashed #696969;
  border-radius: 5px;
  margin: 10px 0 10px 0;
`;
const Quiz = styled.button`
  border: none;
  min-width: 110px;
  height: 30px;
  color: white;
  background: #000000;
  border-radius: 5px;
  font-weight: 700;
  font-size: 12px;
  margin-right: 10px;
`;
const Addbtn = styled.button`
  width: 110px;
  height: 30px;
  background: #ff7a59;
  border-radius: 5px;
  color: white;
  border: none;
`;
const InDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Test = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`
export default function Inro() {
  const [isActive, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Content>
        <Test>
      <div>
        <SectionDiv>
          <SectionSpan>Section 1:</SectionSpan>
          <TextSpan>icon Introduction</TextSpan>
          <ContentDiv>
            <FlexDiv>
              <TextSpan>icon Lecture 1:icon Introduction icon icon</TextSpan>
              <AddContent
                className={isActive ? "test" : "showtest"}
                onClick={toggleClass}
              >
                icon CONTENT
              </AddContent>
            </FlexDiv>
            <Hr />
            <InDiv className={isActive ? "showtest" : "test"}>
              <button
                className={isActive ? "showtestbtn" : "testbtn"}
                onClick={toggleClass}
              >
                X
              </button>
              <SectionSpan>Upload Video</SectionSpan>
              <UploaderDiv>UPLOADER HERE</UploaderDiv>
              <LightSpan>
                {" "}
                All files should be atleast 720p & less than 4.0 GB
              </LightSpan>
            </InDiv>
          </ContentDiv>
          <FlexDiv>
            <div>
              <Quiz>icon Quiz</Quiz>
              <Quiz>icon Practice Test </Quiz>
            </div>
            <Addbtn>ADD</Addbtn>
          </FlexDiv>
        </SectionDiv>
        <ButtonDiv>
          <AddSection>icon ADD SECTION</AddSection>
        </ButtonDiv>
        </div>
        <div>
        <Hr />
        <ButtonDiv>
          <SaveBtn>SAVE TO DRAFT</SaveBtn>
          <UploadBtn>UPLOAD</UploadBtn>
        </ButtonDiv>
        </div>
        </Test>
      </Content>
      {/* <UploadImage /> */}
    </>
  );
}
