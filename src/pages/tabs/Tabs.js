import styles from './Tabs.module.scss';
import { IonRouterOutlet, IonImg, IonTabBar, IonTabButton, IonTabs, IonLabel } from '@ionic/react';
import { Route } from 'react-router-dom';

import { useTranslation } from "react-i18next";


import Home from '../home/Home';
import Order from '../order/Order';
import Record from '../record/Record';
import Rules from '../rules/Rule';
import CompanyProfile from '../company-profile/CompanyProfile';
import AgencyCooperation from '../agency-cooperation/AgencyCooperation';
import BonusApplication from '../bonus-application/BonusApplication';
import CompanyQualification from '../company-qualification/CompanyQualification';
import Laundering from '../laundering/Laundering';
import Support from '../support/Support';
import Account from '../account/Account';
import Profile from '../profile/Profile';


const Tabs = () => {
    const { t, i18n } = useTranslation('lang');

    return (
        <IonTabs className={styles.tabsBox}>
            <IonRouterOutlet>

                <Route exact path="/app/home">
                    <Home />
                </Route>

                <Route exact path="/app/order">
                    <Order />
                </Route>

                <Route exact path="/app/record">
                    <Record />
                </Route>

                <Route exact path="/app/account">
                    <Account />
                </Route>

                <Route exact path="/app/profile">
                    <Profile />
                </Route>

                <Route exact path="/app/support">
                    <Support />
                </Route>

                <Route exact path="/app/rules">
                    <Rules />
                </Route>

                <Route exact path="/app/laundering">
                    <Laundering />
                </Route>

                <Route exact path="/app/company-profile">
                    <CompanyProfile />
                </Route>

                <Route exact path="/app/agency-cooperation">
                    <AgencyCooperation />
                </Route>

                <Route exact path="/app/bonus-application">
                    <BonusApplication />
                </Route>

                <Route exact path="/app/company-qualification">
                    <CompanyQualification />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/home" className='navigation-tab'>
                    {
                        window.location.href.indexOf("/app/home") != -1 ? (
                            <>
                                <IonImg src="assets/images/home/1@2x.png" alt="home" />
                                <IonLabel>{t('tabs.home')}</IonLabel>
                            </>
                        ) : (
                            <>
                                <IonImg src="assets/images/home/2@2x.png" alt="home" />
                                <IonLabel>{t('tabs.home')}</IonLabel>
                            </>
                        )
                    }
                </IonTabButton>
                <IonTabButton tab="record" href="/app/record" className='navigation-tab'>
                    {
                        window.location.href.indexOf("/app/record") != -1 ? (
                            <>
                                <IonImg src="assets/images/home/3@2x.png" alt="record" />
                                <IonLabel>{t('tabs.record')}</IonLabel>
                            </>
                        ) : (
                            <>
                                <IonImg src="assets/images/home/4@2x.png" alt="record" />
                                <IonLabel>{t('tabs.record')}</IonLabel>
                            </>
                        )
                    }
                </IonTabButton>
                <IonTabButton tab="order" href="/app/order" className='navigation-tab'>
                    <IonImg className={styles.tabMainButton + " home-icon"} src="assets/images/home/9@2x.png" alt="order" />
                </IonTabButton>
                <IonTabButton tab="support" href="/app/support" className='navigation-tab'>
                    {
                        window.location.href.indexOf("/app/support") != -1 ? (
                            <>
                                <IonImg src="assets/images/home/5@2x.png" alt="home" />
                                <IonLabel>{t('tabs.service')}</IonLabel>
                            </>
                        ) : (
                            <>
                                <IonImg src="assets/images/home/6@2x.png" alt="home" />
                                <IonLabel>{t('tabs.service')}</IonLabel>
                            </>
                        )
                    }
                </IonTabButton>
                <IonTabButton tab="account" href="/app/account" className='navigation-tab'>
                    {
                        window.location.href.indexOf("/app/account") != -1 ? (
                            <>
                                <IonImg src="assets/images/home/7@2x.png" alt="account" />
                                <IonLabel>{t('tabs.account')}</IonLabel>
                            </>
                        ) : (
                            <>
                                <IonImg src="assets/images/home/8@2x.png" alt="account" />
                                <IonLabel>{t('tabs.account')}</IonLabel>
                            </>
                        )
                    }
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Tabs;