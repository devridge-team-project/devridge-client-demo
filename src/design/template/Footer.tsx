import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-[250px] bg-black">
      <div className="flex justify-center pt-40">
        <Link to="https://github.com/">
          <img src="/images/icons/github.png" alt="gitHub" className="w-7.5 h-7.5 mr-2.5" />
        </Link>
        <Link to="https://www.instagram.com/">
          <img src="/images/icons/instagram.png" alt="instagram" className="w-7.5 h-7.5 mr-2.5" />
        </Link>
        <Link to="https://kr.linkedin.com/">
          <img src="/images/icons/linkedIn.png" alt="linkedIn" className="w-7.5 h-7.5 mr-2.5" />
        </Link>
      </div>
      <div className="font-bold flex justify-center pt-1 text-white">
        © 2024 DEVRIDGE, All rights reserved. di
      </div>
    </div>
  );
}
