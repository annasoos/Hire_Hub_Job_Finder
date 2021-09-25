import { FilterContainer, FilterContent } from "./FilterBar.style";
import { Button, Input, Switch } from "antd";
import { FilterOutlined } from "@ant-design/icons";

export const FilterBar = () => {
	return (
		<>
		<FilterContainer>
			<FilterContent>
				<div>
					<Input
						className="input"
						placeholder="Title"
						allowClear
						type="text"
						name="title"
						autoComplete="off"
					></Input>
				</div>
				<div>
					<Input
						className="input"
						placeholder="City"
						allowClear
						type="text"
						name="location"
						autoComplete="off"
					></Input>
				</div>
				<div>
					<Input
						className="input"
						placeholder="Company name"
						allowClear
						type="text"
						name="company"
						autoComplete="off"
					></Input>
				</div>
				<div>
					<span style={{color: "white"}}>Junior level only</span><Switch defaultChecked/>
				</div>
				<Button type="primary" className="filterBtn"> <FilterOutlined className="searchIcon" /> Filter </Button>
			</FilterContent>
		</FilterContainer>
	</>
	)
}