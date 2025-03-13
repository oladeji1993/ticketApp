import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between p-4 text-[#f1f3f5] bg-[#18222f]">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />Home
        </Link>

        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" /> Create New
        </Link>
      </div>
      <div>
        <p>Oladejiolanipekun@yahoo.com</p>
      </div>
    </nav>
  );
};

export default Nav;
