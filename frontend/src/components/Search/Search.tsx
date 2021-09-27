import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SearchContainer, SearchContent, Label } from "./Search.style";

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


