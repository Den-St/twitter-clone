import {StyledSvg} from "./style";
import {ChildrenSvg} from "./Children";

export const SvgIcon = ({type, ...props}) => {

    return <StyledSvg {...props}>
        <ChildrenSvg type={type}/>
    </StyledSvg>
}