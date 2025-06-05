import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <ul className="flex items-center gap-3">
      <li className="text-2xl text-red-500 flex-1 flex justify-center shadow-md p-4">
        <a href="#" className="block text-inherit">
          <FaGoogle />
        </a>
      </li>
      <li className="text-2xl text-blue-800 flex-1 flex justify-center shadow-md p-4">
        <a href="" className="block text-inherit">
          <FaFacebookF />
        </a>
      </li>
      <li className="text-2xl text-blue-500 flex-1 flex justify-center shadow-md p-4">
        <a href="" className="block text-inherit">
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
}
