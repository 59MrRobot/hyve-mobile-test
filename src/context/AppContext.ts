import React from 'react';

interface Context {
  selectedPost: Post | null;
  handlePostSelection: (post: Post) => void;
  fetchError: boolean;
}

const AppContext = React.createContext<Context>({
  selectedPost: null,
  handlePostSelection: () => {},
  fetchError: false,
});

export default AppContext;
