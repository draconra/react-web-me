import React, { Component } from "react";
import { RiStarSFill } from "react-icons/ri";

export default class Banner extends Component {
  render() {
    return (
      <div className="mt-8 bg-[#222222] text-white flex gap-4 text-lg font-medium uppercase py-8 px-4 overflow-x-scroll">
         <div className="flex gap-4 items-center">
            <RiStarSFill color="#f9db4b" />
            <span>UI/UX</span>
          </div>
          <div className="flex gap-4 items-center">
            <RiStarSFill color="#f9db4b" />
            <span>Developer</span>
          </div>
          <div className="flex gap-4 items-center">
            <RiStarSFill color="#f9db4b" />
            <span>Consultant</span>
          </div>
          <div className="flex gap-4 items-center">
            <RiStarSFill color="#f9db4b" />
            <span>Mobile Development</span>
          </div>
      </div>
    );
  }
}
