import React from 'react';
import {CardStyles} from "./components/Card.styles";
import {ImageCardStyles} from "./components/ImageCard.styles";
import {NameCardStyles} from "./components/NameCard.styles";
import {DescriptionStyles} from "./components/Description.styles";
import {GroupButton} from "./components/GroupButton";
import {ButtonStyles} from "./components/Button.styles";

function App() {
    return (
        <div className="App">
            <CardStyles>
                <ImageCardStyles/>
                <NameCardStyles>
                    Headline
                </NameCardStyles>
                <DescriptionStyles>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                </DescriptionStyles>
                <GroupButton>
                    <ButtonStyles primary>See more</ButtonStyles>
                    <ButtonStyles secondary>Save</ButtonStyles>
                </GroupButton>
            </CardStyles>
        </div>
    );
}

export default App;
