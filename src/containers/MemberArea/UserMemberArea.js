import React from 'react'
import { Route, Switch , useRouteMatch } from 'react-router'
import areaImg1 from '../../assets/images/component/element/memberAreaImg (1).png'
import areaImg2 from '../../assets/images/component/element/memberAreaImg (2).png'
import areaImg3 from '../../assets/images/component/element/memberAreaImg (3).png'
import areaImg4 from '../../assets/images/component/element/memberAreaImg (4).png'
import areaImg5 from '../../assets/images/component/element/memberAreaImg (5).png'
import areaImg6 from '../../assets/images/component/element/memberAreaImg (6).png'
import areaImg7 from '../../assets/images/component/element/memberAreaImg (7).png'
import CardMemberArea from '../../components/CardMemberArea'
import MyAds from '../../components/MyAds'
import Profile from '../../components/Profile'

function UserMemberArea(props) {
    let match = useRouteMatch();
    return (
        <div className="userMember">
            <Switch>
                <Route path="/member-area/profile">
                    <Profile UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/my-ads">
                    <MyAds UserData={props.UserData}/>
                </Route>
                <Route path="/member-area/requests">
                    requests
                </Route>
                <Route path="/member-area/selected-masters">
                    masters
                </Route>
                <Route path="/member-area/selected-companies">
                    companies
                </Route>
                <Route path="/member-area/security">
                    security
                </Route>
                <Route  path="/member-area/">
                    <div className="gridCont">
                        <CardMemberArea img={areaImg1} link={`${match.path}profile`} title="Şəxsi Məlumatlar"/>
                        <CardMemberArea img={areaImg2} link={`${match.path}my-ads`} title="Elanlarım"/>
                        <CardMemberArea img={areaImg4} link={`${match.path}selected-masters`} title="Seçilmiş Ustalarım"/>
                        <CardMemberArea img={areaImg5} link={`${match.path}selected-companies`} title="Seçilmiş Şirkətlərim"/>
                        <CardMemberArea img={areaImg6} link={`${match.path}security`} title="Təhlükəsizlik"/>
                        <CardMemberArea img={areaImg7} link={`/`} title="Hesabdan çıx"/>
                    </div>
                </Route>

            </Switch>
        </div>
    )
}

export default UserMemberArea
