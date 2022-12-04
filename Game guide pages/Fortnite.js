import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import styled from 'styled-components';

const Container = styled.div``

const ImageContainer = styled.div`
    display: flex;
`

const Image = styled.img`
width: 70vw;
margin: 10px;
`

const Title = styled.h1`
    padding-left: 10px;
    font-size: 80px;
    text-align: center;
    padding-top: 120px;
`
const Options = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 90px;
`
const Processors = styled.select`
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  width: 15vw;
  border-radius: 10px;
  &:hover {
    background-color: lightgray;
  }
`;

const Ram = styled.select`
margin: 10px;
padding: 5px;
cursor: pointer;
width: 15vw;
border-radius: 10px;
font-size: 15px;
&:hover {
  background-color: lightgray;
}
`
const RamOptions = styled.option``;

const ProcessorOptions = styled.option``;

const MinReq = styled.div`
    width: 30vw;
    height: 30vh;
    background: lightgray;
    margin-left: 22%;
    padding: 10px;
    position: absolute;
    top: 96%;
    font-size: 19px;
`
const MinTitle = styled.h3`
    text-align: center;
`
const OffReq = styled.div`
    width: 30vw;
    height: 30vh;
    background: lightgray;
    margin-left: 60%;
    padding: 10px;
    position: absolute;
    top: 96%;
    font-size: 19px;
`
const OffTitle = styled.h3`
    text-align: center;
`

const InGameTune = styled.div`
    margin-top: 9%;
    margin-left: 40px;
`
const TuneTerms = styled.span`
    padding: 5px;
    font-weight: bold;
    color: black;
`
const TuneDesc = styled.div``



const TuneDecImg = styled.img`
    width: 40vw;
    height: 40vh;
    margin-left: 20%;
    margin-top: 30px;
`

const Fortnite = () => {
  return (
    <Container>
        <Navbar />
        <ImageContainer>
            <Image src={require('../images/fortnite.jpg')}></Image>
            <Title>Best Tune for Flawless Gameplay of Fortnite</Title>
        </ImageContainer>
        <Options>
            <Processors>
                <ProcessorOptions>Choose Processor</ProcessorOptions>
                <ProcessorOptions>i3</ProcessorOptions>
                <ProcessorOptions>i5</ProcessorOptions>
                <ProcessorOptions>i7</ProcessorOptions>
                <ProcessorOptions>Ryzen 9</ProcessorOptions>
            </Processors>
            <Ram>
                <RamOptions>Choose RAM</RamOptions>
                <RamOptions>2GB</RamOptions>
                <RamOptions>4GB</RamOptions>
                <RamOptions>8GB</RamOptions>
                <RamOptions>16GB</RamOptions>
            </Ram>
        </Options>
        <MinReq>
                <MinTitle>Minimum Requirements</MinTitle>
                <ul>
                    <li>OS: Windows 7/8/10 64 Bit</li>
                    <li>Processor: Core i3 2.4 Ghz</li>
                    <li>RAM: 2GB</li>
                    <li>Graphics: Mac computers must support Metal API. Check if your Mac supports Metal</li>
                    <li>HDD Space: 32GB</li>                    
                </ul>
        </MinReq>
        <OffReq>
            <OffTitle>Official Requirements</OffTitle>
            <ul>
                    <li>OS: Windows 7/8/10 64 Bit</li>
                    <li>Processor: Intel Core i5 2.8 Ghz </li>
                    <li>RAM: 8GB</li>
                    <li>Graphics: Nvidia GTX 660 or AMD Radeon HD 7870 equivalent DX11 GPU 2GB</li>
                    <li>HDD Space: 32GB</li>                    
                </ul>
        </OffReq>
        <InGameTune>
            <h2>In Game Suggestions for a Better Performance : </h2>
            <p>The settings given below can be useful for enhanced gameplay</p>
            <TuneTerms>
                <br />
                Lower Anti-Aliasing to Off<br/>
                Set 3D Resolution to 480p or 720p<br/>
                Set Shadows to Off.<br/>
                Use the lowest Graphics Quality Preset<br/>
                Set Shadows to Medium<br/>
                Set View Distance to Near<br/>
                Lower Anti-Aliasing and/or Shadow settings slightly<br/>
                Set Effects to Low<br/>
            </TuneTerms>
            <TuneDesc>
                <h3>Description of each setting and how it affects the game </h3>
                <ul>
                    <li>
                    <b>Anti-Aliasing </b>: One of the more subtle changes by itself is anti-aliasing. This is one of the greater benefits of the cartoon-style graphics, as finer detail like smooth edges are not always noticed, especially when playing at high resolutions.
                    <TuneDecImg src={require('../images/anti_aliasing.jpg')} />
                    </li>
                    <br/>
                    <li>
                    <b>3D-Resolution</b> : This is the resolution to which the game engine will render everything. Therefore, the game quality can look poor when this is set to 480p on a 1080p monitor higher experience.
                    <TuneDecImg src={require('../images/3D.jpg')}></TuneDecImg>
                    </li>
                    <br/>
                    <li>
                    <b>View-Distance </b>: View Distance controls objects to be rendered at a preset distance. This is contrary to the beliefs that you should maxed out view distance to see everything.
                    </li>
                    <br/>
                </ul>
            </TuneDesc>
        </InGameTune>

    </Container>
  )
}

export default Fortnite
