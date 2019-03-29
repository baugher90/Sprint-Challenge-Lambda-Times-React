import styled from 'styled-components';



//--------------------------------------------
export const AppCont = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
`;
//--------------------------------------------
export const TopCont = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
    
    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

export const Cont = styled.section`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    
    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

export const ContLeft = styled.section`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;

    span {
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
    }
`;

export const ContCenter = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
    span {
        cursor: pointer;
            margin-right: 5%;
            
        :last-child {
            margin-right: 0;
        }
            
        :hover {
            text-decoration: underline;
        }
    }
`;

export const ContRight = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    
    span {
        cursor: pointer;
    }
`;
//--------------------------------------------

//--------------------------------------------
export const ContentContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`;
//--------------------------------------------
export const CardsContainer = styled.section`
display: flex;
justify-content: space-evenly;
align-items: none;
flex-direction: row;
width: 100%;
margin-top: 16px;
flex-wrap: wrap;

@media (min-width: 1200px) {
    width: 1200px;
}
`;
//--------------------------------------------
export const CardCont = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 330px;
    margin-bottom: 16px;
    padding: 24px;
`;

export const Headline = styled.div`
    font-size: 25px;
    font-family: Didot, serif;
`;

export const Author = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    
    span {
        padding-left: 10px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
    }
`;

export const ImageCont = styled.div`
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
    
    img {
        width: 40px;
    }
`;
//--------------------------------------------
export const TabsCont = styled.section`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 47px;
    background-color: #fff;
`;

export const Topics = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.span`
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
`;
//--------------------------------------------
export const TabCont = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
color: ${ props => props.active ? "#333" : "#fff" };
background-color: ${ props => props.active ? "#fff" : "#333" };
margin: 0 5px;
padding: 2px 10px;
font-size: 12px;
letter-spacing: 2px;
cursor: pointer;
font-weight: bold;
border: ${ props => props.active ? "2px solid #333" : "none" };

:hover {
    text-decoration: underline;
}
`;
//--------------------------------------------
//--------------------------------------------