import React from 'react';
import './Toast.scss';

interface Props {
  errorMessage: string;
}

export const Toast: React.FC<Props> = ({ errorMessage }) => (
  <div className="toast">
    <div>
      <p>{errorMessage}</p>
    </div>
  </div>
);
