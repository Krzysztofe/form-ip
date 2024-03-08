import create from "zustand";
import StepForm from "../pages/steps/stepForm/StepForm";
import StepClause from "../pages/steps/stepClause/StepClause";
import StepSummary from "../pages/steps/stepSummary/StepSummary";
import StepConfirmation from "../pages/steps/stepConfirmation/StepConfirmation";

type MultistepFormState = {
  currentStepIdx: number;
  steps: JSX.Element[];
  isLastStep: boolean;
  setCurrentStepIdx: (stepIdx: number) => void;
  setLastStep: (currentStepIdx: number) => void;
  next: () => void;
  back: () => void;
};

const useMultistepFormStore = create<MultistepFormState>(set => ({
  currentStepIdx: 0,
  steps: [<StepForm />, <StepClause />, <StepSummary />, <StepConfirmation />],
  isLastStep: false,
  setLastStep: currentStepIdx =>
    set(state => ({
      isLastStep: currentStepIdx === state.steps.length - 1,
    })),

  setCurrentStepIdx: stepIdx => set(state => ({ currentStepIdx: stepIdx })),
  next: () => set(state => ({ currentStepIdx: state.currentStepIdx + 1 })),
  back: () => set(state => ({ currentStepIdx: state.currentStepIdx - 1 })),
}));

export default useMultistepFormStore;
