import { useFormikContext } from "formik";
import { useEffect } from "react";
import useClauseStore from "../../../zustandStores/useClauseStore";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";

const useClauseSubmit = () => {
  const isConfirmed = useClauseStore(state => state.isConfirmed);
  const setConfirmed = useClauseStore(state => state.setConfirmed);
  const { errors } = useFormikContext<{ confirmation: boolean }>();
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const next = useMultistepFormStore(state => state.next);
  const isErrorInClause = Object.values(errors);


  useEffect(() => {
    if (currentStepIdx !== 1) setConfirmed(false);
  }, [currentStepIdx]);

  useEffect(() => {
    if (isConfirmed && isErrorInClause.length === 0) next();
  }, [isConfirmed]);
  return null;
};

export default useClauseSubmit;
