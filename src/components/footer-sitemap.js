import React from 'react';
import {
  Link
} from 'gatsby';

const FooterSitemap = () => (
  <div
    className="footer-boxes p-3 mb-3 border rounded w-100 align-items-stretch">
    <h5
      className="h4">
      Sitemap
    </h5>
    <div
      className="footer-sitemap d-flex flex-wrap justify-content-between">
      <p>
        <Link
          className="footer-nav-link"
          to="/">
          Home
        </Link>
      </p>
      <p>
        <Link
          className="footer-nav-link"
          to="/about/">
          About
        </Link>
      </p>
      <p>
        <Link
          className="footer-nav-link"
          to="/services/">
          Services
        </Link>
      </p>
      <p>
        <Link
          className="footer-nav-link"
          to="/contact/">
          Contact
        </Link>
      </p>
    </div>
    <div
      className="dropdown-divider mt-0 mb-3"></div>
    <h5
      className="h4">
      Phone
    </h5>
    <p>
      <a
        className="footer-nav-link"
        href="tel:+16264431788">
        626-443-1788
      </a>
    </p>
    <div
      className="dropdown-divider mt-0 mb-3"></div>
    <h5
      className="h4">
      Address
    </h5>
    <p
      className="mb-0">
      <a
        className="footer-nav-link"
        href="https://goo.gl/maps/FPit6BzCJBE5aPV38"
        target="_blank"
        rel="noopener noreferrer">
          4534 Baldwin Ave,<br/>
          El Monte, CA 91731
      </a>
    </p>
  </div>
);

export default FooterSitemap;
