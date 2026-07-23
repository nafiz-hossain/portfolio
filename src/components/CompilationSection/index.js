import React from 'react';
import CompilationBgAnimation from '../CompilationBgAnimation';
import { CompilationContainer, CompilationBg, CompilationLeftContainer, Img, CompilationRightContainer, CompilationInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, LetsTalkButton, ResumeButtonWrapper } from './CompilationStyle';
import CompilationImg from '../../images/vanfare.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const CompilationSection = () => {
    const handleLetsTalkClick = () => {
        // Code to scroll down to the contact section
        // You can implement this using a library like react-scroll or a custom function
    };

    return (
        <div id="about">
            <CompilationContainer>
                <CompilationBg>
                    <CompilationBgAnimation />
                </CompilationBg>
                <CompilationInnerContainer >
                    <CompilationLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>
                          As a Senior SQA Engineer at
                          Exabyting, I ensure the delivery of high-quality software through strong testing strategies, automation, and attention to detail. I'm committed to exceeding client expectations and driving continuous improvement across every project.
                        </SubTitle>
                        <ResumeButtonWrapper>
                            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                            <LetsTalkButton href='#contact' onClick={handleLetsTalkClick}>Let's Talk</LetsTalkButton>
                        </ResumeButtonWrapper>
                    </CompilationLeftContainer>
                    <CompilationRightContainer id="Right">
                        <Img src={CompilationImg} alt="Compilation-image" />
                    </CompilationRightContainer>
                </CompilationInnerContainer>
            </CompilationContainer>
        </div>
    );
};

export default CompilationSection;
