import React from 'react'
import { Route, Switch , useRouteMatch } from 'react-router'
import areaImg1 from '../../assets/images/component/element/memberAreaImg (1).png'
import areaImg2 from '../../assets/images/component/element/memberAreaImg (2).png'
import areaImg3 from '../../assets/images/component/element/memberAreaImg (3).png'
import areaImg4 from '../../assets/images/component/element/memberAreaImg (4).png'
import areaImg5 from '../../assets/images/component/element/memberAreaImg (5).png'
import areaImg6 from '../../assets/images/component/element/memberAreaImg (6).png'
import areaImg7 from '../../assets/images/component/element/memberAreaImg (7).png'
import areaImg8 from '../../assets/images/component/element/elanadd.png'
import areaImg9 from '../../assets/images/component/element/sorgular.png'
import CardMemberArea from '../../components/CardMemberArea'
import MyAds from '../../components/MyAds'
import Profile from '../../components/Profile'
import Security from '../../components/Security'
import AddElan from '../../components/AddElan'
import '../../assets/css/PagesCss/userMemberArea.css'
import RequestsToElans from '../../components/RequestsToElans'
import SelectedMACompaies from '../../components/SelectedMACompaies'
import SelectedMAMasters from '../../components/SelectedMAMasters'
import GettedRequests from '../../components/GettedRequests'
import OneAdRequests from '../../components/OneAdRequests'

function UserMemberArea(props) {
    let match = useRouteMatch();
    const logout = () => {
        localStorage.clear()
    }
    return (
        <div className="userMember">
            <Switch>
                <Route path="/member-area/profile">
                    <Profile  UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/my-ads">
                    <MyAds  UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/requests-ad/:id">
                    <OneAdRequests  UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/requests-ad">
                    <GettedRequests UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/selected-masters">
                    <SelectedMAMasters UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/selected-companies">
                    <SelectedMACompaies UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/security">
                    <Security UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/elan-add">
                    <AddElan status={props.status} UserData={props.UserData}/>
                </Route>
                <Route  path="/member-area/">
                    <div className="gridCont">
                        <CardMemberArea img={areaImg1} link={`${match.path}profile`} title="Şəxsi Məlumatlar"/>
                        <CardMemberArea img={areaImg2} link={`${match.path}my-ads`} title="Elanlarım"/>
                        <CardMemberArea img={areaImg4} link={`${match.path}selected-masters`} title="Seçilmiş Ustalarım"/>
                        <CardMemberArea img={areaImg5} link={`${match.path}selected-companies`} title="Seçilmiş Şirkətlərim"/>
                        <CardMemberArea img={areaImg6} link={`${match.path}security`} title="Təhlükəsizlik"/>
                        <CardMemberArea img={areaImg8} link={`${match.path}elan-add`} title="Elan əlavə et"/>
                        <CardMemberArea img={areaImg9} link={`${match.path}requests-ad`} title="Gedən Sorğular"/>
                        <CardMemberArea img={areaImg7} link={`/`} func={logout} title="Hesabdan çıx"/>
                    </div>
                </Route>

            </Switch>
        </div>
    )
}

export default UserMemberArea
