import React from 'react';

import { IDummyProps } from './types';
// import PostCard from '../../shared/components/post-card';
// import env from '../../env';

const View = (props: IDummyProps) => (
  <React.Fragment>
    <h1 className="mb-5 mt-5">Recipes List view works!</h1>
    {/* {props.posts.map(post => (
      <div key={post.id} className='col-sm-6 col-md-4 col-lg-3 mb-2'>
        <PostCard
          id={post.id}
          img={`${env.REACT_APP_API_HOST}${post.photoUrl}`}
          title={post.title}
          description={post.description}
          onViewClick={props.onViewClick}
        />
      </div>
    ))} */}
  </React.Fragment>
)

export default View;
