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

const COD = () => {
  return (
    <Container>
        <Navbar />
        <ImageContainer>
            <Image src={require('../images/COD.jpg')}></Image>
            <Title>Best Tune for Flawless Gameplay of Call of Duty</Title>
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
                    <li>OS: Windows 10 64 Bit</li>
                    <li>Processor: Intel Core i3-6100 / Core i5-2500K or AMD Ryzen 3 1200</li>
                    <li>RAM: 8GB</li>
                    <li>Graphics: NVIDIA GeForce GTX 960 or AMD Radeon RX 470 2GB</li>
                    <li>HDD Space: 32GB</li>                    
                </ul>
        </MinReq>
        <OffReq>
            <OffTitle>Official Requirements</OffTitle>
            <ul>
                    <li>OS: Windows 10 64 Bit</li>
                    <li>Processor: Intel Core i7-8700K or AMD Ryzen 7 1800X </li>
                    <li>RAM: 16GB</li>
                    <li>Graphics: NVIDIA GeForce RTX 3060Ti or AMD Radeon RX 5700XT 8GB</li>
                    <li>HDD Space: 32GB</li>                    
                </ul>
        </OffReq>
        <InGameTune>
            <h2>In Game Suggestions for a Better Performance : </h2>
            <p>The settings given below can be useful for enhanced gameplay</p>
            <TuneTerms>
                <br />
                Dynamic Resolution: Off 
                <br/>
                Aspect Ratio: Automatic <br/>
                V-Sync (Gameplay): Off <br/>
                V-Sync (Menus): Off  <br/>
                Display Gamma: 2.2 (sRGB) <br/>
                Brightness: 55 <br/>
                Focused Mode: Off <br/>
                Quality Presets: Custom <br/>
                Render Resolution: 100 <br/>
                AMD Fidelity CAS Strength: 75 <br/>
                Anti-Aliasing: Filmic SMAA T2X <br/>
                Anti-Aliasing Quality: Low<br/>
                Video Memory Scale: 90<br/>
            </TuneTerms>
            <TuneDesc>
                <h3>Description of each setting and how it affects the game </h3>
                <ul>
                    <li>
                    <b>V-Sync </b>: V-Sync helps mitigate frame time variance, which refers to how long a single frame takes to render. When there is a large variance in frame rendering times, and the next frame is ready too early, screen tearing can occur.
                    </li>
                    <br/>
                    <li>
                    <b>Field of view</b> : A higher FOV lets you take in more of the battlefield and gain more information at a glance. However, it also means that targets at a distance will appear smaller.
                    <TuneDecImg src={require('../images/Field_of_view.png')}></TuneDecImg>
                    </li>
                    <br/>
                    <li>
                    <b>AMD Fidelity CAS Strength</b>: This setting is a sharpening filter that increases the image sharpness , decreasing this setting whould cut average performance from 70fps to 65fps.
                    <TuneDecImg src={require('../images/fidelity.png')} />
                    </li>
                    <br/>
                    <li>
                    <b>Texture Resolution</b>: Another vital setting. After testing all four options available for this setting, I can confidently say, that ‘Normal’ is the best option you can pick here.<TuneDecImg src={require('../images/texture_resolution.jpg')} />
                    </li>
                    <br/>
                </ul>
            </TuneDesc>
        </InGameTune>

    </Container>
  )
}

export default COD
