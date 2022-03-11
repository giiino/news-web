import React from 'react'
import {
    ErrorWrapper,
    ErrorEmoji,
    ErrorTitle,
    ErrorTitleItem,
    ErrorDetail
} from './style';
const ErrorPage = () => {
    return (
        <>
            <ErrorWrapper>
                <ErrorEmoji>☹</ErrorEmoji>
                <ErrorTitle>
                    <ErrorTitleItem className='errorNum'>404</ErrorTitleItem>
                    <ErrorTitleItem className='error'>Page not found</ErrorTitleItem>
                </ErrorTitle>
                <ErrorDetail>I'm sorry that the page you searched for does not exist, please confirm the correct URL</ErrorDetail>
            </ErrorWrapper>
        </>
    )
}

export default ErrorPage
