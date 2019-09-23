import React from 'react';
import { withRouter } from 'react-router';

import {
  ISmartProps,
} from './types';
import View from './view';

const RecipeDetail = (props: ISmartProps) => {
  // const { steps } = props;
  // const [currentStep, setCurrentStep] = useState(0); /* useEffect(() => { props.handleDataSelection(selectedOption, currentStep ? currentStep - 1 : currentStep) }, [currentStep, selectedOption]); */

  // const handleDataSelection = (selectedOptionInfo: FirstArgument<ISmartProps['handleDataSelection']>, stepNumber: number) => {
  //   setCurrentStep(stepNumber + 1);
  //   props.handleDataSelection(selectedOptionInfo, stepNumber)
  // }

  return (
    <View 
      {...props}
      recipeId={props.match.params.recipeId}
    />
  );
}

export default withRouter(RecipeDetail);
