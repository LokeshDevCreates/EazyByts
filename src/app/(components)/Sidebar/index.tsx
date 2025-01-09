"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Award,
  Code,
  Edit,
  FolderOpen,
  HomeIcon,
  LayoutDashboard,
  LucideIcon,
  Menu,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link"; 
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const smoothScroll = (target: HTMLElement) => {
    const duration = 1500;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (
      t: number,
      b: number,
      c: number,
      d: number
    ): number => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = (e: React.MouseEvent) => {
    // Only handle internal section scrolling
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href) as HTMLElement;
      if (section) {
        smoothScroll(section);
      }
    }
  };

  return href.startsWith("#") ? (
    // For internal sections, apply smooth scrolling
    <div
      onClick={handleScroll}
      className={`cursor-pointer flex items-center ${
        isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
      } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors`}
    >
      <Icon className="w-6 h-6 !text-gray-700" />
      <span
        className={`${
          isCollapsed ? "hidden" : "block"
        } font-medium text-gray-700`}
      >
        {label}
      </span>
    </div>
  ) : (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* Top Logo */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>
          <User />
        </div>
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          LOKESH
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="#home"
          icon={HomeIcon}
          label="Home"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#projects"
          icon={FolderOpen}
          label="Projects"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#skills"
          icon={Code}
          label="Skills"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#achievements"
          icon={Award}
          label="Achievements"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#blog"
          icon={Edit}
          label="Blog"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#contact"
          icon={Phone}
          label="Contact"
          isCollapsed={isSidebarCollapsed}
        />
        {/* Dashboard - No changes */}
        <SidebarLink
          href="/login"
          icon={LayoutDashboard}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      {/* Footer */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Lokesh</p>
      </div>
    </div>
  );
};

export default Sidebar;
