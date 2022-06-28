import React, {useState} from "react";
import {SvgIcon} from "../../../Icon/SvgIcon";
import {CrossButton, SearchContainer, SearchInput, SearchPopUp, SearchWrapper} from "./style";

export const Search = () =>{

    const [isFocus,setFocus] = useState(false);
    const [text,setText] = useState('');

    const onChangeText = (e) => setText(e.target.value);

    const onFocus = () =>{
        setFocus(true);
    }
    const onBlur = () =>{
        setTimeout(() => setFocus(false),
            100);
    }

    const clearText = (e) =>{
        e.preventDefault();
        setText('');
    }
    return <SearchContainer>
        <SearchWrapper $focus={isFocus}>
            <SvgIcon type={'search'}/>
            <SearchInput value={text} onChange={onChangeText} onFocus={onFocus} onBlur={onBlur} placeholder={"Поиск в Твиттере"}/>
            {(isFocus && !text) && <SearchPopUp>Попробуйте поискать людей, темы или ключевые слова</SearchPopUp>}
            {(!!text && isFocus) && <CrossButton onClick={clearText}><SvgIcon type={'cross'} viewBox={'0 0 15 15'}/></CrossButton>}
        </SearchWrapper>
    </SearchContainer>
}