import React from 'react';

interface Context {
  selectedPost: Post | null;
  handlePostSelection: (post: Post) => void;
}

const AppContext = React.createContext<Context>({
  selectedPost: null,
  handlePostSelection: () => {},
});

export default AppContext;
