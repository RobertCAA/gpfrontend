import { Link } from "react-router-dom";
import React from "react";

const Public = () => {
  const content = (
    <section className='public'>
      <header className='public__header'>
        <h1>GP User Finder</h1>
      </header>

      <main className='public__main'>
        <p>Technical test for MongoDB data search</p>
      </main>

      <footer className='public__footer'>
        <Link to='#'>
          Done for GeoPol by <span className='nowrap'>RobertCAA</span>
        </Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
