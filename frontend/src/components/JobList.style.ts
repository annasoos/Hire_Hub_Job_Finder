import styled from "@emotion/styled";

export const LoadingText = styled.div({
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

export const JobContainer = styled.div({
  height: "auto",
  minHeight: "50vh",
  position: "relative",
	padding: "1rem 0 5rem 0",
});

export const JobContent = styled.div({
  fontSize: "1rem",
  width: "70%",
  height: "auto",
  backgroundColor: "hsl(219, 30%, 18%)",
  padding: "2rem 2rem",
  margin: "2rem 0",
  boxShadow: "hsl(216, 53%, 9%) 0px 8px 14px",
	borderRadius: 10,

  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",

  cursor: "pointer"
});

export const Position = styled.span({
    fontSize: 20,
  },
  (props) => ({ color: props.color })
);

export const Level = styled.span({
    paddingLeft: 10,
  },
  (props) => ({ color: props.color })
);

export const Location = styled.h5({
    paddingTop: 20,
  },
  (props) => ({ color: props.color })
);

export const Company = styled.h5((props) => ({ color: props.color }));

export const Skills = styled.div((props) => ({ color: props.color }));

export const Description = styled.p({
    fontSize: 18,
    fontWeight: 300,
    paddingTop: 20,
  },
  (props) => ({ color: props.color })
);
