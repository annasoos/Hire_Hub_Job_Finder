import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { getData } from "../api/Fetch";
import { FilterBar } from "./FilterBar";

const grey = "hsl(0, 0%, 75%)";
const cyan = "hsl(180, 66%, 49%)";
const white = "white";

export interface IJob {
  id: number;
  position: string;
  company: string;
  isFeatured: boolean;
  level: string;
  location: string;
  skills: string[];
  description: string;
}

export const JobList = () => {
  const [data, setData] = useState<IJob[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getData("http://localhost:8080/api/find-a-job").then(setData);
    setTimeout(() => setIsLoaded(true), 1500);
  }, []);


  if (!isLoaded) {
    return (
      <JobContainer>
        <LoadingText>Searching for the best carreer options...</LoadingText>
      </JobContainer>
    );
  } else {
    return (
      <>
        <FilterBar />
        <JobContainer>
          {data.map((job: IJob, index: number) => (
            <JobContent key={index}>
              <Position color={white}>
                <b>{job.position}</b>
              </Position>
              <Level color={grey}> - {job.level} </Level>
              <Location color={cyan}> {job.location} </Location>
              <Company color={grey}> {job.company} </Company>
              <Skills color={cyan}>
                {job.skills.map((skill: string, index: number) => (
                  <span key={index}> {skill} </span>
                ))}
              </Skills>
              <Description color={white}> {job.description} </Description>
            </JobContent>
          ))}
        </JobContainer>
      </>
    );
  }
};

const LoadingText = styled.div({
  height: '50%',
  fontSize: 35,
	fontWeight: 700,
  color: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',

	'@media(max-width: 1090px)': {
    fontSize: '1.5rem'
  }
});

const JobContainer = styled.div`
  height: auto;
  min-height: 50vh;
  position: relative;
	padding: 1rem 0 5rem 0;
`;

const JobContent = styled.div`
  font-size: 1rem;
  width: 70%;
  height: auto;
  background-color: hsl(219, 30%, 18%);
  padding: 2rem 2rem;
  margin: 2rem 0;
  box-shadow: hsl(216, 53%, 9%) 0px 8px 14px;
	border-radius: 10px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  cursor: pointer;
`;

const Position = styled.span(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.color })
);

const Level = styled.span(
  {
    paddingLeft: 10,
  },
  (props) => ({ color: props.color })
);

const Location = styled.h5(
  {
    paddingTop: 20,
  },
  (props) => ({ color: props.color })
);

const Company = styled.h5((props) => ({ color: props.color }));

const Skills = styled.div((props) => ({ color: props.color }));

const Description = styled.p(
  {
    fontSize: 18,
    fontWeight: 300,
    paddingTop: 20,
  },
  (props) => ({ color: props.color })
);