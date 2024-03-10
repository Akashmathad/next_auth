'use Client';
import { FC, ReactNode } from 'react';
import { Button } from './ui/button';

interface GoogleSigninButtonProps {
  children: ReactNode;
}

const GoogleSigninButton: FC<GoogleSigninButtonProps> = ({ children }) => {
  const loginWithGoogle = () => console.log('login with google');

  return (
    <Button className="w-full" onClick={loginWithGoogle}>
      {children}
    </Button>
  );
};

export default GoogleSigninButton;
