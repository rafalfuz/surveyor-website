import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  width: ${({ width }) => width || "100%"};
  flex-direction: column;
  color: white;
  padding: 5px 0;
  min-height: 110px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const StyledInput = styled(Field)`
  height: 50px;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 5px 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledTextArea = styled(Field)`
  min-height: 100px;
  max-height: 150px;
  max-width: 100%;
  min-width: 80%;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 5px 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const SubmitBtn = styled.button`
  display: ${({ noBackBtn }) => (noBackBtn ? "none" : "inline-block")};
  width: 330px;
  height: 66px;
  margin: 25px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.teriarty};
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  transition: all 0.4s;
  &:hover {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    cursor: pointer;
    color: white;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 15px auto;
    padding: 10px;
  }
`;
