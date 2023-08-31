import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
// DATAS
// ICONS
import { SlArrowDown } from "react-icons/sl";
import ListProjectsVSMobile from "./ListProjectsVSMobile";
import { valueCategory } from "@/utils/assets/data/projects/mobile/DataValueCategory";

//////////////////// EXPORT FUNCTION ///////////////////
export default function DropDownCategories() {
  //////////////////// STYLES CATEGORIES ////////////////////
  const BoxCategory = styled(Box)(({ theme }) => ({
    alignItems: "center",
    color: "#FFF",
    display: "flex",
    fontSize: "20px",
    fontWeight: "500",
    left: "50px",
    position: "absolute",
    top: "80px",
  }));

  const Dropdown = styled(Box)(({ theme }) => ({
    background: "#000",
    border: "1px solid #FFF",
    margin: "100px auto",
    position: "relative",
    userSelect: "none",
    width: "250px",
  }));

  const DropdownBtn = styled(Box)(({ theme }) => ({
    alignItems: "center",
    background: "#000",
    boxShadow: "3px 3px 10px 6px rgba(0, 0, 0, 0.06)",
    color: "#FFF",
    display: "flex",
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: "15px 20px",
  }));

  const DropdownItem = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    padding: "10px",
    transition: "all 0.2s",
    "&:hover": {
      background: "#333",
    },
  }));

  const styleLink = {
    color: "#FFF",
    cursor: "pointer",
    textDecoration: "none",
  };

  //////////////////// DROPDOWN CATEGORIES ////////////////////
  const [selected, setSelected] = useState(
    "Sélectionnez la catégorie des projets réalisés"
  );
  const [isActive, setIsActive] = useState(false);
  const [test, settest] = useState("");

  console.log(selected);

  function HandleDropDownCategoryProjects(e) {
    setSelected(e.target.textContent);
    setIsActive(false);
  }
  
  return (
    <>
      <Dropdown>
        <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
          <Typography>{selected}</Typography>
          {/* <h2>{test}</h2> */}
          <SlArrowDown size={25} />
        </DropdownBtn>
        {isActive && (
          <>
            {valueCategory.map(({ textCategory, value }) => (
              <div
                key={textCategory}
                style={styleLink}
                onClick={HandleDropDownCategoryProjects}
              >
                <DropdownItem>
                  <Typography>{value}</Typography>
                </DropdownItem>
              </div>
            ))}
          </>
        )}
      </Dropdown>

      <ListProjectsVSMobile selected={selected} />
    </>
  );
}
