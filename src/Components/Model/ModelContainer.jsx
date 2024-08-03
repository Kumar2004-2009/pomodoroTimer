import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { StateContext } from "../StateProvider";
import './model.css'

const ModelContainer = ({ isOpen, onClose }) => {
  const {
    workTime,
    setWorkTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
  } = useContext(StateContext);

  return (
    <div className="container">
      <ModelContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <div className="model-header">
          <h3 className="model-title">Settings</h3>
          <button className="mode-close-button" onClick={onClose}>
            <FaWindowClose fontSize="3rem" />
          </button>
        </div>
        <div className="model-body">
          <Formik
            initialValues={{
              work: workTime / 60,
              short: shortBreakTime / 60,
              long: longBreakTime / 60,
            }}
            onSubmit={(values) => {
              setWorkTime(values.work * 60);
              setShortBreakTime(values.short * 60);
              setLongBreakTime(values.long * 60);
              onClose();
            }}
          >
            <Form>
              <div className="input-wrapper">
                <div className="form-control">
                  <label htmlFor="work">Work</label>
                  <Field name="work" min="1" max="60" />
                </div>

                <div className="form-control">
                  <label htmlFor="short">Short Break</label>
                  <Field name="short" min="1" max="60" />
                </div>

                <div className="form-control">
                  <label htmlFor="long">Long Break</label>
                  <Field name="long" min="1" max="60" />
                </div>
              </div>
              <div className="button-wrapper">
                <button className="apply-button" type="submit">Apply</button>
              </div>
            </Form>
          </Formik>
        </div>
      </ModelContent>
    </div>
  );
};

export default ModelContainer;
const ModelContent = styled(motion.div)`
    width:60rem;
    height: 40rem;
    background-color: white;

    @media (max-width:600px) {
      width: 90%;
      padding: 1rem;
    }
`
