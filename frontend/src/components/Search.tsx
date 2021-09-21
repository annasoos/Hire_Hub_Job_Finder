import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const Search = () => {
  return (
    <>
      <SearchContainer>
        <SearchContent>
          <div>
            <Label htmlFor="keyword">What is your dream job?</Label>
            <Input
              className="input"
              placeholder="Job title, keywords or company name"
              allowClear
              type="text"
              name="keyword"
              autoComplete="off"
            ></Input>
          </div>
          <div>
            <Label htmlFor="location">Where would you like to work?</Label>
            <Input
              className="input"
              placeholder="City name (optional)"
              allowClear
              type="text"
              name="location"
              autoComplete="off"
            ></Input>
          </div>
          <Button type="primary" className="searchBtn"> <SearchOutlined className="searchIcon" /> Find </Button>
        </SearchContent>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.section({
  width: "80%",
  height: "10rem",
  padding: "0 2rem",
  position: "absolute",
  left: "50%",
  top: "-5rem",
  transform: "translateX(-50%)",

  backgroundColor: "hsl(219, 30%, 18%)",
  boxShadow: "hsl(216, 53%, 9%) 0px 8px 14px",
  borderRadius: 10,

  zIndex: 1,

  "@media only screen and (max-width: 1090px)": {
    padding: "0 1.5rem",
    height: "16rem",
  },

  "@media only screen and (max-width: 400px)": {
    height: "20rem",
  },
})

const SearchContent = styled.div({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  transition: "all 1s ease-in-out",

  "@media only screen and (max-width: 1090px)": {
    flexDirection: "column",
    padding: "1rem",
  },

  "& .searchBtn": {
    fontSize: "1rem",
    width: "10rem",
    margin: "1.4rem 1rem 0 1rem",
    borderRadius: 10,
    border: "none",

    "&:hover": {
      backgroundColor: "hsla(180, 66%, 49%, 0.5)",
    },

    "@media only screen and (max-width: 1090px)": {
      width: "100%",
    },
  },

  "& div": {
    width: "100%",

    "& .input": {
      borderRadius: 10,
      width: "95%",
      transition: "all 1s ease-in-out",

      "@media only screen and (max-width: 1090px)": {
        textAlign: "center",
        width: "100%",
        textIndent: 0,
        margin: "0.5rem 0",
      },

      "@media only screen and (max-width: 600px)": {
        textAlign: "center",
        fontSize: "0.7rem",
      },
    },
  },
})

const Label = styled.label({
  color: "hsl(0, 0%, 75%)",
  fontSize: "0.9rem",
  margin: "0 1rem",
  fontStyle: "italic",

  "@media only screen and (max-width: 600px)": {
    margin: 0,
    fontSize: "0.8rem",
  },
})

