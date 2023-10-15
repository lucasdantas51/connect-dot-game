import { styled, css } from "styled-components";

export default styled.div`
	width: fit-content;
	margin: auto;
	display: grid;
	background: #DDDDDD;
	border: 1px solid #CCC;
	box-shadow: 4px 0px 1rem #FFFFFF1A;
	border-radius: 1rem;
	overflow: hidden;
	gap: 1px;
	${({$size}) => {
		switch ($size) {
			case 16: 
				return css`
					grid-template-columns: 1fr 1fr 1fr 1fr; 
					grid-template-rows: 1fr 1fr 1fr 1fr; 
				`;
			default:
				return css`
					grid-template-columns: 1fr 1fr 1fr; 
					grid-template-rows: 1fr 1fr 1fr; 
				`;
		}
	}};

	button.reset {
		background: #FFFFFF;
		padding: 1rem;
		margin-top: 1rem;
	}
`;

