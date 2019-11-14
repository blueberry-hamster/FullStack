import React from 'react';

const About = () => {
  return (
    <div id='about-container'>
      <div id='about-title'>
        <h3>About <i>Glossier</i>.</h3>
      </div>
      <div id='about-points'>
        <div className='about-point'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="#fff" r="14.4" />
            <path d="M16.2 32C7.3 32 .2 25.1 0 16.2 0 7.3 7.1 0 15.8 0c8.9 0 16 6.9 16.2 15.8.2 8.7-6.9 16-15.8 16.2zm-.4-29.6C8.4 2.4 2.4 8.6 2.4 16.2c.2 7.5 6.2 13.4 13.7 13.4 7.6-.2 13.6-6.3 13.4-13.7-.1-7.6-6.2-13.5-13.7-13.5zm0 24.5c-4.8 0-8.9-3.2-10-7.6-.3 0-.6-.1-.8-.4-.5-.5-.5-1.2-.1-1.7.4-.4 1-.7 1.6-.7 1-.2 1.8.3 2 .4.6.4.7 1.1.3 1.7-.2.2-.4.4-.6.5 1 3.2 4.3 5.5 7.9 5.4 3.8 0 6.9-2.3 7.8-5.5-.4-.1-.8-.3-.9-.7-.3-.6 0-1.3.5-1.6.2-.1.8-.3 1.8-.3h.2c.1 0 .2 0 .3.1.5.1.9.3 1.2.7.5.5.5 1.2 0 1.7-.2.2-.4.3-.6.3-1.1 4.5-5.2 7.8-10.3 7.8-.1-.1-.2-.1-.3-.1zm4.4-16c0 1.9.8 3.4 1.5 3.4s1.3-1.5 1.3-3.4-.8-3.4-1.5-3.4c-.8 0-1.3 1.5-1.3 3.4m-5.5.2c0 1.9.8 3.4 1.5 3.4s1.3-1.5 1.3-3.4-.7-3.4-1.5-3.4-1.3 1.5-1.3 3.4m-5.9 0c0 1.9.8 3.4 1.5 3.4.8 0 1.3-1.5 1.3-3.4s-.8-3.4-1.5-3.4-1.3 1.5-1.3 3.4" />
          </svg>
          <p>
            We got our start with Into The Gloss, the world’s best beauty website and our source for inspiration and information.
          </p>
        </div>
        <div className='about-point'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M21.2 19.5v-5.4c0-.6-.5-1-1-1h-.1V5.5c0-1.9-2.1-4-3.6-5-.9-.5-1.6-.7-2.1-.4C12.8.9 12 3.5 12 5.4v7.7h-.1c-.6 0-1 .5-1 1v5.4c-.3.2-.5.5-.5.8V31c0 .6.5 1 1 1h9.3c.6 0 1-.5 1-1V20.4c0-.4-.2-.7-.5-.9zm-2-4.3v4.2h-6.4v-4.2zm.4 14.8h-7.3v-8.6h7.3z" />
            <path d="M19.7 21.4h-7.3V30h7.3zM17.8 6.9c-1.1-.1-2-.5-2.6-1.2-1.3-1.5-1.2-4-1.2-4.1 0-.4.4-.7.8-.6.4 0 .6.4.6.7 0 0-.1 2 .8 3.1.4.4.9.7 1.6.7.4 0 .7.3.7.7s-.3.7-.7.7zm1.4 8.3h-6.4v4.2h6.3z" fill="#fff" />
          </svg>
          <p>
            As beauty editors, we’ve tried it all. We make our dream everyday products that don’t yet exist, are fun to use, and actually work.
          </p>
        </div>
        <div className='about-point'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M12 27.3l3.3-9c.1-.3 0-.6-.1-.9-.2-.3-.5-.4-.8-.4H5.5L18.1 4.7 15.4 12c-.1.3-.1.6.1.9s.5.4.8.4h10.2z" fill="#fff" />
            <path d="M29 11.3H17.8l3.6-10c.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1L2.3 17.1c-.3.3-.4.7-.3 1.1s.5.7 1 .7h10L8.6 30.7c-.2.4 0 .9.4 1.2.2 0 .4.1.6.1.3 0 .5-.1.7-.3L29.7 13c.3-.3.4-.7.2-1.1-.1-.3-.5-.6-.9-.6zm-17 16l3.3-9c.1-.3 0-.6-.1-.9-.2-.3-.5-.4-.8-.4H5.5L18.1 4.7 15.4 12c-.1.3-.1.6.1.9s.5.4.8.4h10.2z" />
          </svg>
          <p>
            We stay in constant communication with real Glossier users to give you what you want (and because we enjoy it).
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
