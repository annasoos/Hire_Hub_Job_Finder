import { useContext } from "react";
import { useLazyQuery } from "@apollo/client";
//design
import { FilterContainer, FilterContent } from "./FilterBar.style";
import { Form, Button, Input, Switch } from "antd";
import { FilterOutlined } from "@ant-design/icons";
// types & context
import { SearchValuesType } from "../../utils/types/SearchValuesType";
import { JobContext } from "../../utils/context/JobContext";
// queries
import { FEED_SEARCH_QUERY } from "../../utils/GqlQueries";
import { openNotificationWithIcon } from "../../utils/functions/Notification";

export const FilterBar = () => {
	const jobContext = useContext(JobContext);
  const [filter, { data, loading, error }] = useLazyQuery(FEED_SEARCH_QUERY, {
		onCompleted: (data) => {
			jobContext.setJobList(data.feed.jobs)
			if (data.feed.jobs.length === 0) {
			openNotificationWithIcon("error", "Sorry!", "We didn't find any job with the given parameters.");
			}
		},
		onError: (error) => {
			console.log(error)
			openNotificationWithIcon("error", "Error", "Unexpected error happened! Please try again!")
		}
	});

  const search = (values: SearchValuesType) => {
		console.log(values)
		let isJuniorValue = values.isJunior
		if (values.isJunior === undefined) {
			isJuniorValue = true
		}
    filter({
      variables: {
        filter: {
          position: values.position,
          company: values.company,
          location: values.location,
					isJunior: isJuniorValue,
        },
      },
    })
  };

  return (
    <>
      <FilterContainer>
        <FilterContent>
          <Form className="searchForm" onFinish={search} autoComplete="off" layout="inline" >
            <div>
              <Form.Item name="position">
                <Input
                  className="input"
                  placeholder="Title"
                  allowClear
                  type="text"
                ></Input>
              </Form.Item>
            </div>
            <div>
              <Form.Item name="location">
                <Input
                  className="input"
                  placeholder="City"
                  allowClear
                  type="text"
                ></Input>
              </Form.Item>
            </div>
            <div>
              <Form.Item name="company">
                <Input
                  className="input"
                  placeholder="Company name"
                  allowClear
                  type="text"
                ></Input>
              </Form.Item>
            </div>
            <div>
              <span style={{ color: "white" }}>Junior level only</span>
              <Form.Item name="isJunior" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
            </div>

            <Form.Item noStyle>
              <Button type="primary" className="filterBtn" htmlType="submit">
                <FilterOutlined className="searchIcon" /> Filter
              </Button>
            </Form.Item>
          </Form>
        </FilterContent>
      </FilterContainer>
    </>
  );
};
