import React from "react";

export default function Header() {
  const navigationButton = [
    {
      text: "Home",
      url: "/home",
    },
    {
      text: "Service",
      url: "/services",
    },
    {
      text: "Portfolios",
      url: "/portfolio",
    },
    {
      text: "Testimonials",
      url: "/testimonials",
    },
  ];
  return (
    <div className="flex justify-between items-center">
      <div>
        {/* logo */}
        <span className="text-4xl font-bold">SUM</span>
      </div>
      <div className="flex gap-3">
        {/* menu buttons */}
        {navigationButton.map((menuItem, idx) => {
          return (
            <a key={idx} href={menuItem.url} className="cursor-pointer">
              {menuItem.text}
            </a>
          );
        })}
      </div>
      <div>
        {/* cta */}
        <button className="bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">
          Let's Talk.
        </button>
      </div>
    </div>
  );
}
