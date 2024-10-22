import { useEffect, useState } from "react";
import { getButtonBtnState } from "./getButtonState";

export const useStepper = (data: string[], submitText?: string) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [submittedStepsIndex, setSubmittedStepsIndex] = useState<number[]>([]);
  const [btnStepperText, setBtnStepperText] = useState<string | undefined>("");

  const nextStep = () => {
    if (activeStepIndex !== data.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    } else if (activeStepIndex === data.length - 1) {
      //nothing should happen
    }
  };

  const prevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
      removeLastSubmittedStep();
    }
  };

  const addSubmittedSteps = (submittedStep: number) => {
    if (!submittedStepsIndex.includes(submittedStep)) {
      setSubmittedStepsIndex([...submittedStepsIndex, submittedStep]);
    } else {
      //perform something here
    }
  };

  const removeLastSubmittedStep = () => {
    const newArray = [...submittedStepsIndex];
    newArray.pop();
    setSubmittedStepsIndex(newArray);
  };

  useEffect(() => {
    addSubmittedSteps(activeStepIndex);
    setBtnStepperText(
      getButtonBtnState(activeStepIndex, data.length - 1, submitText)
    );
  }, [activeStepIndex]);

  return {
    activeStepIndex,
    nextStep,
    prevStep,
    submittedStepsIndex,
    btnStepperText,
  };
};
