import React from 'react';
import { Link } from 'react-router-dom';
import content from './content.tsx';
import "./features.css"
export const Features = () => (
  <>
    <Link to="/shop">
      <section className="feature pad">
        {content.map((user) => (
          <>
            <div className="content">
              <img src={user.image}  />
              <h6>{user.desc}</h6>
            </div>
          </>
        ))}
      </section>
    </Link>
  </>
);
