import { useContext, useState } from "react";
import { useLazyQuery } from "@apollo/client";
//design
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SearchContainer, SearchContent, Label } from "./Search.style";
// types & context
import { JobContext } from "../../utils/context/JobContext";
// queries
import { FEED_SEARCH_QUERY } from "../../utils/GqlQueries";
import { openNotificationWithIcon } from "../../utils/functions/Notification";
import { useHistory } from "react-router";

export const Search = () => {
  const jobContext = useContext(JobContext);
	const history = useHistory();
  const [position, setPosition] = useState<string | undefined>();
  const [city, setCity] = useState<string | undefined>();
  const [filter] = useLazyQuery(FEED_SEARCH_QUERY, {
    onCompleted: (data) => {
			history.push("/find-a-job/1");
      jobContext.setJobList(data.feed.jobs);
			jobContext.setCount(data.feed.count);
      if (data.feed.jobs.length === 0) {
        openNotificationWithIcon(
          "error",
          "Sorry!",
          "We didn't find any job with the given parameters."
        );
      }
    },
    onError: (error) => {
      console.log(error);
      openNotificationWithIcon(
        "error",
        "Error",
        "Unexpected error happened! Please try again!"
      );
    },
  });

  const search = (position: string | undefined, city: string | undefined) => {
    filter({
      variables: {
        filter: {
          position: position,
          location: city,
        },
      },
    });
  };

  return (
    <>
      <SearchContainer>
        <SearchContent>
          <div>
            <Label htmlFor="position">What is your dream job?</Label>
            <Input
              className="input"
              placeholder="Job title"
              allowClear
              type="text"
              name="position"
              autoComplete="off"
              onChange={(e) => setPosition(e.target.value)}
            ></Input>
          </div>
          <div>
            <Label htmlFor="location">Where would you like to work?</Label>
            <Input
              className="input"
              placeholder="City name (or 'Remote')"
              allowClear
              type="text"
              name="location"
              autoComplete="off"
              onChange={(e) => setCity(e.target.value)}
            ></Input>
          </div>
          <Button
            type="primary"
            className="searchBtn"
            onClick={() => search(position, city)}>
            <SearchOutlined className="searchIcon" /> Find{" "}
          </Button>
        </SearchContent>
      </SearchContainer>
    </>
  );
};
