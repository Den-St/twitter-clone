import {
    ListsPath,
    LogoPath,
    MainPath,
    MessagesPath, MorePath,
    NotificationsPath, ProfilePath,
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

    return null
}