import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    width:100%;
    height:550px;
    background-color: #F2F2F2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:20px 0;
    color:#787878;
`;
export const ErrorEmoji = styled.div`
    font-size:200px;
    height:40%;
`;
export const ErrorTitle = styled.div`
    height:35%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
export const ErrorTitleItem = styled.div`
    &.error{
        height:50%;
        font-size:40px;
        color:#909090;
    }
    &.errorNum{
        height:50%;
        font-weight:800;
        font-size:80px;
    }
`;
export const ErrorDetail = styled.div`
    height:20%;
    padding:0 10px;
    text-align:center;
    line-height:1.3;
`;
