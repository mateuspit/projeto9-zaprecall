import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"

export default function HomePage(props) {
    return (
        <ContainerHomePage>
            <LogoHome src={Logo} alt="Logo" />
            <TitleHome>ZapRecall</TitleHome>
            <ButtonHome onClick={() => props.hideHomePage()}>Iniciar Recall!</ButtonHome>
        </ContainerHomePage>
    );
}

const ContainerHomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const LogoHome = styled.img`
    width: 136px;
    margin-top: 148px;
`;

const TitleHome = styled.h1`
    color: white;
    font-size: 36px;
    font-family: 'Righteous', cursive;
    margin-top: 13px;
    margin-bottom: 30px;
`;

const ButtonHome = styled.button`
    width: 246px;
    height: 54px;
    color: #D70900;
    background-color: #ffffff;
    border-radius: 5px;
    border: solid 1px #D70900;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
`;