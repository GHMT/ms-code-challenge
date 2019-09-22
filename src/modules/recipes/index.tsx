import * as React from 'react';
import { withRouter } from 'react-router';

import {
  ISmartProps,
} from './types';
import View from './view';

// import PostService from '../../core/api/services/posts/service';
// import { PostAdapterSingleton } from '../../core/domain/business/Post';

// class Posts extends React.Component<ISmartProps, ISmartState> {
//   private handlers: IHandlers;

//   constructor(props: ISmartProps) {
//     super(props);

//     this.state = {
//       posts: [],
//     }

//     this.handlers = {
//       onViewClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { this.onViewClick(event) },
//     }
//   }

//   componentDidMount(){
//     PostService.getPosts()
//       .then(response => response.data && this.setState({posts: response.data.map(iPost => PostAdapterSingleton.adapt(iPost))}))
//       .catch(); // TODO: Some catch code here, like a modal message
//   }

//   onViewClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
//     const { props } = this;
//     const postId = event.currentTarget.value;

//     props.history.push(`post-details/${postId}`)
//   }

//   render() {
//     const { state, handlers } = this;

//     return (
//       <View
//         {...this.props}
//         posts={state.posts}
//         onViewClick={handlers.onViewClick}
//       />
//     )
//   }
// }

// export default withRouter(Posts);


const Accordion = (props: ISmartProps) => {
  // const { steps } = props;
  // const [currentStep, setCurrentStep] = useState(0); /* useEffect(() => { props.handleDataSelection(selectedOption, currentStep ? currentStep - 1 : currentStep) }, [currentStep, selectedOption]); */

  // const handleDataSelection = (selectedOptionInfo: FirstArgument<ISmartProps['handleDataSelection']>, stepNumber: number) => {
  //   setCurrentStep(stepNumber + 1);
  //   props.handleDataSelection(selectedOptionInfo, stepNumber)
  // }

  return (
    <View />
  );
}

export default withRouter(Accordion);
