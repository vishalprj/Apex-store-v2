import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import "./footer.css";

const socialLinks = [
  { href: "", icon: <FaFacebookF /> },
  { href: "", icon: <AiOutlineTwitter /> },
  { href: "", icon: <BsInstagram /> },
  { href: "", icon: <FaPinterestP /> },
  { href: "", icon: <AiFillYoutube /> },
];

const footerLinks = [
  {
    title: "About",
    links: [
      { text: "About Us", href: "#" },
      { text: "Delivery Information", href: "#" },
      { text: "Primary Policy", href: "#" },
      { text: "Terms & Conditions", href: "#" },
      { text: "Contact Us", href: "#" },
    ],
  },
  {
    title: "My Account",
    links: [
      { text: "Sign In", href: "#" },
      { text: "View Cart", href: "#" },
      { text: "My Wishlist", href: "#" },
      { text: "Track My Order", href: "#" },
      { text: "Help", href: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="footer footer-padding">
    <div className="col">
      <h3>Apex</h3>
      <h4>Contact</h4>
      <p><strong>Address:</strong> 562 Wellington Road Street 32, Mumbai</p>
      <p><strong>Phone:</strong> +01 2222 365/(+91) 2345 6789</p>
      <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
      <div className="follow">
        <h4>Follow Us</h4>
        <div className="icon">
          {socialLinks.map(({ href, icon }, index) => (
            <a key={index} href={href} style={{ marginRight: '0.2rem' }}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    {footerLinks.map(({ title, links }, index) => (
      <div className="col" key={index}>
        <h4>{title}</h4>
        {links.map(({ text, href }, idx) => (
          <a key={idx} href={href}>{text}</a>
        ))}
      </div>
    ))}

    <div className="col install">
      <h4>Install App</h4>
      <p>From App Store or Play Store</p>
      <div className="row">
        <img
          className="footer-img"
          style={{ marginRight: '0.5rem' }}
          src="https://res.cloudinary.com/ddlpde95c/image/upload/v1671171291/app_ypnown.jpg"
          alt="App Store"
        />
        <img
          className="footer-img"
          src="https://res.cloudinary.com/ddlpde95c/image/upload/v1671171291/play_uhhg6v.jpg"
          alt="Play Store"
        />
      </div>
      <p>Secured Payment Gateways</p>
      <img
        className="footer-img"
        src="https://res.cloudinary.com/ddlpde95c/image/upload/v1671171291/pay_abqdex.png"
        alt="Payment Gateways"
      />
    </div>
  </footer>
);


export default Footer
