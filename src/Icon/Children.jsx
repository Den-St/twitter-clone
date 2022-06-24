import {
    EarthPath,
    EmojiPath,
    GifPath,
    ListsPath, LocationPath,
    LogoPath,
    MainPath, MediaPath,
    MessagesPath, MorePath,
    NotificationsPath, PlanPath, PollPath, ProfilePath,
    StoredPath,
    ViewPath
} from "./paths";


export const ChildrenSvg = ({type}) => {
    if(type === 'logo') return <LogoPath/>
    if(type === 'main') return <MainPath/>
    if(type === 'view') return <ViewPath/>
    if(type === 'notification') return <NotificationsPath/>
    if(type === 'messages') return <MessagesPath/>
    if(type === 'stored') return <StoredPath/>
    if(type === 'lists') return <ListsPath/>
    if(type === 'profile') return <ProfilePath/>
    if(type === 'more') return <MorePath/>

    if(type === 'media') return <MediaPath/>
    if(type === 'gif') return <GifPath/>
    if(type === 'poll') return <PollPath/>
    if(type === 'emoji') return <EmojiPath/>
    if(type === 'plan') return <PlanPath/>
    if(type === 'location') return <LocationPath/>

    if(type === 'earth') return <EarthPath/>

    return null
}