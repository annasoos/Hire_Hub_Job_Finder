import styled from "@emotion/styled";
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

const FilterContainer = styled.section`
  width: 70%;
  height: 10rem;
  padding: 0 2rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  background-color: hsla(180, 66%, 45%, 0.6);
  box-shadow: hsl(216, 53%, 9%) 0px 8px 14px;
  border-radius: 10px;

  z-index: 1;

  @media only screen and (max-width: 1090px) {
    padding: 0 1.5rem;
    height: 16rem;
  }

  @media only screen and (max-width: 400px) {
    height: 20rem;
  } ;
`;

const FilterContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: all 1s ease-in-out;

  @media only screen and (max-width: 1090px) {
    flex-direction: column;
    padding: 1rem;
  }

  & .filterBtn {
    font-size: 1rem;
    width: 10rem;
    margin: 0 1rem 0 1rem;
    border-radius: 10px;
    border: none;
		color: hsl(217, 28%, 15%);

    &:hover {
      background-color: hsla(180, 66%, 49%, 0.5);
			color: white;
    }

    @media only screen and (max-width: 1090px) {
      width: 100%;
    }
  }

  & div {
    width: 100%;

    & .input {
      border-radius: 10px;
      width: 95%;
      transition: all 1s ease-in-out;

      @media only screen and (max-width: 1090px) {
        text-align: center;
        width: 100%;
        text-indent: 0;
        margin: 0.5rem 0;
      }

      @media only screen and (max-width: 600px) {
        text-align: center;
        font-size: 0.7rem;
      }
    }

		& .ant-switch {
			margin-left: 0.5rem;
		}

		&.ant-switch-handle::before{
			width: 18px;
		}
  }
`;


