import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-800 text-gray-600 cursor-pointer">
      <div className="space-y-4 text-xs text-green-500  ">
        <h5 className="font-bold">About</h5>
        <p>How NILI works</p>
        <p>News Rooms</p>
        <p>Investors</p>
        <p>NILI Pro</p>
      </div>
      <div className="space-y-4 text-xs text-green-500">
        <h5 className="font-bold">Community</h5>
        <p>Accessibility</p>
        <p>Discord</p>
        <p>Instagram</p>
        <p>Snap</p>
      </div>
      <div className="space-y-4 text-xs text-green-500">
        <h5 className="font-bold">Host</h5>
        <p>Suhas</p>
        <p>Presents</p>
        <p>NILI</p>
        <p>Night Life </p>
      </div>
      <div className="space-y-4 text-xs text-green-500">
        <h5 className="font-bold">Support</h5>
        <p>Help center</p>
        <p>Trust and Safety</p>
        <p>Coustomer Care</p>
        <p>Payments</p>
      </div>
    </div>
  );
}

export default Footer;
