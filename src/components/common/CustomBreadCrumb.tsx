import React from "react";
import { HomeIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { IBreadCrumb } from "./type";

const CustomBreadcrumbs: React.FC<IBreadCrumb> = ({ items }) => {
  const labels = items.split(">");
  const separator = <span className="ml-2 font-normal">{">"}</span>;

  return (
    <div className="md:flex items-center gap-2 hidden">
      <HomeIcon />
      {separator}
      {labels.map((label, index) => {
        const isLast = index === labels.length - 1;
        return (
          <React.Fragment key={index + 1}>
            <p
              className={`text-sm ${
                isLast
                  ? "text-blue font-semibold"
                  : "font-semibold text-dark-gray"
              }`}
            >
              <Link
                to={`/app/${label.toLowerCase().split(" ").join("-")}`}
                className="hover:text-dark-blue"
              >
                {label}
              </Link>
              {!isLast && separator}
            </p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CustomBreadcrumbs;
