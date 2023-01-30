import React from 'react';
import { BeyondImage } from "@bgroup/ui/image";
export function User() : JSX.Element {
  return (
    <div className='content-user'>
        <BeyondImage alt=" " />
        <div className='user-info'>
            <strong>Lorem ipsum</strong>
            <span>Lorem ipsum</span>
        </div>
    </div>
  )
};
