import React from 'react'
import { Route, Switch , useRouteMatch } from 'react-router'
import areaImg1 from '../../assets/images/component/element/memberAreaImg (1).png'
import aboutCompany from '../../assets/images/page/background/aboutCompany.png'
import companySelectedAds from '../../assets/images/page/background/companySelectedAds.png'
import companySelectedMasters from '../../assets/images/page/background/companySelectedMasters.png'
import onlineAdvertising from '../../assets/images/page/background/online-advertising 1.png'
import areaImg2 from '../../assets/images/component/element/memberAreaImg (2).png'
import areaImg3 from '../../assets/images/component/element/memberAreaImg (3).png'
import areaImg4 from '../../assets/images/component/element/memberAreaImg (4).png'
import areaImg5 from '../../assets/images/component/element/memberAreaImg (5).png'
import areaImg6 from '../../assets/images/component/element/memberAreaImg (6).png'
import areaImg7 from '../../assets/images/component/element/memberAreaImg (7).png'
import CardMemberArea from '../../components/CardMemberArea'
function CompanyMemberArea() {
    let match = useRouteMatch();
    console.log(match.path);
    return (
        <div className="companyMember">
            <Switch>
                <Route path={`${match.path}profile`}>
                    profile
                </Route>
                <Route path={`${match.path}selected-ads`}>
                    ads
                </Route>
                <Route path={`${match.path}sended-requests`}>
                    requests
                </Route>
                <Route path={`${match.path}selected-masters`}>
                    masters
                </Route>
                <Route path={`${match.path}selected-companies`}>
                    companies
                </Route>
                <Route path={`${match.path}security`}>
                    securityy
                </Route>
                <Route path={`${match.path}ad-website`}>
                    ad website
                </Route>
                <Route  path={`${match.path}`}>
                    <div className="gridCont">
                        <CardMemberArea img={aboutCompany} link={`${match.path}profile`} title="Şəxsi Məlumatlar"/>
                        <CardMemberArea img={areaImg1} link={`${match.path}sended-requests`} title="Göndərilən təkliflər"/>
                        <CardMemberArea img={companySelectedAds} link={`${match.path}selected-ads`} title="Seçilmiş Elanlar"/>
                        <CardMemberArea img={companySelectedMasters} link={`${match.path}selected-masters`} title="Seçilmiş Ustalarım"/>
                        <CardMemberArea img={areaImg6} link={`${match.path}security`} title="Təhlükəsizlik"/>
                        <CardMemberArea img={onlineAdvertising} link={`${match.path}selected-companies`} title="Saytda Reklam yerləşdir"/>
                        <CardMemberArea img={areaImg7} link={`/`} title="Hesabdan çıx"/>
                    </div>
                </Route>

            </Switch>
        </div>
    )
}

export default CompanyMemberArea