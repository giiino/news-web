import React from 'react';
import {
    MainSectionWrapper,
    SectionTitleWrapper,
    MainTitle,
    SecondTitleWrapper,
    SecondTitle,
    VideoSection,
    MainVideo,
    SectionTagWrapper,
    TagTitle,
    TagText
} from './style';

const WebMainSection = ({VideoSectionbol, video, TagWrapperbol, TagTitleText, TagTextbol}) =>{
        return (
            <MainSectionWrapper>
                <SectionTitleWrapper>
                    <MainTitle>TheHours</MainTitle>
                    <SecondTitleWrapper>
                        <SecondTitle>News&</SecondTitle>
                        <SecondTitle>Opinion</SecondTitle>
                        <SecondTitle>Blog</SecondTitle>
                    </SecondTitleWrapper>
                </SectionTitleWrapper>
                <VideoSection VideoSectionbol={VideoSectionbol}>
                    <MainVideo autoPlay={true} loop={true} muted={true} src={video} type='video/mp4' />
                    <SectionTagWrapper TagWrapperbol={TagWrapperbol}>
                        <TagTitle>{TagTitleText}</TagTitle>
                        <TagText TagTextbol={TagTextbol}>NASDAQ drops 20%, world markets react</TagText>
                    </SectionTagWrapper>
                </VideoSection>

            </MainSectionWrapper>
        )
}

export default WebMainSection
