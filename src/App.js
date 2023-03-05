import { createGlobalStyle } from 'styled-components'
import React from "react";
import HomePage from "./components/HomePage";
import QuestionsPage from "./components/QuestionsPage";

export default function App() {
	const [homePageUp, setHomePageUp] = React.useState("flex");
	const [questionPageUp, setQuestionPageUp] = React.useState("none");
	const [showQuestion, setShowQuestion] = React.useState("none")
	const [showedQuestions, setShowedQuestions] = React.useState([]);
	const [answeredQuestions, setAnsweredQuestions] = React.useState([]);
	const [wrongAnsweredQuestions, setWrongAnsweredQuestions] = React.useState([]);
	const [almostAnsweredQuestions, setAlmostAnsweredQuestions] = React.useState([]);
	const [rightAnsweredQuestions, setRightAnsweredQuestions] = React.useState([]);

	function hideHomePage() {
		setHomePageUp("none");
		setQuestionPageUp("flex");
	}

	function showQuestionFunction(i) {
		const newShowedQuestions = [...showedQuestions, i];
        setShowedQuestions(newShowedQuestions);
	}

	function showAnswerFunction(i){
		const newAnsweredQuestions = [...answeredQuestions, i];
        setAnsweredQuestions(newAnsweredQuestions);
	}

	// function forgotButtonFunction(i){
	// 	alert("esqueceu");	
	// 	setWrongAnsweredQuestions(...wrongAnsweredQuestions, i)	
	// }

	// function almostButtonFunction(i){
	// 	alert("quasee");
	// 	setAlmostAnsweredQuestions(...almostAnsweredQuestions, i)					
	// }

	// function rightButtonFunction(i){
	// 	alert("lembresasi");	
	// 	setRightAnsweredQuestions(...rightAnsweredQuestions, i)				
	// }

	return (
		<>
			<Reset />
			<ContainerSite />

			<HomePage hideHomePage={hideHomePage} homePageUp={homePageUp} />

			<QuestionsPage 
			wrongAnsweredQuestions={wrongAnsweredQuestions}
			almostAnsweredQuestions={almostAnsweredQuestions}
			rightAnsweredQuestions={rightAnsweredQuestions}
			// forgotButtonFunction={forgotButtonFunction}
			// almostButtonFunction={almostButtonFunction}
			// rightButtonFunction={rightButtonFunction}
			answeredQuestions={answeredQuestions} 
			showAnswerFunction={showAnswerFunction} 
			showedQuestions={showedQuestions} 
			showQuestion={showQuestion} 
			questionPageUp={questionPageUp} 
			showQuestionFunction={showQuestionFunction} 
			/>
		</>
	);
}

const ContainerSite = createGlobalStyle`
    body {
      background-color: #FB6B6B;
    }
    * {
	    box-sizing: border-box;
    }
`;

const Reset = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}  
`;