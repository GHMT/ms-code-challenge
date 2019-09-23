import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

import {
  ISmartProps,
} from './types';
import View from './view';
import RecipesService from '../../core/api/services/recipes/service';

const RecipesList = (props: ISmartProps) => {
  // const { steps } = props;
  // const [currentStep, setCurrentStep] = useState(0); /* useEffect(() => { props.handleDataSelection(selectedOption, currentStep ? currentStep - 1 : currentStep) }, [currentStep, selectedOption]); */

  // const handleDataSelection = (selectedOptionInfo: FirstArgument<ISmartProps['handleDataSelection']>, stepNumber: number) => {
  //   setCurrentStep(stepNumber + 1);
  //   props.handleDataSelection(selectedOptionInfo, stepNumber)
  // }
  useEffect(() => {
    RecipesService.getRecipes().subscribe(recipes => console.log('subscripe recipes',recipes));
  })

  return (
    <View />
  );
}

export default withRouter(RecipesList);
