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
    top: 86%;
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
    top: 86%;
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

const GTA = () => {
  return (
    <Container>
        <Navbar />
        <ImageContainer>
            <Image src={require('../images/GTA.jpg')}></Image>
            <Title>Best Tune for Flawless Gameplay of GTA V</Title>
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
                    <li>OS: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2</li>
                    <li>Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz</li>
                    <li>RAM: 4GB</li>
                    <li>Graphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)</li>
                    <li>Sound Card: 100% DirectX 10 compatible</li>
                    <li>HDD Space: 65GB</li>                    
                </ul>
        </MinReq>
        <OffReq>
            <OffTitle>Official Requirements</OffTitle>
            <ul>
                    <li>OS: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2</li>
                    <li>Processor: Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 @ 4GHZ </li>
                    <li>RAM: 8GB</li>
                    <li>Graphics: NVIDIA GTX 660 2GB / AMD HD7870 2GB</li>
                    <li>Sound Card: 100% DirectX 10 compatible</li>
                    <li>HDD Space: 65GB</li>                    
                </ul>
        </OffReq>
        <InGameTune>
            <h2>In Game Suggestions for a Better Performance : </h2>
            <p>The settings given below can be useful for enhanced gameplay</p>
            <TuneTerms>
                <br />
                Population Density: The user can lower this to Lower this to between 25 and 0%. 
                <br/>
                Grass Quality: Users can Lower this to normal. <br/>
                Post FX: Lower this to normal or high. <br/>
                Distance Scaling: Lower this to under 30%. <br/>
                Shadow Quality: Lower this to either High or Normal. <br/>
                Reflection MSAA: Lower this from 8x MSAA to at least 4x MSAA. <br/>
                Water Quality: Lower this to Normal. <br/>
                Extended Distance Scaling: Lower this to under 30%. <br/>
                Shader Quality: Lower this to Normal. <br/>
                Reflection Quality: Lower this to either High or Normal. <br/>
                Turn MSAA off <br/>
            </TuneTerms>
            <TuneDesc>
                <h3>Description of each setting and how it affects the game </h3>
                <ul>
                    <li>
                    <b>Population density </b>: This setting can be used to adjust the number of people on the streets within the game. If this setting is increased, it will affect the frame rate drastically. 
                    </li>
                    <br/>
                    <li>
                    <b>Grass Quality</b> : This setting increases/adds additional foliage in certain scenes (including bushes, flowers, etc.) Altering this setting might make the game choppy or create lag in certain areas.
                    <TuneDecImg src={require('../images/grass_quality.jpg')}></TuneDecImg>
                    </li>
                    <br/>
                    <li>
                    <b>Post-FX</b>: Includes the depth of field of the camera, motion blur, light bloom, and more visually enhancing factors which make a difference in FPS ( Frame rate per second ) during the gameplay
                    </li>
                    <br/>
                    <li>
                    <b>Distance Scaling</b>: This refers to the distant detailing of people, textures, models, and various other things present in the background.
                    </li>
                    <br/>
                    <li>
                    <b>Shadow Quality</b> : This setting is important when it comes to the visuals of the game's shadows. It affects the accuracy of the shadows presented, along with the resolution and definition seen in terms of shadows.
                    <TuneDecImg src={require('../images/shadow_quality.jpg')} />
                    </li>
                    <br/>
                    <li>
                    <b>Reflection MSAA</b> : Reflection MSAA (Multisample Anti-Aliasing) reduces reflection aliasing. It is hardly noticeable, but does change reflections slightly. 
                    </li>
                    <br/>
                    <li>
                    <b>Water Quality</b> : this setting helps the water look better. Extrapolating on this, it adds more depth of color to the water, as well as increasing the quantity and visual fidelity of water particles.  
                    </li>
                    <br/>
                    <li>
                    <b>Shader Quality</b>: Shader quality affects how you perceive the depth of objects in the game. Scenes where light and dark areas mix . when you set shader quality to Normal, you'll get a muc flatter image. 
                    <TuneDecImg src={require('../images/shader_quality.jpg')} />
                    </li>
                    <br/>
                    <li>
                    <b>Reflection Quality </b>: this setting improves the reflections found on all surfaces in the game. This is noticeable on vehicles, windows, water, and other shiny surfaces such as the occasional wall or floor. <TuneDecImg src={require('../images/reflection_quality.jpg')} />
                    </li>
                </ul>
            </TuneDesc>
        </InGameTune>

    </Container>
  )
}

export default GTA
